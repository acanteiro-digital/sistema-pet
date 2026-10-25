// Mini-runtime que lê o template do protótipo (src/template.html) e o desenha na página.
// Suporta: {{buracos}}, <sc-if>, <sc-for> e eventos onClick/onChange.
import { h, render } from './vdom.js';

export class DCLogic {
  constructor(props) {
    this.props = props || {};
    this.state = {};
    this._rerender = null;
  }

  setState(patch) {
    const next = typeof patch === 'function' ? patch(this.state) : patch;
    this.state = { ...this.state, ...next };
    if (this._rerender) { this._rerender(); }
  }
}

// ---------- leitura do template (HTML bem-formado, sem depender do parser do navegador) ----------
const VOID = { input: 1, br: 1, img: 1, hr: 1, link: 1, meta: 1 };
const ENT = { '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'", '&nbsp;': ' ' };
const decode = (s) => s.replace(/&(amp|lt|gt|quot|nbsp|#39);/g, (m) => ENT[m]);

function parse(src) {
  const root = { tag: '#root', attrs: [], children: [] };
  const stack = [root];
  let i = 0;
  while (i < src.length) {
    if (src[i] === '<' && /[A-Za-z/]/.test(src[i + 1] || '')) {
      // tag
      let j = i + 1;
      let quote = null;
      while (j < src.length) {
        const c = src[j];
        if (quote) { if (c === quote) { quote = null; } } else if (c === '"' || c === "'") { quote = c; } else if (c === '>') { break; }
        j++;
      }
      const raw = src.slice(i + 1, j);
      i = j + 1;
      if (raw[0] === '/') { stack.pop(); continue; }
      const selfClose = raw.endsWith('/');
      const body = selfClose ? raw.slice(0, -1) : raw;
      const m = /^([A-Za-z][\w:-]*)/.exec(body);
      const tag = m[1];
      const attrs = [];
      const re = /([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>]+)))?/g;
      re.lastIndex = m[0].length;
      let a;
      while ((a = re.exec(body))) {
        const v = a[2] !== undefined ? a[2] : (a[3] !== undefined ? a[3] : (a[4] !== undefined ? a[4] : ''));
        attrs.push([a[1], decode(v)]);
      }
      const node = { tag: tag, attrs: attrs, children: [] };
      stack[stack.length - 1].children.push(node);
      if (!selfClose && !VOID[tag.toLowerCase()]) { stack.push(node); }
    } else {
      let j = i + 1;
      while (j < src.length && !(src[j] === '<' && /[A-Za-z/]/.test(src[j + 1] || ''))) { j++; }
      stack[stack.length - 1].children.push({ text: decode(src.slice(i, j)) });
      i = j;
    }
  }
  return root;
}

// ---------- avaliação ----------
const HOLE = /\{\{\s*([^}]+?)\s*\}\}/g;
const WHOLE = /^\{\{\s*([^}]+?)\s*\}\}$/;

function lookup(path, scope) {
  if (path === 'true') { return true; }
  if (path === 'false') { return false; }
  const parts = path.split('.');
  let v = scope[parts[0]];
  for (let k = 1; k < parts.length && v !== undefined && v !== null; k++) { v = v[parts[k]]; }
  return v;
}

const str = (v) => (v === undefined || v === null || v === false ? '' : String(v));

function interp(text, scope) {
  return text.replace(HOLE, (_, p) => str(lookup(p, scope)));
}

const TEXTLIKE = { text: 1, search: 1, number: 1, email: 1, tel: 1, url: 1, password: 1, date: 1, '': 1 };

function propsFor(node, scope) {
  const props = {};
  const tag = node.tag.toLowerCase();
  let type = '';
  node.attrs.forEach((a) => { if (a[0] === 'type') { type = a[1]; } });
  node.attrs.forEach((a) => {
    let name = a[0];
    const val = a[1];
    if (name.indexOf('hint-') === 0) { return; }
    const whole = WHOLE.exec(val);
    let v = whole ? lookup(whole[1], scope) : interp(val, scope);
    if (/^on[A-Z]/.test(name)) {
      if (typeof v !== 'function') { return; }
      if (name === 'onChange' && (tag === 'textarea' || (tag === 'input' && TEXTLIKE[type] !== undefined))) { name = 'onInput'; }
      props[name] = v;
      return;
    }
    if (name === 'for') { name = 'htmlFor'; }
    if (name.indexOf('aria-') === 0 && typeof v === 'boolean') { v = v ? 'true' : 'false'; }
    if (v === undefined || v === null) { return; }
    props[name] = v;
  });
  return props;
}

function build(node, scope) {
  if (node.text !== undefined) {
    const whole = WHOLE.exec(node.text.trim());
    if (whole && node.text.trim() === node.text) {
      const v = lookup(whole[1], scope);
      return str(v);
    }
    return interp(node.text, scope);
  }
  const tag = node.tag;
  const attr = (n) => { const f = node.attrs.find((a) => a[0] === n); return f ? f[1] : ''; };
  const kids = (sc) => node.children.map((c) => build(c, sc));
  if (tag === 'sc-if') {
    const m = WHOLE.exec(attr('value'));
    return lookup(m ? m[1] : 'false', scope) ? kids(scope) : [];
  }
  if (tag === 'sc-for') {
    const m = WHOLE.exec(attr('list'));
    const list = (m ? lookup(m[1], scope) : []) || [];
    const as = attr('as');
    return list.map((item, idx) => {
      const sc = Object.create(scope);
      sc[as] = item;
      sc.$index = idx;
      return kids(sc);
    });
  }
  return h(tag, propsFor(node, scope), kids(scope));
}

export function mount(container, templateSrc, Component) {
  const tree = parse(templateSrc);
  const comp = new Component({});
  let queued = false;
  const draw = () => {
    queued = false;
    const vals = comp.renderVals();
    render(h('div', { style: 'display:contents' }, tree.children.map((c) => build(c, vals))), container);
  };
  comp._rerender = () => {
    if (!queued) { queued = true; queueMicrotask(draw); }
  };
  draw();
  return comp;
}
