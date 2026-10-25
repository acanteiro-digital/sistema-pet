// Desenho mínimo da tela (sem bibliotecas): compara a árvore nova com a anterior e atualiza só o que mudou,
// para que campos de texto não percam o cursor enquanto você digita.
const SVGNS = 'http://www.w3.org/2000/svg';
const BOOL = { hidden: 1, disabled: 1, selected: 1, readOnly: 1, required: 1 };
const FORM = { input: 1, textarea: 1, select: 1 };

function flat(list, out) {
  for (let i = 0; i < list.length; i++) {
    const x = list[i];
    if (Array.isArray(x)) { flat(x, out); } else if (x !== null && x !== undefined && x !== false && x !== true) {
      out.push(typeof x === 'object' ? x : String(x));
    }
  }
  return out;
}

export function h(tag, props, children) {
  return { tag: tag, props: props || {}, children: flat(children || [], []) };
}

function setProps(el, oldP, newP, svg) {
  Object.keys(oldP).forEach((k) => {
    if (k in newP) { return; }
    if (/^on[A-Z]/.test(k)) { if (el._h) { el._h[k.slice(2).toLowerCase()] = null; } return; }
    if (k === 'class') { el.removeAttribute('class'); return; }
    if (k === 'htmlFor') { el.removeAttribute('for'); return; }
    if (k === 'value' || k === 'checked') { return; }
    if (BOOL[k] && !svg) { el[k] = false; return; }
    el.removeAttribute(k);
  });
  Object.keys(newP).forEach((k) => {
    const v = newP[k];
    if (/^on[A-Z]/.test(k)) {
      const ev = k.slice(2).toLowerCase();
      if (!el._h) { el._h = {}; }
      if (!(ev in el._h)) { el.addEventListener(ev, (e) => { if (el._h[ev]) { el._h[ev](e); } }); }
      el._h[ev] = v;
      return;
    }
    if (oldP[k] === v) { return; }
    if (k === 'value' || k === 'checked') {
      if (!FORM[el.tagName.toLowerCase()] && k === 'value') { el.setAttribute('value', String(v)); }
      return;
    }
    if (k === 'class') { el.setAttribute('class', v); return; }
    if (k === 'htmlFor') { el.setAttribute('for', v); return; }
    if (BOOL[k] && !svg) { el[k] = !!v; return; }
    if (v === true) { el.setAttribute(k, ''); return; }
    if (v === false || v === null || v === undefined) { el.removeAttribute(k); return; }
    el.setAttribute(k, String(v));
  });
}

function finalize(el, props) {
  const tag = el.tagName.toLowerCase();
  if (!FORM[tag]) { return; }
  if ('checked' in props) { el.checked = !!props.checked; }
  if ('value' in props) {
    const v = props.value === null || props.value === undefined ? '' : String(props.value);
    if (el.value !== v) { el.value = v; }
  }
}

function create(v, svg) {
  if (typeof v === 'string') { return document.createTextNode(v); }
  const isSvg = svg || v.tag === 'svg';
  const el = isSvg ? document.createElementNS(SVGNS, v.tag) : document.createElement(v.tag);
  setProps(el, {}, v.props, isSvg);
  const inner = isSvg && v.tag !== 'foreignObject';
  v.children.forEach((c) => el.appendChild(create(c, inner)));
  finalize(el, v.props);
  return el;
}

function patch(dom, old, nw, svg) {
  if (typeof nw === 'string') {
    if (typeof old === 'string' && dom.nodeType === 3) { if (dom.data !== nw) { dom.data = nw; } return dom; }
    const t = document.createTextNode(nw);
    dom.replaceWith(t);
    return t;
  }
  if (typeof old === 'string' || old.tag !== nw.tag) {
    const e = create(nw, svg);
    dom.replaceWith(e);
    return e;
  }
  const isSvg = svg || nw.tag === 'svg';
  setProps(dom, old.props, nw.props, isSvg);
  const inner = isSvg && nw.tag !== 'foreignObject';
  const kids = Array.prototype.slice.call(dom.childNodes);
  const n = Math.min(old.children.length, nw.children.length);
  for (let i = 0; i < n; i++) { patch(kids[i], old.children[i], nw.children[i], inner); }
  for (let i = n; i < nw.children.length; i++) { dom.appendChild(create(nw.children[i], inner)); }
  for (let i = nw.children.length; i < old.children.length; i++) { dom.removeChild(kids[i]); }
  finalize(dom, nw.props);
  return dom;
}

export function render(vnode, container) {
  if (!container._v) {
    container.textContent = '';
    container.appendChild(create(vnode, false));
  } else {
    patch(container.firstChild, container._v, vnode, false);
  }
  container._v = vnode;
}
