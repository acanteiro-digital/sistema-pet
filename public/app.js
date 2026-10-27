(()=>{var Aa="http://www.w3.org/2000/svg",Se={hidden:1,disabled:1,selected:1,readOnly:1,required:1},Ae={input:1,textarea:1,select:1};function Be(o,a){for(let s=0;s<o.length;s++){let r=o[s];Array.isArray(r)?Be(r,a):r!=null&&r!==!1&&r!==!0&&a.push(typeof r=="object"?r:String(r))}return a}function ie(o,a,s){return{tag:o,props:a||{},children:Be(s||[],[])}}function ke(o,a,s,r){Object.keys(a).forEach(n=>{if(!(n in s)){if(/^on[A-Z]/.test(n)){o._h&&(o._h[n.slice(2).toLowerCase()]=null);return}if(n==="class"){o.removeAttribute("class");return}if(n==="htmlFor"){o.removeAttribute("for");return}if(!(n==="value"||n==="checked")){if(Se[n]&&!r){o[n]=!1;return}o.removeAttribute(n)}}}),Object.keys(s).forEach(n=>{let i=s[n];if(/^on[A-Z]/.test(n)){let d=n.slice(2).toLowerCase();o._h||(o._h={}),d in o._h||o.addEventListener(d,p=>{o._h[d]&&o._h[d](p)}),o._h[d]=i;return}if(a[n]!==i){if(n==="value"||n==="checked"){!Ae[o.tagName.toLowerCase()]&&n==="value"&&o.setAttribute("value",String(i));return}if(n==="class"){o.setAttribute("class",i);return}if(n==="htmlFor"){o.setAttribute("for",i);return}if(Se[n]&&!r){o[n]=!!i;return}if(i===!0){o.setAttribute(n,"");return}if(i===!1||i===null||i===void 0){o.removeAttribute(n);return}o.setAttribute(n,String(i))}})}function ze(o,a){let s=o.tagName.toLowerCase();if(Ae[s]&&("checked"in a&&(o.checked=!!a.checked),"value"in a)){let r=a.value===null||a.value===void 0?"":String(a.value);o.value!==r&&(o.value=r)}}function _(o,a){if(typeof o=="string")return document.createTextNode(o);let s=a||o.tag==="svg",r=s?document.createElementNS(Aa,o.tag):document.createElement(o.tag);ke(r,{},o.props,s);let n=s&&o.tag!=="foreignObject";return o.children.forEach(i=>r.appendChild(_(i,n))),ze(r,o.props),r}function qe(o,a,s,r){if(typeof s=="string"){if(typeof a=="string"&&o.nodeType===3)return o.data!==s&&(o.data=s),o;let c=document.createTextNode(s);return o.replaceWith(c),c}if(typeof a=="string"||a.tag!==s.tag){let c=_(s,r);return o.replaceWith(c),c}let n=r||s.tag==="svg";ke(o,a.props,s.props,n);let i=n&&s.tag!=="foreignObject",d=Array.prototype.slice.call(o.childNodes),p=Math.min(a.children.length,s.children.length);for(let c=0;c<p;c++)qe(d[c],a.children[c],s.children[c],i);for(let c=p;c<s.children.length;c++)o.appendChild(_(s.children[c],i));for(let c=s.children.length;c<a.children.length;c++)o.removeChild(d[c]);return ze(o,s.props),o}function Me(o,a){a._v?qe(a.firstChild,a._v,o,!1):(a.textContent="",a.appendChild(_(o,!1))),a._v=o}var U=class{constructor(a){this.props=a||{},this.state={},this._rerender=null}setState(a){let s=typeof a=="function"?a(this.state):a;this.state={...this.state,...s},this._rerender&&this._rerender()}},Ba={input:1,br:1,img:1,hr:1,link:1,meta:1},ka={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&nbsp;":"\xA0"},Te=o=>o.replace(/&(amp|lt|gt|quot|nbsp|#39);/g,a=>ka[a]);function za(o){let a={tag:"#root",attrs:[],children:[]},s=[a],r=0;for(;r<o.length;)if(o[r]==="<"&&/[A-Za-z/]/.test(o[r+1]||"")){let n=r+1,i=null;for(;n<o.length;){let y=o[n];if(i)y===i&&(i=null);else if(y==='"'||y==="'")i=y;else if(y===">")break;n++}let d=o.slice(r+1,n);if(r=n+1,d[0]==="/"){s.pop();continue}let p=d.endsWith("/"),c=p?d.slice(0,-1):d,x=/^([A-Za-z][\w:-]*)/.exec(c),g=x[1],m=[],B=/([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>]+)))?/g;B.lastIndex=x[0].length;let b;for(;b=B.exec(c);){let y=b[2]!==void 0?b[2]:b[3]!==void 0?b[3]:b[4]!==void 0?b[4]:"";m.push([b[1],Te(y)])}let k={tag:g,attrs:m,children:[]};s[s.length-1].children.push(k),!p&&!Ba[g.toLowerCase()]&&s.push(k)}else{let n=r+1;for(;n<o.length&&!(o[n]==="<"&&/[A-Za-z/]/.test(o[n+1]||""));)n++;s[s.length-1].children.push({text:Te(o.slice(r,n))}),r=n}return a}var qa=/\{\{\s*([^}]+?)\s*\}\}/g,W=/^\{\{\s*([^}]+?)\s*\}\}$/;function O(o,a){if(o==="true")return!0;if(o==="false")return!1;let s=o.split("."),r=a[s[0]];for(let n=1;n<s.length&&r!==void 0&&r!==null;n++)r=r[s[n]];return r}var Pe=o=>o==null||o===!1?"":String(o);function Ne(o,a){return o.replace(qa,(s,r)=>Pe(O(r,a)))}var Ma={text:1,search:1,number:1,email:1,tel:1,url:1,password:1,date:1,"":1};function Ta(o,a){let s={},r=o.tag.toLowerCase(),n="";return o.attrs.forEach(i=>{i[0]==="type"&&(n=i[1])}),o.attrs.forEach(i=>{let d=i[0],p=i[1];if(d.indexOf("hint-")===0)return;let c=W.exec(p),x=c?O(c[1],a):Ne(p,a);if(/^on[A-Z]/.test(d)){if(typeof x!="function")return;d==="onChange"&&(r==="textarea"||r==="input"&&Ma[n]!==void 0)&&(d="onInput"),s[d]=x;return}d==="for"&&(d="htmlFor"),d.indexOf("aria-")===0&&typeof x=="boolean"&&(x=x?"true":"false"),x!=null&&(s[d]=x)}),s}function Oe(o,a){if(o.text!==void 0){let i=W.exec(o.text.trim());if(i&&o.text.trim()===o.text){let d=O(i[1],a);return Pe(d)}return Ne(o.text,a)}let s=o.tag,r=i=>{let d=o.attrs.find(p=>p[0]===i);return d?d[1]:""},n=i=>o.children.map(d=>Oe(d,i));if(s==="sc-if"){let i=W.exec(r("value"));return O(i?i[1]:"false",a)?n(a):[]}if(s==="sc-for"){let i=W.exec(r("list")),d=(i?O(i[1],a):[])||[],p=r("as");return d.map((c,x)=>{let g=Object.create(a);return g[p]=c,g.$index=x,n(g)})}return ie(s,Ta(o,a),n(a))}function Re(o,a,s){let r=za(a),n=new s({}),i=!1,d=()=>{i=!1;let p=n.renderVals();Me(ie("div",{style:"display:contents"},r.children.map(c=>Oe(c,p))),o)};return n._rerender=()=>{i||(i=!0,queueMicrotask(d))},d(),n}var Pa=[{id:"d1",nome:"Thor",tutor:"Carlos Mendes",serv:"Adestramento"},{id:"d2",nome:"Mel",tutor:"Renata Alves",serv:"Day care"},{id:"d3",nome:"Bidu",tutor:"F\xE1bio Rocha",serv:"Day care"},{id:"d4",nome:"Luna",tutor:"Aline Freitas",serv:"Adestramento"},{id:"d5",nome:"Nina",tutor:"Paulo Souza",serv:"Creche",used:5,total:12},{id:"d6",nome:"Rex",tutor:"Marcos Lima",serv:"Creche",used:3,total:10},{id:"d7",nome:"Max",tutor:"Sandra Dias",serv:"Creche",used:10,total:12}],Na={Adestramento:"background:#E0E7FF;color:#2C3E9E","Day care":"background:#FEF3C7;color:#8A4B08",Creche:"background:#DDF1EE;color:#0B5A53",Hotel:"background:#FCE7F3;color:#9D1A62"},Oa=[{id:"r1",dog:"Pipoca",tutor:"Juliana Prado",baia:2,ini:0,fim:4,itens:"ra\xE7\xE3o (2 kg), cama, brinquedo"},{id:"r2",dog:"Bolt",tutor:"Ricardo Nunes",baia:1,ini:2,fim:6,itens:"ra\xE7\xE3o (3 kg), guia"},{id:"r3",dog:"Duque",tutor:"Helena Costa",baia:6,ini:0,fim:2,itens:"ra\xE7\xE3o (1 kg), medica\xE7\xE3o \xE0s 8h"},{id:"r4",dog:"Mia",tutor:"Tatiane Gomes",baia:5,ini:3,fim:5,itens:"ra\xE7\xE3o (1,5 kg), cobertor"},{id:"r5",dog:"Zeca",tutor:"Bruno Teixeira",baia:4,ini:5,fim:8,itens:"ra\xE7\xE3o (2 kg), guia, brinquedo"},{id:"r6",dog:"Lola",tutor:"M\xE1rcia Ramos",baia:3,ini:8,fim:13,itens:"ra\xE7\xE3o (4 kg), cama"}],ne=["dom","seg","ter","qua","qui","sex","s\xE1b"],Ra=["domingo","segunda-feira","ter\xE7a-feira","quarta-feira","quinta-feira","sexta-feira","s\xE1bado"],ja=["janeiro","fevereiro","mar\xE7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"],re=[{id:"t1",nome:"Carlos Mendes",dog:"Thor",lines:[{desc:"Adestramento \xB7 7 aulas fixas (quartas e s\xE1bados) \xD7 R$ 90,00",v:630},{desc:"15/10 \xB7 Aula extra",v:90},{desc:"24/10 \xB7 Guia (extra)",v:45}]},{id:"t2",nome:"Renata Alves",dog:"Mel",lines:[{desc:"Day care \xB7 12 di\xE1rias \xD7 R$ 80,00",v:960},{desc:"17/10 \xB7 Banho (extra)",v:70}]},{id:"t3",nome:"Paulo Souza",dog:"Nina",lines:[{desc:"Creche \xB7 pacote de 12 dias",v:900},{desc:"10/10 \xB7 Ra\xE7\xE3o (extra)",v:30}]},{id:"t4",nome:"Juliana Prado",dog:"Pipoca",lines:[{desc:"Hotel \xB7 5 di\xE1rias (24 a 28/10) \xD7 R$ 110,00",v:550},{desc:"Ra\xE7\xE3o (extra)",v:40},{desc:"Banho de sa\xEDda (extra)",v:80}]},{id:"t5",nome:"Marcos Lima",dog:"Rex",lines:[{desc:"Creche \xB7 pacote de 10 dias",v:750}]},{id:"t6",nome:"Sandra Dias",dog:"Max",lines:[{desc:"Creche \xB7 pacote de 12 dias",v:900},{desc:"Adestramento \xB7 4 aulas fixas (segundas e s\xE1bados) \xD7 R$ 90,00",v:360},{desc:"12/10 \xB7 Banho (extra)",v:70}]}],Ha=[{nome:"Thor",raca:"Pastor Alem\xE3o",tutor:"Carlos Mendes",tel:"(11) 90000-0001",servs:["Adestramento"],aulas:[{wd:3,hora:"09:00"},{wd:6,hora:"09:00"}],foco:"Obedi\xEAncia b\xE1sica: sentar e ficar",vac:"Em dia",warn:!1},{nome:"Mel",raca:"Golden Retriever",tutor:"Renata Alves",tel:"(11) 90000-0002",servs:["Day care"],vac:"Em dia",warn:!1},{nome:"Bidu",raca:"Labrador",tutor:"F\xE1bio Rocha",tel:"(11) 90000-0003",servs:["Day care"],vac:"Vence em 12 dias",warn:!0},{nome:"Luna",raca:"Border Collie",tutor:"Aline Freitas",tel:"(11) 90000-0004",servs:["Adestramento"],aulas:[{wd:4,hora:"10:30"},{wd:6,hora:"10:30"}],foco:"Refor\xE7o de comandos \xE0 dist\xE2ncia",vac:"Em dia",warn:!1},{nome:"Nina",raca:"Shih Tzu",tutor:"Paulo Souza",tel:"(11) 90000-0005",servs:["Creche"],vac:"Em dia",warn:!1},{nome:"Rex",raca:"Boxer",tutor:"Marcos Lima",tel:"(11) 90000-0006",servs:["Creche"],vac:"Em dia",warn:!1},{nome:"Pipoca",raca:"Poodle",tutor:"Juliana Prado",tel:"(11) 90000-0007",servs:["Hotel"],vac:"Vencida",warn:!0},{nome:"Max",raca:"Beagle",tutor:"Sandra Dias",tel:"(11) 90000-0008",servs:["Creche","Adestramento"],aulas:[{wd:1,hora:"15:00"},{wd:6,hora:"15:00"}],foco:"Socializa\xE7\xE3o com outros c\xE3es",vac:"Em dia",warn:!1}],u=o=>"R$ "+Number(o).toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}),je=o=>o.toISOString().slice(0,10),He=(()=>{let o=[],a=1,s=(i,d,p,c,x,g,m)=>o.push({id:a++,data:i,tutor:d,cao:p,servico:c,desc:x,qtd:g,valor:g*m}),r=Date.UTC(2026,7,1),n=Date.UTC(2026,9,24);for(let i=r;i<=n;i+=864e5){let d=new Date(i),p=d.getUTCDay(),c=je(d);(p===3||p===6)&&s(c,"Carlos Mendes","Thor","Adestramento","Aula fixa",1,90),(p===1||p===6)&&s(c,"Sandra Dias","Max","Adestramento","Aula fixa",1,90),(p===4||p===6)&&s(c,"Aline Freitas","Luna","Adestramento","Aula fixa",1,90),(p===2||p===4)&&s(c,"Renata Alves","Mel","Day care","Di\xE1ria",1,80),p===5&&s(c,"F\xE1bio Rocha","Bidu","Day care","Di\xE1ria",1,80),d.getUTCDate()===1&&(s(c,"Paulo Souza","Nina","Creche","Pacote de 12 dias",1,900),s(c,"Marcos Lima","Rex","Creche","Pacote de 10 dias",1,750),s(c,"Sandra Dias","Max","Creche","Pacote de 12 dias",1,900))}return[["2026-08-20",3,"Helena Costa","Duque"],["2026-09-05",5,"Ricardo Nunes","Bolt"],["2026-09-19",3,"Tatiane Gomes","Mia"],["2026-09-26",3,"Juliana Prado","Pipoca"],["2026-10-10",4,"M\xE1rcia Ramos","Lola"]].forEach(i=>{for(let d=0;d<i[1];d++)s(je(new Date(Date.parse(i[0])+d*864e5)),i[2],i[3],"Hotel","Di\xE1ria",1,110)}),[["2026-08-09","Renata Alves","Mel","Banho",70],["2026-08-22","Carlos Mendes","Thor","Guia",45],["2026-09-04","Paulo Souza","Nina","Ra\xE7\xE3o",30],["2026-09-12","Sandra Dias","Max","Banho",70],["2026-09-28","Juliana Prado","Pipoca","Banho de sa\xEDda",80],["2026-10-12","Sandra Dias","Max","Banho",70],["2026-10-17","Renata Alves","Mel","Banho",70],["2026-10-24","Carlos Mendes","Thor","Guia",45]].forEach(i=>s(i[0],i[1],i[2],"Extras",i[3],1,i[4])),o})(),La=0,Le=He.filter(o=>o.servico==="Adestramento"&&La++%7===3).map(o=>({...o,desc:"Aula faltada (n\xE3o cobrada)"})),Ia=He.filter(o=>!(o.servico==="Adestramento"&&Le.some(a=>a.id===o.id))),Va=[{id:"s1",nome:"Adestramento",cob:"Por aula",valor:"90",dias:null},{id:"s2",nome:"Day care",cob:"Por di\xE1ria",valor:"80",dias:null},{id:"s3",nome:"Creche \xB7 pacote 12 dias",cob:"Pacote de dias",valor:"900",dias:12},{id:"s4",nome:"Creche \xB7 pacote 10 dias",cob:"Pacote de dias",valor:"750",dias:10},{id:"s5",nome:"Hotel",cob:"Por di\xE1ria",valor:"110",dias:null},{id:"s6",nome:"Banho",cob:"Extra (valor informado)",valor:"",dias:null},{id:"s7",nome:"Ra\xE7\xE3o",cob:"Extra (valor informado)",valor:"",dias:null},{id:"s8",nome:"Guia",cob:"Extra (valor informado)",valor:"",dias:null}],Qa=["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],_a=[{id:"q1",q:"C\xE3o com dois servi\xE7os no mesmo dia (ex.: Max na creche e no adestramento): a presen\xE7a \xE9 marcada separada por servi\xE7o ou uma vez s\xF3 no dia?",opts:["Separada por servi\xE7o","Uma vez s\xF3 no dia"],ans:"",draft:""},{id:"q2",q:"Day care: como \xE9 cobrado? Di\xE1ria avulsa ou pacote de dias como na creche?",opts:["Di\xE1ria avulsa","Pacote de dias"],ans:"",draft:""},{id:"q3",q:"Banho e tosa: \xE9 s\xF3 um extra com valor informado ou precisa de agenda pr\xF3pria (dia, hora e profissional)?",opts:["S\xF3 extra","Agenda pr\xF3pria"],ans:"",draft:""},{id:"q4",q:"Aula de adestramento extra: cobra o mesmo valor da aula fixa?",opts:["Mesmo valor","Valor diferente"],ans:"",draft:""},{id:"q5",q:"Creche: quando o c\xE3o falta, o dia do pacote \xE9 descontado?",opts:["Desconta","N\xE3o desconta"],ans:"",draft:""},{id:"q6",q:"Hotel: h\xE1 desconto para estadias longas?",opts:["Sem desconto","Com desconto"],ans:"",draft:""},{id:"q7",q:"C\xE3o com vacina vencida pode entrar (creche, day care e hotel)?",opts:["Pode entrar","Bloquear entrada","Entrar s\xF3 com aviso"],ans:"",draft:""},{id:"q8",q:"Como o tutor paga?",opts:[],ans:"Pix, com baixa manual feita pelo administrador.",draft:""},{id:"q9",q:"Como \xE9 enviada a cobran\xE7a?",opts:[],ans:"Pelo WhatsApp do tutor.",draft:""}],le="min-height:44px;padding:0 18px;border-radius:12px;border:1px solid #B9C9C5;background:#fff;color:#14312D;font-size:15px;font-weight:600",de=class extends U{constructor(a){super(a),this.state={screen:"hoje",cobrarFalta:!1,faltaCob:{},day:0,pres:{"0:d2":"p","0:d5":"p"},agenda:{},nA:10,adDog:"Thor",adHora:"14:00",adFoco:"",notes:{},exDog:"d1",exItem:"Banho",exVal:"",extras:[{day:0,dog:"Mel",item:"Ra\xE7\xE3o",v:25},{day:0,dog:"Bidu",item:"Banho",v:70}],sel:"r1",tut:"t1",duvidas:_a,nQ:20,newQ:"",dfrom:"2026-10-01",dto:"2026-10-24",exMsg:"",res:Oa.map(s=>({...s,status:s.ini<=0?"hospedado":"reservado"})),nR:10,ci:{dog:"Thor",data:"2026-10-24",dias:"3",baia:"7",itens:""},hMsg:"",coPick:{},servicos:Va,nS:20,nsv:{nome:"",cob:"Por aula",valor:"",dias:"12"},showSv:!1,svMsg:"",stat:{t1:"enviado",t2:"pago",t3:"rascunho",t4:"rascunho",t5:"rascunho",t6:"rascunho"},msg:"",dogs:Ha,q:"",filt:"Todos",showForm:!1,nf:{nome:"",tutor:"",tel:"",servs:["Adestramento"],dias:{1:"09:00"}}}}renderVals(){let a=this.state,s=this.props.accent??"#0F766E",r=a.res,n=e=>()=>this.setState({screen:e,msg:"",exMsg:""}),i=a.duvidas.filter(e=>!e.ans).length,p=[{k:"hoje",label:"Hoje",sub:"presen\xE7a e aulas"},{k:"hotel",label:"Hotel",sub:"calend\xE1rio de baias"},{k:"fech",label:"Fechamento",sub:"extratos e cobran\xE7a"},{k:"dash",label:"Dashboard",sub:"per\xEDodo e detalhes"},{k:"caes",label:"C\xE3es e tutores",sub:"cadastro"},{k:"servicos",label:"Servi\xE7os e pre\xE7os",sub:"cadastro de valores"},{k:"duvidas",label:"D\xFAvidas",sub:i+" em aberto"}].map(e=>{let t=a.screen===e.k;return{label:e.label,sub:e.sub,go:n(e.k),style:"display:flex;flex-direction:column;align-items:flex-start;gap:2px;min-height:56px;padding:10px 16px;border-radius:12px;border:0;text-align:left;width:100%;box-sizing:border-box;font-weight:700;"+(t?"background:"+s+";color:#fff":"background:transparent;color:#14312D"),subStyle:"font-size:13px;font-weight:500;"+(t?"color:#E6F6F3":"color:#5B6F6B")}}),c=(e,t)=>()=>{let l=a.day+":"+e;this.setState({pres:{...a.pres,[l]:a.pres[l]===t?void 0:t}})},x=new Date(2026,9,24+a.day).getDay(),g=[];a.dogs.forEach(e=>(e.aulas||[]).forEach(t=>{t.wd===x&&g.push({id:"f-"+e.nome+"-"+t.hora,nome:e.nome,tutor:e.tutor,serv:"Adestramento",hora:t.hora,foco:e.foco||"A definir",extra:!1})})),(a.agenda[a.day]||[]).forEach(e=>g.push({id:e.id,nome:e.dog,tutor:e.tutor,serv:"Adestramento",hora:e.hora,foco:e.foco,extra:!0})),g.sort((e,t)=>e.hora<t.hora?-1:1);let m=[...g,...Pa.filter(e=>e.serv!=="Adestramento")],B=a.servicos.find(e=>e.nome==="Adestramento"),b=B&&Number(String(B.valor).replace(",","."))||0,k=m.map(e=>{let t=a.pres[a.day+":"+e.id],l=a.day+":"+e.id,v=a.faltaCob[l]!==void 0?a.faltaCob[l]:a.cobrarFalta,C=e.serv==="Creche",T=a.dogs.find(N=>N.nome===e.nome),P=T?T.servs.filter(N=>N!==e.serv).join(", "):"",D=C?e.used+(t==="p"?1:0):0,se=C?e.total-D:0;return{nome:e.nome,tutor:e.tutor,serv:e.serv,hora:e.hora||"",foco:e.foco||"",isExtra:!!e.extra,badgeStyle:"font-size:12px;font-weight:700;padding:4px 10px;border-radius:999px;"+Na[e.serv],isAdest:e.serv==="Adestramento",isCreche:C,others:P,hasOther:!!P,saldoTxt:C?D+" de "+e.total+" dias usados":"",low:C&&se<=2,lowTxt:se+(se===1?" dia":" dias"),note:a.notes[a.day+":"+e.id]||"",noteId:"nota-"+e.id,onNote:N=>this.setState({notes:{...a.notes,[a.day+":"+e.id]:N.target.value}}),onP:c(e.id,"p"),onF:c(e.id,"f"),showFalta:e.serv==="Adestramento"&&t==="f",faltaTxt:v?"Esta falta ser\xE1 cobrada: "+u(b):"Falta n\xE3o cobrada: deixa de faturar "+u(b),faltaBtn:v?"N\xE3o cobrar":"Cobrar esta falta",onFaltaCob:()=>this.setState({faltaCob:{...a.faltaCob,[l]:!v}}),faltaBox:"display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:10px;border-radius:12px;padding:10px 14px;font-size:14px;font-weight:600;"+(v?"background:#DDF1EE;color:#0B5A53":"background:#FEF3C7;color:#8A4B08"),pStyle:t==="p"?"min-height:48px;padding:0 20px;border-radius:12px;border:0;background:"+s+";color:#fff;font-size:15px;font-weight:700":le,fStyle:t==="f"?"min-height:48px;padding:0 20px;border-radius:12px;border:0;background:#B42318;color:#fff;font-size:15px;font-weight:700":le}}),y=m.map(e=>a.pres[a.day+":"+e.id]).filter(Boolean),ce=y.filter(e=>e==="p").length,pe=y.filter(e=>e==="f").length,Qe=k.length-ce-pe,fe=a.extras.filter(e=>e.day===a.day),_e=fe.reduce((e,t)=>e+t.v,0),ue=(m.find(e=>e.id===a.exDog)||m[0]||{}).id,We=()=>{let e=parseFloat(String(a.exVal).replace(",","."));if(!(e>0))return;let t=(m.find(l=>l.id===ue)||m[0]).nome;this.setState({extras:[...a.extras,{day:a.day,dog:t,item:a.exItem,v:e}],exVal:""})},G=new Date(2026,9,24+a.day),$=a.day===0,xe=Ra[G.getDay()],Ue=xe.charAt(0).toUpperCase()+xe.slice(1)+", "+G.getDate()+" de "+ja[G.getMonth()],Z=r.filter(e=>e.ini<=a.day&&e.fim>=a.day),Ge=(Z.length?Z.map(e=>e.dog+" (baia "+e.baia+")").join(", "):"nenhum c\xE3o")+" \xB7 "+(8-Z.length)+" baias livres",ve=e=>"min-height:44px;padding:0 16px;border-radius:12px;border:1px solid #B9C9C5;background:#fff;color:#14312D;font-size:15px;font-weight:600;opacity:"+(e?"1":"0.4"),$e=()=>{let e=a.dogs.find(l=>l.nome===a.adDog);if(!e)return;let t=[...a.agenda[a.day]||[],{id:"a"+a.nA,dog:e.nome,tutor:e.tutor,hora:a.adHora||"--:--",foco:a.adFoco||"A definir",extra:!0}].sort((l,v)=>l.hora<v.hora?-1:1);this.setState({agenda:{...a.agenda,[a.day]:t},nA:a.nA+1,adFoco:""})},J=[];for(let e=0;e<14;e++){let t=new Date(2026,9,24+e);J.push({wd:ne[t.getDay()],n:t.getDate(),i:e})}let z=e=>{let t=new Date(2026,9,24+e);return String(t.getDate()).padStart(2,"0")+"/"+String(t.getMonth()+1).padStart(2,"0")},Ze=[1,2,3,4,5,6,7,8].map(e=>({nome:"Baia "+e,trackStyle:"flex:1;position:relative;height:44px;border-radius:8px;background-color:#F3F6F5;background-image:repeating-linear-gradient(to right, transparent 0, transparent calc(100% / 14 - 1px), #D8E2DF calc(100% / 14 - 1px), #D8E2DF calc(100% / 14))",bars:r.filter(t=>t.baia===e).map(t=>{let l=a.sel===t.id,v=t.ini/14*100,C=(Math.min(t.fim,13)-t.ini+1)/14*100;return{label:t.dog,pick:()=>this.setState({sel:t.id}),style:"position:absolute;top:3px;bottom:3px;left:calc("+v+"% + 2px);width:calc("+C+"% - 4px);border-radius:8px;border:2px "+(t.status==="reservado"?"dashed":"solid")+" "+(l?"#14312D":s)+";background:"+(l?s:t.status==="saiu"?"#E8EEEC":t.status==="reservado"?"#FFFFFF":"#DDF1EE")+";color:"+(l?"#fff":t.status==="saiu"?"#41544F":"#0B5A53")+";font-size:14px;font-weight:700;text-align:left;padding:0 10px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis"}})})),Je=J.map(e=>{let t=r.filter(l=>l.ini<=e.i&&l.fim>=e.i).length;return{txt:t+"/8",color:t>=6?"#B42318":"#41544F"}}),f=r.find(e=>e.id===a.sel),ge=(e,t,l)=>this.setState({res:a.res.map(v=>v.id===e?{...v,...t}:v),hMsg:l}),he=f?a.coPick[f.id]!==void 0?a.coPick[f.id]:Math.min(f.fim,13):0,me=[];if(f)for(let e=Math.max(f.ini,0);e<=13;e++)me.push({v:String(e),l:z(e)});let Xe={hospedado:"Hospedado",reservado:"Reservado",saiu:"Saiu"},Ke=f?{dog:f.dog,tutor:f.tutor,statusTxt:Xe[f.status],ini:z(f.ini),fim:z(f.fim),fimLabel:f.status==="saiu"?"Sa\xEDda":"Sa\xEDda prevista",diasLabel:f.status==="saiu"?"Di\xE1rias":"Di\xE1rias previstas",baia:"Baia "+f.baia,dias:String(f.fim-f.ini+1),itens:f.itens,canIn:f.status==="reservado",canOut:f.status==="hospedado",coOpts:me,coVal:String(he),onCo:e=>this.setState({coPick:{...a.coPick,[f.id]:Number(e.target.value)}}),doIn:()=>ge(f.id,{status:"hospedado"},"Check-in de "+f.dog+" confirmado."),doOut:()=>{let e=Math.max(f.ini,he);ge(f.id,{status:"saiu",fim:e},"Check-out de "+f.dog+" feito em "+z(e)+". "+(e-f.ini+1)+" di\xE1rias lan\xE7adas na conta de "+f.tutor+".")}}:{},q=e=>t=>this.setState({ci:{...a.ci,[e]:t.target.value}}),Ye=()=>{let e=a.dogs.find(D=>D.nome===a.ci.dog),t=Math.round((Date.parse(a.ci.data)-Date.UTC(2026,9,24))/864e5),l=parseInt(a.ci.dias,10),v=Number(a.ci.baia);if(!e||isNaN(t)||!(l>0)){this.setState({hMsg:"Informe o c\xE3o, o dia de entrada e quantos dias ele fica."});return}if(t<0||t>13){this.setState({hMsg:"O calend\xE1rio da pr\xE9via vai de 24/10 a 06/11. Escolha uma entrada nesse intervalo."});return}let C=t+l-1,T=a.res.find(D=>D.baia===v&&D.status!=="saiu"&&D.ini<=C&&D.fim>=t);if(T){this.setState({hMsg:"A baia "+v+" est\xE1 ocupada por "+T.dog+" nesse per\xEDodo."});return}let P="r"+a.nR;this.setState({res:[...a.res,{id:P,dog:e.nome,tutor:e.tutor,baia:v,ini:t,fim:C,itens:a.ci.itens||"a informar",status:t<=0?"hospedado":"reservado"}],nR:a.nR+1,sel:P,hMsg:e.nome+" registrado: entrada em "+z(t)+", "+l+(l===1?" di\xE1ria prevista":" di\xE1rias previstas")+", baia "+v+".",ci:{...a.ci,itens:""}})},R=e=>e.lines.reduce((t,l)=>t+l.v,0),j=e=>re.filter(e).reduce((t,l)=>t+R(l),0),ea=[{label:"Total do m\xEAs",value:u(j(()=>!0)),color:"#14312D"},{label:"Recebido",value:u(j(e=>a.stat[e.id]==="pago")),color:"#0B5A53"},{label:"Aguardando pagamento",value:u(j(e=>a.stat[e.id]==="enviado")),color:"#8A4B08"},{label:"Ainda a enviar",value:u(j(e=>a.stat[e.id]==="rascunho")),color:"#41544F"}],aa={rascunho:"A enviar",enviado:"Aguardando",pago:"Pago"},ta={rascunho:"background:#E8EEEC;color:#41544F",enviado:"background:#FEF3C7;color:#8A4B08",pago:"background:#DDF1EE;color:#0B5A53"},oa=re.map(e=>{let t=a.tut===e.id,l=a.stat[e.id];return{nome:e.nome,dog:e.dog,total:u(R(e)),status:aa[l],pick:()=>this.setState({tut:e.id,msg:""}),style:"display:flex;justify-content:space-between;align-items:center;gap:12px;width:100%;box-sizing:border-box;min-height:64px;padding:10px 14px;border-radius:12px;border:0;margin-bottom:4px;"+(t?"background:#14312D;color:#fff":"background:transparent;color:#14312D"),badgeStyle:"display:inline-block;margin-top:4px;font-size:12px;font-weight:700;padding:3px 10px;border-radius:999px;"+ta[l]}}),h=re.find(e=>e.id===a.tut),X=a.stat[h.id],sa=h.nome.split(" ")[0],ia=h.lines.map(e=>"\u2022 "+e.desc+": "+u(e.v)).join(`
`),K={nome:h.nome,dog:h.dog,total:u(R(h)),lines:h.lines.map(e=>({desc:e.desc,valor:u(e.v)})),msg:"Ol\xE1, "+sa+"! Segue o extrato de outubro/2026 do "+h.dog+`:
`+ia+`
Total: `+u(R(h))+`
Vencimento: 10/11/2026
Pix: [CHAVE PIX]
Qualquer d\xFAvida, \xE9 s\xF3 responder aqui. Obrigado!`,canSend:X==="rascunho",canPay:X==="enviado",isPaid:X==="pago",send:()=>this.setState({stat:{...a.stat,[h.id]:"enviado"},msg:"O WhatsApp de "+h.nome+" abre com a mensagem pronta (no computador e no celular). O extrato foi marcado como enviado."}),pay:()=>this.setState({stat:{...a.stat,[h.id]:"pago"},msg:"Pagamento de "+h.nome+" registrado."})},be=((a.dogs.find(e=>e.tutor===h.nome)||{}).tel||"").replace(/\D/g,"");K.waHref="https://wa.me/"+(be.length<=11?"55":"")+be+"?text="+encodeURIComponent(K.msg);let E=Ia.filter(e=>(!a.dfrom||e.data>=a.dfrom)&&(!a.dto||e.data<=a.dto)),F=Le.filter(e=>(!a.dfrom||e.data>=a.dfrom)&&(!a.dto||e.data<=a.dto)),ye=F.reduce((e,t)=>e+t.valor,0),w={};F.forEach(e=>{let t=e.cao+" \xB7 "+e.tutor;w[t]=w[t]||{n:0,v:0},w[t].n+=1,w[t].v+=e.valor});let na=Object.keys(w).sort((e,t)=>w[t].v-w[e].v).map(e=>({quem:e,n:w[e].n+(w[e].n===1?" falta":" faltas"),v:u(w[e].v)})),Y=E.reduce((e,t)=>e+t.valor,0),we={};E.forEach(e=>{we[e.tutor]=!0});let ee=Object.keys(we).length,H={};E.forEach(e=>{H[e.servico]=(H[e.servico]||0)+e.valor});let M=Object.keys(H).map(e=>({k:e,v:H[e]})).sort((e,t)=>t.v-e.v),ra=M.length?M[0].v:1,S={};E.forEach(e=>{let t=e.data.slice(0,7);S[t]=(S[t]||0)+e.valor});let Ce=Object.keys(S).sort(),la=Ce.reduce((e,t)=>Math.max(e,S[t]),1),da=(e,t)=>()=>this.setState({dfrom:e,dto:t}),ca=[["Este m\xEAs","2026-10-01","2026-10-24"],["M\xEAs passado","2026-09-01","2026-09-30"],["\xDAltimos 90 dias","2026-07-26","2026-10-24"],["Tudo","",""]].map(e=>{let t=a.dfrom===e[1]&&a.dto===e[2];return{label:e[0],pick:da(e[1],e[2]),style:"min-height:44px;padding:0 16px;border-radius:999px;font-size:14px;font-weight:600;"+(t?"border:0;background:#14312D;color:#fff":"border:1px solid #B9C9C5;background:#fff;color:#14312D")}}),pa=[{label:"Total no per\xEDodo",value:u(Y)},{label:"Tutores atendidos",value:String(ee)},{label:"M\xE9dia por tutor",value:u(ee?Y/ee:0)},{label:"Servi\xE7o l\xEDder",value:M.length?M[0].k:"\u2014"},{label:"Aulas faltadas (n\xE3o cobradas)",value:F.length+(F.length===1?" aula \xB7 ":" aulas \xB7 ")+u(ye)}],fa=M.map((e,t)=>({label:e.k,value:u(e.v),barStyle:"display:block;height:22px;border-radius:6px;width:"+e.v/ra*100+"%;background:"+(t===0?s:"#9DB8B3")})),ua=Ce.map(e=>({label:Qa[Number(e.slice(5,7))-1]+"/"+e.slice(2,4),value:u(S[e]).replace(",00",""),barStyle:"display:block;width:100%;max-width:56px;border-radius:6px 6px 0 0;height:"+Math.max(4,S[e]/la*120)+"px;background:"+s})),xa=E.slice().sort((e,t)=>e.data===t.data?t.id-e.id:e.data<t.data?1:-1).map(e=>({data:e.data.slice(8,10)+"/"+e.data.slice(5,7),tutor:e.tutor,cao:e.cao,servico:e.servico,desc:e.desc,qtd:String(e.qtd),valor:u(e.valor)})),va=()=>this.setState({exMsg:"Na vers\xE3o real, isto baixa um arquivo Excel / Google Sheets com 3 abas: Detalhes ("+E.length+" linhas do per\xEDodo), Fechamento e Dashboard."}),ga=()=>this.setState({exMsg:"Na vers\xE3o real, baixa o fechamento de outubro em Excel / Google Sheets, com as abas Detalhes, Fechamento e Dashboard."}),L=[];for(let e=8;e<=18;e++){let t=String(e).padStart(2,"0");L.push({v:t+":00",l:t+":00"}),e<18&&L.push({v:t+":30",l:t+":30"})}let De=[["1","Segunda","Seg"],["2","Ter\xE7a","Ter"],["3","Quarta","Qua"],["4","Quinta","Qui"],["5","Sexta","Sex"],["6","S\xE1bado","S\xE1b"],["0","Domingo","Dom"]],Ee=e=>Object.prototype.hasOwnProperty.call(a.nf.dias,e),ha=De.map(e=>{let t=Ee(e[0]);return{label:e[2],on:t,style:"min-height:44px;min-width:56px;padding:0 14px;border-radius:12px;font-size:15px;font-weight:700;"+(t?"border:0;background:#14312D;color:#fff":"border:1px solid #B9C9C5;background:#fff;color:#14312D"),toggle:()=>{let l={...a.nf.dias};t?delete l[e[0]]:l[e[0]]="09:00",this.setState({nf:{...a.nf,dias:l}})}}}),ma=De.filter(e=>Ee(e[0])).map(e=>({id:"nfh-"+e[0],label:e[1],hora:a.nf.dias[e[0]],options:L,onHora:t=>this.setState({nf:{...a.nf,dias:{...a.nf.dias,[e[0]]:t.target.value}}})})),A="Extra (valor informado)",ae="Pacote de di\xE1rias (hotel)",I=e=>e==="Pacote de dias"||e===ae,ba=["Por aula","Por di\xE1ria","Pacote de dias",ae,A],ya=(e,t)=>this.setState({servicos:a.servicos.map(l=>l.id===e?{...l,...t}:l)}),wa=a.servicos.map(e=>({nome:e.nome,cob:e.cob,isExtra:e.cob===A,hasVal:e.cob!==A,valor:e.valor,detalhe:I(e.cob)?e.dias+(e.cob===ae?" di\xE1rias":" dias"):e.cob==="Por aula"?"por aula dada":e.cob==="Por di\xE1ria"?"por di\xE1ria":"digitado ao lan\xE7ar",onVal:t=>ya(e.id,{valor:t.target.value}),remove:()=>this.setState({servicos:a.servicos.filter(t=>t.id!==e.id),svMsg:e.nome+" removido."})})),V=e=>t=>this.setState({nsv:{...a.nsv,[e]:t.target.value}}),Ca=()=>{let e=a.nsv,t=parseFloat(String(e.valor).replace(",",".")),l=parseInt(e.dias,10);if(!e.nome.trim()){this.setState({svMsg:"D\xEA um nome ao servi\xE7o."});return}if(e.cob!==A&&!(t>=0)){this.setState({svMsg:"Informe o valor."});return}if(I(e.cob)&&!(l>0)){this.setState({svMsg:"Informe quantos dias tem o pacote."});return}this.setState({servicos:[...a.servicos,{id:"s"+a.nS,nome:e.nome.trim(),cob:e.cob,valor:e.cob===A?"":String(e.valor),dias:I(e.cob)?l:null}],nS:a.nS+1,nsv:{nome:"",cob:"Por aula",valor:"",dias:"12"},showSv:!1,svMsg:"Servi\xE7o cadastrado."})},Q=(e,t)=>this.setState({duvidas:a.duvidas.map(l=>l.id===e?{...l,...t}:l)}),Da=a.duvidas.map(e=>({q:e.q,ans:e.ans,done:!!e.ans,open:!e.ans,draft:e.draft,inputId:"dv-"+e.id,badge:e.ans?"Respondida":"Em aberto",badgeStyle:"font-size:12px;font-weight:700;padding:4px 12px;border-radius:999px;white-space:nowrap;"+(e.ans?"background:#DDF1EE;color:#0B5A53":"background:#FEF3C7;color:#8A4B08"),opts:(e.opts||[]).map(t=>({l:t,pick:()=>Q(e.id,{draft:t})})),onDraft:t=>Q(e.id,{draft:t.target.value}),save:()=>{e.draft.trim()&&Q(e.id,{ans:e.draft.trim()})},reopen:()=>Q(e.id,{ans:"",draft:e.ans})})).sort((e,t)=>e.done===t.done?0:e.done?1:-1),Ea=()=>{a.newQ.trim()&&this.setState({duvidas:[{id:"q"+a.nQ,q:a.newQ.trim(),opts:[],ans:"",draft:""},...a.duvidas],nQ:a.nQ+1,newQ:""})},Fa=["Todos","Adestramento","Day care","Creche","Hotel"].map(e=>({label:e,pick:()=>this.setState({filt:e}),style:"min-height:44px;padding:0 16px;border-radius:999px;font-size:14px;font-weight:600;"+(a.filt===e?"border:0;background:#14312D;color:#fff":"border:1px solid #B9C9C5;background:#fff;color:#14312D")})),te=a.q.trim().toLowerCase(),Fe=a.dogs.filter(e=>(a.filt==="Todos"||e.servs.indexOf(a.filt)>=0)&&(!te||e.nome.toLowerCase().indexOf(te)>=0||e.tutor.toLowerCase().indexOf(te)>=0)).map(e=>({nome:e.nome,raca:e.raca,tutor:e.tutor,tel:e.tel,servs:e.servs.join(", "),agenda:e.aulas&&e.aulas.length?e.aulas.map(t=>ne[t.wd].charAt(0).toUpperCase()+ne[t.wd].slice(1)+" "+t.hora).join(" \xB7 "):"\u2014",vac:e.vac,vacStyle:e.warn?"color:#8A4B08;font-weight:700":"color:#0B5A53;font-weight:600"})),oe=e=>t=>this.setState({nf:{...a.nf,[e]:t.target.value}}),Sa=()=>{!a.nf.nome.trim()||!a.nf.tutor.trim()||!a.nf.servs.length||a.nf.servs.indexOf("Adestramento")>=0&&!Object.keys(a.nf.dias).length||this.setState({dogs:[...a.dogs,{nome:a.nf.nome.trim(),raca:"A informar",tutor:a.nf.tutor.trim(),tel:a.nf.tel||"\u2014",servs:a.nf.servs,aulas:a.nf.servs.indexOf("Adestramento")>=0?Object.keys(a.nf.dias).map(e=>({wd:Number(e),hora:a.nf.dias[e]||"09:00"})):[],foco:"A definir",vac:"A informar",warn:!1}],nf:{nome:"",tutor:"",tel:"",servs:["Adestramento"],dias:{1:"09:00"}},showForm:!1})};return{accent:s,nav:p,isHoje:a.screen==="hoje",isHotel:a.screen==="hotel",isFech:a.screen==="fech",isCaes:a.screen==="caes",isDuv:a.screen==="duvidas",isDash:a.screen==="dash",isSv:a.screen==="servicos",rows:k,cntP:ce,cntF:pe,cntN:Qe,dayTitle:$?"Hoje":"Agenda do dia",dayLabel:Ue,dayHint:$?"Hoje":"Dia selecionado",dayWord:$?"hoje":"neste dia",hotelTxt:Ge,prevDay:()=>{a.day>0&&this.setState({day:a.day-1})},nextDay:()=>{a.day<13&&this.setState({day:a.day+1})},prevStyle:ve(a.day>0),nextStyle:ve(a.day<13),adOptions:a.dogs.map(e=>({v:e.nome,l:e.nome})),adDog:a.adDog,adHora:a.adHora,adFoco:a.adFoco,onAdDog:e=>this.setState({adDog:e.target.value}),onAdHora:e=>this.setState({adHora:e.target.value}),onAdFoco:e=>this.setState({adFoco:e.target.value}),addAdest:$e,dogOptions:m.map(e=>({v:e.id,l:e.nome})),itemOptions:a.servicos.filter(e=>e.cob==="Extra (valor informado)").map(e=>e.nome).concat(["Outro"]).map(e=>({v:e,l:e})),exDog:ue,exItem:a.exItem,exVal:a.exVal,onExDog:e=>this.setState({exDog:e.target.value}),onExItem:e=>this.setState({exItem:e.target.value}),onExVal:e=>this.setState({exVal:e.target.value}),addExtra:We,extrasList:fe.map(e=>({dog:e.dog,item:e.item,valorTxt:u(e.v)})),extrasTotal:u(_e),days:J,baias:Ze,occ:Je,sel:Ke,hasSel:!!f,noSel:!f,cards:ea,tutores:oa,cur:K,msg:a.msg,hasMsg:!!a.msg,chips:Fa,dogRows:Fe,noDogs:Fe.length===0,q:a.q,onQ:e=>this.setState({q:e.target.value}),showForm:a.showForm,formBtn:a.showForm?"Fechar":"+ Novo c\xE3o",toggleForm:()=>this.setState({showForm:!a.showForm}),nf:{...a.nf,hasAdest:a.nf.servs.indexOf("Adestramento")>=0},onNfNome:oe("nome"),onNfTutor:oe("tutor"),onNfTel:oe("tel"),diaChips:ha,diaHoras:ma,horaOptions:L,servOptions:["Adestramento","Day care","Creche","Hotel"].map(e=>{let t=a.nf.servs.indexOf(e)>=0;return{l:e,on:t,toggle:()=>this.setState({nf:{...a.nf,servs:t?a.nf.servs.filter(l=>l!==e):[...a.nf.servs,e]}})}}),saveDog:Sa,ci:a.ci,ciDogs:a.dogs.map(e=>({v:e.nome,l:e.nome})),ciBaias:[1,2,3,4,5,6,7,8].map(e=>({v:String(e),l:"Baia "+e})),onCiDog:q("dog"),onCiData:q("data"),onCiDias:q("dias"),onCiBaia:q("baia"),onCiItens:q("itens"),doCheckIn:Ye,hMsg:a.hMsg,hasHMsg:!!a.hMsg,svRows:wa,showSv:a.showSv,svBtn:a.showSv?"Fechar":"+ Novo servi\xE7o",toggleSv:()=>this.setState({showSv:!a.showSv}),nsv:{...a.nsv,hasVal:a.nsv.cob!==A,isPacote:I(a.nsv.cob)},svCobOptions:ba.map(e=>({v:e,l:e})),onNsvNome:V("nome"),onNsvCob:V("cob"),onNsvValor:V("valor"),onNsvDias:V("dias"),saveSv:Ca,svMsg:a.svMsg,hasSvMsg:!!a.svMsg,dfrom:a.dfrom,dto:a.dto,onFrom:e=>this.setState({dfrom:e.target.value}),onTo:e=>this.setState({dto:e.target.value}),faltaRows:na,faltasCount:F.length+(F.length===1?" falta":" faltas"),faltasTotalTxt:u(ye),noFaltas:F.length===0,cobrarFaltaTxt:a.cobrarFalta?"Ligado: toda falta \xE9 cobrada":"Desligado: falta n\xE3o \xE9 cobrada",onCobrarFalta:()=>this.setState({cobrarFalta:!a.cobrarFalta}),cobrarFaltaStyle:a.cobrarFalta?"min-height:44px;padding:0 18px;border-radius:12px;border:0;background:"+s+";color:#fff;font-size:15px;font-weight:700":le,dChips:ca,kpis:pa,srvBars:fa,monthBars:ua,detRows:xa,noLanc:E.length===0,detCount:String(E.length),totalTxt:u(Y),doExport:va,doExportFech:ga,exMsg:a.exMsg,hasExMsg:!!a.exMsg,duvidas:Da,openCount:i,doneCount:a.duvidas.length-i,newQ:a.newQ,onNewQ:e=>this.setState({newQ:e.target.value}),addQ:Ea}}},Ie=de;var Ve=`<div style="font-family:'Plus Jakarta Sans',system-ui,sans-serif;color:#14312D;min-height:960px;background:#F3F6F5">

  <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;padding:14px 24px;background:#fff;border-bottom:1px solid #D8E2DF">
    <div style="display:flex;align-items:center;gap:12px">
      <div style="width:40px;height:40px;border-radius:12px;background:{{accent}};display:flex;align-items:center;justify-content:center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="6" cy="10" r="2"></circle><circle cx="10" cy="5.5" r="2"></circle><circle cx="16" cy="5.5" r="2"></circle><circle cx="20" cy="10" r="2"></circle><path d="M12 11c-3 0-6 3.2-6 6 0 2 1.8 3 3.5 2.4 1-.4 1.7-.6 2.5-.6s1.5.2 2.5.6C16.2 20 18 19 18 17c0-2.800-3-6-6-6z"></path></svg>
      </div>
      <div style="font-size:20px;font-weight:800;letter-spacing:-0.01em">PetClubinho</div>
    </div>
    <div style="display:flex;align-items:center;gap:10px;font-size:14px;color:#5B6F6B">
      <span style="background:#FEF3C7;color:#8A4B08;font-weight:700;padding:6px 12px;border-radius:999px;font-size:13px">Pr\xE9via com dados fict\xEDcios</span>
      <span>Administra\xE7\xE3o</span>
    </div>
  </div>

  <div style="display:flex;flex-wrap:wrap;gap:24px;padding:24px;align-items:flex-start">

    <nav aria-label="Menu principal" style="flex:1 1 220px;display:flex;flex-direction:column;gap:6px">
      <sc-for list="{{nav}}" as="n" hint-placeholder-count="4">
        <button onClick="{{n.go}}" style="{{n.style}}"><span style="font-size:16px">{{n.label}}</span><span style="{{n.subStyle}}">{{n.sub}}</span></button>
      </sc-for>
    </nav>

    <main style="flex:999 1 560px;min-width:0;display:flex;flex-direction:column;gap:20px">

      <sc-if value="{{isHoje}}" hint-placeholder-val="{{true}}">
        <div style="display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:12px">
          <div>
            <h1 style="margin:0;font-size:28px;letter-spacing:-0.02em">{{dayTitle}}</h1>
            <p style="margin:4px 0 0;color:#5B6F6B;font-size:15px">Cada c\xE3o agendado j\xE1 aparece com Presente / Faltou e o detalhe da aula</p>
          </div>
          <div style="display:flex;flex-wrap:wrap;gap:8px">
            <span style="background:#DDF1EE;color:#0B5A53;font-weight:700;padding:8px 14px;border-radius:999px;font-size:14px">{{cntP}} presentes</span>
            <span style="background:#FEE4E2;color:#A12318;font-weight:700;padding:8px 14px;border-radius:999px;font-size:14px">{{cntF}} faltas</span>
            <span style="background:#E8EEEC;color:#41544F;font-weight:700;padding:8px 14px;border-radius:999px;font-size:14px">{{cntN}} a marcar</span>
          </div>
        </div>
        <details style="background:#fff;border:1px solid #D8E2DF;border-radius:16px;padding:4px 20px">
          <summary style="cursor:pointer;min-height:44px;display:flex;align-items:center;font-size:15px;font-weight:700;color:#0B5A53">Como usar: Hoje</summary>
          <ol style="margin:0 0 14px;padding-left:20px;display:flex;flex-direction:column;gap:8px;font-size:15px;line-height:1.5;color:#2A3F3B">
<li>Use as setas <b>Anterior</b> e <b>Pr\xF3ximo</b> para escolher o dia. Cada dia mostra os c\xE3es com aula de adestramento agendada (dia e hora fixos do cadastro), mais o day care e a creche.</li>
<li>Em cada c\xE3o, toque em <b>Presente</b> ou <b>Faltou</b>. Tocar de novo desfaz a marca\xE7\xE3o.</li>
<li>Nas aulas de adestramento, escreva em <b>Como foi a aula</b> a observa\xE7\xE3o do dia. Ela substitui o texto que o adestrador enviava.</li>
<li>Se o c\xE3o <b>faltou</b> numa aula de adestramento, aparece um aviso: por padr\xE3o a falta n\xE3o \xE9 cobrada. Toque em <b>Cobrar esta falta</b> para cobrar s\xF3 aquela aula (ou ligue a cobran\xE7a geral em Servi\xE7os e pre\xE7os).</li>
<li>Aula extra no mesmo dia: no quadro <b>Aula extra neste dia</b>, escolha o c\xE3o, o hor\xE1rio e o foco e toque em <b>Incluir aula extra</b>. Ela entra na lista com a etiqueta Extra.</li>
<li>Extras (ra\xE7\xE3o, guia, banho): em <b>Lan\xE7ar extra</b>, escolha o c\xE3o e o item, digite o valor e toque em <b>Adicionar extra</b>. Eles entram no fechamento do m\xEAs.</li>
<li>Na creche, cada presen\xE7a desconta um dia do pacote, e o sistema avisa quando o pacote est\xE1 acabando.</li>
          </ol>
        </details>


        <div class="card" style="padding:10px 14px;display:flex;align-items:center;justify-content:space-between;gap:12px">
          <button onClick="{{prevDay}}" aria-label="Dia anterior" style="{{prevStyle}}">\u2039 Anterior</button>
          <div style="text-align:center;font-weight:800;font-size:16px">{{dayLabel}}<span style="display:block;font-size:13px;font-weight:600;color:#5B6F6B">{{dayHint}}</span></div>
          <button onClick="{{nextDay}}" aria-label="Pr\xF3ximo dia" style="{{nextStyle}}">Pr\xF3ximo \u203A</button>
        </div>

        <div class="card" style="padding:14px 18px;display:flex;flex-wrap:wrap;gap:8px 20px;align-items:center;font-size:14px;color:#41544F">
          <strong style="color:#14312D">No hotel {{dayWord}}:</strong>
          <span>{{hotelTxt}}</span>
        </div>

        <div style="display:flex;flex-wrap:wrap;gap:20px;align-items:flex-start">
          <div style="flex:999 1 440px;min-width:0;display:flex;flex-direction:column;gap:12px">
            <sc-for list="{{rows}}" as="r" hint-placeholder-count="4">
              <div class="card" style="padding:16px 18px;display:flex;flex-direction:column;gap:12px">
                <div style="display:flex;flex-wrap:wrap;align-items:center;gap:12px;justify-content:space-between">
                  <div style="flex:1 1 180px;min-width:0">
                    <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">
                      <span style="font-size:18px;font-weight:800">{{r.nome}}</span>
                      <span style="{{r.badgeStyle}}">{{r.serv}}</span>
                      <sc-if value="{{r.isExtra}}" hint-placeholder-val="{{false}}"><span style="font-size:12px;font-weight:700;padding:4px 10px;border-radius:999px;background:#14312D;color:#fff">Extra</span></sc-if>
                    </div>
                    <div style="font-size:14px;color:#5B6F6B;margin-top:4px">{{r.tutor}}</div>
                    <sc-if value="{{r.hasOther}}" hint-placeholder-val="{{false}}">
                      <div style="font-size:13px;color:#5B6F6B;margin-top:2px">Contrata tamb\xE9m: {{r.others}}</div>
                    </sc-if>
                    <sc-if value="{{r.isAdest}}" hint-placeholder-val="{{false}}">
                      <div style="font-size:14px;margin-top:6px;color:#2A3F3B"><strong>{{r.hora}}</strong> \xB7 {{r.foco}}</div>
                    </sc-if>
                    <sc-if value="{{r.isCreche}}" hint-placeholder-val="{{false}}">
                      <div style="font-size:14px;margin-top:6px;color:#41544F">Pacote: {{r.saldoTxt}}</div>
                    </sc-if>
                    <sc-if value="{{r.low}}" hint-placeholder-val="{{false}}">
                      <div style="display:inline-block;margin-top:6px;background:#FEF3C7;color:#8A4B08;font-weight:700;font-size:13px;padding:4px 10px;border-radius:8px">Pacote acabando \xB7 {{r.lowTxt}}</div>
                    </sc-if>
                  </div>
                  <div style="display:flex;gap:8px">
                    <button onClick="{{r.onP}}" style="{{r.pStyle}}">Presente</button>
                    <button onClick="{{r.onF}}" style="{{r.fStyle}}">Faltou</button>
                  </div>
                </div>
                <sc-if value="{{r.showFalta}}" hint-placeholder-val="{{false}}">
                  <div style="{{r.faltaBox}}">
                    <span>{{r.faltaTxt}}</span>
                    <button onClick="{{r.onFaltaCob}}" class="btn">{{r.faltaBtn}}</button>
                  </div>
                </sc-if>
                <sc-if value="{{r.isAdest}}" hint-placeholder-val="{{false}}">
                  <div>
                    <label class="lbl" for="{{r.noteId}}">Como foi a aula \xB7 observa\xE7\xE3o (substitui o texto di\xE1rio)</label>
                    <input id="{{r.noteId}}" class="field" type="text" placeholder="Ex.: trabalhou sentar e ficar, boa evolu\xE7\xE3o" value="{{r.note}}" onChange="{{r.onNote}}">
                  </div>
                </sc-if>
              </div>
            </sc-for>
          </div>

          <div style="flex:1 1 300px;min-width:0;display:flex;flex-direction:column;gap:12px">
            <div class="card" style="padding:18px;display:flex;flex-direction:column;gap:14px">
              <div style="font-size:18px;font-weight:800">Aula extra neste dia</div>
              <div style="font-size:14px;color:#5B6F6B;line-height:1.4">As aulas fixas de cada c\xE3o (dia e hora) aparecem sozinhas na lista. Use aqui s\xF3 para incluir uma aula extra.</div>
              <div>
                <label class="lbl" for="addog">C\xE3o</label>
                <select id="addog" class="field" value="{{adDog}}" onChange="{{onAdDog}}">
                  <sc-for list="{{adOptions}}" as="o" hint-placeholder-count="3"><option value="{{o.v}}">{{o.l}}</option></sc-for>
                </select>
              </div>
              <div style="display:grid;grid-template-columns:1fr 2fr;gap:10px">
                <div><label class="lbl" for="adhora">Hor\xE1rio</label><select id="adhora" class="field" value="{{adHora}}" onChange="{{onAdHora}}">
                    <sc-for list="{{horaOptions}}" as="o" hint-placeholder-count="21"><option value="{{o.v}}">{{o.l}}</option></sc-for>
                  </select></div>
                <div><label class="lbl" for="adfoco">Foco da aula</label><input id="adfoco" class="field" type="text" placeholder="Ex.: caminhar na guia" value="{{adFoco}}" onChange="{{onAdFoco}}"></div>
              </div>
              <button onClick="{{addAdest}}" style="min-height:48px;border-radius:12px;border:0;background:#14312D;color:#fff;font-size:16px;font-weight:700">Incluir aula extra</button>
            </div>
            <div class="card" style="padding:18px;display:flex;flex-direction:column;gap:14px">
              <div style="font-size:18px;font-weight:800">Lan\xE7ar extra</div>
              <div>
                <label class="lbl" for="exdog">C\xE3o</label>
                <select id="exdog" class="field" value="{{exDog}}" onChange="{{onExDog}}">
                  <sc-for list="{{dogOptions}}" as="o" hint-placeholder-count="3"><option value="{{o.v}}">{{o.l}}</option></sc-for>
                </select>
              </div>
              <div>
                <label class="lbl" for="exitem">Item</label>
                <select id="exitem" class="field" value="{{exItem}}" onChange="{{onExItem}}">
                  <sc-for list="{{itemOptions}}" as="o" hint-placeholder-count="3"><option value="{{o.v}}">{{o.l}}</option></sc-for>
                </select>
              </div>
              <div>
                <label class="lbl" for="exval">Valor (R$)</label>
                <input id="exval" class="field" type="text" inputmode="decimal" placeholder="Ex.: 45,00" value="{{exVal}}" onChange="{{onExVal}}">
              </div>
              <button onClick="{{addExtra}}" style="min-height:48px;border-radius:12px;border:0;background:{{accent}};color:#fff;font-size:16px;font-weight:700">Adicionar extra</button>
            </div>
            <div class="card" style="padding:18px">
              <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:10px">
                <div style="font-size:16px;font-weight:800">Extras do dia</div>
                <div style="font-weight:700;color:#0B5A53">{{extrasTotal}}</div>
              </div>
              <sc-for list="{{extrasList}}" as="e" hint-placeholder-count="2">
                <div style="display:flex;justify-content:space-between;gap:12px;padding:10px 0;border-top:1px solid #E8EEEC;font-size:15px">
                  <span><strong>{{e.dog}}</strong> \xB7 {{e.item}}</span><span>{{e.valorTxt}}</span>
                </div>
              </sc-for>
            </div>
          </div>
        </div>
      </sc-if>

      <sc-if value="{{isHotel}}" hint-placeholder-val="{{false}}">
        <div>
          <h1 style="margin:0;font-size:28px;letter-spacing:-0.02em">Hotel</h1>
          <p style="margin:4px 0 0;color:#5B6F6B;font-size:15px">24 de outubro a 6 de novembro \xB7 toque numa reserva para ver os detalhes</p>
        </div>
        <details style="background:#fff;border:1px solid #D8E2DF;border-radius:16px;padding:4px 20px">
          <summary style="cursor:pointer;min-height:44px;display:flex;align-items:center;font-size:15px;font-weight:700;color:#0B5A53">Como usar: Hotel</summary>
          <ol style="margin:0 0 14px;padding-left:20px;display:flex;flex-direction:column;gap:8px;font-size:15px;line-height:1.5;color:#2A3F3B">
<li>O calend\xE1rio mostra as baias e os dias. Barra cheia \xE9 c\xE3o <b>hospedado</b>, tracejada \xE9 <b>reservado</b> e cinza \xE9 quem j\xE1 <b>saiu</b>. Na \xFAltima linha aparece a ocupa\xE7\xE3o de cada dia.</li>
<li>Para registrar a entrada, use <b>Novo check-in</b>: escolha o c\xE3o (do cadastro), o dia de entrada, os dias de estadia, a baia e o que ele trouxe, e toque em <b>Registrar check-in</b>.</li>
<li>Se a entrada for hoje, o c\xE3o fica hospedado. Se for em outro dia, fica reservado, e voc\xEA toca em <b>Confirmar entrada</b> quando ele chegar.</li>
<li>Toque numa barra do calend\xE1rio para ver a ficha da reserva: tutor, entrada, sa\xEDda, di\xE1rias e o que ele trouxe.</li>
<li>No fim do per\xEDodo, na ficha, escolha o dia do check-out e toque em <b>Fazer check-out</b>. As di\xE1rias at\xE9 esse dia v\xE3o para a conta do tutor.</li>
          </ol>
        </details>

        <div style="display:flex;flex-wrap:wrap;gap:20px;align-items:flex-start">
          <div class="card" style="flex:999 1 520px;min-width:0;padding:18px;overflow-x:auto">
            <div style="min-width:780px">
              <div style="display:flex;gap:12px;align-items:flex-end">
                <div style="width:64px;flex:none"></div>
                <div style="flex:1;display:grid;grid-template-columns:repeat(14, minmax(0, 1fr))">
                  <sc-for list="{{days}}" as="d" hint-placeholder-count="14">
                    <div style="text-align:center;padding-bottom:8px;border-bottom:1px solid #D8E2DF">
                      <div style="font-size:12px;color:#5B6F6B;font-weight:600">{{d.wd}}</div>
                      <div style="font-size:16px;font-weight:800">{{d.n}}</div>
                    </div>
                  </sc-for>
                </div>
              </div>
              <sc-for list="{{baias}}" as="b" hint-placeholder-count="8">
                <div style="display:flex;gap:12px;align-items:center;margin-top:8px">
                  <div style="width:64px;flex:none;font-size:14px;font-weight:700;color:#41544F">{{b.nome}}</div>
                  <div style="{{b.trackStyle}}">
                    <sc-for list="{{b.bars}}" as="x" hint-placeholder-count="1">
                      <button onClick="{{x.pick}}" style="{{x.style}}">{{x.label}}</button>
                    </sc-for>
                  </div>
                </div>
              </sc-for>
              <div style="display:flex;gap:12px;align-items:center;margin-top:14px">
                <div style="width:64px;flex:none;font-size:13px;font-weight:700;color:#41544F">Ocupa\xE7\xE3o</div>
                <div style="flex:1;display:grid;grid-template-columns:repeat(14, minmax(0, 1fr))">
                  <sc-for list="{{occ}}" as="o" hint-placeholder-count="14">
                    <div style="text-align:center;font-size:13px;font-weight:700;color:{{o.color}}">{{o.txt}}</div>
                  </sc-for>
                </div>
              </div>
            </div>
          </div>

          <div style="flex:1 1 280px;min-width:0;display:flex;flex-direction:column;gap:12px">
            <sc-if value="{{hasHMsg}}" hint-placeholder-val="{{false}}">
              <div role="status" style="background:#DDF1EE;color:#0B5A53;border-radius:12px;padding:12px 16px;font-size:14px;font-weight:600">{{hMsg}}</div>
            </sc-if>
            <div class="card" style="padding:18px;display:flex;flex-direction:column;gap:14px">
              <div style="font-size:18px;font-weight:800">Novo check-in</div>
              <div>
                <label class="lbl" for="cidog">C\xE3o (do cadastro)</label>
                <select id="cidog" class="field" value="{{ci.dog}}" onChange="{{onCiDog}}">
                  <sc-for list="{{ciDogs}}" as="o" hint-placeholder-count="4"><option value="{{o.v}}">{{o.l}}</option></sc-for>
                </select>
              </div>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
                <div><label class="lbl" for="cidata">Dia de entrada</label><input id="cidata" class="field" type="date" value="{{ci.data}}" onChange="{{onCiData}}"></div>
                <div><label class="lbl" for="cidias">Dias de estadia</label><input id="cidias" class="field" type="text" inputmode="numeric" value="{{ci.dias}}" onChange="{{onCiDias}}"></div>
              </div>
              <div>
                <label class="lbl" for="cibaia">Baia</label>
                <select id="cibaia" class="field" value="{{ci.baia}}" onChange="{{onCiBaia}}">
                  <sc-for list="{{ciBaias}}" as="o" hint-placeholder-count="8"><option value="{{o.v}}">{{o.l}}</option></sc-for>
                </select>
              </div>
              <div><label class="lbl" for="ciitens">O que trouxe</label><input id="ciitens" class="field" type="text" placeholder="Ex.: ra\xE7\xE3o 2 kg, cama" value="{{ci.itens}}" onChange="{{onCiItens}}"></div>
              <button onClick="{{doCheckIn}}" style="min-height:48px;border-radius:12px;border:0;background:{{accent}};color:#fff;font-size:16px;font-weight:700">Registrar check-in</button>
            </div>
            <div class="card" style="padding:18px">
              <sc-if value="{{hasSel}}" hint-placeholder-val="{{true}}">
                <div style="font-size:12px;font-weight:700;color:#5B6F6B;letter-spacing:0.04em">RESERVA SELECIONADA</div>
                <div style="font-size:24px;font-weight:800;margin:6px 0 2px">{{sel.dog}} <span style="font-size:12px;font-weight:700;padding:4px 10px;border-radius:999px;background:#E8EEEC;color:#41544F;vertical-align:middle">{{sel.statusTxt}}</span></div>
                <div style="color:#5B6F6B;font-size:15px">{{sel.tutor}}</div>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:16px">
                  <div><div class="lbl">Entrada</div><div style="font-weight:700">{{sel.ini}}</div></div>
                  <div><div class="lbl">{{sel.fimLabel}}</div><div style="font-weight:700">{{sel.fim}}</div></div>
                  <div><div class="lbl">Baia</div><div style="font-weight:700">{{sel.baia}}</div></div>
                  <div><div class="lbl">{{sel.diasLabel}}</div><div style="font-weight:700">{{sel.dias}}</div></div>
                </div>
                <div style="margin-top:16px;padding-top:14px;border-top:1px solid #E8EEEC;font-size:14px;color:#41544F">
                  <strong>Trouxe:</strong> {{sel.itens}}</div>
                <sc-if value="{{sel.canIn}}" hint-placeholder-val="{{false}}">
                  <button onClick="{{sel.doIn}}" style="margin-top:16px;width:100%;min-height:48px;border-radius:12px;border:0;background:{{accent}};color:#fff;font-size:16px;font-weight:700">Confirmar entrada (check-in)</button>
                </sc-if>
                <sc-if value="{{sel.canOut}}" hint-placeholder-val="{{false}}">
                  <div style="margin-top:16px;display:flex;flex-direction:column;gap:10px">
                    <div>
                      <label class="lbl" for="codia">Dia do check-out</label>
                      <select id="codia" class="field" value="{{sel.coVal}}" onChange="{{sel.onCo}}">
                        <sc-for list="{{sel.coOpts}}" as="o" hint-placeholder-count="6"><option value="{{o.v}}">{{o.l}}</option></sc-for>
                      </select>
                    </div>
                    <button onClick="{{sel.doOut}}" style="min-height:48px;border-radius:12px;border:0;background:#14312D;color:#fff;font-size:16px;font-weight:700">Fazer check-out</button>
                  </div>
                </sc-if>
                <div style="display:none">
                </div>
              </sc-if>
              <sc-if value="{{noSel}}" hint-placeholder-val="{{false}}">
                <div style="color:#5B6F6B;font-size:15px">Toque numa barra do calend\xE1rio para ver o tutor, as datas e o que o c\xE3o trouxe.</div>
              </sc-if>
            </div>
            <div class="card" style="padding:18px;font-size:14px;color:#41544F;line-height:1.5">
              <strong style="color:#14312D">Como funciona</strong><br>
              Cada barra \xE9 uma hospedagem. Ao fechar o m\xEAs, as di\xE1rias e os extras do hotel entram sozinhos no extrato do tutor.
            </div>
          </div>
        </div>
      </sc-if>

      <sc-if value="{{isFech}}" hint-placeholder-val="{{false}}">
        <div>
          <h1 style="margin:0;font-size:28px;letter-spacing:-0.02em">Fechamento de outubro</h1>
          <p style="margin:4px 0 0;color:#5B6F6B;font-size:15px">Extratos gerados do que foi registrado no m\xEAs \xB7 vencimento dia 10</p>
        </div>
        <details style="background:#fff;border:1px solid #D8E2DF;border-radius:16px;padding:4px 20px">
          <summary style="cursor:pointer;min-height:44px;display:flex;align-items:center;font-size:15px;font-weight:700;color:#0B5A53">Como usar: Fechamento</summary>
          <ol style="margin:0 0 14px;padding-left:20px;display:flex;flex-direction:column;gap:8px;font-size:15px;line-height:1.5;color:#2A3F3B">
<li>Entre os dias 1 e 3, veja no topo os totais do m\xEAs: total, recebido, aguardando pagamento e a enviar. Depois escolha um tutor na lista.</li>
<li>O extrato mostra tudo que foi lan\xE7ado no m\xEAs para aquele tutor (aulas, di\xE1rias, pacotes e extras) e o total.</li>
<li>Toque em <b>Enviar no WhatsApp</b>: abre a conversa com o tutor com a mensagem pronta, no computador e no celular. O extrato passa a <b>Aguardando</b>.</li>
<li>Quando o Pix chegar, toque em <b>Marcar como pago</b>. O vencimento \xE9 dia 10. Para quem n\xE3o pagou, use <b>Reenviar lembrete</b>.</li>
<li>Use <b>Exportar fechamento</b> para guardar o m\xEAs em Excel ou Google Sheets, com as abas Detalhes, Fechamento e Dashboard. Na pr\xE9via, o bot\xE3o s\xF3 mostra o que o arquivo teria.</li>
          </ol>
        </details>

        <div style="display:flex;flex-wrap:wrap;align-items:center;gap:12px">
          <button onClick="{{doExportFech}}" class="btn">Exportar fechamento (Excel / Sheets)</button>
          <sc-if value="{{hasExMsg}}" hint-placeholder-val="{{false}}"><span role="status" style="color:#0B5A53;font-size:14px;font-weight:600">{{exMsg}}</span></sc-if>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(190px, 1fr));gap:12px">
          <sc-for list="{{cards}}" as="c" hint-placeholder-count="4">
            <div class="card" style="padding:16px 18px">
              <div style="font-size:13px;font-weight:600;color:#5B6F6B">{{c.label}}</div>
              <div style="font-size:24px;font-weight:800;margin-top:4px;color:{{c.color}}">{{c.value}}</div>
            </div>
          </sc-for>
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:20px;align-items:flex-start">
          <div class="card" style="flex:1 1 300px;min-width:0;padding:8px">
            <sc-for list="{{tutores}}" as="t" hint-placeholder-count="5">
              <button onClick="{{t.pick}}" style="{{t.style}}">
                <span style="text-align:left"><span style="display:block;font-size:16px;font-weight:700">{{t.nome}}</span><span style="display:block;font-size:13px;margin-top:2px;opacity:0.85">{{t.dog}}</span></span>
                <span style="text-align:right"><span style="display:block;font-size:16px;font-weight:800">{{t.total}}</span><span style="{{t.badgeStyle}}">{{t.status}}</span></span>
              </button>
            </sc-for>
          </div>
          <div class="card" style="flex:999 1 380px;min-width:0;padding:22px;display:flex;flex-direction:column;gap:16px">
            <div style="display:flex;flex-wrap:wrap;justify-content:space-between;gap:8px;align-items:baseline">
              <div style="font-size:22px;font-weight:800">Extrato \xB7 {{cur.nome}}</div>
              <div style="color:#5B6F6B;font-size:14px">C\xE3o: {{cur.dog}}</div>
            </div>
            <div>
              <sc-for list="{{cur.lines}}" as="l" hint-placeholder-count="3">
                <div style="display:flex;justify-content:space-between;gap:16px;padding:11px 0;border-top:1px solid #E8EEEC;font-size:15px">
                  <span>{{l.desc}}</span><span style="font-weight:600;white-space:nowrap">{{l.valor}}</span>
                </div>
              </sc-for>
              <div style="display:flex;justify-content:space-between;padding:14px 0 0;border-top:2px solid #14312D;font-size:18px;font-weight:800">
                <span>Total</span><span>{{cur.total}}</span>
              </div>
            </div>
            <div style="background:#F3F6F5;border-radius:12px;padding:14px 16px">
              <div class="lbl">Mensagem que vai para o WhatsApp do tutor</div>
              <div style="white-space:pre-line;font-size:14px;line-height:1.5;color:#2A3F3B">{{cur.msg}}</div>
            </div>
            <div style="display:flex;flex-wrap:wrap;gap:10px;align-items:center">
              <sc-if value="{{cur.canSend}}" hint-placeholder-val="{{true}}">
                <a href="{{cur.waHref}}" target="_blank" rel="noopener" onClick="{{cur.send}}" style="display:inline-flex;align-items:center;justify-content:center;text-decoration:none;min-height:48px;padding:0 22px;border-radius:12px;background:{{accent}};color:#fff;font-size:16px;font-weight:700">Enviar no WhatsApp</a>
              </sc-if>
              <sc-if value="{{cur.canPay}}" hint-placeholder-val="{{false}}">
                <button onClick="{{cur.pay}}" style="min-height:48px;padding:0 22px;border-radius:12px;border:0;background:{{accent}};color:#fff;font-size:16px;font-weight:700">Marcar como pago (Pix)</button>
                <a href="{{cur.waHref}}" target="_blank" rel="noopener" onClick="{{cur.send}}" class="btn" style="display:inline-flex;align-items:center;justify-content:center;text-decoration:none">Reenviar lembrete</a>
              </sc-if>
              <sc-if value="{{cur.isPaid}}" hint-placeholder-val="{{false}}">
                <span style="background:#DDF1EE;color:#0B5A53;font-weight:700;padding:12px 18px;border-radius:12px">Pagamento confirmado</span>
              </sc-if>
            </div>
            <sc-if value="{{hasMsg}}" hint-placeholder-val="{{false}}">
              <div role="status" style="background:#DDF1EE;color:#0B5A53;border-radius:12px;padding:12px 16px;font-size:14px;font-weight:600">{{msg}}</div>
            </sc-if>
          </div>
        </div>
      </sc-if>

      <sc-if value="{{isCaes}}" hint-placeholder-val="{{false}}">
        <div style="display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:12px">
          <div>
            <h1 style="margin:0;font-size:28px;letter-spacing:-0.02em">C\xE3es e tutores</h1>
            <p style="margin:4px 0 0;color:#5B6F6B;font-size:15px">Cadastro \xFAnico que alimenta agenda, hotel e cobran\xE7a</p>
          </div>
          <button onClick="{{toggleForm}}" style="min-height:48px;padding:0 22px;border-radius:12px;border:0;background:{{accent}};color:#fff;font-size:16px;font-weight:700">{{formBtn}}</button>
        </div>
        <details style="background:#fff;border:1px solid #D8E2DF;border-radius:16px;padding:4px 20px">
          <summary style="cursor:pointer;min-height:44px;display:flex;align-items:center;font-size:15px;font-weight:700;color:#0B5A53">Como usar: C\xE3es e tutores</summary>
          <ol style="margin:0 0 14px;padding-left:20px;display:flex;flex-direction:column;gap:8px;font-size:15px;line-height:1.5;color:#2A3F3B">
<li>Para cadastrar, toque em <b>+ Novo c\xE3o</b> e preencha o nome do c\xE3o, o tutor e o WhatsApp (usado no envio da cobran\xE7a).</li>
<li>Marque todos os servi\xE7os que o c\xE3o contrata. Pode ser mais de um (por exemplo, creche e adestramento).</li>
<li>Se marcar Adestramento, escolha os dias da semana fixos e o hor\xE1rio de cada dia (de 08:00 a 18:00). Eles formam a agenda fixa do c\xE3o.</li>
<li>Para achar um c\xE3o, busque pelo nome do c\xE3o ou do tutor, ou filtre por servi\xE7o. A coluna <b>Agenda fixa</b> mostra os dias e hor\xE1rios do adestramento.</li>
          </ol>
        </details>


        <sc-if value="{{showForm}}" hint-placeholder-val="{{false}}">
          <div class="card" style="padding:20px;display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:14px;align-items:end">
            <div><label class="lbl" for="nfn">Nome do c\xE3o</label><input id="nfn" class="field" type="text" value="{{nf.nome}}" onChange="{{onNfNome}}"></div>
            <div><label class="lbl" for="nft">Tutor</label><input id="nft" class="field" type="text" value="{{nf.tutor}}" onChange="{{onNfTutor}}"></div>
            <div><label class="lbl" for="nfw">WhatsApp</label><input id="nfw" class="field" type="text" inputmode="tel" placeholder="(11) 90000-0000" value="{{nf.tel}}" onChange="{{onNfTel}}"></div>
            <div style="grid-column:1 / -1">
              <div class="lbl">Servi\xE7os contratados (pode marcar mais de um)</div>
              <div style="display:flex;flex-wrap:wrap;gap:8px">
                <sc-for list="{{servOptions}}" as="o" hint-placeholder-count="4">
                  <label style="display:flex;align-items:center;gap:8px;min-height:44px;padding:0 14px;border:1px solid #B9C9C5;border-radius:12px;background:#fff;font-size:15px;font-weight:600"><input type="checkbox" checked="{{o.on}}" onChange="{{o.toggle}}" style="width:20px;height:20px;margin:0">{{o.l}}</label>
                </sc-for>
              </div>
            </div>
            <sc-if value="{{nf.hasAdest}}" hint-placeholder-val="{{true}}">
              <div style="grid-column:1 / -1;display:flex;flex-direction:column;gap:12px">
                <div>
                  <div class="lbl">Dias fixos do adestramento (marque um ou mais)</div>
                  <div style="display:flex;flex-wrap:wrap;gap:8px">
                    <sc-for list="{{diaChips}}" as="c" hint-placeholder-count="7">
                      <button onClick="{{c.toggle}}" aria-pressed="{{c.on}}" style="{{c.style}}">{{c.label}}</button>
                    </sc-for>
                  </div>
                </div>
                <div style="display:flex;flex-wrap:wrap;gap:12px">
                  <sc-for list="{{diaHoras}}" as="h" hint-placeholder-count="2">
                    <div style="flex:1 1 150px;max-width:220px">
                      <label class="lbl" for="{{h.id}}">Hor\xE1rio \xB7 {{h.label}}</label>
                      <select id="{{h.id}}" class="field" value="{{h.hora}}" onChange="{{h.onHora}}">
                        <sc-for list="{{h.options}}" as="o" hint-placeholder-count="21"><option value="{{o.v}}">{{o.l}}</option></sc-for>
                      </select>
                    </div>
                  </sc-for>
                </div>
              </div>
            </sc-if>
            <button onClick="{{saveDog}}" style="min-height:48px;border-radius:12px;border:0;background:#14312D;color:#fff;font-size:16px;font-weight:700">Salvar c\xE3o</button>
          </div>
        </sc-if>

        <div class="card" style="padding:16px;display:flex;flex-direction:column;gap:14px">
          <div style="display:flex;flex-wrap:wrap;gap:12px;align-items:flex-end">
            <div style="flex:1 1 240px">
              <label class="lbl" for="busca">Buscar c\xE3o ou tutor</label>
              <input id="busca" class="field" type="text" placeholder="Digite um nome" value="{{q}}" onChange="{{onQ}}">
            </div>
            <div style="display:flex;flex-wrap:wrap;gap:8px">
              <sc-for list="{{chips}}" as="c" hint-placeholder-count="5">
                <button onClick="{{c.pick}}" style="{{c.style}}">{{c.label}}</button>
              </sc-for>
            </div>
          </div>
          <div style="overflow-x:auto">
            <div style="min-width:860px">
              <div style="display:grid;grid-template-columns:1fr 1.2fr 1.1fr 1.3fr 1.4fr 1fr;gap:12px;padding:10px 12px;font-size:13px;font-weight:700;color:#5B6F6B;border-bottom:1px solid #D8E2DF">
                <span>C\xE3o</span><span>Tutor</span><span>WhatsApp</span><span>Servi\xE7os</span><span>Agenda fixa</span><span>Vacinas</span>
              </div>
              <sc-for list="{{dogRows}}" as="d" hint-placeholder-count="6">
                <div style="display:grid;grid-template-columns:1fr 1.2fr 1.1fr 1.3fr 1.4fr 1fr;gap:12px;padding:14px 12px;border-bottom:1px solid #E8EEEC;font-size:15px;align-items:center">
                  <span><strong>{{d.nome}}</strong><span style="display:block;font-size:13px;color:#5B6F6B">{{d.raca}}</span></span>
                  <span>{{d.tutor}}</span>
                  <span>{{d.tel}}</span>
                  <span>{{d.servs}}</span>
                  <span>{{d.agenda}}</span>
                  <span style="{{d.vacStyle}}">{{d.vac}}</span>
                </div>
              </sc-for>
              <sc-if value="{{noDogs}}" hint-placeholder-val="{{false}}">
                <div style="padding:24px 12px;color:#5B6F6B">Nenhum c\xE3o encontrado.</div>
              </sc-if>
            </div>
          </div>
        </div>
      </sc-if>

      <sc-if value="{{isSv}}" hint-placeholder-val="{{false}}">
        <div style="display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:12px">
          <div>
            <h1 style="margin:0;font-size:28px;letter-spacing:-0.02em">Servi\xE7os e pre\xE7os</h1>
            <p style="margin:4px 0 0;color:#5B6F6B;font-size:15px">Os valores daqui entram nos extratos e no fechamento</p>
          </div>
          <button onClick="{{toggleSv}}" style="min-height:48px;padding:0 22px;border-radius:12px;border:0;background:{{accent}};color:#fff;font-size:16px;font-weight:700">{{svBtn}}</button>
        </div>
        <details style="background:#fff;border:1px solid #D8E2DF;border-radius:16px;padding:4px 20px">
          <summary style="cursor:pointer;min-height:44px;display:flex;align-items:center;font-size:15px;font-weight:700;color:#0B5A53">Como usar: Servi\xE7os e pre\xE7os</summary>
          <ol style="margin:0 0 14px;padding-left:20px;display:flex;flex-direction:column;gap:8px;font-size:15px;line-height:1.5;color:#2A3F3B">
<li>A lista mostra cada servi\xE7o, como ele \xE9 cobrado e o valor. Para mudar um pre\xE7o, edite o valor direto no campo.</li>
<li>Para criar um servi\xE7o, toque em <b>+ Novo servi\xE7o</b> e informe o nome, como cobra (por aula, por di\xE1ria, pacote de dias ou extra com valor informado) e o valor.</li>
<li><b>Pacotes do hotel</b> (estadias com desconto): crie um servi\xE7o do tipo <b>Pacote de di\xE1rias (hotel)</b>, com o nome (ex.: Hotel \xB7 pacote 7 di\xE1rias), o n\xFAmero de di\xE1rias e o valor total. Voc\xEA cria quantos pacotes quiser e pode mudar ou remover quando quiser.</li>
<li>No <b>pacote de dias</b>, informe quantos dias ele tem. No <b>extra com valor informado</b>, n\xE3o h\xE1 pre\xE7o fixo: o valor \xE9 digitado ao lan\xE7ar o extra na tela Hoje.</li>
<li>Em <b>Cobrar falta em aula de adestramento</b>, escolha se toda falta \xE9 cobrada. O padr\xE3o \xE9 n\xE3o cobrar.</li>
<li><b>Remover</b> tira o servi\xE7o da lista. Na pr\xE9via, os valores desta tela ainda n\xE3o alteram os extratos de exemplo.</li>
          </ol>
        </details>

        <sc-if value="{{hasSvMsg}}" hint-placeholder-val="{{false}}">
          <div role="status" style="background:#DDF1EE;color:#0B5A53;border-radius:12px;padding:12px 16px;font-size:14px;font-weight:600">{{svMsg}}</div>
        </sc-if>

        <sc-if value="{{showSv}}" hint-placeholder-val="{{false}}">
          <div class="card" style="padding:20px;display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:14px;align-items:end">
            <div><label class="lbl" for="svn">Nome do servi\xE7o</label><input id="svn" class="field" type="text" placeholder="Ex.: Tosa" value="{{nsv.nome}}" onChange="{{onNsvNome}}"></div>
            <div>
              <label class="lbl" for="svc">Como cobra</label>
              <select id="svc" class="field" value="{{nsv.cob}}" onChange="{{onNsvCob}}">
                <sc-for list="{{svCobOptions}}" as="o" hint-placeholder-count="4"><option value="{{o.v}}">{{o.l}}</option></sc-for>
              </select>
            </div>
            <sc-if value="{{nsv.hasVal}}" hint-placeholder-val="{{true}}">
              <div><label class="lbl" for="svv">Valor (R$)</label><input id="svv" class="field" type="text" inputmode="decimal" value="{{nsv.valor}}" onChange="{{onNsvValor}}"></div>
            </sc-if>
            <sc-if value="{{nsv.isPacote}}" hint-placeholder-val="{{false}}">
              <div><label class="lbl" for="svd">Dias do pacote</label><input id="svd" class="field" type="text" inputmode="numeric" value="{{nsv.dias}}" onChange="{{onNsvDias}}"></div>
            </sc-if>
            <button onClick="{{saveSv}}" style="min-height:48px;border-radius:12px;border:0;background:#14312D;color:#fff;font-size:16px;font-weight:700">Salvar servi\xE7o</button>
          </div>
        </sc-if>

        <div class="card" style="padding:16px 20px;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px">
          <div style="flex:1 1 320px">
            <div style="font-size:16px;font-weight:800">Cobrar falta em aula de adestramento</div>
            <div style="font-size:14px;color:#5B6F6B;margin-top:4px;line-height:1.5">Hoje a falta n\xE3o \xE9 cobrada. Ligando aqui, toda falta passa a ser cobrada pelo valor da aula. Mesmo desligado, voc\xEA pode cobrar uma falta espec\xEDfica na tela Hoje.</div>
          </div>
          <button onClick="{{onCobrarFalta}}" style="{{cobrarFaltaStyle}}">{{cobrarFaltaTxt}}</button>
        </div>

        <div class="card" style="padding:16px">
          <div style="overflow-x:auto">
            <div style="min-width:680px">
              <div style="display:grid;grid-template-columns:1.6fr 1.3fr 1.1fr 1.1fr 100px;gap:12px;padding:10px 12px;font-size:13px;font-weight:700;color:#5B6F6B;border-bottom:1px solid #D8E2DF">
                <span>Servi\xE7o</span><span>Como cobra</span><span>Valor (R$)</span><span>Detalhe</span><span></span>
              </div>
              <sc-for list="{{svRows}}" as="x" hint-placeholder-count="6">
                <div style="display:grid;grid-template-columns:1.6fr 1.3fr 1.1fr 1.1fr 100px;gap:12px;padding:10px 12px;border-bottom:1px solid #E8EEEC;font-size:15px;align-items:center">
                  <strong>{{x.nome}}</strong>
                  <span>{{x.cob}}</span>
                  <span>
                    <sc-if value="{{x.hasVal}}" hint-placeholder-val="{{true}}"><input class="field" type="text" inputmode="decimal" aria-label="Valor" value="{{x.valor}}" onChange="{{x.onVal}}"></sc-if>
                    <sc-if value="{{x.isExtra}}" hint-placeholder-val="{{false}}"><span style="color:#5B6F6B">definido ao lan\xE7ar</span></sc-if>
                  </span>
                  <span style="color:#5B6F6B">{{x.detalhe}}</span>
                  <button onClick="{{x.remove}}" class="btn">Remover</button>
                </div>
              </sc-for>
            </div>
          </div>
        </div>
        <div style="font-size:14px;color:#5B6F6B;line-height:1.5">Pacotes de hotel: ainda n\xE3o h\xE1 nenhum cadastrado. Quem define quantos pacotes existem e os valores \xE9 o administrador, com <b>+ Novo servi\xE7o</b> e o tipo Pacote de di\xE1rias (hotel).</div>
        <div style="font-size:14px;color:#5B6F6B;line-height:1.5">Na pr\xE9via, os valores desta tela ainda n\xE3o alteram os extratos de exemplo. No sistema real, eles passam a valer nos lan\xE7amentos novos.</div>
      </sc-if>

      <sc-if value="{{isDash}}" hint-placeholder-val="{{false}}">
        <div style="display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:12px">
          <div>
            <h1 style="margin:0;font-size:28px;letter-spacing:-0.02em">Dashboard</h1>
            <p style="margin:4px 0 0;color:#5B6F6B;font-size:15px">Escolha o per\xEDodo para ver o total e o detalhe de tudo que foi lan\xE7ado</p>
          </div>
          <button onClick="{{doExport}}" class="btn">Exportar para Excel / Sheets</button>
        </div>
        <details style="background:#fff;border:1px solid #D8E2DF;border-radius:16px;padding:4px 20px">
          <summary style="cursor:pointer;min-height:44px;display:flex;align-items:center;font-size:15px;font-weight:700;color:#0B5A53">Como usar: Dashboard</summary>
          <ol style="margin:0 0 14px;padding-left:20px;display:flex;flex-direction:column;gap:8px;font-size:15px;line-height:1.5;color:#2A3F3B">
<li>Escolha o per\xEDodo em <b>De</b> e <b>At\xE9</b>, ou use os atalhos: Este m\xEAs, M\xEAs passado, \xDAltimos 90 dias e Tudo.</li>
<li>Os cart\xF5es e gr\xE1ficos mostram o total do per\xEDodo, os tutores atendidos, a m\xE9dia por tutor e o faturamento por servi\xE7o e por m\xEAs.</li>
<li>Em <b>Detalhes do per\xEDodo</b>, veja cada lan\xE7amento (data, tutor, c\xE3o, servi\xE7o e valor) para conferir os n\xFAmeros.</li>
<li>Em <b>Faltas em aula de adestramento</b>, veja quantas aulas foram faltadas no per\xEDodo e quanto isso representa de faturamento que n\xE3o foi cobrado, por c\xE3o.</li>
<li><b>Exportar para Excel / Sheets</b> leva o per\xEDodo escolhido para a planilha. Na pr\xE9via, o bot\xE3o s\xF3 mostra uma mensagem.</li>
          </ol>
        </details>

        <sc-if value="{{hasExMsg}}" hint-placeholder-val="{{false}}">
          <div role="status" style="background:#DDF1EE;color:#0B5A53;border-radius:12px;padding:12px 16px;font-size:14px;font-weight:600">{{exMsg}}</div>
        </sc-if>

        <div class="card" style="padding:18px 20px;display:flex;flex-wrap:wrap;gap:14px;align-items:flex-end">
          <div style="flex:1 1 150px"><label class="lbl" for="dfrom">De</label><input id="dfrom" class="field" type="date" value="{{dfrom}}" onChange="{{onFrom}}"></div>
          <div style="flex:1 1 150px"><label class="lbl" for="dto">At\xE9</label><input id="dto" class="field" type="date" value="{{dto}}" onChange="{{onTo}}"></div>
          <div style="display:flex;flex-wrap:wrap;gap:8px">
            <sc-for list="{{dChips}}" as="c" hint-placeholder-count="4"><button onClick="{{c.pick}}" style="{{c.style}}">{{c.label}}</button></sc-for>
          </div>
        </div>

        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(190px, 1fr));gap:12px">
          <sc-for list="{{kpis}}" as="k" hint-placeholder-count="4">
            <div class="card" style="padding:16px 18px">
              <div style="font-size:13px;font-weight:600;color:#5B6F6B">{{k.label}}</div>
              <div style="font-size:24px;font-weight:800;margin-top:4px">{{k.value}}</div>
            </div>
          </sc-for>
        </div>

        <div style="display:flex;flex-wrap:wrap;gap:20px;align-items:flex-start">
          <div class="card" style="flex:1 1 340px;min-width:0;padding:20px">
            <div style="font-size:18px;font-weight:800">Faturamento por servi\xE7o</div>
            <div style="display:flex;flex-direction:column;gap:12px;margin-top:16px">
              <sc-for list="{{srvBars}}" as="b" hint-placeholder-count="4">
                <div style="display:grid;grid-template-columns:104px 1fr 96px;gap:10px;align-items:center;font-size:14px">
                  <span style="color:#41544F">{{b.label}}</span>
                  <span style="display:block;height:22px"><span style="{{b.barStyle}}"></span></span>
                  <span style="text-align:right;font-weight:700">{{b.value}}</span>
                </div>
              </sc-for>
            </div>
            <sc-if value="{{noLanc}}" hint-placeholder-val="{{false}}"><div style="color:#5B6F6B;font-size:15px">Nenhum lan\xE7amento neste per\xEDodo.</div></sc-if>
          </div>
          <div class="card" style="flex:1 1 340px;min-width:0;padding:20px">
            <div style="font-size:18px;font-weight:800">Faturamento por m\xEAs</div>
            <div style="display:flex;gap:14px;align-items:flex-end;height:190px;margin-top:16px">
              <sc-for list="{{monthBars}}" as="m" hint-placeholder-count="3">
                <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;height:100%;gap:6px;min-width:0">
                  <span style="font-size:13px;font-weight:700">{{m.value}}</span>
                  <span style="{{m.barStyle}}"></span>
                  <span style="font-size:13px;color:#5B6F6B">{{m.label}}</span>
                </div>
              </sc-for>
            </div>
          </div>
        </div>

        <div class="card" style="padding:20px">
          <div style="display:flex;flex-wrap:wrap;justify-content:space-between;gap:8px;align-items:baseline">
            <div style="font-size:18px;font-weight:800">Faltas em aula de adestramento</div>
            <div style="font-size:14px;color:#5B6F6B">{{faltasCount}} \xB7 deixou de faturar {{faltasTotalTxt}}</div>
          </div>
          <div style="font-size:14px;color:#5B6F6B;margin-top:6px">Por padr\xE3o a falta n\xE3o \xE9 cobrada. Este quadro mostra quanto isso representa no per\xEDodo e quais c\xE3es mais faltaram.</div>
          <sc-if value="{{noFaltas}}" hint-placeholder-val="{{false}}"><div style="color:#5B6F6B;font-size:15px;margin-top:12px">Nenhuma falta neste per\xEDodo.</div></sc-if>
          <div style="display:flex;flex-direction:column;margin-top:8px">
            <sc-for list="{{faltaRows}}" as="f" hint-placeholder-count="3">
              <div style="display:grid;grid-template-columns:1fr 90px 110px;gap:10px;padding:10px 4px;border-bottom:1px solid #E8EEEC;font-size:15px;align-items:center">
                <span>{{f.quem}}</span><span style="text-align:right;color:#5B6F6B">{{f.n}}</span><span style="text-align:right;font-weight:700">{{f.v}}</span>
              </div>
            </sc-for>
          </div>
        </div>

        <div class="card" style="padding:20px">
          <div style="display:flex;flex-wrap:wrap;justify-content:space-between;gap:8px;align-items:baseline">
            <div style="font-size:18px;font-weight:800">Detalhes do per\xEDodo</div>
            <div style="font-size:14px;color:#5B6F6B">{{detCount}} lan\xE7amentos \xB7 total {{totalTxt}}</div>
          </div>
          <div style="overflow:auto;max-height:420px;margin-top:12px">
            <div style="min-width:680px">
              <div style="display:grid;grid-template-columns:80px 1.2fr 0.8fr 1fr 1.4fr 50px 100px;gap:10px;padding:10px 8px;font-size:13px;font-weight:700;color:#5B6F6B;border-bottom:1px solid #D8E2DF;position:sticky;top:0;background:#fff">
                <span>Data</span><span>Tutor</span><span>C\xE3o</span><span>Servi\xE7o</span><span>Descri\xE7\xE3o</span><span style="text-align:right">Qtd.</span><span style="text-align:right">Valor</span>
              </div>
              <sc-for list="{{detRows}}" as="d" hint-placeholder-count="6">
                <div style="display:grid;grid-template-columns:80px 1.2fr 0.8fr 1fr 1.4fr 50px 100px;gap:10px;padding:10px 8px;border-bottom:1px solid #E8EEEC;font-size:14px;align-items:center">
                  <span>{{d.data}}</span><span>{{d.tutor}}</span><span>{{d.cao}}</span><span>{{d.servico}}</span><span>{{d.desc}}</span><span style="text-align:right">{{d.qtd}}</span><span style="text-align:right;font-weight:600">{{d.valor}}</span>
                </div>
              </sc-for>
            </div>
          </div>
        </div>
      </sc-if>

      <sc-if value="{{isDuv}}" hint-placeholder-val="{{false}}">
        <div style="display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:12px">
          <div>
            <h1 style="margin:0;font-size:28px;letter-spacing:-0.02em">D\xFAvidas para o administrador</h1>
            <p style="margin:4px 0 0;color:#5B6F6B;font-size:15px">Decis\xF5es que s\xF3 voc\xEA pode tomar. Cada resposta vira regra do sistema.</p>
          </div>
          <div style="display:flex;flex-wrap:wrap;gap:8px">
            <span style="background:#FEF3C7;color:#8A4B08;font-weight:700;padding:8px 14px;border-radius:999px;font-size:14px">{{openCount}} em aberto</span>
            <span style="background:#DDF1EE;color:#0B5A53;font-weight:700;padding:8px 14px;border-radius:999px;font-size:14px">{{doneCount}} respondidas</span>
          </div>
        </div>
        <details style="background:#fff;border:1px solid #D8E2DF;border-radius:16px;padding:4px 20px">
          <summary style="cursor:pointer;min-height:44px;display:flex;align-items:center;font-size:15px;font-weight:700;color:#0B5A53">Como usar: D\xFAvidas</summary>
          <ol style="margin:0 0 14px;padding-left:20px;display:flex;flex-direction:column;gap:8px;font-size:15px;line-height:1.5;color:#2A3F3B">
<li>Cada cart\xE3o \xE9 uma decis\xE3o que s\xF3 o administrador pode tomar. Toque numa resposta r\xE1pida ou escreva a sua e toque em <b>Salvar resposta</b>.</li>
<li>A d\xFAvida respondida vai para o fim da lista. Use <b>Editar resposta</b> para reabrir.</li>
<li>Para registrar uma pergunta nova, escreva no campo <b>Nova d\xFAvida</b>, no fim da tela, e toque em <b>Adicionar d\xFAvida</b>. O menu mostra quantas est\xE3o em aberto.</li>
          </ol>
        </details>


        <div style="display:flex;flex-direction:column;gap:12px">
          <sc-for list="{{duvidas}}" as="d" hint-placeholder-count="4">
            <div class="card" style="padding:18px 20px;display:flex;flex-direction:column;gap:12px">
              <div style="display:flex;flex-wrap:wrap;gap:10px;align-items:flex-start;justify-content:space-between">
                <div style="flex:1 1 320px;font-size:17px;font-weight:700;line-height:1.4">{{d.q}}</div>
                <span style="{{d.badgeStyle}}">{{d.badge}}</span>
              </div>
              <sc-if value="{{d.open}}" hint-placeholder-val="{{true}}">
                <div style="display:flex;flex-wrap:wrap;gap:8px">
                  <sc-for list="{{d.opts}}" as="o" hint-placeholder-count="2">
                    <button onClick="{{o.pick}}" class="btn">{{o.l}}</button>
                  </sc-for>
                </div>
                <div>
                  <label class="lbl" for="{{d.inputId}}">Sua resposta</label>
                  <textarea id="{{d.inputId}}" class="field" style="min-height:76px;padding:10px 12px;resize:vertical" placeholder="Escolha uma op\xE7\xE3o acima ou escreva com suas palavras" value="{{d.draft}}" onChange="{{d.onDraft}}"></textarea>
                </div>
                <div>
                  <button onClick="{{d.save}}" style="min-height:48px;padding:0 22px;border-radius:12px;border:0;background:{{accent}};color:#fff;font-size:16px;font-weight:700">Salvar resposta</button>
                </div>
              </sc-if>
              <sc-if value="{{d.done}}" hint-placeholder-val="{{false}}">
                <div style="background:#F3F6F5;border-radius:12px;padding:12px 16px;font-size:15px"><span class="lbl" style="margin-bottom:2px">Resposta</span>{{d.ans}}</div>
                <div><button onClick="{{d.reopen}}" class="btn">Editar resposta</button></div>
              </sc-if>
            </div>
          </sc-for>
        </div>

        <div class="card" style="padding:18px 20px;display:flex;flex-wrap:wrap;gap:12px;align-items:flex-end">
          <div style="flex:1 1 320px">
            <label class="lbl" for="novaq">Nova d\xFAvida</label>
            <input id="novaq" class="field" type="text" placeholder="Escreva a pergunta que precisa de decis\xE3o" value="{{newQ}}" onChange="{{onNewQ}}">
          </div>
          <button onClick="{{addQ}}" style="min-height:48px;padding:0 22px;border-radius:12px;border:0;background:#14312D;color:#fff;font-size:16px;font-weight:700">Adicionar d\xFAvida</button>
        </div>
      </sc-if>

    </main>
  </div>
</div>
`;Re(document.getElementById("app"),Ve,Ie);})();
