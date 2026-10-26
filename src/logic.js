import { DCLogic } from './runtime.js';

const TODAY = [
  { id: 'd1', nome: 'Thor', tutor: 'Carlos Mendes', serv: 'Adestramento' },
  { id: 'd2', nome: 'Mel', tutor: 'Renata Alves', serv: 'Day care' },
  { id: 'd3', nome: 'Bidu', tutor: 'Fábio Rocha', serv: 'Day care' },
  { id: 'd4', nome: 'Luna', tutor: 'Aline Freitas', serv: 'Adestramento' },
  { id: 'd5', nome: 'Nina', tutor: 'Paulo Souza', serv: 'Creche', used: 5, total: 12 },
  { id: 'd6', nome: 'Rex', tutor: 'Marcos Lima', serv: 'Creche', used: 3, total: 10 },
  { id: 'd7', nome: 'Max', tutor: 'Sandra Dias', serv: 'Creche', used: 10, total: 12 }
];
const BADGE = {
  'Adestramento': 'background:#E0E7FF;color:#2C3E9E',
  'Day care': 'background:#FEF3C7;color:#8A4B08',
  'Creche': 'background:#DDF1EE;color:#0B5A53',
  'Hotel': 'background:#FCE7F3;color:#9D1A62'
};
const RES = [
  { id: 'r1', dog: 'Pipoca', tutor: 'Juliana Prado', baia: 2, ini: 0, fim: 4, itens: 'ração (2 kg), cama, brinquedo' },
  { id: 'r2', dog: 'Bolt', tutor: 'Ricardo Nunes', baia: 1, ini: 2, fim: 6, itens: 'ração (3 kg), guia' },
  { id: 'r3', dog: 'Duque', tutor: 'Helena Costa', baia: 6, ini: 0, fim: 2, itens: 'ração (1 kg), medicação às 8h' },
  { id: 'r4', dog: 'Mia', tutor: 'Tatiane Gomes', baia: 5, ini: 3, fim: 5, itens: 'ração (1,5 kg), cobertor' },
  { id: 'r5', dog: 'Zeca', tutor: 'Bruno Teixeira', baia: 4, ini: 5, fim: 8, itens: 'ração (2 kg), guia, brinquedo' },
  { id: 'r6', dog: 'Lola', tutor: 'Márcia Ramos', baia: 3, ini: 8, fim: 13, itens: 'ração (4 kg), cama' }
];
const WD = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'];
const WDL = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
const MES = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
const TUT = [
  { id: 't1', nome: 'Carlos Mendes', dog: 'Thor', lines: [
    { desc: 'Adestramento · 7 aulas fixas (quartas e sábados) × R$ 90,00', v: 630 },
    { desc: '15/10 · Aula extra', v: 90 },
    { desc: '24/10 · Guia (extra)', v: 45 } ] },
  { id: 't2', nome: 'Renata Alves', dog: 'Mel', lines: [
    { desc: 'Day care · 12 diárias × R$ 80,00', v: 960 },
    { desc: '17/10 · Banho (extra)', v: 70 } ] },
  { id: 't3', nome: 'Paulo Souza', dog: 'Nina', lines: [
    { desc: 'Creche · pacote de 12 dias', v: 900 },
    { desc: '10/10 · Ração (extra)', v: 30 } ] },
  { id: 't4', nome: 'Juliana Prado', dog: 'Pipoca', lines: [
    { desc: 'Hotel · 5 diárias (24 a 28/10) × R$ 110,00', v: 550 },
    { desc: 'Ração (extra)', v: 40 },
    { desc: 'Banho de saída (extra)', v: 80 } ] },
  { id: 't5', nome: 'Marcos Lima', dog: 'Rex', lines: [
    { desc: 'Creche · pacote de 10 dias', v: 750 } ] },
  { id: 't6', nome: 'Sandra Dias', dog: 'Max', lines: [
    { desc: 'Creche · pacote de 12 dias', v: 900 },
    { desc: 'Adestramento · 4 aulas fixas (segundas e sábados) × R$ 90,00', v: 360 },
    { desc: '12/10 · Banho (extra)', v: 70 } ] }
];
const DOGS0 = [
  { nome: 'Thor', raca: 'Pastor Alemão', tutor: 'Carlos Mendes', tel: '(11) 90000-0001', servs: ['Adestramento'], aulas: [ { wd: 3, hora: '09:00' }, { wd: 6, hora: '09:00' } ], foco: 'Obediência básica: sentar e ficar', vac: 'Em dia', warn: false },
  { nome: 'Mel', raca: 'Golden Retriever', tutor: 'Renata Alves', tel: '(11) 90000-0002', servs: ['Day care'], vac: 'Em dia', warn: false },
  { nome: 'Bidu', raca: 'Labrador', tutor: 'Fábio Rocha', tel: '(11) 90000-0003', servs: ['Day care'], vac: 'Vence em 12 dias', warn: true },
  { nome: 'Luna', raca: 'Border Collie', tutor: 'Aline Freitas', tel: '(11) 90000-0004', servs: ['Adestramento'], aulas: [ { wd: 4, hora: '10:30' }, { wd: 6, hora: '10:30' } ], foco: 'Reforço de comandos à distância', vac: 'Em dia', warn: false },
  { nome: 'Nina', raca: 'Shih Tzu', tutor: 'Paulo Souza', tel: '(11) 90000-0005', servs: ['Creche'], vac: 'Em dia', warn: false },
  { nome: 'Rex', raca: 'Boxer', tutor: 'Marcos Lima', tel: '(11) 90000-0006', servs: ['Creche'], vac: 'Em dia', warn: false },
  { nome: 'Pipoca', raca: 'Poodle', tutor: 'Juliana Prado', tel: '(11) 90000-0007', servs: ['Hotel'], vac: 'Vencida', warn: true },
  { nome: 'Max', raca: 'Beagle', tutor: 'Sandra Dias', tel: '(11) 90000-0008', servs: ['Creche', 'Adestramento'], aulas: [ { wd: 1, hora: '15:00' }, { wd: 6, hora: '15:00' } ], foco: 'Socialização com outros cães', vac: 'Em dia', warn: false }
];
const fmt = (n) => 'R$ ' + Number(n).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const isoDay = (d) => d.toISOString().slice(0, 10);
const LANC = (() => {
  const out = [];
  let nid = 1;
  const add = (data, tutor, cao, servico, desc, qtd, unit) => out.push({ id: nid++, data: data, tutor: tutor, cao: cao, servico: servico, desc: desc, qtd: qtd, valor: qtd * unit });
  const ini = Date.UTC(2026, 7, 1);
  const fim = Date.UTC(2026, 9, 24);
  for (let t = ini; t <= fim; t += 86400000) {
    const d = new Date(t);
    const w = d.getUTCDay();
    const dia = isoDay(d);
    if (w === 3 || w === 6) { add(dia, 'Carlos Mendes', 'Thor', 'Adestramento', 'Aula fixa', 1, 90); }
    if (w === 1 || w === 6) { add(dia, 'Sandra Dias', 'Max', 'Adestramento', 'Aula fixa', 1, 90); }
    if (w === 4 || w === 6) { add(dia, 'Aline Freitas', 'Luna', 'Adestramento', 'Aula fixa', 1, 90); }
    if (w === 2 || w === 4) { add(dia, 'Renata Alves', 'Mel', 'Day care', 'Diária', 1, 80); }
    if (w === 5) { add(dia, 'Fábio Rocha', 'Bidu', 'Day care', 'Diária', 1, 80); }
    if (d.getUTCDate() === 1) {
      add(dia, 'Paulo Souza', 'Nina', 'Creche', 'Pacote de 12 dias', 1, 900);
      add(dia, 'Marcos Lima', 'Rex', 'Creche', 'Pacote de 10 dias', 1, 750);
      add(dia, 'Sandra Dias', 'Max', 'Creche', 'Pacote de 12 dias', 1, 900);
    }
  }
  [ ['2026-08-20', 3, 'Helena Costa', 'Duque'], ['2026-09-05', 5, 'Ricardo Nunes', 'Bolt'], ['2026-09-19', 3, 'Tatiane Gomes', 'Mia'], ['2026-09-26', 3, 'Juliana Prado', 'Pipoca'], ['2026-10-10', 4, 'Márcia Ramos', 'Lola'] ].forEach((h) => {
    for (let i = 0; i < h[1]; i++) { add(isoDay(new Date(Date.parse(h[0]) + i * 86400000)), h[2], h[3], 'Hotel', 'Diária', 1, 110); }
  });
  [ ['2026-08-09', 'Renata Alves', 'Mel', 'Banho', 70], ['2026-08-22', 'Carlos Mendes', 'Thor', 'Guia', 45], ['2026-09-04', 'Paulo Souza', 'Nina', 'Ração', 30], ['2026-09-12', 'Sandra Dias', 'Max', 'Banho', 70], ['2026-09-28', 'Juliana Prado', 'Pipoca', 'Banho de saída', 80], ['2026-10-12', 'Sandra Dias', 'Max', 'Banho', 70], ['2026-10-17', 'Renata Alves', 'Mel', 'Banho', 70], ['2026-10-24', 'Carlos Mendes', 'Thor', 'Guia', 45] ].forEach((e) => add(e[0], e[1], e[2], 'Extras', e[3], 1, e[4]));
  return out;
})();
const SERV0 = [
  { id: 's1', nome: 'Adestramento', cob: 'Por aula', valor: '90', dias: null },
  { id: 's2', nome: 'Day care', cob: 'Por diária', valor: '80', dias: null },
  { id: 's3', nome: 'Creche · pacote 12 dias', cob: 'Pacote de dias', valor: '900', dias: 12 },
  { id: 's4', nome: 'Creche · pacote 10 dias', cob: 'Pacote de dias', valor: '750', dias: 10 },
  { id: 's5', nome: 'Hotel', cob: 'Por diária', valor: '110', dias: null },
  { id: 's6', nome: 'Banho', cob: 'Extra (valor informado)', valor: '', dias: null },
  { id: 's7', nome: 'Ração', cob: 'Extra (valor informado)', valor: '', dias: null },
  { id: 's8', nome: 'Guia', cob: 'Extra (valor informado)', valor: '', dias: null }
];
const MES_ABR = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
const DUV0 = [
  { id: 'q1', q: 'Cão com dois serviços no mesmo dia (ex.: Max na creche e no adestramento): a presença é marcada separada por serviço ou uma vez só no dia?', opts: ['Separada por serviço', 'Uma vez só no dia'], ans: '', draft: '' },
  { id: 'q2', q: 'Day care: como é cobrado? Diária avulsa ou pacote de dias como na creche?', opts: ['Diária avulsa', 'Pacote de dias'], ans: '', draft: '' },
  { id: 'q3', q: 'Banho e tosa: é só um extra com valor informado ou precisa de agenda própria (dia, hora e profissional)?', opts: ['Só extra', 'Agenda própria'], ans: '', draft: '' },
  { id: 'q4', q: 'Aula de adestramento extra: cobra o mesmo valor da aula fixa?', opts: ['Mesmo valor', 'Valor diferente'], ans: '', draft: '' },
  { id: 'q5', q: 'Creche: quando o cão falta, o dia do pacote é descontado?', opts: ['Desconta', 'Não desconta'], ans: '', draft: '' },
  { id: 'q6', q: 'Hotel: há desconto para estadias longas?', opts: ['Sem desconto', 'Com desconto'], ans: '', draft: '' },
  { id: 'q7', q: 'Cão com vacina vencida pode entrar (creche, day care e hotel)?', opts: ['Pode entrar', 'Bloquear entrada', 'Entrar só com aviso'], ans: '', draft: '' },
  { id: 'q8', q: 'Como o tutor paga?', opts: [], ans: 'Pix, com baixa manual feita pelo administrador.', draft: '' },
  { id: 'q9', q: 'Como é enviada a cobrança?', opts: [], ans: 'Pelo WhatsApp do tutor.', draft: '' }
];
const OFFBTN = 'min-height:44px;padding:0 18px;border-radius:12px;border:1px solid #B9C9C5;background:#fff;color:#14312D;font-size:15px;font-weight:600';

