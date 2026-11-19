var Yt={data:""},en=t=>{if(typeof window=="object"){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||Yt};var tn=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,nn=/\/\*[^]*?\*\/|  +/g,nt=/\n+/g,G=(t,e)=>{let n="",i="",r="";for(let o in t){let s=t[o];o[0]=="@"?o[1]=="i"?n=o+" "+s+";":i+=o[1]=="f"?G(s,o):o+"{"+G(s,o[1]=="k"?"":e)+"}":typeof s=="object"?i+=G(s,e?e.replace(/([^,])+/g,a=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,u=>/&/.test(u)?u.replace(/&/g,a):a?a+" "+u:u)):o):s!=null&&(o=o[1]=="-"?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=G.p?G.p(o,s):o+":"+s+";")}return n+(e&&r?e+"{"+r+"}":r)+i},U={},rt=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+rt(t[n]);return e}return t},rn=(t,e,n,i,r)=>{let o=rt(t),s=U[o]||(U[o]=(u=>{let l=0,p=11;for(;l<u.length;)p=101*p+u.charCodeAt(l++)>>>0;return"go"+p})(o));if(!U[s]){let u=o!==t?t:(l=>{let p,c,h=[{}];for(;p=tn.exec(l.replace(nn,""));)p[4]?h.shift():p[3]?(c=p[3].replace(nt," ").trim(),h.unshift(h[0][c]=h[0][c]||{})):h[0][p[1]]=p[2].replace(nt," ").trim();return h[0]})(t);U[s]=G(r?{["@keyframes "+s]:u}:u,n?"":"."+s)}let a=n&&U.g;return n&&(U.g=U[s]),((u,l,p,c)=>{c?l.data=l.data.replace(c,u):l.data.indexOf(u)===-1&&(l.data=p?u+l.data:l.data+u)})(U[s],e,i,a),s},on=(t,e,n)=>t.reduce((i,r,o)=>{let s=e[o];if(s&&s.call){let a=s(n),u=a&&a.props&&a.props.className||/^go/.test(a)&&a;s=u?"."+u:a&&typeof a=="object"?a.props?"":G(a,""):a===!1?"":a}return i+r+(s??"")},"");function b(t){let e=this||{},n=t.call?t(e.p):t;return rn(n.unshift?n.raw?on(n,[].slice.call(arguments,1),e.p):n.reduce((i,r)=>Object.assign(i,r&&r.call?r(e.p):r),{}):n,en(e.target),e.g,e.o,e.k)}var sn,an,ln,ar=b.bind({g:1}),it=b.bind({k:1});function ot(t,e,n,i){G.p=e,sn=t,an=n,ln=i}var fe,C,ut,cn,Q,st,pt,Re,ht,Pe,Ce,Ee,un,te={},ft=[],pn=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Me=Array.isArray;function W(t,e){for(var n in e)t[n]=e[n];return t}function Ae(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function Ie(t,e,n){var i,r,o,s={};for(o in e)o=="key"?i=e[o]:o=="ref"?r=e[o]:s[o]=e[o];if(arguments.length>2&&(s.children=arguments.length>3?fe.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(o in t.defaultProps)s[o]===void 0&&(s[o]=t.defaultProps[o]);return ue(t,s,i,r,null)}function ue(t,e,n,i,r){var o={type:t,props:e,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:r??++ut,__i:-1,__u:0};return r==null&&C.vnode!=null&&C.vnode(o),o}function V(t){return t.children}function pe(t,e){this.props=t,this.context=e}function Y(t,e){if(e==null)return t.__?Y(t.__,t.__i+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?Y(t):null}function dt(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return dt(t)}}function at(t){(!t.__d&&(t.__d=!0)&&Q.push(t)&&!he.__r++||st!==C.debounceRendering)&&((st=C.debounceRendering)||pt)(he)}function he(){var t,e,n,i,r,o,s,a;for(Q.sort(Re);t=Q.shift();)t.__d&&(e=Q.length,i=void 0,o=(r=(n=t).__v).__e,s=[],a=[],n.__P&&((i=W({},r)).__v=r.__v+1,C.vnode&&C.vnode(i),Le(n.__P,i,r,n.__n,n.__P.namespaceURI,32&r.__u?[o]:null,s,o??Y(r),!!(32&r.__u),a),i.__v=r.__v,i.__.__k[i.__i]=i,mt(s,i,a),i.__e!=o&&dt(i)),Q.length>e&&Q.sort(Re));he.__r=0}function _t(t,e,n,i,r,o,s,a,u,l,p){var c,h,f,m,R,y,x=i&&i.__k||ft,w=e.length;for(u=hn(n,e,x,u,w),c=0;c<w;c++)(f=n.__k[c])!=null&&(h=f.__i===-1?te:x[f.__i]||te,f.__i=c,y=Le(t,f,h,r,o,s,a,u,l,p),m=f.__e,f.ref&&h.ref!=f.ref&&(h.ref&&He(h.ref,null,f),p.push(f.ref,f.__c||m,f)),R==null&&m!=null&&(R=m),4&f.__u||h.__k===f.__k?u=gt(f,u,t):typeof f.type=="function"&&y!==void 0?u=y:m&&(u=m.nextSibling),f.__u&=-7);return n.__e=R,u}function hn(t,e,n,i,r){var o,s,a,u,l,p=n.length,c=p,h=0;for(t.__k=new Array(r),o=0;o<r;o++)(s=e[o])!=null&&typeof s!="boolean"&&typeof s!="function"?(u=o+h,(s=t.__k[o]=typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?ue(null,s,null,null,null):Me(s)?ue(V,{children:s},null,null,null):s.constructor===void 0&&s.__b>0?ue(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):s).__=t,s.__b=t.__b+1,a=null,(l=s.__i=fn(s,n,u,c))!==-1&&(c--,(a=n[l])&&(a.__u|=2)),a==null||a.__v===null?(l==-1&&h--,typeof s.type!="function"&&(s.__u|=4)):l!=u&&(l==u-1?h--:l==u+1?h++:(l>u?h--:h++,s.__u|=4))):t.__k[o]=null;if(c)for(o=0;o<p;o++)(a=n[o])!=null&&!(2&a.__u)&&(a.__e==i&&(i=Y(a)),bt(a,a));return i}function gt(t,e,n){var i,r;if(typeof t.type=="function"){for(i=t.__k,r=0;i&&r<i.length;r++)i[r]&&(i[r].__=t,e=gt(i[r],e,n));return e}t.__e!=e&&(e&&t.type&&!n.contains(e)&&(e=Y(t)),n.insertBefore(t.__e,e||null),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function fn(t,e,n,i){var r,o,s=t.key,a=t.type,u=e[n];if(u===null||u&&s==u.key&&a===u.type&&!(2&u.__u))return n;if(i>(u!=null&&!(2&u.__u)?1:0))for(r=n-1,o=n+1;r>=0||o<e.length;){if(r>=0){if((u=e[r])&&!(2&u.__u)&&s==u.key&&a===u.type)return r;r--}if(o<e.length){if((u=e[o])&&!(2&u.__u)&&s==u.key&&a===u.type)return o;o++}}return-1}function lt(t,e,n){e[0]=="-"?t.setProperty(e,n??""):t[e]=n==null?"":typeof n!="number"||pn.test(e)?n:n+"px"}function ce(t,e,n,i,r){var o;e:if(e=="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof i=="string"&&(t.style.cssText=i=""),i)for(e in i)n&&e in n||lt(t.style,e,"");if(n)for(e in n)i&&n[e]===i[e]||lt(t.style,e,n[e])}else if(e[0]=="o"&&e[1]=="n")o=e!=(e=e.replace(ht,"$1")),e=e.toLowerCase()in t||e=="onFocusOut"||e=="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+o]=n,n?i?n.u=i.u:(n.u=Pe,t.addEventListener(e,o?Ee:Ce,o)):t.removeEventListener(e,o?Ee:Ce,o);else{if(r=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&e[4]!="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&n==1?"":n))}}function ct(t){return function(e){if(this.l){var n=this.l[e.type+t];if(e.t==null)e.t=Pe++;else if(e.t<n.u)return;return n(C.event?C.event(e):e)}}}function Le(t,e,n,i,r,o,s,a,u,l){var p,c,h,f,m,R,y,x,w,H,I,N,D,q,v,S,P,E=e.type;if(e.constructor!==void 0)return null;128&n.__u&&(u=!!(32&n.__u),o=[a=e.__e=n.__e]),(p=C.__b)&&p(e);e:if(typeof E=="function")try{if(x=e.props,w="prototype"in E&&E.prototype.render,H=(p=E.contextType)&&i[p.__c],I=p?H?H.props.value:p.__:i,n.__c?y=(c=e.__c=n.__c).__=c.__E:(w?e.__c=c=new E(x,I):(e.__c=c=new pe(x,I),c.constructor=E,c.render=_n),H&&H.sub(c),c.props=x,c.state||(c.state={}),c.context=I,c.__n=i,h=c.__d=!0,c.__h=[],c._sb=[]),w&&c.__s==null&&(c.__s=c.state),w&&E.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=W({},c.__s)),W(c.__s,E.getDerivedStateFromProps(x,c.__s))),f=c.props,m=c.state,c.__v=e,h)w&&E.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),w&&c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(w&&E.getDerivedStateFromProps==null&&x!==f&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(x,I),!c.__e&&(c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(x,c.__s,I)===!1||e.__v==n.__v)){for(e.__v!=n.__v&&(c.props=x,c.state=c.__s,c.__d=!1),e.__e=n.__e,e.__k=n.__k,e.__k.some(function(L){L&&(L.__=e)}),N=0;N<c._sb.length;N++)c.__h.push(c._sb[N]);c._sb=[],c.__h.length&&s.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(x,c.__s,I),w&&c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(f,m,R)})}if(c.context=I,c.props=x,c.__P=t,c.__e=!1,D=C.__r,q=0,w){for(c.state=c.__s,c.__d=!1,D&&D(e),p=c.render(c.props,c.state,c.context),v=0;v<c._sb.length;v++)c.__h.push(c._sb[v]);c._sb=[]}else do c.__d=!1,D&&D(e),p=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++q<25);c.state=c.__s,c.getChildContext!=null&&(i=W(W({},i),c.getChildContext())),w&&!h&&c.getSnapshotBeforeUpdate!=null&&(R=c.getSnapshotBeforeUpdate(f,m)),a=_t(t,Me(S=p!=null&&p.type===V&&p.key==null?p.props.children:p)?S:[S],e,n,i,r,o,s,a,u,l),c.base=e.__e,e.__u&=-161,c.__h.length&&s.push(c),y&&(c.__E=c.__=null)}catch(L){if(e.__v=null,u||o!=null)if(L.then){for(e.__u|=u?160:128;a&&a.nodeType==8&&a.nextSibling;)a=a.nextSibling;o[o.indexOf(a)]=null,e.__e=a}else for(P=o.length;P--;)Ae(o[P]);else e.__e=n.__e,e.__k=n.__k;C.__e(L,e,n)}else o==null&&e.__v==n.__v?(e.__k=n.__k,e.__e=n.__e):a=e.__e=dn(n.__e,e,n,i,r,o,s,u,l);return(p=C.diffed)&&p(e),128&e.__u?void 0:a}function mt(t,e,n){for(var i=0;i<n.length;i++)He(n[i],n[++i],n[++i]);C.__c&&C.__c(e,t),t.some(function(r){try{t=r.__h,r.__h=[],t.some(function(o){o.call(r)})}catch(o){C.__e(o,r.__v)}})}function dn(t,e,n,i,r,o,s,a,u){var l,p,c,h,f,m,R,y=n.props,x=e.props,w=e.type;if(w=="svg"?r="http://www.w3.org/2000/svg":w=="math"?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),o!=null){for(l=0;l<o.length;l++)if((f=o[l])&&"setAttribute"in f==!!w&&(w?f.localName==w:f.nodeType==3)){t=f,o[l]=null;break}}if(t==null){if(w==null)return document.createTextNode(x);t=document.createElementNS(r,w,x.is&&x),a&&(C.__m&&C.__m(e,o),a=!1),o=null}if(w===null)y===x||a&&t.data===x||(t.data=x);else{if(o=o&&fe.call(t.childNodes),y=n.props||te,!a&&o!=null)for(y={},l=0;l<t.attributes.length;l++)y[(f=t.attributes[l]).name]=f.value;for(l in y)if(f=y[l],l!="children"){if(l=="dangerouslySetInnerHTML")c=f;else if(!(l in x)){if(l=="value"&&"defaultValue"in x||l=="checked"&&"defaultChecked"in x)continue;ce(t,l,null,f,r)}}for(l in x)f=x[l],l=="children"?h=f:l=="dangerouslySetInnerHTML"?p=f:l=="value"?m=f:l=="checked"?R=f:a&&typeof f!="function"||y[l]===f||ce(t,l,f,y[l],r);if(p)a||c&&(p.__html===c.__html||p.__html===t.innerHTML)||(t.innerHTML=p.__html),e.__k=[];else if(c&&(t.innerHTML=""),_t(t,Me(h)?h:[h],e,n,i,w=="foreignObject"?"http://www.w3.org/1999/xhtml":r,o,s,o?o[0]:n.__k&&Y(n,0),a,u),o!=null)for(l=o.length;l--;)Ae(o[l]);a||(l="value",w=="progress"&&m==null?t.removeAttribute("value"):m!==void 0&&(m!==t[l]||w=="progress"&&!m||w=="option"&&m!==y[l])&&ce(t,l,m,y[l],r),l="checked",R!==void 0&&R!==t[l]&&ce(t,l,R,y[l],r))}return t}function He(t,e,n){try{if(typeof t=="function"){var i=typeof t.__u=="function";i&&t.__u(),i&&e==null||(t.__u=t(e))}else t.current=e}catch(r){C.__e(r,n)}}function bt(t,e,n){var i,r;if(C.unmount&&C.unmount(t),(i=t.ref)&&(i.current&&i.current!==t.__e||He(i,null,e)),(i=t.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(o){C.__e(o,e)}i.base=i.__P=null}if(i=t.__k)for(r=0;r<i.length;r++)i[r]&&bt(i[r],e,n||typeof t.type!="function");n||Ae(t.__e),t.__c=t.__=t.__e=void 0}function _n(t,e,n){return this.constructor(t,n)}function kt(t,e,n){var i,r,o,s;e==document&&(e=document.documentElement),C.__&&C.__(t,e),r=(i=typeof n=="function")?null:n&&n.__k||e.__k,o=[],s=[],Le(e,t=(!i&&n||e).__k=Ie(V,null,[t]),r||te,te,e.namespaceURI,!i&&n?[n]:r?null:e.firstChild?fe.call(e.childNodes):null,o,!i&&n?n:r?r.__e:e.firstChild,i,s),mt(o,t,s)}fe=ft.slice,C={__e:function(t,e,n,i){for(var r,o,s;e=e.__;)if((r=e.__c)&&!r.__)try{if((o=r.constructor)&&o.getDerivedStateFromError!=null&&(r.setState(o.getDerivedStateFromError(t)),s=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(t,i||{}),s=r.__d),s)return r.__E=r}catch(a){t=a}throw t}},ut=0,cn=function(t){return t!=null&&t.constructor==null},pe.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=W({},this.state),typeof t=="function"&&(t=t(W({},n),this.props)),t&&W(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),at(this))},pe.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),at(this))},pe.prototype.render=V,Q=[],pt=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Re=function(t,e){return t.__v.__b-e.__v.__b},he.__r=0,ht=/(PointerCapture)$|Capture$/i,Pe=0,Ce=ct(!1),Ee=ct(!0),un=0;function qe(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var X=qe();function St(t){X=t}var ie={exec:()=>null};function z(t,e=""){let n=typeof t=="string"?t:t.source,i={replace:(r,o)=>{let s=typeof o=="string"?o:o.source;return s=s.replace(B.caret,"$1"),n=n.replace(r,s),i},getRegex:()=>new RegExp(n,e)};return i}var B={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}#`),htmlBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}<(?:[a-z].*>|!--)`,"i")},gn=/^(?:[ \t]*(?:\n|$))+/,mn=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,bn=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,oe=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,kn=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,je=/(?:[*+-]|\d{1,9}[.)])/,Tt=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,zt=z(Tt).replace(/bull/g,je).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),xn=z(Tt).replace(/bull/g,je).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Fe=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,yn=/^[^\n]+/,Oe=/(?!\s*\])(?:\\.|[^\[\]\\])+/,vn=z(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Oe).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),wn=z(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,je).getRegex(),ke="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Ze=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,$n=z("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Ze).replace("tag",ke).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Rt=z(Fe).replace("hr",oe).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ke).getRegex(),Sn=z(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Rt).getRegex(),Ue={blockquote:Sn,code:mn,def:vn,fences:bn,heading:kn,hr:oe,html:$n,lheading:zt,list:wn,newline:gn,paragraph:Rt,table:ie,text:yn},xt=z("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",oe).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ke).getRegex(),Tn={...Ue,lheading:xn,table:xt,paragraph:z(Fe).replace("hr",oe).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",xt).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ke).getRegex()},zn={...Ue,html:z(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Ze).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:ie,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:z(Fe).replace("hr",oe).replace("heading",` *#{1,6} *[^
]`).replace("lheading",zt).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Rn=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Cn=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Ct=/^( {2,}|\\)\n(?!\s*$)/,En=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,xe=/[\p{P}\p{S}]/u,Ge=/[\s\p{P}\p{S}]/u,Et=/[^\s\p{P}\p{S}]/u,Pn=z(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Ge).getRegex(),Pt=/(?!~)[\p{P}\p{S}]/u,Mn=/(?!~)[\s\p{P}\p{S}]/u,An=/(?:[^\s\p{P}\p{S}]|~)/u,In=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,Mt=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Ln=z(Mt,"u").replace(/punct/g,xe).getRegex(),Hn=z(Mt,"u").replace(/punct/g,Pt).getRegex(),At="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Bn=z(At,"gu").replace(/notPunctSpace/g,Et).replace(/punctSpace/g,Ge).replace(/punct/g,xe).getRegex(),Dn=z(At,"gu").replace(/notPunctSpace/g,An).replace(/punctSpace/g,Mn).replace(/punct/g,Pt).getRegex(),Nn=z("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Et).replace(/punctSpace/g,Ge).replace(/punct/g,xe).getRegex(),qn=z(/\\(punct)/,"gu").replace(/punct/g,xe).getRegex(),jn=z(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Fn=z(Ze).replace("(?:-->|$)","-->").getRegex(),On=z("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Fn).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),ge=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Zn=z(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",ge).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),It=z(/^!?\[(label)\]\[(ref)\]/).replace("label",ge).replace("ref",Oe).getRegex(),Lt=z(/^!?\[(ref)\](?:\[\])?/).replace("ref",Oe).getRegex(),Un=z("reflink|nolink(?!\\()","g").replace("reflink",It).replace("nolink",Lt).getRegex(),We={_backpedal:ie,anyPunctuation:qn,autolink:jn,blockSkip:In,br:Ct,code:Cn,del:ie,emStrongLDelim:Ln,emStrongRDelimAst:Bn,emStrongRDelimUnd:Nn,escape:Rn,link:Zn,nolink:Lt,punctuation:Pn,reflink:It,reflinkSearch:Un,tag:On,text:En,url:ie},Gn={...We,link:z(/^!?\[(label)\]\((.*?)\)/).replace("label",ge).getRegex(),reflink:z(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ge).getRegex()},Be={...We,emStrongRDelimAst:Dn,emStrongLDelim:Hn,url:z(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Wn={...Be,br:z(Ct).replace("{2,}","*").getRegex(),text:z(Be.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},de={normal:Ue,gfm:Tn,pedantic:zn},ne={normal:We,gfm:Be,breaks:Wn,pedantic:Gn},Vn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},yt=t=>Vn[t];function j(t,e){if(e){if(B.escapeTest.test(t))return t.replace(B.escapeReplace,yt)}else if(B.escapeTestNoEncode.test(t))return t.replace(B.escapeReplaceNoEncode,yt);return t}function vt(t){try{t=encodeURI(t).replace(B.percentDecode,"%")}catch{return null}return t}function wt(t,e){let n=t.replace(B.findPipe,(o,s,a)=>{let u=!1,l=s;for(;--l>=0&&a[l]==="\\";)u=!u;return u?"|":" |"}),i=n.split(B.splitPipe),r=0;if(i[0].trim()||i.shift(),i.length>0&&!i.at(-1)?.trim()&&i.pop(),e)if(i.length>e)i.splice(e);else for(;i.length<e;)i.push("");for(;r<i.length;r++)i[r]=i[r].trim().replace(B.slashPipe,"|");return i}function re(t,e,n){let i=t.length;if(i===0)return"";let r=0;for(;r<i;){let o=t.charAt(i-r-1);if(o===e&&!n)r++;else if(o!==e&&n)r++;else break}return t.slice(0,i-r)}function Qn(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let i=0;i<t.length;i++)if(t[i]==="\\")i++;else if(t[i]===e[0])n++;else if(t[i]===e[1]&&(n--,n<0))return i;return n>0?-2:-1}function $t(t,e,n,i,r){let o=e.href,s=e.title||null,a=t[1].replace(r.other.outputLinkReplace,"$1");i.state.inLink=!0;let u={type:t[0].charAt(0)==="!"?"image":"link",raw:n,href:o,title:s,text:a,tokens:i.inlineTokens(a)};return i.state.inLink=!1,u}function Kn(t,e,n){let i=t.match(n.other.indentCodeCompensation);if(i===null)return e;let r=i[1];return e.split(`
`).map(o=>{let s=o.match(n.other.beginningSpace);if(s===null)return o;let[a]=s;return a.length>=r.length?o.slice(r.length):o}).join(`
`)}var me=class{options;rules;lexer;constructor(t){this.options=t||X}space(t){let e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){let e=this.rules.block.code.exec(t);if(e){let n=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?n:re(n,`
`)}}}fences(t){let e=this.rules.block.fences.exec(t);if(e){let n=e[0],i=Kn(n,e[3]||"",this.rules);return{type:"code",raw:n,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:i}}}heading(t){let e=this.rules.block.heading.exec(t);if(e){let n=e[2].trim();if(this.rules.other.endingHash.test(n)){let i=re(n,"#");(this.options.pedantic||!i||this.rules.other.endingSpaceChar.test(i))&&(n=i.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(t){let e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:re(e[0],`
`)}}blockquote(t){let e=this.rules.block.blockquote.exec(t);if(e){let n=re(e[0],`
`).split(`
`),i="",r="",o=[];for(;n.length>0;){let s=!1,a=[],u;for(u=0;u<n.length;u++)if(this.rules.other.blockquoteStart.test(n[u]))a.push(n[u]),s=!0;else if(!s)a.push(n[u]);else break;n=n.slice(u);let l=a.join(`
`),p=l.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");i=i?`${i}
${l}`:l,r=r?`${r}
${p}`:p;let c=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(p,o,!0),this.lexer.state.top=c,n.length===0)break;let h=o.at(-1);if(h?.type==="code")break;if(h?.type==="blockquote"){let f=h,m=f.raw+`
`+n.join(`
`),R=this.blockquote(m);o[o.length-1]=R,i=i.substring(0,i.length-f.raw.length)+R.raw,r=r.substring(0,r.length-f.text.length)+R.text;break}else if(h?.type==="list"){let f=h,m=f.raw+`
`+n.join(`
`),R=this.list(m);o[o.length-1]=R,i=i.substring(0,i.length-h.raw.length)+R.raw,r=r.substring(0,r.length-f.raw.length)+R.raw,n=m.substring(o.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:i,tokens:o,text:r}}}list(t){let e=this.rules.block.list.exec(t);if(e){let n=e[1].trim(),i=n.length>1,r={type:"list",raw:"",ordered:i,start:i?+n.slice(0,-1):"",loose:!1,items:[]};n=i?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=i?n:"[*+-]");let o=this.rules.other.listItemRegex(n),s=!1;for(;t;){let u=!1,l="",p="";if(!(e=o.exec(t))||this.rules.block.hr.test(t))break;l=e[0],t=t.substring(l.length);let c=e[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,x=>" ".repeat(3*x.length)),h=t.split(`
`,1)[0],f=!c.trim(),m=0;if(this.options.pedantic?(m=2,p=c.trimStart()):f?m=e[1].length+1:(m=e[2].search(this.rules.other.nonSpaceChar),m=m>4?1:m,p=c.slice(m),m+=e[1].length),f&&this.rules.other.blankLine.test(h)&&(l+=h+`
`,t=t.substring(h.length+1),u=!0),!u){let x=this.rules.other.nextBulletRegex(m),w=this.rules.other.hrRegex(m),H=this.rules.other.fencesBeginRegex(m),I=this.rules.other.headingBeginRegex(m),N=this.rules.other.htmlBeginRegex(m);for(;t;){let D=t.split(`
`,1)[0],q;if(h=D,this.options.pedantic?(h=h.replace(this.rules.other.listReplaceNesting,"  "),q=h):q=h.replace(this.rules.other.tabCharGlobal,"    "),H.test(h)||I.test(h)||N.test(h)||x.test(h)||w.test(h))break;if(q.search(this.rules.other.nonSpaceChar)>=m||!h.trim())p+=`
`+q.slice(m);else{if(f||c.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||H.test(c)||I.test(c)||w.test(c))break;p+=`
`+h}!f&&!h.trim()&&(f=!0),l+=D+`
`,t=t.substring(D.length+1),c=q.slice(m)}}r.loose||(s?r.loose=!0:this.rules.other.doubleBlankLine.test(l)&&(s=!0));let R=null,y;this.options.gfm&&(R=this.rules.other.listIsTask.exec(p),R&&(y=R[0]!=="[ ] ",p=p.replace(this.rules.other.listReplaceTask,""))),r.items.push({type:"list_item",raw:l,task:!!R,checked:y,loose:!1,text:p,tokens:[]}),r.raw+=l}let a=r.items.at(-1);if(a)a.raw=a.raw.trimEnd(),a.text=a.text.trimEnd();else return;r.raw=r.raw.trimEnd();for(let u=0;u<r.items.length;u++)if(this.lexer.state.top=!1,r.items[u].tokens=this.lexer.blockTokens(r.items[u].text,[]),!r.loose){let l=r.items[u].tokens.filter(c=>c.type==="space"),p=l.length>0&&l.some(c=>this.rules.other.anyLine.test(c.raw));r.loose=p}if(r.loose)for(let u=0;u<r.items.length;u++)r.items[u].loose=!0;return r}}html(t){let e=this.rules.block.html.exec(t);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(t){let e=this.rules.block.def.exec(t);if(e){let n=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),i=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:n,raw:e[0],href:i,title:r}}}table(t){let e=this.rules.block.table.exec(t);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let n=wt(e[1]),i=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),r=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],o={type:"table",raw:e[0],header:[],align:[],rows:[]};if(n.length===i.length){for(let s of i)this.rules.other.tableAlignRight.test(s)?o.align.push("right"):this.rules.other.tableAlignCenter.test(s)?o.align.push("center"):this.rules.other.tableAlignLeft.test(s)?o.align.push("left"):o.align.push(null);for(let s=0;s<n.length;s++)o.header.push({text:n[s],tokens:this.lexer.inline(n[s]),header:!0,align:o.align[s]});for(let s of r)o.rows.push(wt(s,o.header.length).map((a,u)=>({text:a,tokens:this.lexer.inline(a),header:!1,align:o.align[u]})));return o}}lheading(t){let e=this.rules.block.lheading.exec(t);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(t){let e=this.rules.block.paragraph.exec(t);if(e){let n=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:n,tokens:this.lexer.inline(n)}}}text(t){let e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){let e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(t){let e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){let e=this.rules.inline.link.exec(t);if(e){let n=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;let o=re(n.slice(0,-1),"\\");if((n.length-o.length)%2===0)return}else{let o=Qn(e[2],"()");if(o===-2)return;if(o>-1){let a=(e[0].indexOf("!")===0?5:4)+e[1].length+o;e[2]=e[2].substring(0,o),e[0]=e[0].substring(0,a).trim(),e[3]=""}}let i=e[2],r="";if(this.options.pedantic){let o=this.rules.other.pedanticHrefTitle.exec(i);o&&(i=o[1],r=o[3])}else r=e[3]?e[3].slice(1,-1):"";return i=i.trim(),this.rules.other.startAngleBracket.test(i)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?i=i.slice(1):i=i.slice(1,-1)),$t(e,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:r&&r.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(t,e){let n;if((n=this.rules.inline.reflink.exec(t))||(n=this.rules.inline.nolink.exec(t))){let i=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),r=e[i.toLowerCase()];if(!r){let o=n[0].charAt(0);return{type:"text",raw:o,text:o}}return $t(n,r,n[0],this.lexer,this.rules)}}emStrong(t,e,n=""){let i=this.rules.inline.emStrongLDelim.exec(t);if(!i||i[3]&&n.match(this.rules.other.unicodeAlphaNumeric))return;if(!(i[1]||i[2]||"")||!n||this.rules.inline.punctuation.exec(n)){let o=[...i[0]].length-1,s,a,u=o,l=0,p=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(p.lastIndex=0,e=e.slice(-1*t.length+o);(i=p.exec(e))!=null;){if(s=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!s)continue;if(a=[...s].length,i[3]||i[4]){u+=a;continue}else if((i[5]||i[6])&&o%3&&!((o+a)%3)){l+=a;continue}if(u-=a,u>0)continue;a=Math.min(a,a+u+l);let c=[...i[0]][0].length,h=t.slice(0,o+i.index+c+a);if(Math.min(o,a)%2){let m=h.slice(1,-1);return{type:"em",raw:h,text:m,tokens:this.lexer.inlineTokens(m)}}let f=h.slice(2,-2);return{type:"strong",raw:h,text:f,tokens:this.lexer.inlineTokens(f)}}}}codespan(t){let e=this.rules.inline.code.exec(t);if(e){let n=e[2].replace(this.rules.other.newLineCharGlobal," "),i=this.rules.other.nonSpaceChar.test(n),r=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return i&&r&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:e[0],text:n}}}br(t){let e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t){let e=this.rules.inline.del.exec(t);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(t){let e=this.rules.inline.autolink.exec(t);if(e){let n,i;return e[2]==="@"?(n=e[1],i="mailto:"+n):(n=e[1],i=n),{type:"link",raw:e[0],text:n,href:i,tokens:[{type:"text",raw:n,text:n}]}}}url(t){let e;if(e=this.rules.inline.url.exec(t)){let n,i;if(e[2]==="@")n=e[0],i="mailto:"+n;else{let r;do r=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(r!==e[0]);n=e[0],e[1]==="www."?i="http://"+e[0]:i=e[0]}return{type:"link",raw:e[0],text:n,href:i,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(t){let e=this.rules.inline.text.exec(t);if(e){let n=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:n}}}},O=class De{tokens;options;state;tokenizer;inlineQueue;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||X,this.options.tokenizer=this.options.tokenizer||new me,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let n={other:B,block:de.normal,inline:ne.normal};this.options.pedantic?(n.block=de.pedantic,n.inline=ne.pedantic):this.options.gfm&&(n.block=de.gfm,this.options.breaks?n.inline=ne.breaks:n.inline=ne.gfm),this.tokenizer.rules=n}static get rules(){return{block:de,inline:ne}}static lex(e,n){return new De(n).lex(e)}static lexInline(e,n){return new De(n).inlineTokens(e)}lex(e){e=e.replace(B.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){let i=this.inlineQueue[n];this.inlineTokens(i.src,i.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],i=!1){for(this.options.pedantic&&(e=e.replace(B.tabCharGlobal,"    ").replace(B.spaceLine,""));e;){let r;if(this.options.extensions?.block?.some(s=>(r=s.call({lexer:this},e,n))?(e=e.substring(r.raw.length),n.push(r),!0):!1))continue;if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length);let s=n.at(-1);r.raw.length===1&&s!==void 0?s.raw+=`
`:n.push(r);continue}if(r=this.tokenizer.code(e)){e=e.substring(r.raw.length);let s=n.at(-1);s?.type==="paragraph"||s?.type==="text"?(s.raw+=`
`+r.raw,s.text+=`
`+r.text,this.inlineQueue.at(-1).src=s.text):n.push(r);continue}if(r=this.tokenizer.fences(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.heading(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.hr(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.blockquote(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.list(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.html(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.def(e)){e=e.substring(r.raw.length);let s=n.at(-1);s?.type==="paragraph"||s?.type==="text"?(s.raw+=`
`+r.raw,s.text+=`
`+r.raw,this.inlineQueue.at(-1).src=s.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title});continue}if(r=this.tokenizer.table(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.lheading(e)){e=e.substring(r.raw.length),n.push(r);continue}let o=e;if(this.options.extensions?.startBlock){let s=1/0,a=e.slice(1),u;this.options.extensions.startBlock.forEach(l=>{u=l.call({lexer:this},a),typeof u=="number"&&u>=0&&(s=Math.min(s,u))}),s<1/0&&s>=0&&(o=e.substring(0,s+1))}if(this.state.top&&(r=this.tokenizer.paragraph(o))){let s=n.at(-1);i&&s?.type==="paragraph"?(s.raw+=`
`+r.raw,s.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=s.text):n.push(r),i=o.length!==e.length,e=e.substring(r.raw.length);continue}if(r=this.tokenizer.text(e)){e=e.substring(r.raw.length);let s=n.at(-1);s?.type==="text"?(s.raw+=`
`+r.raw,s.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=s.text):n.push(r);continue}if(e){let s="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(s);break}else throw new Error(s)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){let i=e,r=null;if(this.tokens.links){let a=Object.keys(this.tokens.links);if(a.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(i))!=null;)a.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(i=i.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(i))!=null;)i=i.slice(0,r.index)+"++"+i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(r=this.tokenizer.rules.inline.blockSkip.exec(i))!=null;)i=i.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let o=!1,s="";for(;e;){o||(s=""),o=!1;let a;if(this.options.extensions?.inline?.some(l=>(a=l.call({lexer:this},e,n))?(e=e.substring(a.raw.length),n.push(a),!0):!1))continue;if(a=this.tokenizer.escape(e)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.tag(e)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.link(e)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(a.raw.length);let l=n.at(-1);a.type==="text"&&l?.type==="text"?(l.raw+=a.raw,l.text+=a.text):n.push(a);continue}if(a=this.tokenizer.emStrong(e,i,s)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.codespan(e)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.br(e)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.del(e)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.autolink(e)){e=e.substring(a.raw.length),n.push(a);continue}if(!this.state.inLink&&(a=this.tokenizer.url(e))){e=e.substring(a.raw.length),n.push(a);continue}let u=e;if(this.options.extensions?.startInline){let l=1/0,p=e.slice(1),c;this.options.extensions.startInline.forEach(h=>{c=h.call({lexer:this},p),typeof c=="number"&&c>=0&&(l=Math.min(l,c))}),l<1/0&&l>=0&&(u=e.substring(0,l+1))}if(a=this.tokenizer.inlineText(u)){e=e.substring(a.raw.length),a.raw.slice(-1)!=="_"&&(s=a.raw.slice(-1)),o=!0;let l=n.at(-1);l?.type==="text"?(l.raw+=a.raw,l.text+=a.text):n.push(a);continue}if(e){let l="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return n}},be=class{options;parser;constructor(t){this.options=t||X}space(t){return""}code({text:t,lang:e,escaped:n}){let i=(e||"").match(B.notSpaceStart)?.[0],r=t.replace(B.endingNewline,"")+`
`;return i?'<pre><code class="language-'+j(i)+'">'+(n?r:j(r,!0))+`</code></pre>
`:"<pre><code>"+(n?r:j(r,!0))+`</code></pre>
`}blockquote({tokens:t}){return`<blockquote>
${this.parser.parse(t)}</blockquote>
`}html({text:t}){return t}heading({tokens:t,depth:e}){return`<h${e}>${this.parser.parseInline(t)}</h${e}>
`}hr(t){return`<hr>
`}list(t){let e=t.ordered,n=t.start,i="";for(let s=0;s<t.items.length;s++){let a=t.items[s];i+=this.listitem(a)}let r=e?"ol":"ul",o=e&&n!==1?' start="'+n+'"':"";return"<"+r+o+`>
`+i+"</"+r+`>
`}listitem(t){let e="";if(t.task){let n=this.checkbox({checked:!!t.checked});t.loose?t.tokens[0]?.type==="paragraph"?(t.tokens[0].text=n+" "+t.tokens[0].text,t.tokens[0].tokens&&t.tokens[0].tokens.length>0&&t.tokens[0].tokens[0].type==="text"&&(t.tokens[0].tokens[0].text=n+" "+j(t.tokens[0].tokens[0].text),t.tokens[0].tokens[0].escaped=!0)):t.tokens.unshift({type:"text",raw:n+" ",text:n+" ",escaped:!0}):e+=n+" "}return e+=this.parser.parse(t.tokens,!!t.loose),`<li>${e}</li>
`}checkbox({checked:t}){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:t}){return`<p>${this.parser.parseInline(t)}</p>
`}table(t){let e="",n="";for(let r=0;r<t.header.length;r++)n+=this.tablecell(t.header[r]);e+=this.tablerow({text:n});let i="";for(let r=0;r<t.rows.length;r++){let o=t.rows[r];n="";for(let s=0;s<o.length;s++)n+=this.tablecell(o[s]);i+=this.tablerow({text:n})}return i&&(i=`<tbody>${i}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+i+`</table>
`}tablerow({text:t}){return`<tr>
${t}</tr>
`}tablecell(t){let e=this.parser.parseInline(t.tokens),n=t.header?"th":"td";return(t.align?`<${n} align="${t.align}">`:`<${n}>`)+e+`</${n}>
`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${j(t,!0)}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:e,tokens:n}){let i=this.parser.parseInline(n),r=vt(t);if(r===null)return i;t=r;let o='<a href="'+t+'"';return e&&(o+=' title="'+j(e)+'"'),o+=">"+i+"</a>",o}image({href:t,title:e,text:n,tokens:i}){i&&(n=this.parser.parseInline(i,this.parser.textRenderer));let r=vt(t);if(r===null)return j(n);t=r;let o=`<img src="${t}" alt="${n}"`;return e&&(o+=` title="${j(e)}"`),o+=">",o}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):"escaped"in t&&t.escaped?t.text:j(t.text)}},Ve=class{strong({text:t}){return t}em({text:t}){return t}codespan({text:t}){return t}del({text:t}){return t}html({text:t}){return t}text({text:t}){return t}link({text:t}){return""+t}image({text:t}){return""+t}br(){return""}},Z=class Ne{options;renderer;textRenderer;constructor(e){this.options=e||X,this.options.renderer=this.options.renderer||new be,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Ve}static parse(e,n){return new Ne(n).parse(e)}static parseInline(e,n){return new Ne(n).parseInline(e)}parse(e,n=!0){let i="";for(let r=0;r<e.length;r++){let o=e[r];if(this.options.extensions?.renderers?.[o.type]){let a=o,u=this.options.extensions.renderers[a.type].call({parser:this},a);if(u!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(a.type)){i+=u||"";continue}}let s=o;switch(s.type){case"space":{i+=this.renderer.space(s);continue}case"hr":{i+=this.renderer.hr(s);continue}case"heading":{i+=this.renderer.heading(s);continue}case"code":{i+=this.renderer.code(s);continue}case"table":{i+=this.renderer.table(s);continue}case"blockquote":{i+=this.renderer.blockquote(s);continue}case"list":{i+=this.renderer.list(s);continue}case"html":{i+=this.renderer.html(s);continue}case"paragraph":{i+=this.renderer.paragraph(s);continue}case"text":{let a=s,u=this.renderer.text(a);for(;r+1<e.length&&e[r+1].type==="text";)a=e[++r],u+=`
`+this.renderer.text(a);n?i+=this.renderer.paragraph({type:"paragraph",raw:u,text:u,tokens:[{type:"text",raw:u,text:u,escaped:!0}]}):i+=u;continue}default:{let a='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return i}parseInline(e,n=this.renderer){let i="";for(let r=0;r<e.length;r++){let o=e[r];if(this.options.extensions?.renderers?.[o.type]){let a=this.options.extensions.renderers[o.type].call({parser:this},o);if(a!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){i+=a||"";continue}}let s=o;switch(s.type){case"escape":{i+=n.text(s);break}case"html":{i+=n.html(s);break}case"link":{i+=n.link(s);break}case"image":{i+=n.image(s);break}case"strong":{i+=n.strong(s);break}case"em":{i+=n.em(s);break}case"codespan":{i+=n.codespan(s);break}case"br":{i+=n.br(s);break}case"del":{i+=n.del(s);break}case"text":{i+=n.text(s);break}default:{let a='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return i}},_e=class{options;block;constructor(t){this.options=t||X}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}provideLexer(){return this.block?O.lex:O.lexInline}provideParser(){return this.block?Z.parse:Z.parseInline}},Xn=class{defaults=qe();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Z;Renderer=be;TextRenderer=Ve;Lexer=O;Tokenizer=me;Hooks=_e;constructor(...t){this.use(...t)}walkTokens(t,e){let n=[];for(let i of t)switch(n=n.concat(e.call(this,i)),i.type){case"table":{let r=i;for(let o of r.header)n=n.concat(this.walkTokens(o.tokens,e));for(let o of r.rows)for(let s of o)n=n.concat(this.walkTokens(s.tokens,e));break}case"list":{let r=i;n=n.concat(this.walkTokens(r.items,e));break}default:{let r=i;this.defaults.extensions?.childTokens?.[r.type]?this.defaults.extensions.childTokens[r.type].forEach(o=>{let s=r[o].flat(1/0);n=n.concat(this.walkTokens(s,e))}):r.tokens&&(n=n.concat(this.walkTokens(r.tokens,e)))}}return n}use(...t){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(n=>{let i={...n};if(i.async=this.defaults.async||i.async||!1,n.extensions&&(n.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){let o=e.renderers[r.name];o?e.renderers[r.name]=function(...s){let a=r.renderer.apply(this,s);return a===!1&&(a=o.apply(this,s)),a}:e.renderers[r.name]=r.renderer}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let o=e[r.level];o?o.unshift(r.tokenizer):e[r.level]=[r.tokenizer],r.start&&(r.level==="block"?e.startBlock?e.startBlock.push(r.start):e.startBlock=[r.start]:r.level==="inline"&&(e.startInline?e.startInline.push(r.start):e.startInline=[r.start]))}"childTokens"in r&&r.childTokens&&(e.childTokens[r.name]=r.childTokens)}),i.extensions=e),n.renderer){let r=this.defaults.renderer||new be(this.defaults);for(let o in n.renderer){if(!(o in r))throw new Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;let s=o,a=n.renderer[s],u=r[s];r[s]=(...l)=>{let p=a.apply(r,l);return p===!1&&(p=u.apply(r,l)),p||""}}i.renderer=r}if(n.tokenizer){let r=this.defaults.tokenizer||new me(this.defaults);for(let o in n.tokenizer){if(!(o in r))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;let s=o,a=n.tokenizer[s],u=r[s];r[s]=(...l)=>{let p=a.apply(r,l);return p===!1&&(p=u.apply(r,l)),p}}i.tokenizer=r}if(n.hooks){let r=this.defaults.hooks||new _e;for(let o in n.hooks){if(!(o in r))throw new Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;let s=o,a=n.hooks[s],u=r[s];_e.passThroughHooks.has(o)?r[s]=l=>{if(this.defaults.async)return Promise.resolve(a.call(r,l)).then(c=>u.call(r,c));let p=a.call(r,l);return u.call(r,p)}:r[s]=(...l)=>{let p=a.apply(r,l);return p===!1&&(p=u.apply(r,l)),p}}i.hooks=r}if(n.walkTokens){let r=this.defaults.walkTokens,o=n.walkTokens;i.walkTokens=function(s){let a=[];return a.push(o.call(this,s)),r&&(a=a.concat(r.call(this,s))),a}}this.defaults={...this.defaults,...i}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return O.lex(t,e??this.defaults)}parser(t,e){return Z.parse(t,e??this.defaults)}parseMarkdown(t){return(n,i)=>{let r={...i},o={...this.defaults,...r},s=this.onError(!!o.silent,!!o.async);if(this.defaults.async===!0&&r.async===!1)return s(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof n>"u"||n===null)return s(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return s(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));o.hooks&&(o.hooks.options=o,o.hooks.block=t);let a=o.hooks?o.hooks.provideLexer():t?O.lex:O.lexInline,u=o.hooks?o.hooks.provideParser():t?Z.parse:Z.parseInline;if(o.async)return Promise.resolve(o.hooks?o.hooks.preprocess(n):n).then(l=>a(l,o)).then(l=>o.hooks?o.hooks.processAllTokens(l):l).then(l=>o.walkTokens?Promise.all(this.walkTokens(l,o.walkTokens)).then(()=>l):l).then(l=>u(l,o)).then(l=>o.hooks?o.hooks.postprocess(l):l).catch(s);try{o.hooks&&(n=o.hooks.preprocess(n));let l=a(n,o);o.hooks&&(l=o.hooks.processAllTokens(l)),o.walkTokens&&this.walkTokens(l,o.walkTokens);let p=u(l,o);return o.hooks&&(p=o.hooks.postprocess(p)),p}catch(l){return s(l)}}}onError(t,e){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,t){let i="<p>An error occurred:</p><pre>"+j(n.message+"",!0)+"</pre>";return e?Promise.resolve(i):i}if(e)return Promise.reject(n);throw n}}},K=new Xn;function T(t,e){return K.parse(t,e)}T.options=T.setOptions=function(t){return K.setOptions(t),T.defaults=K.defaults,St(T.defaults),T};T.getDefaults=qe;T.defaults=X;T.use=function(...t){return K.use(...t),T.defaults=K.defaults,St(T.defaults),T};T.walkTokens=function(t,e){return K.walkTokens(t,e)};T.parseInline=K.parseInline;T.Parser=Z;T.parser=Z.parse;T.Renderer=be;T.TextRenderer=Ve;T.Lexer=O;T.lexer=O.lex;T.Tokenizer=me;T.Hooks=_e;T.parse=T;var hr=T.options,fr=T.setOptions,dr=T.use,_r=T.walkTokens,gr=T.parseInline;var mr=Z.parse,br=O.lex;var ye=async(t,e)=>{try{return await t()}catch(n){return e?.(Jn(n))}};var Jn=t=>t instanceof Error?t:new Error(String(t));var Yn=0,Rr=Array.isArray;function g(t,e,n,i,r,o){e||(e={});var s,a,u=e;if("ref"in u)for(a in u={},e)a=="ref"?s=e[a]:u[a]=e[a];var l={type:t,props:u,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Yn,__i:-1,__u:0,__source:r,__self:o};if(typeof t=="function"&&(s=t.defaultProps))for(a in s)u[a]===void 0&&(u[a]=s[a]);return C.vnode&&C.vnode(l),l}var er={map:"M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2zM9 4v14M15 6v14",players:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",commands:"m5 8 4 4-4 4M12 16h7",search:"M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM20 20l-3.5-3.5",lock:"M5 11h14v10H5zM8 11V7a4 4 0 0 1 8 0v4",logs:"M4 6h16M4 12h16M4 18h10",menu:"M4 6h16M4 12h16M4 18h16",archive:"M3 4h18v4H3zM5 8v12h14V8M10 12h4",monitor:"M3 4h18v12H3zM8 20h8M12 16v4",power:"M12 3v9M6.3 6.3a8 8 0 1 0 11.4 0",mods:"M12 3 4 7.5v9L12 21l8-4.5v-9L12 3zM4 7.5l8 4.5 8-4.5M12 12v9",settings:"M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z",chevrons:"m7 15 5 5 5-5M7 9l5-5 5 5",chevron_down:"m6 9 6 6 6-6",chevron_up:"m18 15-6-6-6 6",chevron_right:"m9 18 6-6-6-6",plus:"M12 5v14M5 12h14",check:"M20 6 9 17l-5-5",close:"M18 6 6 18M6 6l12 12",shield:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",logout:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"},ee=({name:t,size:e=15,stroke:n=1.8,color:i="currentColor"})=>g("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:i,"stroke-width":n,"stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",style:{flexShrink:0},children:g("path",{d:er[t]})});var Qe="'Geist Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",tr="'Fira Code', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",d={colors:{background_app:"#0e0e10",background_sidebar:"#121214",background_panel:"#17171a",background_panel_hover:"#1b1b1f",background_well:"#111113",background_control:"#202024",background_control_hover:"#26262b",background_control_active:"#313136",background_toggle:"#2a2a2f",background_selected:"#1f1f24",background_overlay:"#222226",background_map:"#16171a",background_row_open:"#18181c",background_group:"#141417",border_row:"#212125",border_tab:"#1f1f23",border_panel:"#222226",border_control:"#2e2e33",border_muted:"#4a4a50",text_primary:"#ececee",text_secondary:"#c4c4cc",text_muted:"#a0a0a8",text_faint:"#85858d",text_on_accent:"#0e0e10",text_link:"#b4bfff",cta:"#ececee",cta_hover:"#ffffff",accent:"#8b9cff",accent_hover:"#a3b1ff",accent_soft:"#15161c",focus_ring:"rgba(139, 156, 255, 0.45)",status_ok:"#5fd39a",status_warn:"#e8b45c",status_error:"#ff5c5c",status_error_hover:"#ff7676",status_error_text:"#ff8080",status_neutral:"#85858d",status_kill:"#ff8a5c",status_admin:"#c4a7ff",tint_warn:"rgba(232, 180, 92, 0.08)",tint_error:"rgba(255, 92, 92, 0.08)",backdrop:"rgba(0, 0, 0, 0.5)"},fonts:{sans:"'Geist', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif",mono:Qe},spacing:{hairline:"1px",tiny:"2px",extra_small:"4px",small:"6px",medium:"8px",regular:"10px",large:"12px",inset:"16px",extra_large:"16px",huge:"20px",page:"24px",section:"28px"},syntax:{text:"#d4d4d4",comment:"#6a9955",keyword:"#569cd6",control:"#c586c0",string:"#ce9178",number:"#b5cea8",type:"#4ec9b0",function:"#dcdcaa",variable:"#9cdcfe",tag:"#569cd6",tag_bracket:"#808080",invalid:"#f44747",line_number:"#858585",line_number_active:"#c6c6c6",selection:"#264f78",match:"#623315",cursor:"#aeafad",active_line:"#ffffff0a"},text:{tiny:"font-size: 11px",small:"font-size: 12px",normal:"font-weight: 400",medium:"font-weight: 500",bold:"font-weight: 600",mono:`font-family: ${Qe}`,mono_small:`font-family: ${Qe}; font-size: 12px`,code:`font-family: ${tr}; font-size: 12px; font-variant-ligatures: none; font-feature-settings: 'liga' 0, 'calt' 0`,heading:"font-size: 15px; font-weight: 600",title:"font-size: 20px; font-weight: 600",display:"font-size: 28px; font-weight: 600; letter-spacing: -0.02em",subtitle:"font-size: 18px; font-weight: 600",prose:"font-size: 14px; line-height: 1.75"},radius:"4px",radius_inner:"3px",shadow_menu:"0 12px 32px rgba(0, 0, 0, 0.55)",focus:"0 0 0 2px rgba(139, 156, 255, 0.45)",focus_error:"0 0 0 2px rgba(255, 92, 92, 0.5)",control_height:32,control_height_small:24,button_min_width:"72px",marker_size:9,search_width:"320px",control_height_compact:28,row_height:"48px",size:{sidebar:"264px",side_column:"440px",narrow_page:"640px",input:"200px",input_small:"160px",popover:"360px",dialog:"400px",toast:"340px",list_max_height:"280px",prose:"720px",toc:"220px",phone:"760px"}};var Ht=({icon:t,title:e,children:n,action:i,classes:r})=>g("div",{class:`${ve.empty} ${r??""}`,children:[t&&g(ee,{name:t,size:20,stroke:1.5,color:d.colors.text_faint}),g("div",{class:ve.title,children:e}),n&&g("div",{class:ve.text,children:n}),i&&g("div",{class:ve.action,children:i})]}),{colors:nr}=d,ve={empty:b`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${d.spacing.small};
    padding: ${d.spacing.section} ${d.spacing.extra_large};
    text-align: center;
  `,title:b`
    ${d.text.medium};
  `,text:b`
    ${d.text.small};

    color: ${nr.text_muted};
  `,action:b`
    margin-top: ${d.spacing.small};
  `};var Bt=({value:t,on_input:e,id:n,type:i="text",placeholder:r,disabled:o=!1,label:s,height:a=32,width:u,mono:l=!1,invalid:p=!1,focused:c=!1,list:h,suffix:f,classes:m,min:R,max:y,autocomplete:x,autofocus:w})=>{let H=[we.wrap,p?we.invalid:"",c?we.focused:"",m].filter(Boolean).join(" ");return g("span",{class:H,style:{height:`${a}px`,width:u},children:[g("input",{disabled:o,id:n,class:we.field,style:l?{fontFamily:d.fonts.mono,fontSize:"12px"}:void 0,type:i,value:t,placeholder:r,"aria-label":s,list:h,min:R,max:y,autocomplete:x,autoFocus:w,onInput:I=>e(I.target.value)}),f]})},{colors:Ke}=d,we={wrap:b`
    display: flex;
    align-items: center;
    gap: ${d.spacing.medium};
    padding: 0 ${d.spacing.regular};
    border: none;
    border-radius: ${d.radius};
    background: ${Ke.background_control};
    transition: box-shadow 120ms;

    &:focus-within {
      box-shadow: ${d.focus};
    }
  `,focused:b`
    box-shadow: ${d.focus};
  `,invalid:b`
    box-shadow: ${d.focus_error};

    &:focus-within {
      box-shadow: ${d.focus_error};
    }
  `,field:b`
    flex: 1;
    min-width: 0;
    background: none;
    border: none;
    outline: none;
    color: ${Ke.text_primary};

    &:disabled {
      opacity: 0.5;
    }

    &::placeholder {
      color: ${Ke.text_faint};
    }
  `};var se,M,Xe,Dt,Se=0,Gt=[],A=C,Nt=A.__b,qt=A.__r,jt=A.diffed,Ft=A.__c,Ot=A.unmount,Zt=A.__;function Ye(t,e){A.__h&&A.__h(M,t,Se||e),Se=0;var n=M.__H||(M.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function F(t){return Se=1,rr(Vt,t)}function rr(t,e,n){var i=Ye(se++,2);if(i.t=t,!i.__c&&(i.__=[n?n(e):Vt(void 0,e),function(a){var u=i.__N?i.__N[0]:i.__[0],l=i.t(u,a);u!==l&&(i.__N=[l,i.__[1]],i.__c.setState({}))}],i.__c=M,!M.u)){var r=function(a,u,l){if(!i.__c.__H)return!0;var p=i.__c.__H.__.filter(function(h){return!!h.__c});if(p.every(function(h){return!h.__N}))return!o||o.call(this,a,u,l);var c=i.__c.props!==a;return p.forEach(function(h){if(h.__N){var f=h.__[0];h.__=h.__N,h.__N=void 0,f!==h.__[0]&&(c=!0)}}),o&&o.call(this,a,u,l)||c};M.u=!0;var o=M.shouldComponentUpdate,s=M.componentWillUpdate;M.componentWillUpdate=function(a,u,l){if(this.__e){var p=o;o=void 0,r(a,u,l),o=p}s&&s.call(this,a,u,l)},M.shouldComponentUpdate=r}return i.__N||i.__}function J(t,e){var n=Ye(se++,3);!A.__s&&Wt(n.__H,e)&&(n.__=t,n.i=e,M.__H.__h.push(n))}function ae(t){return Se=5,Te(function(){return{current:t}},[])}function Te(t,e){var n=Ye(se++,7);return Wt(n.__H,e)&&(n.__=t(),n.__H=e,n.__h=t),n.__}function ir(){for(var t;t=Gt.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach($e),t.__H.__h.forEach(Je),t.__H.__h=[]}catch(e){t.__H.__h=[],A.__e(e,t.__v)}}A.__b=function(t){M=null,Nt&&Nt(t)},A.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),Zt&&Zt(t,e)},A.__r=function(t){qt&&qt(t),se=0;var e=(M=t.__c).__H;e&&(Xe===M?(e.__h=[],M.__h=[],e.__.forEach(function(n){n.__N&&(n.__=n.__N),n.i=n.__N=void 0})):(e.__h.forEach($e),e.__h.forEach(Je),e.__h=[],se=0)),Xe=M},A.diffed=function(t){jt&&jt(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(Gt.push(e)!==1&&Dt===A.requestAnimationFrame||((Dt=A.requestAnimationFrame)||or)(ir)),e.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.i=void 0})),Xe=M=null},A.__c=function(t,e){e.some(function(n){try{n.__h.forEach($e),n.__h=n.__h.filter(function(i){return!i.__||Je(i)})}catch(i){e.some(function(r){r.__h&&(r.__h=[])}),e=[],A.__e(i,n.__v)}}),Ft&&Ft(t,e)},A.unmount=function(t){Ot&&Ot(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(i){try{$e(i)}catch(r){e=r}}),n.__H=void 0,e&&A.__e(e,n.__v))};var Ut=typeof requestAnimationFrame=="function";function or(t){var e,n=function(){clearTimeout(i),Ut&&cancelAnimationFrame(e),setTimeout(t)},i=setTimeout(n,100);Ut&&(e=requestAnimationFrame(n))}function $e(t){var e=M,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),M=e}function Je(t){var e=M;t.__c=t.__(),M=e}function Wt(t,e){return!t||t.length!==e.length||e.some(function(n,i){return n!==t[i]})}function Vt(t,e){return typeof e=="function"?e(t):e}var et=new Map,Qt=(t,e)=>{let n=`${t}/${e}`;return et.has(n)||et.set(n,fetch(`/content/${n}`).then(i=>i.ok?i.text():"")),et.get(n)},tt=()=>location.pathname.replace(/^\/|\/$/g,"").split("/");location.hash.startsWith("#/")&&history.replaceState(null,"",location.hash.slice(1));var Kt=()=>{let[t,e]=F([]),[n,i]=F(tt()),[r,o]=F(null),[s,a]=F(""),[u,l]=F([]),[p,c]=F(!1),[h,f]=F(null);J(()=>{if(!h)return;let v=S=>{S.key==="Escape"&&f(null)};return addEventListener("keydown",v),()=>removeEventListener("keydown",v)},[h]);let m=ae(null),R=ae(null);J(()=>{let v=()=>i(tt()),S=P=>{let E=P.target.closest("a"),L=E?.getAttribute("href");!E||!L?.startsWith("/")||E.target||P.ctrlKey||P.metaKey||P.shiftKey||(P.preventDefault(),history.pushState(null,"",L),i(tt()),c(!1))};return addEventListener("popstate",v),addEventListener("click",S),ye(async()=>{let E=await(await fetch("/pages.json")).json();e(E);for(let L of E)for(let ze of L.pages)ye(()=>Qt(L.name,ze.file));for(let L of E)for(let ze of Object.keys(L.images))new Image().src=`/content/${L.name}/${ze}`}),()=>{removeEventListener("popstate",v),removeEventListener("click",S)}},[]);let y=t.find(v=>v.name===n[0])??t[0],x=y?.pages.find(v=>v.slug===n[1])??y?.pages[0],w=t.flatMap(v=>v.pages.map(S=>({section:v.name,...S}))),H=w.findIndex(v=>v.section===y?.name&&v.slug===x?.slug),I=H>0?w[H-1]:null,N=H>=0?w[H+1]??null:null;J(()=>{!y||!x||ye(async()=>{o(await Qt(y.name,x.file)),R.current?.scrollTo(0,0),document.title=`${x.title} \xB7 DayZ Server Suite`})},[y?.name,x?.file]);let D=Te(()=>!r||!y?"":T.parse(r.replace(/^#\s+.+\n/m,"")).replace(/<img src="([^"]+)"/g,(S,P)=>{if(/^[a-z]+:|^\//i.test(P))return S;let E=y.images[P],L=E?` width="${E[0]}" height="${E[1]}"`:"";return`<img src="/content/${y.name}/${P}"${L} onload="this.dataset.loaded=1"`}),[r,y]);J(()=>{if(!m.current||!y)return;for(let S of m.current.querySelectorAll("a")){let P=S.getAttribute("href")??"";if(/^[a-z]+:/i.test(P)){S.target="_blank";continue}if(/^[#/]/.test(P))continue;let E=P.replace(/\.md$/,"").replace(/^\d+-/,"");S.setAttribute("href",E.includes("/")?`/${E}`:`/${y.name}/${E}`)}let v=[];for(let S of m.current.querySelectorAll("h2, h3"))S.id=S.textContent.toLowerCase().replace(/\W+/g,"-"),v.push({id:S.id,text:S.textContent,level:Number(S.tagName[1])});l(v)},[D]);let q=s.trim().toLowerCase();return g("div",{class:$.frame,children:[g("header",{class:$.top_bar,children:[g("button",{type:"button",class:$.menu_button,"aria-label":"Pages","aria-expanded":p,onClick:()=>c(!p),children:g(ee,{name:p?"close":"menu",size:18})}),g("span",{class:$.brand_name,children:"DayZ Server Suite"})]}),p&&g("div",{class:$.backdrop,onClick:()=>c(!1)}),g("nav",{class:`${$.sidebar} ${p?$.sidebar_open:""}`,children:[g("div",{class:$.brand,children:[g("span",{class:$.brand_name,children:"DayZ Server Suite"}),g("span",{class:$.brand_sub,children:"Documentation"})]}),g(Bt,{value:s,on_input:a,placeholder:"Filter pages",suffix:g(ee,{name:"search",size:14})}),t.map(v=>{let S=v.pages.filter(P=>P.title.toLowerCase().includes(q));return S.length===0?null:g("div",{class:$.section,children:[g("div",{class:$.section_name,children:v.name}),S.map(P=>g("a",{href:`/${v.name}/${P.slug}`,class:`${$.link} ${v===y&&P===x?$.active:""}`,children:P.title},P.slug))]},v.name)})]}),g("main",{ref:R,class:$.main,children:t.length>0&&!x?g(Ht,{icon:"search",title:"No pages yet"}):g("div",{class:$.layout,children:[g("div",{class:$.content,children:[g("div",{class:$.crumb,children:[y?.name,g(ee,{name:"chevron_right",size:12}),x?.title]}),g("h1",{class:$.title,children:x?.title}),g("article",{ref:m,class:$.article,dangerouslySetInnerHTML:{__html:D},onClick:v=>{let S=v.target;S instanceof HTMLImageElement&&f({src:S.src,alt:S.alt})}}),g("div",{class:$.pager,children:[I?g("a",{class:$.pager_link,href:`/${I.section}/${I.slug}`,children:[g("span",{class:$.pager_label,children:"Previous"}),I.title]}):g("span",{}),N&&g("a",{class:`${$.pager_link} ${$.pager_next}`,href:`/${N.section}/${N.slug}`,children:[g("span",{class:$.pager_label,children:"Next"}),N.title]})]})]}),g("aside",{class:$.toc,children:u.length>0&&g(V,{children:[g("div",{class:$.toc_title,children:"On this page"}),u.map(v=>g("a",{class:`${$.toc_link} ${v.level===3?$.toc_nested:""}`,href:`#${v.id}`,onClick:S=>{S.preventDefault(),document.getElementById(v.id)?.scrollIntoView({behavior:"smooth"})},children:v.text},v.id))]})})]})}),h&&g("div",{class:$.zoom,role:"dialog","aria-label":h.alt||"Image",onClick:()=>f(null),children:[g("img",{class:$.zoom_image,src:h.src,alt:h.alt}),h.alt&&g("span",{class:$.zoom_caption,children:h.alt})]})]})},{colors:k,spacing:_}=d,sr=it`
  50% {
    background: ${k.background_control};
  }
`,$={frame:b`
    display: flex;
    height: 100%;

    @media (max-width: ${d.size.phone}) {
      flex-direction: column;
    }
  `,top_bar:b`
    display: none;

    @media (max-width: ${d.size.phone}) {
      display: flex;
      align-items: center;
      gap: ${_.small};
      flex-shrink: 0;
      padding: ${_.medium} ${_.large};
      background: ${k.background_sidebar};
      border-bottom: 1px solid ${k.border_panel};
    }
  `,menu_button:b`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${d.control_height}px;
    height: ${d.control_height}px;
    padding: 0;
    border: none;
    border-radius: ${d.radius};
    background: none;
    color: ${k.text_primary};

    &:hover {
      background: ${k.background_control_hover};
    }
  `,zoom:b`
    position: fixed;
    inset: 0;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${_.large};
    padding: ${_.page};
    background: ${k.backdrop};
    backdrop-filter: blur(4px);
    cursor: zoom-out;

    @media (max-width: ${d.size.phone}) {
      padding: ${_.medium};
      align-items: flex-start;
      overflow-x: auto;
    }
  `,zoom_image:b`
    max-width: 100%;
    max-height: 100%;
    min-height: 0;
    object-fit: contain;
    border: 1px solid ${k.border_panel};
    border-radius: ${d.radius};
    box-shadow: ${d.shadow_menu};

    @media (max-width: ${d.size.phone}) {
      height: 80%;
      max-width: none;
      max-height: none;
    }
  `,zoom_caption:b`
    ${d.text.small};
    color: ${k.text_secondary};
  `,backdrop:b`
    display: none;

    @media (max-width: ${d.size.phone}) {
      display: block;
      position: fixed;
      inset: 0;
      z-index: 1;
      background: ${k.backdrop};
    }
  `,sidebar:b`
    width: ${d.size.sidebar};
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: ${_.medium};
    padding: ${_.huge} ${_.inset};
    background: ${k.background_sidebar};
    border-right: 1px solid ${k.border_panel};
    overflow-y: auto;

    @media (max-width: ${d.size.phone}) {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      z-index: 2;
      transform: translateX(-100%);
      transition: transform 0.2s ease;
    }
  `,sidebar_open:b`
    transform: none;
  `,brand:b`
    display: flex;
    flex-direction: column;
    gap: ${_.tiny};
    padding: 0 ${_.medium} ${_.large};
  `,brand_name:b`
    ${d.text.heading};
  `,brand_sub:b`
    ${d.text.small};
    color: ${k.text_faint};
  `,section:b`
    display: flex;
    flex-direction: column;
    gap: ${_.tiny};
    padding-top: ${_.huge};
  `,section_name:b`
    ${d.text.small};
    ${d.text.bold};
    color: ${k.text_primary};
    text-transform: capitalize;
    padding: 0 ${_.medium} ${_.small};
  `,link:b`
    display: block;
    padding: ${_.small} ${_.medium};
    border-radius: ${d.radius};
    color: ${k.text_muted};
    text-decoration: none;

    &:hover {
      color: ${k.text_primary};
    }
  `,active:b`
    background: ${k.background_selected};
    color: ${k.text_primary};
  `,main:b`
    flex: 1;
    overflow-y: auto;
    scroll-behavior: smooth;
  `,layout:b`
    display: flex;
    justify-content: center;
    gap: ${_.section};
    padding: ${_.section} ${_.page};

    @media (max-width: ${d.size.phone}) {
      padding: ${_.huge} ${_.inset};
    }
  `,content:b`
    flex: 1;
    max-width: ${d.size.prose};
    min-width: 0;
  `,crumb:b`
    display: flex;
    align-items: center;
    gap: ${_.extra_small};
    ${d.text.small};
    color: ${k.text_faint};
    text-transform: capitalize;
  `,title:b`
    ${d.text.display};
    color: ${k.text_primary};
    margin: ${_.medium} 0 ${_.huge};
  `,article:b`
    ${d.text.prose};
    color: ${k.text_secondary};

    p,
    ul,
    ol {
      margin: 0 0 ${_.extra_large};
    }

    h2 {
      ${d.text.subtitle};
      color: ${k.text_primary};
      margin: ${_.section} 0 ${_.large};
      padding-top: ${_.section};
      border-top: 1px solid ${k.border_row};
    }

    h3 {
      ${d.text.heading};
      color: ${k.text_primary};
      margin: ${_.page} 0 ${_.medium};
    }

    h2,
    h3 {
      scroll-margin-top: ${_.page};
    }

    strong {
      color: ${k.text_primary};
      ${d.text.medium};
    }

    a {
      color: ${k.text_link};
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    ul,
    ol {
      padding-left: ${_.huge};
    }

    li {
      margin: ${_.extra_small} 0;
    }

    li::marker {
      color: ${k.text_faint};
    }

    li > ul {
      margin: ${_.extra_small} 0 0;
    }

    code {
      ${d.text.mono_small};
      color: ${k.text_primary};
      background: ${k.background_control};
      padding: ${_.tiny} ${_.extra_small};
      border-radius: ${d.radius_inner};
    }

    pre {
      background: ${k.background_well};
      border: 1px solid ${k.border_panel};
      border-radius: ${d.radius};
      padding: ${_.large} ${_.inset};
      overflow-x: auto;
    }

    pre code {
      background: none;
      padding: 0;
    }

    img {
      display: block;
      cursor: zoom-in;
      max-width: 100%;
      height: auto;
      border: 1px solid ${k.border_panel};
      border-radius: ${d.radius};
      background: ${k.background_panel};
      animation: ${sr} 1.4s ease-in-out infinite;
    }

    img[data-loaded] {
      animation: none;
      background: none;
    }

    blockquote {
      margin: 0 0 ${_.extra_large};
      padding: ${_.regular} ${_.inset};
      border-left: 2px solid ${k.accent};
      background: ${k.accent_soft};

      p {
        margin: 0;
      }
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin: 0 0 ${_.extra_large};
      ${d.text.small};

      @media (max-width: ${d.size.phone}) {
        display: block;
        overflow-x: auto;
      }
    }

    th {
      text-align: left;
      color: ${k.text_primary};
      ${d.text.medium};
    }

    th,
    td {
      border-bottom: 1px solid ${k.border_row};
      padding: ${_.medium} ${_.regular};
    }
  `,pager:b`
    display: flex;
    justify-content: space-between;
    gap: ${_.large};
    margin-top: ${_.section};
    padding-top: ${_.page};
    border-top: 1px solid ${k.border_row};

    @media (max-width: ${d.size.phone}) {
      flex-direction: column;
    }
  `,pager_link:b`
    display: flex;
    flex-direction: column;
    gap: ${_.tiny};
    min-width: ${d.size.input};
    padding: ${_.regular} ${_.inset};
    border: 1px solid ${k.border_panel};
    border-radius: ${d.radius};
    color: ${k.text_primary};
    text-decoration: none;

    &:hover {
      border-color: ${k.border_control};
      background: ${k.background_panel_hover};
    }
  `,pager_next:b`
    text-align: right;
  `,pager_label:b`
    ${d.text.small};
    color: ${k.text_faint};
  `,toc:b`
    position: sticky;
    top: 0;
    align-self: flex-start;
    width: ${d.size.toc};
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: ${_.tiny};
    padding-top: ${_.section};

    @media (max-width: 1100px) {
      display: none;
    }
  `,toc_title:b`
    ${d.text.small};
    ${d.text.bold};
    padding-bottom: ${_.small};
  `,toc_link:b`
    ${d.text.small};
    color: ${k.text_muted};
    text-decoration: none;
    padding: ${_.extra_small} 0;

    &:hover {
      color: ${k.text_primary};
    }
  `,toc_nested:b`
    padding-left: ${_.large};
  `};var Xt=b.bind({g:1});var{colors:le,fonts:Jt}=d;Xt`
  * {
    box-sizing: border-box;
  }

  html,
  body,
  #app {
    width: 100%;
    height: 100%;
    margin: 0;
  }

  body {
    background: ${le.background_app};
    color: ${le.text_primary};
    font-family: ${Jt.sans};
    font-size: 13px;
    line-height: 1.4;
    overflow: hidden;
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: ${le.text_primary};
  }

  button,
  input,
  select {
    font: inherit;
    color: inherit;
  }

  button {
    cursor: pointer;
  }

  code {
    font-family: ${Jt.mono};
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  ::selection {
    background: ${le.accent}55;
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${le.border_control};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }
`;ot(Ie);kt(g(Kt,{}),document.getElementById("app"));
