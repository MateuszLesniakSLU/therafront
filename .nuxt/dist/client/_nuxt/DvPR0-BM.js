import{n as R,A as $,r as E,B as ee,f as B,k as te,C as ne,D as oe,E as se,G as U,H as O,I as ae,u as re,c as v,a as o,p as H,d as F,t as h,F as C,x as D,q as A,v as V,s as le,o as y}from"./m7XX1WG5.js";import{a as M}from"./DW_MHI2K.js";function ie(e){return ne()?(oe(e),!0):!1}const ue=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const de=Object.prototype.toString,ce=e=>de.call(e)==="[object Object]";function pe(e,s){function n(...i){return new Promise((c,u)=>{Promise.resolve(e(()=>s.apply(this,i),{fn:s,thisArg:this,args:i})).then(c).catch(u)})}return n}const K=e=>e();function fe(e=K){const s=E(!0);function n(){s.value=!1}function i(){s.value=!0}const c=(...u)=>{s.value&&e(...u)};return{isActive:ee(s),pause:n,resume:i,eventFilter:c}}function ve(e){return te()}function _(e){return Array.isArray(e)?e:[e]}function ye(e,s,n={}){const{eventFilter:i=K,...c}=n;return B(e,pe(i,s),c)}function me(e,s,n={}){const{eventFilter:i,...c}=n,{eventFilter:u,pause:x,resume:r,isActive:d}=fe(i);return{stop:ye(e,s,{...c,eventFilter:u}),pause:x,resume:r,isActive:d}}function we(e,s=!0,n){ve()?R(e,n):s?e():$(e)}function ge(e,s,n){return B(e,s,{...n,immediate:!0})}const T=ue?window:void 0;function be(e){var s;const n=O(e);return(s=n==null?void 0:n.$el)!=null?s:n}function q(...e){const s=[],n=()=>{s.forEach(r=>r()),s.length=0},i=(r,d,p,S)=>(r.addEventListener(d,p,S),()=>r.removeEventListener(d,p,S)),c=U(()=>{const r=_(O(e[0])).filter(d=>d!=null);return r.every(d=>typeof d!="string")?r:void 0}),u=ge(()=>{var r,d;return[(d=(r=c.value)==null?void 0:r.map(p=>be(p)))!=null?d:[T].filter(p=>p!=null),_(O(c.value?e[1]:e[0])),_(ae(c.value?e[2]:e[1])),O(c.value?e[3]:e[2])]},([r,d,p,S])=>{if(n(),!(r!=null&&r.length)||!(d!=null&&d.length)||!(p!=null&&p.length))return;const z=ce(S)?{...S}:S;s.push(...r.flatMap(g=>d.flatMap(t=>p.map(a=>i(g,t,a,z)))))},{flush:"post"}),x=()=>{u(),n()};return ie(n),x}const W=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},I="__vueuse_ssr_handlers__",he=Se();function Se(){return I in W||(W[I]=W[I]||{}),W[I]}function ze(e,s){return he[e]||s}function xe(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const ke={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},G="vueuse-storage";function Ee(e,s,n,i={}){var c;const{flush:u="pre",deep:x=!0,listenToStorageChanges:r=!0,writeDefaults:d=!0,mergeDefaults:p=!1,shallow:S,window:z=T,eventFilter:g,onError:t=l=>{console.error(l)},initOnMounted:a}=i,m=(S?se:E)(s),w=U(()=>O(e));if(!n)try{n=ze("getDefaultStorage",()=>{var l;return(l=T)==null?void 0:l.localStorage})()}catch(l){t(l)}if(!n)return m;const k=O(s),P=xe(k),j=(c=i.serializer)!=null?c:ke[P],{pause:Z,resume:J}=me(m,()=>Q(m.value),{flush:u,deep:x,eventFilter:g});B(w,()=>N(),{flush:u}),z&&r&&we(()=>{n instanceof Storage?q(z,"storage",N,{passive:!0}):q(z,G,Y),a&&N()}),a||N();function L(l,f){if(z){const b={key:w.value,oldValue:l,newValue:f,storageArea:n};z.dispatchEvent(n instanceof Storage?new StorageEvent("storage",b):new CustomEvent(G,{detail:b}))}}function Q(l){try{const f=n.getItem(w.value);if(l==null)L(f,null),n.removeItem(w.value);else{const b=j.write(l);f!==b&&(n.setItem(w.value,b),L(f,b))}}catch(f){t(f)}}function X(l){const f=l?l.newValue:n.getItem(w.value);if(f==null)return d&&k!=null&&n.setItem(w.value,j.write(k)),k;if(!l&&p){const b=j.read(f);return typeof p=="function"?p(b,k):P==="object"&&!Array.isArray(b)?{...k,...b}:b}else return typeof f!="string"?f:j.read(f)}function N(l){if(!(l&&l.storageArea!==n)){if(l&&l.key==null){m.value=k;return}if(!(l&&l.key!==w.value)){Z();try{(l==null?void 0:l.newValue)!==j.write(m.value)&&(m.value=X(l))}catch(f){t(f)}finally{l?$(J):J()}}}}function Y(l){N(l.detail)}return m}function Oe(e,s,n={}){const{window:i=T}=n;return Ee(e,s,i==null?void 0:i.localStorage,n)}const je={class:"p-4"},Ne={class:"mb-4"},Fe={key:0},Ce={class:"list-disc pl-6"},De={key:1},Ae={key:0,class:"bg-white p-4 rounded shadow mb-4"},Ve={class:"text-xl font-bold mb-2"},We={class:"mb-2"},Ie={class:"mb-2"},Te={class:"mb-2"},Me=["onUpdate:modelValue"],_e=["onUpdate:modelValue"],Be={key:0,class:"mt-2 text-red-500"},Ue={class:"bg-white p-4 rounded shadow"},Pe={key:0},Je={key:1,class:"space-y-4"},Le={class:"list-disc pl-6"},Ge=re({__name:"diary",setup(e){const s=E([]),n=E(!1),i=E(""),c=Oe("patientId",""),u=E({patientId:c,positiveEvents:"",negativeEvents:"",eventsImpact:[]});async function x(){try{const g=await M.get("http://localhost:3000/diary",{params:{patientId:c}});s.value=g.data}catch(g){console.error("Błąd podczas pobierania wpisów dziennika:",g)}}const r=U(()=>{const g=new Date().toISOString().slice(0,10);return s.value.find(t=>t.date===g)});function d(){u.value.eventsImpact.push({description:"",rating:5})}function p(){n.value=!n.value,n.value&&r.value&&(u.value={...r.value})}function S(){n.value=!1,i.value=""}async function z(){var g,t;try{let a;r.value?a=await M.patch(`http://localhost:3000/diary/${r.value.id}`,u.value):a=await M.post("http://localhost:3000/diary",u.value),console.log("Wpis zapisany:",a.data),await x(),n.value=!1}catch(a){i.value=((t=(g=a.response)==null?void 0:g.data)==null?void 0:t.message)||"Błąd podczas zapisywania wpisu",console.error("Błąd podczas zapisywania wpisu:",a)}}return R(async()=>{await x()}),(g,t)=>(y(),v("div",je,[t[17]||(t[17]=o("h1",{class:"text-2xl font-bold mb-4"},"Mój Dziennik",-1)),o("div",Ne,[r.value?(y(),v("div",Fe,[t[5]||(t[5]=o("h2",{class:"text-xl font-bold"},"Twój dzisiejszy wpis",-1)),o("p",null,[t[2]||(t[2]=o("strong",null,"Pozytywne wydarzenia:",-1)),F(" "+h(r.value.positiveEvents),1)]),o("p",null,[t[3]||(t[3]=o("strong",null,"Negatywne wydarzenia:",-1)),F(" "+h(r.value.negativeEvents),1)]),o("div",null,[t[4]||(t[4]=o("h3",{class:"font-semibold"},"Wpływ wydarzeń:",-1)),o("ul",Ce,[(y(!0),v(C,null,D(r.value.eventsImpact,(a,m)=>(y(),v("li",{key:m},h(a.description)+" - Ocena: "+h(a.rating),1))),128))])]),o("button",{onClick:p,class:"mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"}," Edytuj wpis ")])):(y(),v("div",De,[t[6]||(t[6]=o("p",null,"Nie utworzyłeś jeszcze dzisiejszego wpisu.",-1)),o("button",{onClick:p,class:"mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"}," Utwórz wpis ")]))]),n.value?(y(),v("div",Ae,[o("h2",Ve,h(r.value?"Edytuj wpis":"Utwórz wpis"),1),o("form",{onSubmit:le(z,["prevent"])},[o("div",We,[t[7]||(t[7]=o("label",{class:"block text-sm font-medium text-gray-700"},"Pozytywne wydarzenia",-1)),A(o("textarea",{"onUpdate:modelValue":t[0]||(t[0]=a=>u.value.positiveEvents=a),required:"",class:"w-full border rounded p-2"},null,512),[[V,u.value.positiveEvents]])]),o("div",Ie,[t[8]||(t[8]=o("label",{class:"block text-sm font-medium text-gray-700"},"Negatywne wydarzenia",-1)),A(o("textarea",{"onUpdate:modelValue":t[1]||(t[1]=a=>u.value.negativeEvents=a),required:"",class:"w-full border rounded p-2"},null,512),[[V,u.value.negativeEvents]])]),o("div",Te,[t[9]||(t[9]=o("label",{class:"block text-sm font-medium text-gray-700"},"Wpływ wydarzeń na nastrój",-1)),(y(!0),v(C,null,D(u.value.eventsImpact,(a,m)=>(y(),v("div",{key:m,class:"flex flex-col mb-2"},[A(o("input",{"onUpdate:modelValue":w=>a.description=w,placeholder:"Opis wydarzenia",class:"border rounded p-1 mb-1"},null,8,Me),[[V,a.description]]),A(o("input",{"onUpdate:modelValue":w=>a.rating=w,type:"number",min:"1",max:"10",placeholder:"Ocena (1-10)",class:"border rounded p-1"},null,8,_e),[[V,a.rating,void 0,{number:!0}]])]))),128)),o("button",{type:"button",onClick:d,class:"mt-1 text-sm text-blue-500"},"Dodaj wydarzenie")]),t[10]||(t[10]=o("button",{type:"submit",class:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"}," Zapisz wpis ",-1)),o("button",{type:"button",onClick:S,class:"ml-2 px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"}," Anuluj ")],32),i.value?(y(),v("p",Be,h(i.value),1)):H("",!0)])):H("",!0),o("div",Ue,[t[16]||(t[16]=o("h2",{class:"text-xl font-bold mb-2"},"Historia wpisów",-1)),s.value.length===0?(y(),v("div",Pe,t[11]||(t[11]=[o("p",null,"Brak zapisów.",-1)]))):(y(),v("ul",Je,[(y(!0),v(C,null,D(s.value,a=>(y(),v("li",{key:a.id,class:"border p-2 rounded"},[o("p",null,[t[12]||(t[12]=o("strong",null,"Data:",-1)),F(" "+h(a.date),1)]),o("p",null,[t[13]||(t[13]=o("strong",null,"Pozytywne wydarzenia:",-1)),F(" "+h(a.positiveEvents),1)]),o("p",null,[t[14]||(t[14]=o("strong",null,"Negatywne wydarzenia:",-1)),F(" "+h(a.negativeEvents),1)]),o("div",null,[t[15]||(t[15]=o("strong",null,"Wpływ wydarzeń:",-1)),o("ul",Le,[(y(!0),v(C,null,D(a.eventsImpact,(m,w)=>(y(),v("li",{key:w},h(m.description)+" (Ocena: "+h(m.rating)+") ",1))),128))])])]))),128))]))])]))}});export{Ge as default};
