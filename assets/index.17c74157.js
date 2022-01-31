var N=Object.defineProperty;var A=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var g=(e,t,s)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,c=(e,t)=>{for(var s in t||(t={}))H.call(t,s)&&g(e,s,t[s]);if(A)for(var s of A(t))B.call(t,s)&&g(e,s,t[s]);return e};var p=(e,t,s)=>(g(e,typeof t!="symbol"?t+"":t,s),s);import{a as y,c as C,u as G,d as E,r as R,b as x,e as q,o as d,f as _,g as a,t as P,p as M,h as j,i as m,F as D,j as F,k as J,l as z,m as V}from"./vendor.b9ffea17.js";const W=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}};W();function K(e,t){localStorage.setItem(e,JSON.stringify(t))}function k(e,t=!0){let s=localStorage.getItem(e)||"{}";return t?JSON.parse(s):s}function Q(e,t){sessionStorage.setItem(e,JSON.stringify(t))}function X(e,t=!0){let s=sessionStorage.getItem(e)||"{}";return t?JSON.parse(s):s}var u;(function(e){e.SET_AUTH_STATUS="SET_AUTH_STATUS",e.SET_AUTH_DATA="SET_AUTH_DATA"})(u||(u={}));const Y={[u.SET_AUTH_STATUS]:(e,t)=>e.login=t===void 0?!e.login:t,[u.SET_AUTH_DATA]:(e,t)=>e.userInfo=t},Z="https://discord.com/api/v9",T=y.create({baseURL:Z,timeout:20*1e3,method:"GET"});T.interceptors.request.use(e=>e,e=>Promise.reject(e));T.interceptors.response.use(e=>e,e=>(e.response&&e.response.data?console.error("[Axios Error]",`Code: ${e.response.status}, Message: ${e.response.data.message}`):console.error(e),Promise.reject(e)));class ${constructor(t,s=!0){p(this,"token");p(this,"Authorization");p(this,"BaseRequest");this.user=s,this.BaseRequest=T,this.init(t,s)}getTokenJson(){return k("token")||X("token")}savaToken(t,s=!0){(t==null?void 0:t.error)||(s?K("token",t):Q("token",t))}init(t,s=!0){t||(t=this.getTokenJson()),typeof t!="string"&&t&&(this.savaToken(t),t=t==null?void 0:t.access_token),this.token=t,this.Authorization=`${s?"Bearer":"Bot"} ${t}`}async getToken(t){let{data:s}=await y({url:"http://localhost:3001/services/discord-callback",method:"POST",data:{code:t,redirect_uri:"http://localhost:3000/discord-callback"}});return this.savaToken(s),s.access_token?(this.token=s.access_token,s.access_token):s}getMe(){return this.BaseRequest(c({url:"/users/@me"},this.headers))}getGuilds(){return this.BaseRequest(c({url:"/users/@me/guilds"},this.headers))}getGuildChannel(t){return this.BaseRequest(c({url:`/guilds/${t}/channels`},this.headers))}getGuildMembers(t){return this.BaseRequest(c({url:`/guilds/${t}/members`},this.headers))}getGuildRoles(t){return this.BaseRequest(c({url:`/guilds/${t}/roles`},this.headers))}get headers(){return{headers:{Authorization:this.Authorization||""}}}}Object.assign(window,{DiscordApi:$});const v=new $;var l;(function(e){e.LOGIN="loginCode",e.GET_INFO="getMe"})(l||(l={}));const ee={[l.GET_INFO]:async({commit:e},t)=>{v.init(t);let{data:s}=await v.getMe();return e(u.SET_AUTH_DATA,s),s},[l.LOGIN]:async({commit:e,dispatch:t},s)=>{let r=await v.getToken(s);if(typeof r=="string")return e(u.SET_AUTH_STATUS,!0),t(l.GET_INFO,r),r}};var S;(function(e){e.GET_AUTHENTICATION="isAuthenticated"})(S||(S={}));const te={[S.GET_AUTHENTICATION]:e=>e.login},se={login:!1,userInfo:void 0},oe={namespaced:!0,mutations:Y,getters:te,state:se,actions:ee};var h;(function(e){e.AUTH="auth"})(h||(h={}));const re=C({modules:{[h.AUTH]:oe}}),I=Symbol("vue-store");function ne(){return G(I)}var ie="/web/assets/LogoLong.298e9c85.png";var L=(e,t)=>{const s=e.__vccOpts||e;for(const[r,o]of t)s[r]=o;return s};const ae=E({methods:{dcLogin(e){this.store.dispatch(`${[h.AUTH]}/${l.LOGIN}`,e)},getMe(e){this.store.dispatch(`${h.AUTH}/${l.GET_INFO}`,e)}},mounted(){let e=k("token");(e==null?void 0:e.access_token)&&this.getMe(e),addEventListener("get_dc_code",async t=>{var r,o;let s=t;((r=s==null?void 0:s.detail)==null?void 0:r.code)&&this.dcLogin((o=s==null?void 0:s.detail)==null?void 0:o.code)})},setup(){const e=ne(),t=R(null),s=x(()=>e.state.auth.userInfo);q(c({},e.state.auth.userInfo));const r="/web/",o=()=>window.open("https://discord.com/api/oauth2/authorize?client_id=863676847731376170&redirect_uri=http://localhost:3000/discord-callback&response_type=code&scope=identify+guilds+email","","width=500,height=620"),n=()=>t.value.classList.toggle("down");return Object.assign(window,{store:e}),{login:o,userEl:t,dc_data:s,BASE_URL:r,openLicks:n,store:e}}}),f=e=>(M("data-v-cce3e844"),e=e(),j(),e),ce={class:"flex flex-item-center"},le=["href"],ue=f(()=>a("img",{src:ie,alt:""},null,-1)),de=f(()=>a("p",null,"Avery",-1)),_e=[ue,de],he={class:"menu"},pe={class:"ul flex flex-item-center"},fe={class:"user flex flex-item-center"},ge=["src"],me=["textContent"],Te=f(()=>a("i",{class:"arrow"},null,-1)),ve=f(()=>a("div",{class:"licks"},null,-1));function Se(e,t,s,r,o,n){return d(),_("header",ce,[a("a",{href:e.BASE_URL,class:"logo flex flex-item-center"},_e,8,le),a("div",he,[a("div",pe,[a("div",fe,[e.dc_data?(d(),_("div",{key:0,class:"flex flex-item-center is-login",onClick:t[0]||(t[0]=(...i)=>e.openLicks&&e.openLicks(...i)),ref:"userEl"},[a("img",{src:`https://cdn.discordapp.com/avatars/${e.dc_data.id}/${e.dc_data.avatar}.png`,class:"user-icon",width:"45",alt:""},null,8,ge),a("span",{class:"user-name",textContent:P(e.dc_data.username)},null,8,me),Te,ve],512)):(d(),_("div",{key:1,class:"login",onClick:t[1]||(t[1]=(...i)=>e.login&&e.login(...i))},"\u767B\u5165"))])])])])}var Ae=L(ae,[["render",Se],["__scopeId","data-v-cce3e844"]]);const ye={};function Ee(e,t){return d(),_("footer")}var ke=L(ye,[["render",Ee]]);const $e={class:"wrapper"},Ie=E({setup(e){return(t,s)=>{const r=F("router-view");return d(),_(D,null,[m(Ae),a("div",$e,[m(r)]),m(ke)],64)}}}),Le="modulepreload",b={},be="/web/",w=function(t,s){return!s||s.length===0?t():Promise.all(s.map(r=>{if(r=`${be}${r}`,r in b)return;b[r]=!0;const o=r.endsWith(".css"),n=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${n}`))return;const i=document.createElement("link");if(i.rel=o?"stylesheet":Le,o||(i.as="script",i.crossOrigin=""),i.href=r,document.head.appendChild(i),o)return new Promise((O,U)=>{i.addEventListener("load",O),i.addEventListener("error",U)})})).then(()=>t())},we=[{name:"Home",path:"/",component:()=>w(()=>import("./Home.7d7783bf.js"),["assets/Home.7d7783bf.js","assets/Home.2bd0fa25.css","assets/vendor.b9ffea17.js"])},{name:"discordCallback",path:"/discord-callback",component:()=>w(()=>import("./discord.fb6b4229.js"),["assets/discord.fb6b4229.js","assets/vendor.b9ffea17.js"])}],Oe=J({history:z("/web/"),routes:we});V(Ie).use(re,I).use(Oe).mount("#app");export{L as _,ie as a};