class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = {
      screen: 'hoje',
      day: 0, pres: { '0:d2': 'p', '0:d5': 'p' }, agenda: {}, nA: 10, adDog: 'Thor', adHora: '14:00', adFoco: '',
      notes: {},
      exDog: 'd1', exItem: 'Banho', exVal: '',
      extras: [ { day: 0, dog: 'Mel', item: 'Ração', v: 25 }, { day: 0, dog: 'Bidu', item: 'Banho', v: 70 } ],
      sel: 'r1',
      tut: 't1',
      duvidas: DUV0, nQ: 20, newQ: '',
      dfrom: '2026-10-01', dto: '2026-10-24', exMsg: '',
      res: RES.map((r) => ({ ...r, status: r.ini <= 0 ? 'hospedado' : 'reservado' })), nR: 10, ci: { dog: 'Thor', data: '2026-10-24', dias: '3', baia: '7', itens: '' }, hMsg: '', coPick: {},
      servicos: SERV0, nS: 20, nsv: { nome: '', cob: 'Por aula', valor: '', dias: '12' }, showSv: false, svMsg: '',
      stat: { t1: 'enviado', t2: 'pago', t3: 'rascunho', t4: 'rascunho', t5: 'rascunho', t6: 'rascunho' },
      msg: '',
      dogs: DOGS0,
      q: '', filt: 'Todos',
      showForm: false,
      nf: { nome: '', tutor: '', tel: '', servs: ['Adestramento'], dias: { '1': '09:00' } }
    };
  }

  renderVals() {
    const s = this.state;
    const accent = this.props.accent ?? '#0F766E';
    const RES = s.res;
    const go = (k) => () => this.setState({ screen: k, msg: '', exMsg: '' });

    const openCount = s.duvidas.filter((d) => !d.ans).length;
    const navDef = [
      { k: 'hoje', label: 'Hoje', sub: 'presença e aulas' },
      { k: 'hotel', label: 'Hotel', sub: 'calendário de baias' },
      { k: 'fech', label: 'Fechamento', sub: 'extratos e cobrança' },
      { k: 'dash', label: 'Dashboard', sub: 'período e detalhes' },
      { k: 'caes', label: 'Cães e tutores', sub: 'cadastro' },
      { k: 'servicos', label: 'Serviços e preços', sub: 'cadastro de valores' },
      { k: 'duvidas', label: 'Dúvidas', sub: openCount + ' em aberto' }
    ];
    const nav = navDef.map((n) => {
      const on = s.screen === n.k;
      return {
        label: n.label, sub: n.sub, go: go(n.k),
        style: 'display:flex;flex-direction:column;align-items:flex-start;gap:2px;min-height:56px;padding:10px 16px;border-radius:12px;border:0;text-align:left;width:100%;box-sizing:border-box;font-weight:700;' + (on ? 'background:' + accent + ';color:#fff' : 'background:transparent;color:#14312D'),
        subStyle: 'font-size:13px;font-weight:500;' + (on ? 'color:#E6F6F3' : 'color:#5B6F6B')
      };
    });

    // ---- Hoje
    const mark = (id, v) => () => { const k = s.day + ':' + id; this.setState({ pres: { ...s.pres, [k]: s.pres[k] === v ? undefined : v } }); };
    const wdIdx = new Date(2026, 9, 24 + s.day).getDay();
    const adItems = [];
    s.dogs.forEach((d) => (d.aulas || []).forEach((a) => {
      if (a.wd === wdIdx) { adItems.push({ id: 'f-' + d.nome + '-' + a.hora, nome: d.nome, tutor: d.tutor, serv: 'Adestramento', hora: a.hora, foco: d.foco || 'A definir', extra: false }); }
    }));
    (s.agenda[s.day] || []).forEach((a) => adItems.push({ id: a.id, nome: a.dog, tutor: a.tutor, serv: 'Adestramento', hora: a.hora, foco: a.foco, extra: true }));
    adItems.sort((a, b) => (a.hora < b.hora ? -1 : 1));
    const dayItems = [
      ...adItems,
      ...TODAY.filter((r) => r.serv !== 'Adestramento')
    ];
    const rows = dayItems.map((r) => {
      const st = s.pres[s.day + ':' + r.id];
      const isC = r.serv === 'Creche';
      const dg = s.dogs.find((x) => x.nome === r.nome);
      const oth = dg ? dg.servs.filter((x) => x !== r.serv).join(', ') : '';
      const used = isC ? r.used + (st === 'p' ? 1 : 0) : 0;
      const left = isC ? r.total - used : 0;
      return {
        nome: r.nome, tutor: r.tutor, serv: r.serv, hora: r.hora || '', foco: r.foco || '', isExtra: !!r.extra,
        badgeStyle: 'font-size:12px;font-weight:700;padding:4px 10px;border-radius:999px;' + BADGE[r.serv],
        isAdest: r.serv === 'Adestramento', isCreche: isC, others: oth, hasOther: !!oth,
        saldoTxt: isC ? used + ' de ' + r.total + ' dias usados' : '',
        low: isC && left <= 2, lowTxt: left + (left === 1 ? ' dia' : ' dias'),
        note: s.notes[s.day + ':' + r.id] || '', noteId: 'nota-' + r.id,
        onNote: (e) => this.setState({ notes: { ...s.notes, [s.day + ':' + r.id]: e.target.value } }),
        onP: mark(r.id, 'p'), onF: mark(r.id, 'f'),
        pStyle: st === 'p' ? 'min-height:48px;padding:0 20px;border-radius:12px;border:0;background:' + accent + ';color:#fff;font-size:15px;font-weight:700' : OFFBTN,
        fStyle: st === 'f' ? 'min-height:48px;padding:0 20px;border-radius:12px;border:0;background:#B42318;color:#fff;font-size:15px;font-weight:700' : OFFBTN
      };
    });
    const vals = dayItems.map((r) => s.pres[s.day + ':' + r.id]).filter(Boolean);
    const cntP = vals.filter((v) => v === 'p').length;
    const cntF = vals.filter((v) => v === 'f').length;
    const cntN = rows.length - cntP - cntF;

    const dayExtras = s.extras.filter((e) => e.day === s.day);
    const extrasTotalNum = dayExtras.reduce((a, e) => a + e.v, 0);
    const exDogId = (dayItems.find((d) => d.id === s.exDog) || dayItems[0] || {}).id;
    const addExtra = () => {
      const v = parseFloat(String(s.exVal).replace(',', '.'));
      if (!(v > 0)) { return; }
      const dog = (dayItems.find((d) => d.id === exDogId) || dayItems[0]).nome;
      this.setState({ extras: [ ...s.extras, { day: s.day, dog: dog, item: s.exItem, v: v } ], exVal: '' });
    };

    // ---- Dia selecionado
    const dd = new Date(2026, 9, 24 + s.day);
    const isToday = s.day === 0;
    const wdl = WDL[dd.getDay()];
    const dayLabel = wdl.charAt(0).toUpperCase() + wdl.slice(1) + ', ' + dd.getDate() + ' de ' + MES[dd.getMonth()];
    const inHotel = RES.filter((r) => r.ini <= s.day && r.fim >= s.day);
    const hotelTxt = (inHotel.length ? inHotel.map((r) => r.dog + ' (baia ' + r.baia + ')').join(', ') : 'nenhum cão') + ' · ' + (8 - inHotel.length) + ' baias livres';
    const navBtn = (ok) => 'min-height:44px;padding:0 16px;border-radius:12px;border:1px solid #B9C9C5;background:#fff;color:#14312D;font-size:15px;font-weight:600;opacity:' + (ok ? '1' : '0.4');
    const addAdest = () => {
      const d = s.dogs.find((x) => x.nome === s.adDog);
      if (!d) { return; }
      const list = [ ...(s.agenda[s.day] || []), { id: 'a' + s.nA, dog: d.nome, tutor: d.tutor, hora: s.adHora || '--:--', foco: s.adFoco || 'A definir', extra: true } ].sort((a, b) => (a.hora < b.hora ? -1 : 1));
      this.setState({ agenda: { ...s.agenda, [s.day]: list }, nA: s.nA + 1, adFoco: '' });
    };

    // ---- Hotel
    const days = [];
    for (let i = 0; i < 14; i++) {
      const d = new Date(2026, 9, 24 + i);
      days.push({ wd: WD[d.getDay()], n: d.getDate(), i: i });
    }
    const fmtDay = (i) => { const d = new Date(2026, 9, 24 + i); return String(d.getDate()).padStart(2, '0') + '/' + String(d.getMonth() + 1).padStart(2, '0'); };
    const baias = [1, 2, 3, 4, 5, 6, 7, 8].map((b) => ({
      nome: 'Baia ' + b,
      trackStyle: 'flex:1;position:relative;height:44px;border-radius:8px;background-color:#F3F6F5;background-image:repeating-linear-gradient(to right, transparent 0, transparent calc(100% / 14 - 1px), #D8E2DF calc(100% / 14 - 1px), #D8E2DF calc(100% / 14))',
      bars: RES.filter((r) => r.baia === b).map((r) => {
        const on = s.sel === r.id;
        const l = r.ini / 14 * 100;
        const w = (Math.min(r.fim, 13) - r.ini + 1) / 14 * 100;
        return {
          label: r.dog,
          pick: () => this.setState({ sel: r.id }),
          style: 'position:absolute;top:3px;bottom:3px;left:calc(' + l + '% + 2px);width:calc(' + w + '% - 4px);border-radius:8px;border:2px ' + (r.status === 'reservado' ? 'dashed' : 'solid') + ' ' + (on ? '#14312D' : accent) + ';background:' + (on ? accent : (r.status === 'saiu' ? '#E8EEEC' : (r.status === 'reservado' ? '#FFFFFF' : '#DDF1EE'))) + ';color:' + (on ? '#fff' : (r.status === 'saiu' ? '#41544F' : '#0B5A53')) + ';font-size:14px;font-weight:700;text-align:left;padding:0 10px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis'
        };
      })
    }));
    const occ = days.map((d) => {
      const n = RES.filter((r) => r.ini <= d.i && r.fim >= d.i).length;
      return { txt: n + '/8', color: n >= 6 ? '#B42318' : '#41544F' };
    });
    const selR = RES.find((r) => r.id === s.sel);
    const updRes = (id, patch, msg) => this.setState({ res: s.res.map((x) => (x.id === id ? { ...x, ...patch } : x)), hMsg: msg });
    const coOffset = selR ? (s.coPick[selR.id] !== undefined ? s.coPick[selR.id] : Math.min(selR.fim, 13)) : 0;
    const coOpts = [];
    if (selR) { for (let i = Math.max(selR.ini, 0); i <= 13; i++) { coOpts.push({ v: String(i), l: fmtDay(i) }); } }
    const STATTXT = { hospedado: 'Hospedado', reservado: 'Reservado', saiu: 'Saiu' };
    const sel = selR ? {
      dog: selR.dog, tutor: selR.tutor, statusTxt: STATTXT[selR.status], ini: fmtDay(selR.ini), fim: fmtDay(selR.fim),
      fimLabel: selR.status === 'saiu' ? 'Saída' : 'Saída prevista', diasLabel: selR.status === 'saiu' ? 'Diárias' : 'Diárias previstas',
      baia: 'Baia ' + selR.baia, dias: String(selR.fim - selR.ini + 1), itens: selR.itens,
      canIn: selR.status === 'reservado', canOut: selR.status === 'hospedado',
      coOpts: coOpts, coVal: String(coOffset), onCo: (e) => this.setState({ coPick: { ...s.coPick, [selR.id]: Number(e.target.value) } }),
      doIn: () => updRes(selR.id, { status: 'hospedado' }, 'Check-in de ' + selR.dog + ' confirmado.'),
      doOut: () => { const f = Math.max(selR.ini, coOffset); updRes(selR.id, { status: 'saiu', fim: f }, 'Check-out de ' + selR.dog + ' feito em ' + fmtDay(f) + '. ' + (f - selR.ini + 1) + ' diárias lançadas na conta de ' + selR.tutor + '.'); }
    } : {};
    const setCi = (k) => (e) => this.setState({ ci: { ...s.ci, [k]: e.target.value } });
    const doCheckIn = () => {
      const dog = s.dogs.find((d) => d.nome === s.ci.dog);
      const ini = Math.round((Date.parse(s.ci.data) - Date.UTC(2026, 9, 24)) / 86400000);
      const dias = parseInt(s.ci.dias, 10);
      const baia = Number(s.ci.baia);
      if (!dog || isNaN(ini) || !(dias > 0)) { this.setState({ hMsg: 'Informe o cão, o dia de entrada e quantos dias ele fica.' }); return; }
      if (ini < 0 || ini > 13) { this.setState({ hMsg: 'O calendário da prévia vai de 24/10 a 06/11. Escolha uma entrada nesse intervalo.' }); return; }
      const fim = ini + dias - 1;
      const clash = s.res.find((r) => r.baia === baia && r.status !== 'saiu' && r.ini <= fim && r.fim >= ini);
      if (clash) { this.setState({ hMsg: 'A baia ' + baia + ' está ocupada por ' + clash.dog + ' nesse período.' }); return; }
      const id = 'r' + s.nR;
      this.setState({
        res: [ ...s.res, { id: id, dog: dog.nome, tutor: dog.tutor, baia: baia, ini: ini, fim: fim, itens: s.ci.itens || 'a informar', status: ini <= 0 ? 'hospedado' : 'reservado' } ],
        nR: s.nR + 1, sel: id,
        hMsg: dog.nome + ' registrado: entrada em ' + fmtDay(ini) + ', ' + dias + (dias === 1 ? ' diária prevista' : ' diárias previstas') + ', baia ' + baia + '.',
        ci: { ...s.ci, itens: '' }
      });
    };

    // ---- Fechamento
    const totalOf = (t) => t.lines.reduce((a, l) => a + l.v, 0);
    const sumBy = (fn) => TUT.filter(fn).reduce((a, t) => a + totalOf(t), 0);
    const cards = [
      { label: 'Total do mês', value: fmt(sumBy(() => true)), color: '#14312D' },
      { label: 'Recebido', value: fmt(sumBy((t) => s.stat[t.id] === 'pago')), color: '#0B5A53' },
      { label: 'Aguardando pagamento', value: fmt(sumBy((t) => s.stat[t.id] === 'enviado')), color: '#8A4B08' },
      { label: 'Ainda a enviar', value: fmt(sumBy((t) => s.stat[t.id] === 'rascunho')), color: '#41544F' }
    ];
    const STAT = { rascunho: 'A enviar', enviado: 'Aguardando', pago: 'Pago' };
    const STATSTYLE = {
      rascunho: 'background:#E8EEEC;color:#41544F',
      enviado: 'background:#FEF3C7;color:#8A4B08',
      pago: 'background:#DDF1EE;color:#0B5A53'
    };
    const tutores = TUT.map((t) => {
      const on = s.tut === t.id;
      const st = s.stat[t.id];
      return {
        nome: t.nome, dog: t.dog, total: fmt(totalOf(t)), status: STAT[st],
        pick: () => this.setState({ tut: t.id, msg: '' }),
        style: 'display:flex;justify-content:space-between;align-items:center;gap:12px;width:100%;box-sizing:border-box;min-height:64px;padding:10px 14px;border-radius:12px;border:0;margin-bottom:4px;' + (on ? 'background:#14312D;color:#fff' : 'background:transparent;color:#14312D'),
        badgeStyle: 'display:inline-block;margin-top:4px;font-size:12px;font-weight:700;padding:3px 10px;border-radius:999px;' + STATSTYLE[st]
      };
    });
    const t0 = TUT.find((t) => t.id === s.tut);
    const st0 = s.stat[t0.id];
    const primeiro = t0.nome.split(' ')[0];
    const linhasMsg = t0.lines.map((l) => '• ' + l.desc + ': ' + fmt(l.v)).join('\n');
    const cur = {
      nome: t0.nome, dog: t0.dog, total: fmt(totalOf(t0)),
      lines: t0.lines.map((l) => ({ desc: l.desc, valor: fmt(l.v) })),
      msg: 'Olá, ' + primeiro + '! Segue o extrato de outubro/2026 do ' + t0.dog + ':\n' + linhasMsg + '\nTotal: ' + fmt(totalOf(t0)) + '\nVencimento: 10/11/2026\nPix: [CHAVE PIX]\nQualquer dúvida, é só responder aqui. Obrigado!',
      canSend: st0 === 'rascunho', canPay: st0 === 'enviado', isPaid: st0 === 'pago',
      send: () => this.setState({ stat: { ...s.stat, [t0.id]: 'enviado' }, msg: 'O WhatsApp de ' + t0.nome + ' abre com a mensagem pronta (no computador e no celular). O extrato foi marcado como enviado.' }),
      pay: () => this.setState({ stat: { ...s.stat, [t0.id]: 'pago' }, msg: 'Pagamento de ' + t0.nome + ' registrado.' })
    };

    const tel0 = ((s.dogs.find((d) => d.tutor === t0.nome) || {}).tel || '').replace(/\D/g, '');
    cur.waHref = 'https://wa.me/' + (tel0.length <= 11 ? '55' : '') + tel0 + '?text=' + encodeURIComponent(cur.msg);

    // ---- Dashboard
    const inRange = LANC.filter((l) => (!s.dfrom || l.data >= s.dfrom) && (!s.dto || l.data <= s.dto));
    const totalP = inRange.reduce((a, l) => a + l.valor, 0);
    const tutSet = {};
    inRange.forEach((l) => { tutSet[l.tutor] = true; });
    const nTut = Object.keys(tutSet).length;
    const bySrv = {};
    inRange.forEach((l) => { bySrv[l.servico] = (bySrv[l.servico] || 0) + l.valor; });
    const srvList = Object.keys(bySrv).map((k) => ({ k: k, v: bySrv[k] })).sort((a, b) => b.v - a.v);
    const srvMax = srvList.length ? srvList[0].v : 1;
    const byMes = {};
    inRange.forEach((l) => { const k = l.data.slice(0, 7); byMes[k] = (byMes[k] || 0) + l.valor; });
    const mesKeys = Object.keys(byMes).sort();
    const mesMax = mesKeys.reduce((a, k) => Math.max(a, byMes[k]), 1);
    const setPer = (a, b) => () => this.setState({ dfrom: a, dto: b });
    const dChips = [ ['Este mês', '2026-10-01', '2026-10-24'], ['Mês passado', '2026-09-01', '2026-09-30'], ['Últimos 90 dias', '2026-07-26', '2026-10-24'], ['Tudo', '', ''] ].map((c) => {
      const on = s.dfrom === c[1] && s.dto === c[2];
      return { label: c[0], pick: setPer(c[1], c[2]), style: 'min-height:44px;padding:0 16px;border-radius:999px;font-size:14px;font-weight:600;' + (on ? 'border:0;background:#14312D;color:#fff' : 'border:1px solid #B9C9C5;background:#fff;color:#14312D') };
    });
    const kpis = [
      { label: 'Total no período', value: fmt(totalP) },
      { label: 'Tutores atendidos', value: String(nTut) },
      { label: 'Média por tutor', value: fmt(nTut ? totalP / nTut : 0) },
      { label: 'Serviço líder', value: srvList.length ? srvList[0].k : '—' }
    ];
    const srvBars = srvList.map((b, i) => ({ label: b.k, value: fmt(b.v), barStyle: 'display:block;height:22px;border-radius:6px;width:' + (b.v / srvMax * 100) + '%;background:' + (i === 0 ? accent : '#9DB8B3') }));
    const monthBars = mesKeys.map((k) => ({ label: MES_ABR[Number(k.slice(5, 7)) - 1] + '/' + k.slice(2, 4), value: fmt(byMes[k]).replace(',00', ''), barStyle: 'display:block;width:100%;max-width:56px;border-radius:6px 6px 0 0;height:' + Math.max(4, byMes[k] / mesMax * 120) + 'px;background:' + accent }));
    const detRows = inRange.slice().sort((a, b) => (a.data === b.data ? b.id - a.id : (a.data < b.data ? 1 : -1))).map((l) => ({
      data: l.data.slice(8, 10) + '/' + l.data.slice(5, 7), tutor: l.tutor, cao: l.cao, servico: l.servico, desc: l.desc, qtd: String(l.qtd), valor: fmt(l.valor)
    }));
    const doExport = () => this.setState({ exMsg: 'Na versão real, isto baixa um arquivo Excel / Google Sheets com 3 abas: Detalhes (' + inRange.length + ' linhas do período), Fechamento e Dashboard.' });
    const doExportFech = () => this.setState({ exMsg: 'Na versão real, baixa o fechamento de outubro em Excel / Google Sheets, com as abas Detalhes, Fechamento e Dashboard.' });

    // ---- Dias fixos no cadastro
    const horaOptions = [];
    for (let h = 8; h <= 18; h++) {
      const hh = String(h).padStart(2, '0');
      horaOptions.push({ v: hh + ':00', l: hh + ':00' });
      if (h < 18) { horaOptions.push({ v: hh + ':30', l: hh + ':30' }); }
    }
    const DIAS = [ ['1', 'Segunda', 'Seg'], ['2', 'Terça', 'Ter'], ['3', 'Quarta', 'Qua'], ['4', 'Quinta', 'Qui'], ['5', 'Sexta', 'Sex'], ['6', 'Sábado', 'Sáb'], ['0', 'Domingo', 'Dom'] ];
    const hasDia = (k) => Object.prototype.hasOwnProperty.call(s.nf.dias, k);
    const diaChips = DIAS.map((x) => {
      const on = hasDia(x[0]);
      return {
        label: x[2], on: on,
        style: 'min-height:44px;min-width:56px;padding:0 14px;border-radius:12px;font-size:15px;font-weight:700;' + (on ? 'border:0;background:#14312D;color:#fff' : 'border:1px solid #B9C9C5;background:#fff;color:#14312D'),
        toggle: () => { const d = { ...s.nf.dias }; if (on) { delete d[x[0]]; } else { d[x[0]] = '09:00'; } this.setState({ nf: { ...s.nf, dias: d } }); }
      };
    });
    const diaHoras = DIAS.filter((x) => hasDia(x[0])).map((x) => ({
      id: 'nfh-' + x[0], label: x[1], hora: s.nf.dias[x[0]], options: horaOptions,
      onHora: (e) => this.setState({ nf: { ...s.nf, dias: { ...s.nf.dias, [x[0]]: e.target.value } } })
    }));

    // ---- Serviços e preços
    const EXTRA = 'Extra (valor informado)';
    const PH = 'Pacote de diárias (hotel)';
    const isPac = (c) => c === 'Pacote de dias' || c === PH;
    const COB = ['Por aula', 'Por diária', 'Pacote de dias', PH, EXTRA];
    const setSv = (id, patch) => this.setState({ servicos: s.servicos.map((x) => (x.id === id ? { ...x, ...patch } : x)) });
    const svRows = s.servicos.map((x) => ({
      nome: x.nome, cob: x.cob, isExtra: x.cob === EXTRA, hasVal: x.cob !== EXTRA, valor: x.valor,
      detalhe: isPac(x.cob) ? x.dias + (x.cob === PH ? ' diárias' : ' dias') : (x.cob === 'Por aula' ? 'por aula dada' : (x.cob === 'Por diária' ? 'por diária' : 'digitado ao lançar')),
      onVal: (e) => setSv(x.id, { valor: e.target.value }),
      remove: () => this.setState({ servicos: s.servicos.filter((y) => y.id !== x.id), svMsg: x.nome + ' removido.' })
    }));
    const setNsv = (k) => (e) => this.setState({ nsv: { ...s.nsv, [k]: e.target.value } });
    const saveSv = () => {
      const n = s.nsv;
      const v = parseFloat(String(n.valor).replace(',', '.'));
      const dias = parseInt(n.dias, 10);
      if (!n.nome.trim()) { this.setState({ svMsg: 'Dê um nome ao serviço.' }); return; }
      if (n.cob !== EXTRA && !(v >= 0)) { this.setState({ svMsg: 'Informe o valor.' }); return; }
      if (isPac(n.cob) && !(dias > 0)) { this.setState({ svMsg: 'Informe quantos dias tem o pacote.' }); return; }
      this.setState({
        servicos: [ ...s.servicos, { id: 's' + s.nS, nome: n.nome.trim(), cob: n.cob, valor: n.cob === EXTRA ? '' : String(n.valor), dias: isPac(n.cob) ? dias : null } ],
        nS: s.nS + 1, nsv: { nome: '', cob: 'Por aula', valor: '', dias: '12' }, showSv: false, svMsg: 'Serviço cadastrado.'
      });
    };

    // ---- Dúvidas
    const upd = (id, patch) => this.setState({ duvidas: s.duvidas.map((x) => (x.id === id ? { ...x, ...patch } : x)) });
    const duvidas = s.duvidas.map((d) => ({
      q: d.q, ans: d.ans, done: !!d.ans, open: !d.ans, draft: d.draft, inputId: 'dv-' + d.id,
      badge: d.ans ? 'Respondida' : 'Em aberto',
      badgeStyle: 'font-size:12px;font-weight:700;padding:4px 12px;border-radius:999px;white-space:nowrap;' + (d.ans ? 'background:#DDF1EE;color:#0B5A53' : 'background:#FEF3C7;color:#8A4B08'),
      opts: (d.opts || []).map((o) => ({ l: o, pick: () => upd(d.id, { draft: o }) })),
      onDraft: (e) => upd(d.id, { draft: e.target.value }),
      save: () => { if (d.draft.trim()) { upd(d.id, { ans: d.draft.trim() }); } },
      reopen: () => upd(d.id, { ans: '', draft: d.ans })
    })).sort((a, b) => (a.done === b.done ? 0 : (a.done ? 1 : -1)));
    const addQ = () => {
      if (!s.newQ.trim()) { return; }
      this.setState({ duvidas: [ { id: 'q' + s.nQ, q: s.newQ.trim(), opts: [], ans: '', draft: '' }, ...s.duvidas ], nQ: s.nQ + 1, newQ: '' });
    };

    // ---- Cães
    const chipNames = ['Todos', 'Adestramento', 'Day care', 'Creche', 'Hotel'];
    const chips = chipNames.map((c) => ({
      label: c,
      pick: () => this.setState({ filt: c }),
      style: 'min-height:44px;padding:0 16px;border-radius:999px;font-size:14px;font-weight:600;' + (s.filt === c ? 'border:0;background:#14312D;color:#fff' : 'border:1px solid #B9C9C5;background:#fff;color:#14312D')
    }));
    const q = s.q.trim().toLowerCase();
    const dogRows = s.dogs
      .filter((d) => (s.filt === 'Todos' || d.servs.indexOf(s.filt) >= 0) && (!q || d.nome.toLowerCase().indexOf(q) >= 0 || d.tutor.toLowerCase().indexOf(q) >= 0))
      .map((d) => ({
        nome: d.nome, raca: d.raca, tutor: d.tutor, tel: d.tel, servs: d.servs.join(', '),
        agenda: (d.aulas && d.aulas.length) ? d.aulas.map((a) => WD[a.wd].charAt(0).toUpperCase() + WD[a.wd].slice(1) + ' ' + a.hora).join(' · ') : '—',
        vac: d.vac, vacStyle: d.warn ? 'color:#8A4B08;font-weight:700' : 'color:#0B5A53;font-weight:600'
      }));
    const setNf = (k) => (e) => this.setState({ nf: { ...s.nf, [k]: e.target.value } });
    const saveDog = () => {
      if (!s.nf.nome.trim() || !s.nf.tutor.trim() || !s.nf.servs.length || (s.nf.servs.indexOf('Adestramento') >= 0 && !Object.keys(s.nf.dias).length)) { return; }
      this.setState({
        dogs: [ ...s.dogs, { nome: s.nf.nome.trim(), raca: 'A informar', tutor: s.nf.tutor.trim(), tel: s.nf.tel || '—', servs: s.nf.servs, aulas: s.nf.servs.indexOf('Adestramento') >= 0 ? Object.keys(s.nf.dias).map((k) => ({ wd: Number(k), hora: s.nf.dias[k] || '09:00' })) : [], foco: 'A definir', vac: 'A informar', warn: false } ],
        nf: { nome: '', tutor: '', tel: '', servs: ['Adestramento'], dias: { '1': '09:00' } }, showForm: false
      });
    };

    return {
      accent: accent,
      nav: nav,
      isHoje: s.screen === 'hoje', isHotel: s.screen === 'hotel', isFech: s.screen === 'fech', isCaes: s.screen === 'caes', isDuv: s.screen === 'duvidas', isDash: s.screen === 'dash', isSv: s.screen === 'servicos',
      // hoje
      rows: rows, cntP: cntP, cntF: cntF, cntN: cntN,
      dayTitle: isToday ? 'Hoje' : 'Agenda do dia', dayLabel: dayLabel, dayHint: isToday ? 'Hoje' : 'Dia selecionado', dayWord: isToday ? 'hoje' : 'neste dia', hotelTxt: hotelTxt,
      prevDay: () => { if (s.day > 0) { this.setState({ day: s.day - 1 }); } }, nextDay: () => { if (s.day < 13) { this.setState({ day: s.day + 1 }); } },
      prevStyle: navBtn(s.day > 0), nextStyle: navBtn(s.day < 13),
      adOptions: s.dogs.map((d) => ({ v: d.nome, l: d.nome })), adDog: s.adDog, adHora: s.adHora, adFoco: s.adFoco,
      onAdDog: (e) => this.setState({ adDog: e.target.value }), onAdHora: (e) => this.setState({ adHora: e.target.value }), onAdFoco: (e) => this.setState({ adFoco: e.target.value }),
      addAdest: addAdest,
      dogOptions: dayItems.map((d) => ({ v: d.id, l: d.nome })),
      itemOptions: s.servicos.filter((x) => x.cob === 'Extra (valor informado)').map((x) => x.nome).concat(['Outro']).map((x) => ({ v: x, l: x })),
      exDog: exDogId, exItem: s.exItem, exVal: s.exVal,
      onExDog: (e) => this.setState({ exDog: e.target.value }),
      onExItem: (e) => this.setState({ exItem: e.target.value }),
      onExVal: (e) => this.setState({ exVal: e.target.value }),
      addExtra: addExtra,
      extrasList: dayExtras.map((e) => ({ dog: e.dog, item: e.item, valorTxt: fmt(e.v) })),
      extrasTotal: fmt(extrasTotalNum),
      // hotel
      days: days, baias: baias, occ: occ, sel: sel, hasSel: !!selR, noSel: !selR,
      // fechamento
      cards: cards, tutores: tutores, cur: cur, msg: s.msg, hasMsg: !!s.msg,
      // caes
      chips: chips, dogRows: dogRows, noDogs: dogRows.length === 0,
      q: s.q, onQ: (e) => this.setState({ q: e.target.value }),
      showForm: s.showForm, formBtn: s.showForm ? 'Fechar' : '+ Novo cão',
      toggleForm: () => this.setState({ showForm: !s.showForm }),
      nf: { ...s.nf, hasAdest: s.nf.servs.indexOf('Adestramento') >= 0 }, onNfNome: setNf('nome'), onNfTutor: setNf('tutor'), onNfTel: setNf('tel'), diaChips: diaChips, diaHoras: diaHoras, horaOptions: horaOptions,
      
      servOptions: ['Adestramento', 'Day care', 'Creche', 'Hotel'].map((x) => {
        const on = s.nf.servs.indexOf(x) >= 0;
        return { l: x, on: on, toggle: () => this.setState({ nf: { ...s.nf, servs: on ? s.nf.servs.filter((y) => y !== x) : [ ...s.nf.servs, x ] } }) };
      }),
      saveDog: saveDog,
      ci: s.ci, ciDogs: s.dogs.map((d) => ({ v: d.nome, l: d.nome })), ciBaias: [1, 2, 3, 4, 5, 6, 7, 8].map((b) => ({ v: String(b), l: 'Baia ' + b })),
      onCiDog: setCi('dog'), onCiData: setCi('data'), onCiDias: setCi('dias'), onCiBaia: setCi('baia'), onCiItens: setCi('itens'), doCheckIn: doCheckIn, hMsg: s.hMsg, hasHMsg: !!s.hMsg,
      svRows: svRows, showSv: s.showSv, svBtn: s.showSv ? 'Fechar' : '+ Novo serviço', toggleSv: () => this.setState({ showSv: !s.showSv }),
      nsv: { ...s.nsv, hasVal: s.nsv.cob !== EXTRA, isPacote: isPac(s.nsv.cob) }, svCobOptions: COB.map((x) => ({ v: x, l: x })),
      onNsvNome: setNsv('nome'), onNsvCob: setNsv('cob'), onNsvValor: setNsv('valor'), onNsvDias: setNsv('dias'), saveSv: saveSv, svMsg: s.svMsg, hasSvMsg: !!s.svMsg,
      dfrom: s.dfrom, dto: s.dto, onFrom: (e) => this.setState({ dfrom: e.target.value }), onTo: (e) => this.setState({ dto: e.target.value }),
      dChips: dChips, kpis: kpis, srvBars: srvBars, monthBars: monthBars, detRows: detRows, noLanc: inRange.length === 0,
      detCount: String(inRange.length), totalTxt: fmt(totalP), doExport: doExport, doExportFech: doExportFech, exMsg: s.exMsg, hasExMsg: !!s.exMsg,
      duvidas: duvidas, openCount: openCount, doneCount: s.duvidas.length - openCount,
      newQ: s.newQ, onNewQ: (e) => this.setState({ newQ: e.target.value }), addQ: addQ
    };
  }
}

export default Component;
