import{c as r,o as l,a as t,b as o,w as a,I as i,_ as u}from"./m7XX1WG5.js";import{_ as m}from"./BoxhHWeB.js";import{u as _}from"./BoImmzC1.js";import{_ as x}from"./DlAUqK2U.js";import{u as f}from"./CVEZeFfC.js";const g={class:"w-64 bg-white shadow-md h-screen flex flex-col p-6"},b={class:"space-y-4"},h={__name:"SidebarDoctor",setup(c){const{logout:n}=_();return(d,s)=>{const e=m;return l(),r("aside",g,[t("div",null,[s[5]||(s[5]=t("h2",{class:"text-2xl font-bold mb-6"},"Panel Lekarza",-1)),t("nav",null,[t("ul",b,[t("li",null,[o(e,{to:"/doctor/dashboard",class:"flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 transition"},{default:a(()=>s[1]||(s[1]=[t("span",{class:"material-icons"},"dashboard",-1),t("span",null,"Pulpit",-1)])),_:1})]),t("li",null,[o(e,{to:"/doctor/patients",class:"flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 transition"},{default:a(()=>s[2]||(s[2]=[t("span",{class:"material-icons"},"groups",-1),t("span",null,"Pacjenci",-1)])),_:1})]),t("li",null,[o(e,{to:"/doctor/analysis",class:"flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 transition"},{default:a(()=>s[3]||(s[3]=[t("span",{class:"material-icons"},"bar_chart",-1),t("span",null,"Analiza",-1)])),_:1})]),t("li",null,[o(e,{to:"/doctor/create-patient",class:"flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 transition"},{default:a(()=>s[4]||(s[4]=[t("span",{class:"material-icons"},"bar_chart",-1),t("span",null,"Create patient",-1)])),_:1})])])])]),t("button",{onClick:s[0]||(s[0]=(...p)=>i(n)&&i(n)(...p)),class:"mt-auto flex items-center space-x-2 p-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition"},s[6]||(s[6]=[t("span",{class:"material-icons"},"logout",-1),t("span",null,"Wyloguj się",-1)]))])}}},v=x(h,[["__scopeId","data-v-c724bcfc"]]),y={key:0},k={class:"flex h-screen bg-[#F5F5F5]"},w={class:"flex-1 p-6 overflow-y-auto"},C={key:1,class:"flex justify-center items-center h-screen"},z={__name:"doctor",setup(c){const n=f("isChecking",()=>!0);return(d,s)=>{const e=u;return i(n)?(l(),r("div",C,s[0]||(s[0]=[t("p",{class:"text-gray-600 text-xl"},"Sprawdzanie uprawnień...",-1)]))):(l(),r("div",y,[t("div",k,[o(v),t("main",w,[o(e)])])]))}}};export{z as default};
