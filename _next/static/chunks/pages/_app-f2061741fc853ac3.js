(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{71:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(8289)}])},638:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){r(e,t,n[t])}))}return e}t.default=function(e,t){var n=a.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};l=e,u=Promise,(null!=u&&"undefined"!==typeof Symbol&&u[Symbol.hasInstance]?u[Symbol.hasInstance](l):l instanceof u)?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=i({},r,e));var l,u;var s=r=i({},r,t);if(s.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(s.suspense)return n(s);r.loadableGenerated&&delete(r=i({},r,r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,o(n,r);delete r.ssr}return n(r)};l(n(7294));var a=l(n(4302));function l(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return delete t.webpack,delete t.modules,e(t)}},6319:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var i=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=i},4302:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,o=(l=n(7294))&&l.__esModule?l:{default:l},u=n(7161),s=n(6319);var c=[],d=[],f=!1;function m(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var p=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var t,n,i;return t=e,(n=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;if(t.loading){if("number"===typeof n.delay)if(0===n.delay)this._state.pastDelay=!0;else{var r=this;this._delay=setTimeout((function(){r._update({pastDelay:!0})}),n.delay)}if("number"===typeof n.timeout){var i=this;this._timeout=setTimeout((function(){i._update({timedOut:!0})}),n.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=a({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}])&&r(t.prototype,n),i&&r(t,i),e}();function h(e){return function(e,t){var n=function(){if(!i){var t=new p(e,r);i={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return i.promise()},r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);r.suspense&&(r.lazy=o.default.lazy(r.loader));var i=null;if(!f&&!r.suspense){var l=r.webpack?r.webpack():r.modules;l&&d.push((function(e){var t=!0,r=!1,i=void 0;try{for(var a,o=l[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var u=a.value;if(-1!==e.indexOf(u))return n()}}catch(s){r=!0,i=s}finally{try{t||null==o.return||o.return()}finally{if(r)throw i}}}))}var c=r.suspense?function(e,t){return o.default.createElement(r.lazy,a({},e,{ref:t}))}:function(e,t){n();var a=o.default.useContext(s.LoadableContext),l=u.useSubscription(i);return o.default.useImperativeHandle(t,(function(){return{retry:i.retry}}),[]),a&&Array.isArray(r.modules)&&r.modules.forEach((function(e){a(e)})),o.default.useMemo((function(){return l.loading||l.error?o.default.createElement(r.loading,{isLoading:l.loading,pastDelay:l.pastDelay,timedOut:l.timedOut,error:l.error,retry:i.retry}):l.loaded?o.default.createElement(function(e){return e&&e.__esModule?e.default:e}(l.loaded),e):null}),[e,l])};return c.preload=function(){return!r.suspense&&n()},c.displayName="LoadableComponent",o.default.forwardRef(c)}(m,e)}function v(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return v(e,t)}))}h.preloadAll=function(){return new Promise((function(e,t){v(c).then(e,t)}))},h.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return f=!0,t()};v(d,e).then(n,n)}))},window.__NEXT_PRELOADREADY=h.preloadReady;var b=h;t.default=b},8289:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ne}});var r=n(5893),i=(n(906),n(740),n(9008)),a=n(5152),l=(n(9694),n(2681),n(9496),n(953),n(1163)),o=n(7294);function u(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`"${e}"`)).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,u),r}var s,c=((s=c||{})[s.None=0]="None",s[s.RenderStrategy=1]="RenderStrategy",s[s.Static=2]="Static",s),d=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(d||{});function f({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:i,visible:a=!0,name:l}){let o=p(t,e);if(a)return m(o,n,r,l);let s=null!=i?i:0;if(2&s){let{static:e=!1,...t}=o;if(e)return m(t,n,r,l)}if(1&s){let{unmount:e=!0,...t}=o;return u(e?0:1,{0:()=>null,1:()=>m({...t,hidden:!0,style:{display:"none"}},n,r,l)})}return m(o,n,r,l)}function m(e,t={},n,r){let{as:i=n,children:a,refName:l="ref",...u}=b(e,["unmount","static"]),s=void 0!==e.ref?{[l]:e.ref}:{},c="function"==typeof a?a(t):a;u.className&&"function"==typeof u.className&&(u.className=u.className(t));let d={};if(t){let e=!1,n=[];for(let[r,i]of Object.entries(t))"boolean"==typeof i&&(e=!0),!0===i&&n.push(r);e&&(d["data-headlessui-state"]=n.join(" "))}if(i===o.Fragment&&Object.keys(v(u)).length>0){if(!(0,o.isValidElement)(c)||Array.isArray(c)&&c.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(u).map((e=>`  - ${e}`)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((e=>`  - ${e}`)).join("\n")].join("\n"));return(0,o.cloneElement)(c,Object.assign({},p(c.props,v(b(u,["ref"]))),d,s,function(...e){return{ref:e.every((e=>null==e))?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(c.ref,s.ref)))}return(0,o.createElement)(i,Object.assign({},b(u,["ref"]),i!==o.Fragment&&s,i!==o.Fragment&&d),c)}function p(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map((e=>[e,void 0]))));for(let r in n)Object.assign(t,{[r](e,...t){let i=n[r];for(let n of i){if((e instanceof Event||(null==e?void 0:e.nativeEvent)instanceof Event)&&e.defaultPrevented)return;n(e,...t)}}});return t}function h(e){var t;return Object.assign((0,o.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function v(e){let t=Object.assign({},e);for(let n in t)void 0===t[n]&&delete t[n];return t}function b(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}let y=(0,o.createContext)(null);y.displayName="OpenClosedContext";var g=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(g||{});function w(){return(0,o.useContext)(y)}function E({value:e,children:t}){return o.createElement(y.Provider,{value:e},t)}let x="undefined"==typeof window||"undefined"==typeof document?o.useEffect:o.useLayoutEffect;function _(){let e=(0,o.useRef)(!1);return x((()=>(e.current=!0,()=>{e.current=!1})),[]),e}function j(e){let t=(0,o.useRef)(e);return x((()=>{t.current=e}),[e]),t}let O={serverHandoffComplete:!1};function T(){let[e,t]=(0,o.useState)(O.serverHandoffComplete);return(0,o.useEffect)((()=>{!0!==e&&t(!0)}),[e]),(0,o.useEffect)((()=>{!1===O.serverHandoffComplete&&(O.serverHandoffComplete=!0)}),[]),e}let C=function(e){let t=j(e);return o.useCallback(((...e)=>t.current(...e)),[t])},k=Symbol();function P(...e){let t=(0,o.useRef)(e);(0,o.useEffect)((()=>{t.current=e}),[e]);let n=C((e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)}));return e.every((e=>null==e||(null==e?void 0:e[k])))?void 0:n}function S(){let e=[],t=[],n={enqueue(e){t.push(e)},addEventListener:(e,t,r,i)=>(e.addEventListener(t,r,i),n.add((()=>e.removeEventListener(t,r,i)))),requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return n.add((()=>cancelAnimationFrame(t)))},nextFrame:(...e)=>n.requestAnimationFrame((()=>n.requestAnimationFrame(...e))),setTimeout(...e){let t=setTimeout(...e);return n.add((()=>clearTimeout(t)))},microTask(...e){let t={current:!0};return function(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch((e=>setTimeout((()=>{throw e}))))}((()=>{t.current&&e[0]()})),n.add((()=>{t.current=!1}))},add:t=>(e.push(t),()=>{let n=e.indexOf(t);if(n>=0){let[t]=e.splice(n,1);t()}}),dispose(){for(let t of e.splice(0))t()},async workQueue(){for(let e of t.splice(0))await e()}};return n}function N(e,...t){e&&t.length>0&&e.classList.add(...t)}function F(e,...t){e&&t.length>0&&e.classList.remove(...t)}var R,L=((R=L||{}).Ended="ended",R.Cancelled="cancelled",R);function A(e,t,n,r){let i=n?"enter":"leave",a=S(),l=void 0!==r?function(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}(r):()=>{};"enter"===i&&(e.removeAttribute("hidden"),e.style.display="");let o=u(i,{enter:()=>t.enter,leave:()=>t.leave}),s=u(i,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),c=u(i,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return F(e,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),N(e,...o,...c),a.nextFrame((()=>{F(e,...c),N(e,...s),function(e,t){let n=S();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:i}=getComputedStyle(e),[a,l]=[r,i].map((e=>{let[t=0]=e.split(",").filter(Boolean).map((e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e))).sort(((e,t)=>t-e));return t}));if(a+l!==0){let r=[];r.push(n.addEventListener(e,"transitionrun",(i=>{i.target===i.currentTarget&&(r.splice(0).forEach((e=>e())),r.push(n.addEventListener(e,"transitionend",(e=>{e.target===e.currentTarget&&(t("ended"),r.splice(0).forEach((e=>e())))})),n.addEventListener(e,"transitioncancel",(e=>{e.target===e.currentTarget&&(t("cancelled"),r.splice(0).forEach((e=>e())))}))))})))}else t("ended");n.add((()=>t("cancelled"))),n.dispose}(e,(n=>("ended"===n&&(F(e,...o),N(e,...t.entered)),l(n))))})),a.dispose}function D(){let[e]=(0,o.useState)(S);return(0,o.useEffect)((()=>()=>e.dispose()),[e]),e}function H({container:e,direction:t,classes:n,onStart:r,onStop:i}){let a=_(),l=D(),o=j(t);x((()=>{let t=S();l.add(t.dispose);let s=e.current;if(s&&"idle"!==o.current&&a.current)return t.dispose(),r.current(o.current),t.add(A(s,n.current,"enter"===o.current,(e=>{t.dispose(),u(e,{[L.Ended](){i.current(o.current)},[L.Cancelled]:()=>{}})}))),t.dispose}),[t])}function M(e=""){return e.split(" ").filter((e=>e.trim().length>1))}let U=(0,o.createContext)(null);U.displayName="TransitionContext";var q,I=((q=I||{}).Visible="visible",q.Hidden="hidden",q);let B=(0,o.createContext)(null);function $(e){return"children"in e?$(e.children):e.current.filter((({el:e})=>null!==e.current)).filter((({state:e})=>"visible"===e)).length>0}function V(e,t){let n=j(e),r=(0,o.useRef)([]),i=_(),a=D(),l=C(((e,t=d.Hidden)=>{let l=r.current.findIndex((({el:t})=>t===e));-1!==l&&(u(t,{[d.Unmount](){r.current.splice(l,1)},[d.Hidden](){r.current[l].state="hidden"}}),a.microTask((()=>{var e;!$(r)&&i.current&&(null==(e=n.current)||e.call(n))})))})),s=C((e=>{let t=r.current.find((({el:t})=>t===e));return t?"visible"!==t.state&&(t.state="visible"):r.current.push({el:e,state:"visible"}),()=>l(e,d.Unmount)})),c=(0,o.useRef)([]),f=(0,o.useRef)(Promise.resolve()),m=(0,o.useRef)({enter:[],leave:[],idle:[]}),p=C(((e,n,r)=>{c.current.splice(0),t&&(t.chains.current[n]=t.chains.current[n].filter((([t])=>t!==e))),null==t||t.chains.current[n].push([e,new Promise((e=>{c.current.push(e)}))]),null==t||t.chains.current[n].push([e,new Promise((e=>{Promise.all(m.current[n].map((([e,t])=>t))).then((()=>e()))}))]),"enter"===n?f.current=f.current.then((()=>null==t?void 0:t.wait.current)).then((()=>r(n))):r(n)})),h=C(((e,t,n)=>{Promise.all(m.current[t].splice(0).map((([e,t])=>t))).then((()=>{var e;null==(e=c.current.shift())||e()})).then((()=>n(t)))}));return(0,o.useMemo)((()=>({children:r,register:s,unregister:l,onStart:p,onStop:h,wait:f,chains:m})),[s,l,r,p,h,m,f])}function z(){}B.displayName="NestingContext";let G=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function X(e){var t;let n={};for(let r of G)n[r]=null!=(t=e[r])?t:z;return n}let Y=c.RenderStrategy,J=h((function(e,t){let{beforeEnter:n,afterEnter:r,beforeLeave:i,afterLeave:a,enter:l,enterFrom:s,enterTo:c,entered:m,leave:p,leaveFrom:h,leaveTo:v,...b}=e,y=(0,o.useRef)(null),w=P(y,t),x=b.unmount?d.Unmount:d.Hidden,{show:_,appear:O,initial:k}=function(){let e=(0,o.useContext)(U);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[S,N]=(0,o.useState)(_?"visible":"hidden"),F=function(){let e=(0,o.useContext)(B);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:R,unregister:L}=F,A=(0,o.useRef)(null);(0,o.useEffect)((()=>R(y)),[R,y]),(0,o.useEffect)((()=>{if(x===d.Hidden&&y.current)return _&&"visible"!==S?void N("visible"):u(S,{hidden:()=>L(y),visible:()=>R(y)})}),[S,y,R,L,_,x]);let D=j({enter:M(l),enterFrom:M(s),enterTo:M(c),entered:M(m),leave:M(p),leaveFrom:M(h),leaveTo:M(v)}),q=function(e){let t=(0,o.useRef)(X(e));return(0,o.useEffect)((()=>{t.current=X(e)}),[e]),t}({beforeEnter:n,afterEnter:r,beforeLeave:i,afterLeave:a}),I=T();(0,o.useEffect)((()=>{if(I&&"visible"===S&&null===y.current)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}),[y,S,I]);let z=k&&!O,G=!I||z||A.current===_?"idle":_?"enter":"leave",J=C((e=>u(e,{enter:()=>q.current.beforeEnter(),leave:()=>q.current.beforeLeave(),idle:()=>{}}))),Q=C((e=>u(e,{enter:()=>q.current.afterEnter(),leave:()=>q.current.afterLeave(),idle:()=>{}}))),W=V((()=>{N("hidden"),L(y)}),F);H({container:y,classes:D,direction:G,onStart:j((e=>{W.onStart(y,e,J)})),onStop:j((e=>{W.onStop(y,e,Q),"leave"===e&&!$(W)&&(N("hidden"),L(y))}))}),(0,o.useEffect)((()=>{!z||(x===d.Hidden?A.current=null:A.current=_)}),[_,z,S]);let K=b,Z={ref:w};return o.createElement(B.Provider,{value:W},o.createElement(E,{value:u(S,{visible:g.Open,hidden:g.Closed})},f({ourProps:Z,theirProps:K,defaultTag:"div",features:Y,visible:"visible"===S,name:"Transition.Child"})))})),Q=h((function(e,t){let{show:n,appear:r=!1,unmount:i,...a}=e,l=(0,o.useRef)(null),s=P(l,t);T();let c=w();if(void 0===n&&null!==c&&(n=u(c,{[g.Open]:!0,[g.Closed]:!1})),![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[d,m]=(0,o.useState)(n?"visible":"hidden"),p=V((()=>{m("hidden")})),[h,v]=(0,o.useState)(!0),b=(0,o.useRef)([n]);x((()=>{!1!==h&&b.current[b.current.length-1]!==n&&(b.current.push(n),v(!1))}),[b,n]);let y=(0,o.useMemo)((()=>({show:n,appear:r,initial:h})),[n,r,h]);(0,o.useEffect)((()=>{if(n)m("visible");else if($(p)){let e=l.current;if(!e)return;let t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&m("hidden")}else m("hidden")}),[n,p]);let E={unmount:i};return o.createElement(B.Provider,{value:p},o.createElement(U.Provider,{value:y},f({ourProps:{...E,as:o.Fragment,children:o.createElement(J,{ref:s,...E,...a})},theirProps:{},defaultTag:o.Fragment,features:Y,visible:"visible"===d,name:"Transition"})))})),W=h((function(e,t){let n=null!==(0,o.useContext)(U),r=null!==w();return o.createElement(o.Fragment,null,!n&&r?o.createElement(Q,{ref:t,...e}):o.createElement(J,{ref:t,...e}))})),K=Object.assign(Q,{Child:W,Root:Q});function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Z(e,t,n[t])}))}return e}var te=(0,a.default)((function(){return n.e(673).then(n.bind(n,7673))}),{loadableGenerated:{webpack:function(){return[7673]}}});var ne=function(e){var t=e.Component,n=e.pageProps,a=(0,o.useState)(!1),u=a[0],s=a[1];return(0,o.useEffect)((function(){setTimeout((function(){s(!0),document.documentElement.style="pointer-events: all;"}),1e3)}),[]),l.default.events.on("routeChangeStart",(function(){s(!1),document.documentElement.style="pointer-events: none;"})),l.default.events.on("routeChangeComplete",(function(){setTimeout((function(){s(!0),document.documentElement.style="pointer-events: all;"}),1e3)})),l.default.events.on("routeChangeError",(function(){setTimeout((function(){s(!0),document.documentElement.style="pointer-events: all;"}),1e3)})),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:"Umut Bayraktar"}),(0,r.jsx)("link",{rel:"shortcut icon",href:"https://media.discordapp.net/attachments/737348411568685066/954506783777493072/Umut_Bayraktar_Icon.png",type:"image/x-icon"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,r.jsx)("link",{href:"https://pro.fontawesome.com/releases/v5.15.4/css/all.css",rel:"stylesheet"})]}),(0,r.jsx)(K,{as:o.Fragment,show:!u,enter:"transform transition duration-[100ms]",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transform duration-[250ms] transition ease-in-out",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,r.jsx)("div",{style:{zIndex:99999},className:"fixed bg-black/75 w-full h-screen flex justify-center items-center pointer-events-none",children:(0,r.jsx)("div",{className:"flex items-center gap-x-6 animate-pulse",children:(0,r.jsxs)("div",{className:"text-center",children:[(0,r.jsx)("p",{className:"text-6xl mb-5 font-semibold",children:"Umut Bayraktar"}),(0,r.jsx)("p",{className:"uppercase text-xl font-semibold text-white",children:(0,r.jsx)("i",{className:"fal fa-spinner-third fa-spin"})})]})})})}),(0,r.jsxs)("main",{className:"border-b-[7px] border-t-[7px] h-full border-neutral-800/50 w-full",children:[(0,r.jsxs)("div",{className:"min-h-screen max-w-screen-lg p-5 w-full md:w-10/12 lg:w-8/12 mx-auto transition-all duration-300",children:[(0,r.jsx)(te,{}),(0,r.jsx)(t,ee({},n))]}),(0,r.jsx)("div",{className:"bg-neutral-800/5",children:(0,r.jsx)("div",{className:"max-w-screen-lg p-5 w-full md:w-10/12 lg:w-8/12 mx-auto transition-all duration-300",children:(0,r.jsxs)("div",{className:"md:flex w-full items-center justify-between",children:[(0,r.jsx)("div",{children:(0,r.jsx)("p",{children:"\u2764\ufe0f Umut Bayraktar"})}),(0,r.jsx)("div",{className:"mt-2 md:mt-0 flex items-center",children:(0,r.jsxs)("a",{href:"https://discord.gg/58e5H4try3",target:"_blank",rel:"noreferrer",className:"w-full md:w-auto bg-neutral-700/5 hover:bg-neutral-700/20 px-4 py-2 rounded-md transition-all duration-200",children:[(0,r.jsx)("i",{className:"fab fa-discord mr-2"}),"Join My Discord"]})})]})})})]})]})}},2681:function(){},9694:function(){},9496:function(){},953:function(){},906:function(){},740:function(){},5152:function(e,t,n){e.exports=n(638)},9008:function(e,t,n){e.exports=n(5443)},1163:function(e,t,n){e.exports=n(387)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(71),t(387)}));var n=e.O();_N_E=n}]);