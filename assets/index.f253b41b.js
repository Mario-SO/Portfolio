const te=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerpolicy&&(l.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?l.credentials="include":n.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(n){if(n.ep)return;n.ep=!0;const l=r(n);fetch(n.href,l)}};te();function g(){}function Z(e){return e()}function R(){return Object.create(null)}function z(e){e.forEach(Z)}function ne(e){return typeof e=="function"}function B(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function re(e){return Object.keys(e).length===0}function s(e,t){e.appendChild(t)}function T(e,t,r){e.insertBefore(t,r||null)}function b(e){e.parentNode.removeChild(e)}function d(e){return document.createElement(e)}function j(e){return document.createTextNode(e)}function v(){return j(" ")}function c(e,t,r){r==null?e.removeAttribute(t):e.getAttribute(t)!==r&&e.setAttribute(t,r)}function ie(e){return Array.from(e.childNodes)}function q(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let X;function S(e){X=e}const E=[],W=[],C=[],Y=[],oe=Promise.resolve();let K=!1;function le(){K||(K=!0,oe.then(ee))}function V(e){C.push(e)}const G=new Set;let N=0;function ee(){const e=X;do{for(;N<E.length;){const t=E[N];N++,S(t),se(t.$$)}for(S(null),E.length=0,N=0;W.length;)W.pop()();for(let t=0;t<C.length;t+=1){const r=C[t];G.has(r)||(G.add(r),r())}C.length=0}while(E.length);for(;Y.length;)Y.pop()();K=!1,G.clear(),S(e)}function se(e){if(e.fragment!==null){e.update(),z(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(V)}}const P=new Set;let fe;function w(e,t){e&&e.i&&(P.delete(e),e.i(t))}function A(e,t,r,i){if(e&&e.o){if(P.has(e))return;P.add(e),fe.c.push(()=>{P.delete(e),i&&(r&&e.d(1),i())}),e.o(t)}else i&&i()}function L(e){e&&e.c()}function $(e,t,r,i){const{fragment:n,on_mount:l,on_destroy:o,after_update:f}=e.$$;n&&n.m(t,r),i||V(()=>{const m=l.map(Z).filter(ne);o?o.push(...m):z(m),e.$$.on_mount=[]}),f.forEach(V)}function x(e,t){const r=e.$$;r.fragment!==null&&(z(r.on_destroy),r.fragment&&r.fragment.d(t),r.on_destroy=r.fragment=null,r.ctx=[])}function ue(e,t){e.$$.dirty[0]===-1&&(E.push(e),le(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function F(e,t,r,i,n,l,o,f=[-1]){const m=X;S(e);const u=e.$$={fragment:null,ctx:null,props:l,update:g,not_equal:n,bound:R(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(m?m.$$.context:[])),callbacks:R(),dirty:f,skip_bound:!1,root:t.target||m.$$.root};o&&o(u.root);let _=!1;if(u.ctx=r?r(e,t.props||{},(h,p,...O)=>{const y=O.length?O[0]:p;return u.ctx&&n(u.ctx[h],u.ctx[h]=y)&&(!u.skip_bound&&u.bound[h]&&u.bound[h](y),_&&ue(e,h)),p}):[],u.update(),_=!0,z(u.before_update),u.fragment=i?i(u.ctx):!1,t.target){if(t.hydrate){const h=ie(t.target);u.fragment&&u.fragment.l(h),h.forEach(b)}else u.fragment&&u.fragment.c();t.intro&&w(e.$$.fragment),$(e,t.target,t.anchor,t.customElement),ee()}S(m)}class I{$destroy(){x(this,1),this.$destroy=g}$on(t,r){const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(r),()=>{const n=i.indexOf(r);n!==-1&&i.splice(n,1)}}$set(t){this.$$set&&!re(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ae(e){let t,r,i,n;return{c(){t=d("meta"),r=d("meta"),i=d("meta"),n=d("link"),c(t,"charset","UTF-8"),c(r,"http-equiv","X-UA-Compatible"),c(r,"content","IE=edge"),c(i,"name","viewport"),c(i,"content","width=device-width, initial-scale=1.0"),c(n,"rel","icon"),c(n,"href","data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>\u{1F525}</text></svg>"),document.title="Mario S.O"},m(l,o){s(document.head,t),s(document.head,r),s(document.head,i),s(document.head,n)},p:g,i:g,o:g,d(l){b(t),b(r),b(i),b(n)}}}class ce extends I{constructor(t){super(),F(this,t,null,ae,B,{})}}function me(e){let t,r,i,n,l;return{c(){t=d("div"),r=j(e[2]),i=v(),n=d("a"),l=j(e[1]),c(n,"href",e[0]),c(n,"target","_blank"),c(n,"class","svelte-11gwovt")},m(o,f){T(o,t,f),s(t,r),s(t,i),s(t,n),s(n,l)},p(o,[f]){f&4&&q(r,o[2]),f&2&&q(l,o[1]),f&1&&c(n,"href",o[0])},i:g,o:g,d(o){o&&b(t)}}}function de(e,t,r){let{link:i}=t,{name:n}=t,{emoji:l}=t;return e.$$set=o=>{"link"in o&&r(0,i=o.link),"name"in o&&r(1,n=o.name),"emoji"in o&&r(2,l=o.emoji)},[i,n,l]}class H extends I{constructor(t){super(),F(this,t,de,me,B,{link:0,name:1,emoji:2})}}function he(e){let t,r,i,n,l,o;return{c(){t=d("div"),r=d("span"),i=j(e[2]),n=v(),l=d("a"),o=j(e[1]),c(r,"class","emoji svelte-17uhev"),c(l,"href",e[0]),c(l,"target","_blank"),c(l,"class","svelte-17uhev"),c(t,"class","svelte-17uhev")},m(f,m){T(f,t,m),s(t,r),s(r,i),s(t,n),s(t,l),s(l,o)},p(f,[m]){m&4&&q(i,f[2]),m&2&&q(o,f[1]),m&1&&c(l,"href",f[0])},i:g,o:g,d(f){f&&b(t)}}}function ge(e,t,r){let{link:i}=t,{name:n}=t,{emoji:l}=t;return e.$$set=o=>{"link"in o&&r(0,i=o.link),"name"in o&&r(1,n=o.name),"emoji"in o&&r(2,l=o.emoji)},[i,n,l]}class _e extends I{constructor(t){super(),F(this,t,ge,he,B,{link:0,name:1,emoji:2})}}function pe(e){let t,r,i,n,l,o,f,m,u,_,h,p,O,y,D,k,J,Q,M;return t=new ce({}),_=new H({props:{link:"https://twitter.com/Mario_5O",name:"Twitter",emoji:"\u{1F426}"}}),p=new H({props:{link:"https://github.com/Mario-SO/",name:"Github",emoji:"\u{1F468}\u200D\u{1F4BB}"}}),y=new _e({props:{link:"https://projects.mariodev.xyz",name:"Projects",emoji:"\u{1F449}"}}),k=new H({props:{link:"https://github.com/Mario-SO/Portfolio/blob/main/resources/cv.pdf",name:"CV",emoji:"\u{1F4DD}"}}),{c(){L(t.$$.fragment),r=v(),i=d("main"),n=d("code"),l=j(`mariodev@m5o.slmail.me
		`),o=d("br"),f=v(),m=d("br"),u=v(),L(_.$$.fragment),h=v(),L(p.$$.fragment),O=v(),L(y.$$.fragment),D=v(),L(k.$$.fragment),J=v(),Q=d("br"),c(i,"class","svelte-qs3pc4")},m(a,U){$(t,a,U),T(a,r,U),T(a,i,U),s(i,n),s(n,l),s(n,o),s(n,f),s(n,m),s(n,u),$(_,n,null),s(n,h),$(p,n,null),s(n,O),$(y,n,null),s(n,D),$(k,n,null),s(n,J),s(n,Q),M=!0},p:g,i(a){M||(w(t.$$.fragment,a),w(_.$$.fragment,a),w(p.$$.fragment,a),w(y.$$.fragment,a),w(k.$$.fragment,a),M=!0)},o(a){A(t.$$.fragment,a),A(_.$$.fragment,a),A(p.$$.fragment,a),A(y.$$.fragment,a),A(k.$$.fragment,a),M=!1},d(a){x(t,a),a&&b(r),a&&b(i),x(_),x(p),x(y),x(k)}}}class ye extends I{constructor(t){super(),F(this,t,null,pe,B,{})}}new ye({target:document.body});
