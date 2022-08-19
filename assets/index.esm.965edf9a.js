import{r as u,N as te,O as oe,m as j,Q as fe,c as ae,u as xe,o as he,i as ve,a as I,U as ye,_ as L,f as F,d as U,W as $,t as be,X as Me,Y as re,Z as ke,$ as Ce,a0 as _e,a1 as Ie,a2 as ge,R as A,e as K,a3 as Ee,j as q,a4 as ce,x as Y,a5 as Oe,a6 as Se,v as De,a7 as se,g as Pe,a8 as we,a9 as Ne}from"./index.c09ed305.js";import{u as Te}from"./data.c45b6d27.js";function Re(){const n=u.exports.useRef(new Map),o=n.current,e=u.exports.useCallback((s,a,r,i)=>{n.current.set(r,{type:a,el:s,options:i}),s.addEventListener(a,r,i)},[]),c=u.exports.useCallback((s,a,r,i)=>{s.removeEventListener(a,r,i),n.current.delete(r)},[]);return u.exports.useEffect(()=>()=>{o.forEach((s,a)=>{c(s.el,s.type,a,s.options)})},[c,o]),{add:e,remove:c}}function Q(n){const o=n.target,{tagName:e,isContentEditable:c}=o;return e!=="INPUT"&&e!=="TEXTAREA"&&c!==!0}function Ae(n={}){const{ref:o,isDisabled:e,isFocusable:c,clickOnEnter:s=!0,clickOnSpace:a=!0,onMouseDown:r,onMouseUp:i,onClick:l,onKeyDown:f,onKeyUp:h,tabIndex:M,onMouseOver:v,onMouseLeave:g,...D}=n,[m,_]=u.exports.useState(!0),[d,b]=u.exports.useState(!1),x=Re(),P=t=>{!t||t.tagName!=="BUTTON"&&_(!1)},w=m?M:M||0,p=e&&!c,y=u.exports.useCallback(t=>{if(e){t.stopPropagation(),t.preventDefault();return}t.currentTarget.focus(),l==null||l(t)},[e,l]),k=u.exports.useCallback(t=>{d&&Q(t)&&(t.preventDefault(),t.stopPropagation(),b(!1),x.remove(document,"keyup",k,!1))},[d,x]),R=u.exports.useCallback(t=>{if(f==null||f(t),e||t.defaultPrevented||t.metaKey||!Q(t.nativeEvent)||m)return;const z=s&&t.key==="Enter";a&&t.key===" "&&(t.preventDefault(),b(!0)),z&&(t.preventDefault(),t.currentTarget.click()),x.add(document,"keyup",k,!1)},[e,m,f,s,a,x,k]),N=u.exports.useCallback(t=>{if(h==null||h(t),e||t.defaultPrevented||t.metaKey||!Q(t.nativeEvent)||m)return;a&&t.key===" "&&(t.preventDefault(),b(!1),t.currentTarget.click())},[a,m,e,h]),E=u.exports.useCallback(t=>{t.button===0&&(b(!1),x.remove(document,"mouseup",E,!1))},[x]),T=u.exports.useCallback(t=>{if(te(t))return;if(e){t.stopPropagation(),t.preventDefault();return}m||b(!0),t.currentTarget.focus({preventScroll:!0}),x.add(document,"mouseup",E,!1),r==null||r(t)},[e,m,r,x,E]),B=u.exports.useCallback(t=>{te(t)||(m||b(!1),i==null||i(t))},[i,m]),C=u.exports.useCallback(t=>{if(e){t.preventDefault();return}v==null||v(t)},[e,v]),G=u.exports.useCallback(t=>{d&&(t.preventDefault(),b(!1)),g==null||g(t)},[d,g]),V=j(o,P);return m?{...D,ref:V,type:"button","aria-disabled":p?void 0:e,disabled:p,onClick:y,onMouseDown:r,onMouseUp:i,onKeyUp:h,onKeyDown:f,onMouseOver:v,onMouseLeave:g}:{...D,ref:V,role:"button","data-active":oe(d),"aria-disabled":e?"true":void 0,tabIndex:p?void 0:w,onClick:y,onMouseDown:T,onMouseUp:B,onKeyUp:N,onKeyDown:R,onMouseOver:C,onMouseLeave:G}}var[Le,Fe,Ue,Ke]=fe(),[Be,W]=ae({strict:!1,name:"MenuContext"});function ze(n={}){const{id:o,closeOnSelect:e=!0,closeOnBlur:c=!0,autoSelect:s=!0,isLazy:a,isOpen:r,defaultIsOpen:i,onClose:l,onOpen:f,placement:h="bottom-start",lazyBehavior:M="unmount",direction:v,computePositionOnMount:g=!1,...D}=n,m=u.exports.useRef(null),_=u.exports.useRef(null),d=Ue(),b=u.exports.useCallback(()=>{$(m.current,{nextTick:!0,selectTextIfInput:!1})},[]),x=u.exports.useCallback(()=>{const S=setTimeout(()=>{const O=d.firstEnabled();O&&T(O.index)});t.current.add(S)},[d]),P=u.exports.useCallback(()=>{const S=setTimeout(()=>{const O=d.lastEnabled();O&&T(O.index)});t.current.add(S)},[d]),w=u.exports.useCallback(()=>{f==null||f(),s?x():b()},[s,x,b,f]),{isOpen:p,onOpen:y,onClose:k,onToggle:R}=be({isOpen:r,defaultIsOpen:i,onClose:l,onOpen:w});Me({enabled:p&&c,ref:m,handler:S=>{var O;(O=_.current)!=null&&O.contains(S.target)||k()}});const N=Te({...D,enabled:p||g,placement:h,direction:v}),[E,T]=u.exports.useState(-1);re(()=>{p||T(-1)},[p]),ke(m,{focusRef:_,visible:p,shouldFocus:!0});const B=Ce({isOpen:p,ref:m}),[C,G]=_e(o,"menu-button","menu-list"),V=u.exports.useCallback(()=>{y(),b()},[y,b]),t=u.exports.useRef(new Set([]));Ie(()=>{t.current.forEach(S=>clearTimeout(S)),t.current.clear()});const z=u.exports.useCallback(()=>{y(),x()},[x,y]),X=u.exports.useCallback(()=>{y(),P()},[y,P]),ee=u.exports.useCallback(()=>{var S,O;const pe=ge(m.current),me=(S=m.current)==null?void 0:S.contains(pe.activeElement);if(!(p&&!me))return;const ne=(O=d.item(E))==null?void 0:O.node;ne&&$(ne,{selectTextIfInput:!1,preventScroll:!1})},[p,E,d]);return{openAndFocusMenu:V,openAndFocusFirstItem:z,openAndFocusLastItem:X,onTransitionEnd:ee,unstable__animationState:B,descendants:d,popper:N,buttonId:C,menuId:G,forceUpdate:N.forceUpdate,orientation:"vertical",isOpen:p,onToggle:R,onOpen:y,onClose:k,menuRef:m,buttonRef:_,focusedIndex:E,closeOnSelect:e,closeOnBlur:c,autoSelect:s,setFocusedIndex:T,isLazy:a,lazyBehavior:M}}function We(n={},o=null){const e=W(),{onToggle:c,popper:s,openAndFocusFirstItem:a,openAndFocusLastItem:r}=e,i=u.exports.useCallback(l=>{const f=ce(l),M={Enter:a,ArrowDown:a,ArrowUp:r}[f];M&&(l.preventDefault(),l.stopPropagation(),M(l))},[a,r]);return{...n,ref:j(e.buttonRef,o,s.referenceRef),id:e.buttonId,"data-active":oe(e.isOpen),"aria-expanded":e.isOpen,"aria-haspopup":"menu","aria-controls":e.menuId,onClick:Y(n.onClick,c),onKeyDown:Y(n.onKeyDown,i)}}function Z(n){var o;return we(n)&&!!((o=n.getAttribute("role"))!=null&&o.startsWith("menuitem"))}function He(n={},o=null){const e=W();if(!e)throw new Error("useMenuContext: context is undefined. Seems you forgot to wrap component within <Menu>");const{focusedIndex:c,setFocusedIndex:s,menuRef:a,isOpen:r,onClose:i,menuId:l,isLazy:f,lazyBehavior:h,unstable__animationState:M}=e,v=Fe(),g=Oe({preventDefault:d=>d.key!==" "&&Z(d.target)}),D=u.exports.useCallback(d=>{const b=ce(d),P={Tab:p=>p.preventDefault(),Escape:i,ArrowDown:()=>{const p=v.nextEnabled(c);p&&s(p.index)},ArrowUp:()=>{const p=v.prevEnabled(c);p&&s(p.index)}}[b];if(P){d.preventDefault(),P(d);return}const w=g(p=>{const y=Ne(v.values(),p,k=>{var N;var R;return(N=(R=k==null?void 0:k.node)==null?void 0:R.textContent)!=null?N:""},v.item(c));if(y){const k=v.indexOf(y.node);s(k)}});Z(d.target)&&w(d)},[v,c,g,i,s]),m=u.exports.useRef(!1);r&&(m.current=!0);const _=Se({hasBeenSelected:m.current,isLazy:f,lazyBehavior:h,isSelected:M.present});return{...n,ref:j(a,o),children:_?n.children:null,tabIndex:-1,role:"menu",id:l,style:{...n.style,transformOrigin:"var(--popper-transform-origin)"},"aria-orientation":"vertical",onKeyDown:Y(n.onKeyDown,D)}}function Ve(n={}){const{popper:o,isOpen:e}=W();return o.getPopperProps({...n,style:{visibility:e?"visible":"hidden",...n.style}})}function ue(n={},o=null){const{onMouseEnter:e,onMouseMove:c,onMouseLeave:s,onClick:a,isDisabled:r,isFocusable:i,closeOnSelect:l,type:f,...h}=n,M=W(),{setFocusedIndex:v,focusedIndex:g,closeOnSelect:D,onClose:m,menuRef:_,isOpen:d,menuId:b}=M,x=u.exports.useRef(null),P=`${b}-menuitem-${De()}`,{index:w,register:p}=Ke({disabled:r&&!i}),y=u.exports.useCallback(C=>{e==null||e(C),!r&&v(w)},[v,w,r,e]),k=u.exports.useCallback(C=>{c==null||c(C),x.current&&!se(x.current)&&y(C)},[y,c]),R=u.exports.useCallback(C=>{s==null||s(C),!r&&v(-1)},[v,r,s]),N=u.exports.useCallback(C=>{a==null||a(C),!!Z(C.currentTarget)&&(l!=null?l:D)&&m()},[m,a,D,l]),E=w===g,T=r&&!i;re(()=>{!d||(E&&!T&&x.current?$(x.current,{nextTick:!0,selectTextIfInput:!1,preventScroll:!1}):_.current&&!se(_.current)&&$(_.current,{preventScroll:!1}))},[E,T,_,d]);const B=Ae({onClick:N,onMouseEnter:y,onMouseMove:k,onMouseLeave:R,ref:j(p,x,o),isDisabled:r,isFocusable:i});return{...h,...B,type:f!=null?f:B.type,id:P,role:"menuitem",tabIndex:E?0:-1}}function $e(n={},o=null){const{type:e="radio",isChecked:c,...s}=n;return{...ue(s,o),role:`menuitem${e}`,"aria-checked":c}}var[je,H]=ae({name:"MenuStylesContext",errorMessage:`useMenuStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />" `}),Ge=n=>{const{children:o}=n,e=xe("Menu",n),c=he(n),{direction:s}=ve(),{descendants:a,...r}=ze({...c,direction:s}),i=u.exports.useMemo(()=>r,[r]),{isOpen:l,onClose:f,forceUpdate:h}=i;return I(Le,{value:a,children:I(Be,{value:i,children:I(je,{value:e,children:ye(o,{isOpen:l,onClose:f,forceUpdate:h})})})})};L&&(Ge.displayName="Menu");var Xe=F((n,o)=>{const e=H();return A.createElement(U.button,{ref:o,...n,__css:{display:"inline-flex",appearance:"none",alignItems:"center",outline:0,...e.button}})}),Qe=F((n,o)=>{const{children:e,as:c,...s}=n,a=We(s,o),r=c||Xe;return A.createElement(r,{...a,className:K("chakra-menu__menu-button",n.className)},A.createElement(U.span,{__css:{pointerEvents:"none",flex:"1 1 auto",minW:0}},n.children))});L&&(Qe.displayName="MenuButton");var Ye={enter:{visibility:"visible",opacity:1,scale:1,transition:{duration:.2,ease:[.4,0,.2,1]}},exit:{transitionEnd:{visibility:"hidden"},opacity:0,scale:.8,transition:{duration:.1,easings:"easeOut"}}};function Ze(n){const o=Pe;return"custom"in o&&typeof o.custom=="function"?o.custom(n):o(n)}var qe=Ze(U.div),Je=F((n,o)=>{var M;var e;const{rootProps:c,...s}=n,{isOpen:a,onTransitionEnd:r,unstable__animationState:i}=W(),l=He(s,o),f=Ve(c),h=H();return A.createElement(U.div,{...f,__css:{zIndex:(M=n.zIndex)!=null?M:(e=h.list)==null?void 0:e.zIndex}},I(qe,{...l,onUpdate:r,onAnimationComplete:Ee(i.onComplete,l.onAnimationComplete),className:K("chakra-menu__menu-list",l.className),variants:Ye,initial:!1,animate:a?"enter":"exit",__css:{outline:0,...h.list}}))});L&&(Je.displayName="MenuList");var ie=F((n,o)=>{const{type:e,...c}=n,s=H(),a=c.as||e?e!=null?e:void 0:"button",r=u.exports.useMemo(()=>({textDecoration:"none",color:"inherit",userSelect:"none",display:"flex",width:"100%",alignItems:"center",textAlign:"start",flex:"0 0 auto",outline:0,...s.item}),[s.item]);return A.createElement(U.button,{ref:o,type:a,...c,__css:r})}),en=F((n,o)=>{const{icon:e,iconSpacing:c="0.75rem",command:s,commandSpacing:a="0.75rem",children:r,...i}=n,l=ue(i,o),h=e||s?I("span",{style:{pointerEvents:"none",flex:1},children:r}):r;return q(ie,{...l,className:K("chakra-menu__menuitem",l.className),children:[e&&I(J,{fontSize:"0.8em",marginEnd:c,children:e}),h,s&&I(de,{marginStart:a,children:s})]})});L&&(en.displayName="MenuItem");var nn=n=>I("svg",{viewBox:"0 0 14 14",width:"1em",height:"1em",...n,children:I("polygon",{fill:"currentColor",points:"5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"})}),le=F((n,o)=>{const{icon:e,iconSpacing:c="0.75rem",...s}=n,a=$e(s,o);return q(ie,{...a,className:K("chakra-menu__menuitem-option",s.className),children:[e!==null&&I(J,{fontSize:"0.8em",marginEnd:c,opacity:n.isChecked?1:0,children:e||I(nn,{})}),I("span",{style:{flex:1},children:a.children})]})});le.id="MenuItemOption";L&&(le.displayName="MenuItemOption");var tn=F((n,o)=>{const{title:e,children:c,className:s,...a}=n,r=K("chakra-menu__group__title",s),i=H();return q("div",{ref:o,className:"chakra-menu__group",role:"group",children:[e&&A.createElement(U.p,{className:r,...a,__css:i.groupTitle},e),c]})});L&&(tn.displayName="MenuGroup");var de=F((n,o)=>{const e=H();return A.createElement(U.span,{ref:o,...n,__css:e.command,className:"chakra-menu__command"})});L&&(de.displayName="MenuCommand");var J=n=>{const{className:o,children:e,...c}=n,s=u.exports.Children.only(e),a=u.exports.isValidElement(s)?u.exports.cloneElement(s,{focusable:"false","aria-hidden":!0,className:K("chakra-menu__icon",s.props.className)}):null,r=K("chakra-menu__icon-wrapper",o);return A.createElement(U.span,{className:r,...c,__css:{flexShrink:0}},a)};L&&(J.displayName="MenuIcon");export{Ge as M,Qe as a,Je as b,en as c};
