import{_ as p,u as g,M as v}from"./index.1bcc606b.js";import{d as m,h as e,e as n,f as o,g as c,t as i,s as x,v as f,r as h,b as y,F as C,w as k,x as b}from"./vendor.6b1bc996.js";const $={key:0,class:"guild"},B=["src","alt"],A=["textContent"],E={class:"info"},F=["textContent"],S=["textContent"],j=m({props:{data:null},setup(d){const s=d,t=s.data;let r=s.data.permissions,a=s.data.owner?"\u64C1\u6709\u8005":(32&r)==32?"\u6A5F\u5668\u4EBA\u7BA1\u7406\u54E1":!1,l=`https://cdn.discordapp.com/icons/${t.id}/${t.icon}.png`;return(u,_)=>e(a)?(n(),o("div",$,[c("div",{class:"icon",style:x({background:e(t).icon?`url('${e(l)}') center / cover no-repeat`:"#1f2129"})},[e(t).icon?(n(),o("img",{key:0,src:e(l),alt:`${e(t).name} \u7684 log`,class:"log"},null,8,B)):(n(),o("div",{key:1,class:"log",textContent:i(e(t).name.slice(0,3))},null,8,A))],4),c("div",E,[c("p",{class:"guild-name",textContent:i(e(t).name)},null,8,F),c("p",{class:"guild-permission",textContent:i(e(a))},null,8,S)])])):f("",!0)}});var w=p(j,[["__scopeId","data-v-5c1b0ccc"]]);const G={class:"dashboard"},I={class:"guilds"},M=m({setup(d){let s=h([]);const t=g();return y(()=>t.state[v.AUTH].client).value.getGuilds().then(a=>s.value=a.data),(a,l)=>(n(),o("div",G,[c("div",I,[(n(!0),o(C,null,k(e(s),(u,_)=>(n(),b(w,{key:_,data:u,class:"guild"},null,8,["data"]))),128))])]))}});var U=p(M,[["__scopeId","data-v-6374cf12"]]);export{U as default};
