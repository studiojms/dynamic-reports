var ye=Object.defineProperty;var Me=(e,t,n)=>t in e?ye(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var p=(e,t,n)=>(Me(e,typeof t!="symbol"?t+"":t,n),n);import{c as ne,r as i,m as W,N as ae,O as de,u as Ee,o as _e,i as ke,a as k,Q as ge,_ as U,f as F,d as K,U as $,t as Ne,W as Oe,X as fe,Y as De,Z as Se,$ as Pe,a0 as Te,a1 as we,R,e as B,a2 as Ae,j as te,a3 as me,x as q,a4 as Le,a5 as Re,v as Ue,a6 as ie,g as Fe,a7 as Ke,a8 as Be}from"./index.1134ca15.js";import{u as ze}from"./data.87a6c085.js";function ue(e){return e.sort((t,n)=>{const o=t.compareDocumentPosition(n);if(o&Node.DOCUMENT_POSITION_FOLLOWING||o&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(o&Node.DOCUMENT_POSITION_PRECEDING||o&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(o&Node.DOCUMENT_POSITION_DISCONNECTED||o&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0})}var Ve=e=>typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE;function ce(e,t,n){let o=e+1;return n&&o>=t&&(o=0),o}function le(e,t,n){let o=e-1;return n&&o<0&&(o=t),o}var J=typeof window<"u"?i.exports.useLayoutEffect:i.exports.useEffect,X=e=>e,We=class{constructor(){p(this,"descendants",new Map);p(this,"register",e=>{if(e!=null)return Ve(e)?this.registerNode(e):t=>{this.registerNode(t,e)}});p(this,"unregister",e=>{this.descendants.delete(e);const t=ue(Array.from(this.descendants.keys()));this.assignIndex(t)});p(this,"destroy",()=>{this.descendants.clear()});p(this,"assignIndex",e=>{this.descendants.forEach(t=>{const n=e.indexOf(t.node);t.index=n,t.node.dataset.index=t.index.toString()})});p(this,"count",()=>this.descendants.size);p(this,"enabledCount",()=>this.enabledValues().length);p(this,"values",()=>Array.from(this.descendants.values()).sort((t,n)=>t.index-n.index));p(this,"enabledValues",()=>this.values().filter(e=>!e.disabled));p(this,"item",e=>{if(this.count()!==0)return this.values()[e]});p(this,"enabledItem",e=>{if(this.enabledCount()!==0)return this.enabledValues()[e]});p(this,"first",()=>this.item(0));p(this,"firstEnabled",()=>this.enabledItem(0));p(this,"last",()=>this.item(this.descendants.size-1));p(this,"lastEnabled",()=>{const e=this.enabledValues().length-1;return this.enabledItem(e)});p(this,"indexOf",e=>{var n;var t;return e&&(n=(t=this.descendants.get(e))==null?void 0:t.index)!=null?n:-1});p(this,"enabledIndexOf",e=>e==null?-1:this.enabledValues().findIndex(t=>t.node.isSameNode(e)));p(this,"next",(e,t=!0)=>{const n=ce(e,this.count(),t);return this.item(n)});p(this,"nextEnabled",(e,t=!0)=>{const n=this.item(e);if(!n)return;const o=this.enabledIndexOf(n.node),s=ce(o,this.enabledCount(),t);return this.enabledItem(s)});p(this,"prev",(e,t=!0)=>{const n=le(e,this.count()-1,t);return this.item(n)});p(this,"prevEnabled",(e,t=!0)=>{const n=this.item(e);if(!n)return;const o=this.enabledIndexOf(n.node),s=le(o,this.enabledCount()-1,t);return this.enabledItem(s)});p(this,"registerNode",(e,t)=>{if(!e||this.descendants.has(e))return;const n=Array.from(this.descendants.keys()).concat(e),o=ue(n);t!=null&&t.disabled&&(t.disabled=!!t.disabled);const s={node:e,index:-1,...t};this.descendants.set(e,s),this.assignIndex(o)})}};function je(){const e=i.exports.useRef(new We);return J(()=>()=>e.current.destroy()),e.current}var[Ge,pe]=ne({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"});function He(e){const t=pe(),[n,o]=i.exports.useState(-1),s=i.exports.useRef(null);J(()=>()=>{!s.current||t.unregister(s.current)},[]),J(()=>{if(!s.current)return;const a=Number(s.current.dataset.index);n!=a&&!Number.isNaN(a)&&o(a)});const u=X(e?t.register(e):t.register);return{descendants:t,index:n,enabledIndex:t.enabledIndexOf(s.current),register:W(u,s)}}function $e(){return[X(Ge),()=>X(pe()),()=>je(),s=>He(s)]}function Xe(){const e=i.exports.useRef(new Map),t=e.current,n=i.exports.useCallback((s,u,a,c)=>{e.current.set(a,{type:u,el:s,options:c}),s.addEventListener(u,a,c)},[]),o=i.exports.useCallback((s,u,a,c)=>{s.removeEventListener(u,a,c),e.current.delete(a)},[]);return i.exports.useEffect(()=>()=>{t.forEach((s,u)=>{o(s.el,s.type,u,s.options)})},[o,t]),{add:n,remove:o}}function Z(e){const t=e.target,{tagName:n,isContentEditable:o}=t;return n!=="INPUT"&&n!=="TEXTAREA"&&o!==!0}function Ye(e={}){const{ref:t,isDisabled:n,isFocusable:o,clickOnEnter:s=!0,clickOnSpace:u=!0,onMouseDown:a,onMouseUp:c,onClick:l,onKeyDown:x,onKeyUp:b,tabIndex:y,onMouseOver:v,onMouseLeave:g,...S}=e,[m,_]=i.exports.useState(!0),[d,C]=i.exports.useState(!1),h=Xe(),P=r=>{!r||r.tagName!=="BUTTON"&&_(!1)},T=m?y:y||0,f=n&&!o,I=i.exports.useCallback(r=>{if(n){r.stopPropagation(),r.preventDefault();return}r.currentTarget.focus(),l==null||l(r)},[n,l]),M=i.exports.useCallback(r=>{d&&Z(r)&&(r.preventDefault(),r.stopPropagation(),C(!1),h.remove(document,"keyup",M,!1))},[d,h]),L=i.exports.useCallback(r=>{if(x==null||x(r),n||r.defaultPrevented||r.metaKey||!Z(r.nativeEvent)||m)return;const V=s&&r.key==="Enter";u&&r.key===" "&&(r.preventDefault(),C(!0)),V&&(r.preventDefault(),r.currentTarget.click()),h.add(document,"keyup",M,!1)},[n,m,x,s,u,h,M]),w=i.exports.useCallback(r=>{if(b==null||b(r),n||r.defaultPrevented||r.metaKey||!Z(r.nativeEvent)||m)return;u&&r.key===" "&&(r.preventDefault(),C(!1),r.currentTarget.click())},[u,m,n,b]),N=i.exports.useCallback(r=>{r.button===0&&(C(!1),h.remove(document,"mouseup",N,!1))},[h]),A=i.exports.useCallback(r=>{if(ae(r))return;if(n){r.stopPropagation(),r.preventDefault();return}m||C(!0),r.currentTarget.focus({preventScroll:!0}),h.add(document,"mouseup",N,!1),a==null||a(r)},[n,m,a,h,N]),z=i.exports.useCallback(r=>{ae(r)||(m||C(!1),c==null||c(r))},[c,m]),E=i.exports.useCallback(r=>{if(n){r.preventDefault();return}v==null||v(r)},[n,v]),Y=i.exports.useCallback(r=>{d&&(r.preventDefault(),C(!1)),g==null||g(r)},[d,g]),H=W(t,P);return m?{...S,ref:H,type:"button","aria-disabled":f?void 0:n,disabled:f,onClick:I,onMouseDown:a,onMouseUp:c,onKeyUp:b,onKeyDown:x,onMouseOver:v,onMouseLeave:g}:{...S,ref:H,role:"button","data-active":de(d),"aria-disabled":n?"true":void 0,tabIndex:f?void 0:T,onClick:I,onMouseDown:A,onMouseUp:z,onKeyUp:w,onKeyDown:L,onMouseOver:E,onMouseLeave:Y}}var[Qe,Ze,qe,Je]=$e(),[en,j]=ne({strict:!1,name:"MenuContext"});function nn(e={}){const{id:t,closeOnSelect:n=!0,closeOnBlur:o=!0,autoSelect:s=!0,isLazy:u,isOpen:a,defaultIsOpen:c,onClose:l,onOpen:x,placement:b="bottom-start",lazyBehavior:y="unmount",direction:v,computePositionOnMount:g=!1,...S}=e,m=i.exports.useRef(null),_=i.exports.useRef(null),d=qe(),C=i.exports.useCallback(()=>{$(m.current,{nextTick:!0,selectTextIfInput:!1})},[]),h=i.exports.useCallback(()=>{const D=setTimeout(()=>{const O=d.firstEnabled();O&&A(O.index)});r.current.add(D)},[d]),P=i.exports.useCallback(()=>{const D=setTimeout(()=>{const O=d.lastEnabled();O&&A(O.index)});r.current.add(D)},[d]),T=i.exports.useCallback(()=>{x==null||x(),s?h():C()},[s,h,C,x]),{isOpen:f,onOpen:I,onClose:M,onToggle:L}=Ne({isOpen:a,defaultIsOpen:c,onClose:l,onOpen:T});Oe({enabled:f&&o,ref:m,handler:D=>{var O;(O=_.current)!=null&&O.contains(D.target)||M()}});const w=ze({...S,enabled:f||g,placement:b,direction:v}),[N,A]=i.exports.useState(-1);fe(()=>{f||A(-1)},[f]),De(m,{focusRef:_,visible:f,shouldFocus:!0});const z=Se({isOpen:f,ref:m}),[E,Y]=Pe(t,"menu-button","menu-list"),H=i.exports.useCallback(()=>{I(),C()},[I,C]),r=i.exports.useRef(new Set([]));Te(()=>{r.current.forEach(D=>clearTimeout(D)),r.current.clear()});const V=i.exports.useCallback(()=>{I(),h()},[h,I]),Q=i.exports.useCallback(()=>{I(),P()},[I,P]),oe=i.exports.useCallback(()=>{var D,O;const Ie=we(m.current),Ce=(D=m.current)==null?void 0:D.contains(Ie.activeElement);if(!(f&&!Ce))return;const re=(O=d.item(N))==null?void 0:O.node;re&&$(re,{selectTextIfInput:!1,preventScroll:!1})},[f,N,d]);return{openAndFocusMenu:H,openAndFocusFirstItem:V,openAndFocusLastItem:Q,onTransitionEnd:oe,unstable__animationState:z,descendants:d,popper:w,buttonId:E,menuId:Y,forceUpdate:w.forceUpdate,orientation:"vertical",isOpen:f,onToggle:L,onOpen:I,onClose:M,menuRef:m,buttonRef:_,focusedIndex:N,closeOnSelect:n,closeOnBlur:o,autoSelect:s,setFocusedIndex:A,isLazy:u,lazyBehavior:y}}function tn(e={},t=null){const n=j(),{onToggle:o,popper:s,openAndFocusFirstItem:u,openAndFocusLastItem:a}=n,c=i.exports.useCallback(l=>{const x=me(l),y={Enter:u,ArrowDown:u,ArrowUp:a}[x];y&&(l.preventDefault(),l.stopPropagation(),y(l))},[u,a]);return{...e,ref:W(n.buttonRef,t,s.referenceRef),id:n.buttonId,"data-active":de(n.isOpen),"aria-expanded":n.isOpen,"aria-haspopup":"menu","aria-controls":n.menuId,onClick:q(e.onClick,o),onKeyDown:q(e.onKeyDown,c)}}function ee(e){var t;return Ke(e)&&!!((t=e.getAttribute("role"))!=null&&t.startsWith("menuitem"))}function sn(e={},t=null){const n=j();if(!n)throw new Error("useMenuContext: context is undefined. Seems you forgot to wrap component within <Menu>");const{focusedIndex:o,setFocusedIndex:s,menuRef:u,isOpen:a,onClose:c,menuId:l,isLazy:x,lazyBehavior:b,unstable__animationState:y}=n,v=Ze(),g=Le({preventDefault:d=>d.key!==" "&&ee(d.target)}),S=i.exports.useCallback(d=>{const C=me(d),P={Tab:f=>f.preventDefault(),Escape:c,ArrowDown:()=>{const f=v.nextEnabled(o);f&&s(f.index)},ArrowUp:()=>{const f=v.prevEnabled(o);f&&s(f.index)}}[C];if(P){d.preventDefault(),P(d);return}const T=g(f=>{const I=Be(v.values(),f,M=>{var w;var L;return(w=(L=M==null?void 0:M.node)==null?void 0:L.textContent)!=null?w:""},v.item(o));if(I){const M=v.indexOf(I.node);s(M)}});ee(d.target)&&T(d)},[v,o,g,c,s]),m=i.exports.useRef(!1);a&&(m.current=!0);const _=Re({hasBeenSelected:m.current,isLazy:x,lazyBehavior:b,isSelected:y.present});return{...e,ref:W(u,t),children:_?e.children:null,tabIndex:-1,role:"menu",id:l,style:{...e.style,transformOrigin:"var(--popper-transform-origin)"},"aria-orientation":"vertical",onKeyDown:q(e.onKeyDown,S)}}function on(e={}){const{popper:t,isOpen:n}=j();return t.getPopperProps({...e,style:{visibility:n?"visible":"hidden",...e.style}})}function xe(e={},t=null){const{onMouseEnter:n,onMouseMove:o,onMouseLeave:s,onClick:u,isDisabled:a,isFocusable:c,closeOnSelect:l,type:x,...b}=e,y=j(),{setFocusedIndex:v,focusedIndex:g,closeOnSelect:S,onClose:m,menuRef:_,isOpen:d,menuId:C}=y,h=i.exports.useRef(null),P=`${C}-menuitem-${Ue()}`,{index:T,register:f}=Je({disabled:a&&!c}),I=i.exports.useCallback(E=>{n==null||n(E),!a&&v(T)},[v,T,a,n]),M=i.exports.useCallback(E=>{o==null||o(E),h.current&&!ie(h.current)&&I(E)},[I,o]),L=i.exports.useCallback(E=>{s==null||s(E),!a&&v(-1)},[v,a,s]),w=i.exports.useCallback(E=>{u==null||u(E),!!ee(E.currentTarget)&&(l!=null?l:S)&&m()},[m,u,S,l]),N=T===g,A=a&&!c;fe(()=>{!d||(N&&!A&&h.current?$(h.current,{nextTick:!0,selectTextIfInput:!1,preventScroll:!1}):_.current&&!ie(_.current)&&$(_.current,{preventScroll:!1}))},[N,A,_,d]);const z=Ye({onClick:w,onMouseEnter:I,onMouseMove:M,onMouseLeave:L,ref:W(f,h,t),isDisabled:a,isFocusable:c});return{...b,...z,type:x!=null?x:z.type,id:P,role:"menuitem",tabIndex:N?0:-1}}function rn(e={},t=null){const{type:n="radio",isChecked:o,...s}=e;return{...xe(s,t),role:`menuitem${n}`,"aria-checked":o}}var[an,G]=ne({name:"MenuStylesContext",errorMessage:`useMenuStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />" `}),un=e=>{const{children:t}=e,n=Ee("Menu",e),o=_e(e),{direction:s}=ke(),{descendants:u,...a}=nn({...o,direction:s}),c=i.exports.useMemo(()=>a,[a]),{isOpen:l,onClose:x,forceUpdate:b}=c;return k(Qe,{value:u,children:k(en,{value:c,children:k(an,{value:n,children:ge(t,{isOpen:l,onClose:x,forceUpdate:b})})})})};U&&(un.displayName="Menu");var cn=F((e,t)=>{const n=G();return R.createElement(K.button,{ref:t,...e,__css:{display:"inline-flex",appearance:"none",alignItems:"center",outline:0,...n.button}})}),ln=F((e,t)=>{const{children:n,as:o,...s}=e,u=tn(s,t),a=o||cn;return R.createElement(a,{...u,className:B("chakra-menu__menu-button",e.className)},R.createElement(K.span,{__css:{pointerEvents:"none",flex:"1 1 auto",minW:0}},e.children))});U&&(ln.displayName="MenuButton");var dn={enter:{visibility:"visible",opacity:1,scale:1,transition:{duration:.2,ease:[.4,0,.2,1]}},exit:{transitionEnd:{visibility:"hidden"},opacity:0,scale:.8,transition:{duration:.1,easings:"easeOut"}}};function fn(e){const t=Fe;return"custom"in t&&typeof t.custom=="function"?t.custom(e):t(e)}var mn=fn(K.div),pn=F((e,t)=>{var y;var n;const{rootProps:o,...s}=e,{isOpen:u,onTransitionEnd:a,unstable__animationState:c}=j(),l=sn(s,t),x=on(o),b=G();return R.createElement(K.div,{...x,__css:{zIndex:(y=e.zIndex)!=null?y:(n=b.list)==null?void 0:n.zIndex}},k(mn,{...l,onUpdate:a,onAnimationComplete:Ae(c.onComplete,l.onAnimationComplete),className:B("chakra-menu__menu-list",l.className),variants:dn,initial:!1,animate:u?"enter":"exit",__css:{outline:0,...b.list}}))});U&&(pn.displayName="MenuList");var he=F((e,t)=>{const{type:n,...o}=e,s=G(),u=o.as||n?n!=null?n:void 0:"button",a=i.exports.useMemo(()=>({textDecoration:"none",color:"inherit",userSelect:"none",display:"flex",width:"100%",alignItems:"center",textAlign:"start",flex:"0 0 auto",outline:0,...s.item}),[s.item]);return R.createElement(K.button,{ref:t,type:u,...o,__css:a})}),xn=F((e,t)=>{const{icon:n,iconSpacing:o="0.75rem",command:s,commandSpacing:u="0.75rem",children:a,...c}=e,l=xe(c,t),b=n||s?k("span",{style:{pointerEvents:"none",flex:1},children:a}):a;return te(he,{...l,className:B("chakra-menu__menuitem",l.className),children:[n&&k(se,{fontSize:"0.8em",marginEnd:o,children:n}),b,s&&k(ve,{marginStart:u,children:s})]})});U&&(xn.displayName="MenuItem");var hn=e=>k("svg",{viewBox:"0 0 14 14",width:"1em",height:"1em",...e,children:k("polygon",{fill:"currentColor",points:"5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"})}),be=F((e,t)=>{const{icon:n,iconSpacing:o="0.75rem",...s}=e,u=rn(s,t);return te(he,{...u,className:B("chakra-menu__menuitem-option",s.className),children:[n!==null&&k(se,{fontSize:"0.8em",marginEnd:o,opacity:e.isChecked?1:0,children:n||k(hn,{})}),k("span",{style:{flex:1},children:u.children})]})});be.id="MenuItemOption";U&&(be.displayName="MenuItemOption");var bn=F((e,t)=>{const{title:n,children:o,className:s,...u}=e,a=B("chakra-menu__group__title",s),c=G();return te("div",{ref:t,className:"chakra-menu__group",role:"group",children:[n&&R.createElement(K.p,{className:a,...u,__css:c.groupTitle},n),o]})});U&&(bn.displayName="MenuGroup");var ve=F((e,t)=>{const n=G();return R.createElement(K.span,{ref:t,...e,__css:n.command,className:"chakra-menu__command"})});U&&(ve.displayName="MenuCommand");var se=e=>{const{className:t,children:n,...o}=e,s=i.exports.Children.only(n),u=i.exports.isValidElement(s)?i.exports.cloneElement(s,{focusable:"false","aria-hidden":!0,className:B("chakra-menu__icon",s.props.className)}):null,a=B("chakra-menu__icon-wrapper",t);return R.createElement(K.span,{className:a,...o,__css:{flexShrink:0}},u)};U&&(se.displayName="MenuIcon");export{un as M,ln as a,pn as b,xn as c,$e as d};
