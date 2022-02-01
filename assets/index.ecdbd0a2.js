var j=Object.defineProperty;var U=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var E=(t,e,s)=>e in t?j(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,d=(t,e)=>{for(var s in e||(e={}))D.call(e,s)&&E(t,s,e[s]);if(U)for(var s of U(e))P.call(e,s)&&E(t,s,e[s]);return t};var T=(t,e,s)=>(E(t,typeof e!="symbol"?e+"":e,s),s);import{a as N,c as q,u as z,d as B,r as F,b as J,o as V,e as f,f as p,g as a,h as m,t as W,p as K,i as Z,j as b,F as Q,k as X,l as Y,m as ee,n as te}from"./vendor.18b15c6e.js";const se=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}};se();var C="/web/assets/LogoLong.298e9c85.png",Fe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:C});function oe(t,e){localStorage.setItem(t,JSON.stringify(e))}function H(t,e=!0){let s=localStorage.getItem(t)||"{}";return e?JSON.parse(s):s}function re(t,e){sessionStorage.setItem(t,JSON.stringify(e))}function ne(t,e=!0){let s=sessionStorage.getItem(t)||"{}";return e?JSON.parse(s):s}var _;(function(t){t.SET_AUTH_STATUS="SET_AUTH_STATUS",t.SET_AUTH_DATA="SET_AUTH_DATA"})(_||(_={}));const ie={[_.SET_AUTH_STATUS]:(t,e)=>t.login=e===void 0?!t.login:e,[_.SET_AUTH_DATA]:(t,e)=>t.userInfo=e};var l;(function(t){t.LOGIN="loginCode",t.GET_INFO="getMe"})(l||(l={}));const ae={[l.GET_INFO]:async({commit:t,state:e},s)=>{let r=e.client;r.init(s);let{data:o}=await r.getMe();return t(_.SET_AUTH_DATA,o),o},[l.LOGIN]:async({commit:t,dispatch:e,state:s},r)=>{let n=await s.client.getToken(r);if(typeof n=="string")return t(_.SET_AUTH_STATUS,!0),e(l.GET_INFO,n),n}};var k;(function(t){t.GET_AUTHENTICATION="isAuthenticated"})(k||(k={}));const ce={[k.GET_AUTHENTICATION]:t=>t.login},le="https://discord.com/api/v9",v=N.create({baseURL:le,timeout:20*1e3,method:"GET"});v.interceptors.request.use(t=>t,t=>Promise.reject(t));v.interceptors.response.use(t=>t,t=>(t.response&&t.response.data?console.error("[Axios Error]",`Code: ${t.response.status}, Message: ${t.response.data.message}`):console.error(t),Promise.reject(t)));let g={invite:{dcServer:"https://discord.com/invite/uzzwFz3yh6",bot:"https://discord.com/oauth2/authorize?client_id=876367835486646282&scope=bot&permissions=268443710"},oauth2:{redirect_uri:"http://localhost:3000/discord-callback",server_callback:"/services/discord-callback"},mainApiUrl:"http://localhost:3001",languages:[{name:"\u7E41\u9AD4\u4E2D\u6587",area:{name:"\u81FA\u7063",icon:"https://www.mediafire.com/convkey/5079/rit79mf35jbjn465g.jpg"},mark:"ZH_TW"}]};class ue{constructor(e,s=!0){T(this,"token");T(this,"Authorization");T(this,"BaseRequest");this.user=s,this.BaseRequest=v,this.init(e,s)}getTokenJson(){return H("token")||ne("token")}savaToken(e,s=!0){(e==null?void 0:e.error)||(s?oe("token",e):re("token",e))}init(e,s=!0){e||(e=this.getTokenJson()),typeof e!="string"&&e&&(this.savaToken(e),e=e==null?void 0:e.access_token),this.token=e,this.Authorization=`${s?"Bearer":"Bot"} ${e}`}async getToken(e){let{data:s}=await N({url:`${g.mainApiUrl}${g.oauth2.server_callback}`,method:"POST",data:{code:e,redirect_uri:g.oauth2.redirect_uri}});return this.savaToken(s),s.access_token?(this.token=s.access_token,s.access_token):s}getMe(){return this.BaseRequest(d({url:"/users/@me"},this.headers))}getGuilds(){return this.BaseRequest(d({url:"/users/@me/guilds"},this.headers))}getGuildChannel(e){return this.BaseRequest(d({url:`/guilds/${e}/channels`},this.headers))}getGuildMembers(e){return this.BaseRequest(d({url:`/guilds/${e}/members`},this.headers))}getGuildRoles(e){return this.BaseRequest(d({url:`/guilds/${e}/roles`},this.headers))}get headers(){return{headers:{Authorization:this.Authorization||""}}}}const de={login:!1,userInfo:void 0,client:new ue},_e={namespaced:!0,mutations:ie,getters:ce,state:de,actions:ae},he={};var A;(function(t){t.getBotInfo="getBotInfo"})(A||(A={}));const fe={[A.getBotInfo]:(t,e)=>t.botInfo=e},pe={botInfo:void 0};var $;(function(t){t.loadBotInfo="loadBotInfo"})($||($={}));const me={[$.loadBotInfo]:async({commit:t})=>{let{data:e}=await v({baseURL:g.mainApiUrl,url:"/api/discord/botInfo"});t(A.getBotInfo,e)}},ge={namespaced:!0,mutations:fe,getters:he,state:pe,actions:me};var h;(function(t){t.AUTH="auth",t.CLIENT="client"})(h||(h={}));const Te=q({modules:{[h.AUTH]:_e,[h.CLIENT]:ge}}),R=Symbol("vue-store");function ve(){return z(R)}var G=(t,e)=>{const s=t.__vccOpts||t;for(const[r,o]of e)s[r]=o;return s};const S=t=>(K("data-v-daa8494e"),t=t(),Z(),t),Ae={class:"flex flex-item-center"},Se=["href"],ye=S(()=>a("img",{src:C,alt:""},null,-1)),Ie=S(()=>a("p",null,"Avery",-1)),Ee=[ye,Ie],be={class:"menu"},ke={class:"ul flex flex-item-center"},$e={class:"user flex flex-item-center"},Le=["src"],we=["textContent"],xe=S(()=>a("i",{class:"arrow"},null,-1)),Oe=S(()=>a("div",{class:"licks"},null,-1)),Ue=B({setup(t){const e=ve(),s=F(null),r=J(()=>e.state.auth.userInfo),o="/web/",n=()=>window.open(`https://discord.com/api/oauth2/authorize?client_id=863676847731376170&redirect_uri=${g.oauth2.redirect_uri}&response_type=code&scope=identify+guilds+email`,"","width=500,height=620"),i=()=>s.value.classList.toggle("down"),y=c=>{e.dispatch(`${[h.AUTH]}/${l.LOGIN}`,c)},I=c=>{e.dispatch(`${h.AUTH}/${l.GET_INFO}`,c)};return V(()=>{let c=H("token");(c==null?void 0:c.access_token)&&I(c),addEventListener("get_dc_code",async w=>{var x,O;let u=w;((x=u==null?void 0:u.detail)==null?void 0:x.code)&&y((O=u==null?void 0:u.detail)==null?void 0:O.code)})}),(c,w)=>(f(),p("header",Ae,[a("a",{href:m(o),class:"logo flex flex-item-center"},Ee,8,Se),a("div",be,[a("div",ke,[a("div",$e,[m(r)?(f(),p("div",{key:0,class:"flex flex-item-center is-login",onClick:i,ref_key:"userEl",ref:s},[a("img",{src:`https://cdn.discordapp.com/avatars/${m(r).id}/${m(r).avatar}.png`,class:"user-icon",width:"45",alt:""},null,8,Le),a("span",{class:"user-name",textContent:W(m(r).username)},null,8,we),xe,Oe],512)):(f(),p("div",{key:1,class:"login",onClick:n},"\u767B\u5165"))])])])]))}});var Ne=G(Ue,[["__scopeId","data-v-daa8494e"]]);const Be={};function Ce(t,e){return f(),p("footer")}var He=G(Be,[["render",Ce]]);const Re={class:"wrapper"},Ge=B({setup(t){return(e,s)=>{const r=X("router-view");return f(),p(Q,null,[b(Ne),a("div",Re,[b(r)]),b(He)],64)}}}),Me="modulepreload",M={},je="/web/",L=function(e,s){return!s||s.length===0?e():Promise.all(s.map(r=>{if(r=`${je}${r}`,r in M)return;M[r]=!0;const o=r.endsWith(".css"),n=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${n}`))return;const i=document.createElement("link");if(i.rel=o?"stylesheet":Me,o||(i.as="script",i.crossOrigin=""),i.href=r,document.head.appendChild(i),o)return new Promise((y,I)=>{i.addEventListener("load",y),i.addEventListener("error",I)})})).then(()=>e())},De=[{name:"Home",path:"/",component:()=>L(()=>import("./Home.3d680de0.js"),["assets/Home.3d680de0.js","assets/Home.b4dd16b9.css","assets/vendor.18b15c6e.js"])},{name:"dashboard",path:"/dashboard",component:()=>L(()=>import("./index.10c4377a.js"),["assets/index.10c4377a.js","assets/index.9bc1a98b.css","assets/vendor.18b15c6e.js"])},{name:"discordCallback",path:"/discord-callback",component:()=>L(()=>import("./discord.9e4f0c8e.js"),["assets/discord.9e4f0c8e.js","assets/vendor.18b15c6e.js"])}],Pe=Y({history:ee("/web/"),routes:De});te(Ge).use(Te,R).use(Pe).mount("#app");export{$ as A,h as M,Fe as _,G as a,C as b,g as c,ve as u};