(window.webpackJsonp=window.webpackJsonp||[]).push([[14,45],{100:function(n,t,e){"use strict";e.d(t,"a",(function(){return _})),e.d(t,"b",(function(){return u})),e.d(t,"c",(function(){return l})),e.d(t,"d",(function(){return p})),e.d(t,"e",(function(){return k})),e.d(t,"f",(function(){return m})),e.d(t,"g",(function(){return j})),e.d(t,"h",(function(){return S})),e.d(t,"i",(function(){return c})),e.d(t,"j",(function(){return q})),e.d(t,"k",(function(){return f})),e.d(t,"l",(function(){return L}));var i=e(10),r=e(12),o=e(95),a=e(98),s=0,c=new WeakMap,d=function(n){return{create:function(t){return h(n,t)},dismiss:function(t,e,i){return x(document,t,e,n,i)},getTop:function(){return Object(i.a)(this,void 0,void 0,(function(){return Object(i.c)(this,(function(t){return[2,w(document,n)]}))}))}}},u=d("ion-alert"),l=d("ion-action-sheet"),f=d("ion-picker"),p=d("ion-popover"),m=function(n){"undefined"!=typeof document&&y(document);var t=s++;n.overlayIndex=t,n.hasAttribute("id")||(n.id="ion-overlay-"+t)},h=function(n,t){return"undefined"!=typeof customElements?customElements.whenDefined(n).then((function(){var e=document.createElement(n);return e.classList.add("overlay-hidden"),Object.assign(e,t),E(document).appendChild(e),e.componentOnReady()})):Promise.resolve()},g='[tabindex]:not([tabindex^="-"]), input:not([type=hidden]):not([tabindex^="-"]), textarea:not([tabindex^="-"]), button:not([tabindex^="-"]), select:not([tabindex^="-"]), .ion-focusable:not([tabindex^="-"])',b="input:not([type=hidden]), textarea, button, select",v=function(n,t){var e,i,r,a=w(t),s=n.target;if(a&&s)if(a===s)a.lastFocus=void 0;else{var c=Object(o.g)(a);if(!c.contains(s))return;var d=c.querySelector(".ion-overlay-wrapper");if(!d)return;if(d.contains(s))a.lastFocus=s;else{var u=a.lastFocus;e=a,i=d.querySelector(g),(r=i&&i.shadowRoot)&&(i=r.querySelector(b)||i),i?i.focus():e.focus(),u===t.activeElement&&function(n,t){var e=Array.from(n.querySelectorAll(g)),i=e.length>0?e[e.length-1]:null,r=i&&i.shadowRoot;r&&(i=r.querySelector(b)||i),i?i.focus():t.focus()}(d,a),a.lastFocus=t.activeElement}}},y=function(n){0===s&&(s=1,n.addEventListener("focus",(function(t){return v(t,n)}),!0),n.addEventListener("ionBackButton",(function(t){var e=w(n);e&&e.backdropDismiss&&t.detail.register(a.OVERLAY_BACK_BUTTON_PRIORITY,(function(){return e.dismiss(void 0,_)}))})),n.addEventListener("keyup",(function(t){if("Escape"===t.key){var e=w(n);e&&e.backdropDismiss&&e.dismiss(void 0,_)}})))},x=function(n,t,e,i,r){var o=w(n,i,r);return o?o.dismiss(t,e):Promise.reject("overlay does not exist")},w=function(n,t,e){var i=function(n,t){return void 0===t&&(t="ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast"),Array.from(n.querySelectorAll(t)).filter((function(n){return n.overlayIndex>0}))}(n,t);return void 0===e?i[i.length-1]:i.find((function(n){return n.id===e}))},k=function(n,t,e,o,a){return Object(i.a)(void 0,void 0,void 0,(function(){var s,c;return Object(i.c)(this,(function(i){switch(i.label){case 0:return n.presented?[2]:(n.presented=!0,n.willPresent.emit(),s=Object(r.b)(n),c=n.enterAnimation?n.enterAnimation:r.c.get(t,"ios"===s?e:o),[4,T(n,c,n.el,a)]);case 1:return i.sent()&&n.didPresent.emit(),"ION-TOAST"!==n.el.tagName&&O(n.el),n.keyboardClose&&n.el.focus(),[2]}}))}))},O=function(n){return Object(i.a)(void 0,void 0,void 0,(function(){var t,e;return Object(i.c)(this,(function(i){switch(i.label){case 0:return(t=document.activeElement)?((e=t&&t.shadowRoot)&&(t=e.querySelector(b)||t),[4,n.onDidDismiss()]):[2];case 1:return i.sent(),t.focus(),[2]}}))}))},j=function(n,t,e,o,a,s,d){return Object(i.a)(void 0,void 0,void 0,(function(){var u,l,f;return Object(i.c)(this,(function(i){switch(i.label){case 0:if(!n.presented)return[2,!1];n.presented=!1,i.label=1;case 1:return i.trys.push([1,4,,5]),n.el.style.setProperty("pointer-events","none"),n.willDismiss.emit({data:t,role:e}),u=Object(r.b)(n),l=n.leaveAnimation?n.leaveAnimation:r.c.get(o,"ios"===u?a:s),"gesture"===e?[3,3]:[4,T(n,l,n.el,d)];case 2:i.sent(),i.label=3;case 3:return n.didDismiss.emit({data:t,role:e}),c.delete(n),[3,5];case 4:return f=i.sent(),console.error(f),[3,5];case 5:return n.el.remove(),[2,!0]}}))}))},E=function(n){return n.querySelector("ion-app")||n.body},T=function(n,t,e,o){return Object(i.a)(void 0,void 0,void 0,(function(){var a,s,d;return Object(i.c)(this,(function(u){switch(u.label){case 0:return e.classList.remove("overlay-hidden"),a=e.shadowRoot||n.el,s=t(a,o),n.animated&&r.c.getBoolean("animated",!0)||s.duration(0),n.keyboardClose&&s.beforeAddWrite((function(){var n=e.ownerDocument.activeElement;n&&n.matches("input, ion-input, ion-textarea")&&n.blur()})),d=c.get(n)||[],c.set(n,Object(i.d)(d,[s])),[4,s.play()];case 1:return u.sent(),[2,!0]}}))}))},S=function(n,t){var e,i=new Promise((function(n){return e=n}));return A(n,t,(function(n){e(n.detail)})),i},A=function(n,t,e){var i=function(r){n.removeEventListener(t,i),e(r)};n.addEventListener(t,i)},q=function(n){return"cancel"===n||n===_},D=function(n){return n()},L=function(n,t){if("function"==typeof n)return r.c.get("_zoneGate",D)((function(){try{return n(t)}catch(n){console.error(n)}}))},_="backdrop"},103:function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var i=function(n){try{if(n instanceof d)return n.value;if(!a()||"string"!=typeof n||""===n)return n;var t=document.createDocumentFragment(),e=document.createElement("div");t.appendChild(e),e.innerHTML=n,c.forEach((function(n){for(var e=t.querySelectorAll(n),i=e.length-1;i>=0;i--){var a=e[i];a.parentNode?a.parentNode.removeChild(a):t.removeChild(a);for(var s=o(a),c=0;c<s.length;c++)r(s[c])}}));for(var i=o(t),s=0;s<i.length;s++)r(i[s]);var u=document.createElement("div");u.appendChild(t);var l=u.querySelector("div");return null!==l?l.innerHTML:u.innerHTML}catch(n){return console.error(n),""}},r=function(n){if(!n.nodeType||1===n.nodeType){for(var t=n.attributes.length-1;t>=0;t--){var e=n.attributes.item(t),i=e.name;if(s.includes(i.toLowerCase())){var a=e.value;null!=a&&a.toLowerCase().includes("javascript:")&&n.removeAttribute(i)}else n.removeAttribute(i)}var c=o(n);for(t=0;t<c.length;t++)r(c[t])}},o=function(n){return null!=n.children?n.children:n.childNodes},a=function(){var n=window,t=n&&n.Ionic&&n.Ionic.config;return!t||(t.get?t.get("sanitizerEnabled",!0):!0===t.sanitizerEnabled||void 0===t.sanitizerEnabled)},s=["class","id","href","src","name","slot"],c=["script","style","iframe","meta","link","object","embed"],d=function(n){this.value=n}},68:function(n,t,e){"use strict";e.r(t),e.d(t,"ion_loading",(function(){return m}));var i=e(10),r=e(3),o=e(12),a=(e(95),e(101)),s=e(103),c=(e(98),e(100)),d=e(96),u=function(n){var t=Object(a.a)(),e=Object(a.a)(),i=Object(a.a)();return e.addElement(n.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),i.addElement(n.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),t.addElement(n).easing("ease-in-out").duration(200).addAnimation([e,i])},l=function(n){var t=Object(a.a)(),e=Object(a.a)(),i=Object(a.a)();return e.addElement(n.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i.addElement(n.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),t.addElement(n).easing("ease-in-out").duration(200).addAnimation([e,i])},f=function(n){var t=Object(a.a)(),e=Object(a.a)(),i=Object(a.a)();return e.addElement(n.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),i.addElement(n.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),t.addElement(n).easing("ease-in-out").duration(200).addAnimation([e,i])},p=function(n){var t=Object(a.a)(),e=Object(a.a)(),i=Object(a.a)();return e.addElement(n.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i.addElement(n.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),t.addElement(n).easing("ease-in-out").duration(200).addAnimation([e,i])},m=function(){function n(n){var t=this;Object(r.q)(this,n),this.didPresent=Object(r.i)(this,"ionLoadingDidPresent",7),this.willPresent=Object(r.i)(this,"ionLoadingWillPresent",7),this.willDismiss=Object(r.i)(this,"ionLoadingWillDismiss",7),this.didDismiss=Object(r.i)(this,"ionLoadingDidDismiss",7),this.presented=!1,this.keyboardClose=!0,this.duration=0,this.backdropDismiss=!1,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onBackdropTap=function(){t.dismiss(void 0,c.a)}}return n.prototype.connectedCallback=function(){Object(c.f)(this.el)},n.prototype.componentWillLoad=function(){if(void 0===this.spinner){var n=Object(o.b)(this);this.spinner=o.c.get("loadingSpinner",o.c.get("spinner","ios"===n?"lines":"crescent"))}},n.prototype.present=function(){return Object(i.a)(this,void 0,void 0,(function(){var n=this;return Object(i.c)(this,(function(t){switch(t.label){case 0:return[4,Object(c.e)(this,"loadingEnter",u,f,void 0)];case 1:return t.sent(),this.duration>0&&(this.durationTimeout=setTimeout((function(){return n.dismiss()}),this.duration+10)),[2]}}))}))},n.prototype.dismiss=function(n,t){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(c.g)(this,n,t,"loadingLeave",l,p)},n.prototype.onDidDismiss=function(){return Object(c.h)(this.el,"ionLoadingDidDismiss")},n.prototype.onWillDismiss=function(){return Object(c.h)(this.el,"ionLoadingWillDismiss")},n.prototype.render=function(){var n,t=this.message,e=this.spinner,i=Object(o.b)(this);return Object(r.l)(r.c,{onIonBackdropTap:this.onBackdropTap,tabindex:"-1",style:{zIndex:""+(4e4+this.overlayIndex)},class:Object.assign(Object.assign({},Object(d.b)(this.cssClass)),(n={},n[i]=!0,n["loading-translucent"]=this.translucent,n))},Object(r.l)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),Object(r.l)("div",{tabindex:"0"}),Object(r.l)("div",{class:"loading-wrapper ion-overlay-wrapper",role:"dialog"},e&&Object(r.l)("div",{class:"loading-spinner"},Object(r.l)("ion-spinner",{name:e,"aria-hidden":"true"})),t&&Object(r.l)("div",{class:"loading-content",innerHTML:Object(s.a)(t)})),Object(r.l)("div",{tabindex:"0"}))},Object.defineProperty(n.prototype,"el",{get:function(){return Object(r.m)(this)},enumerable:!1,configurable:!0}),n}();m.style={ios:".sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-lines.sc-ion-loading-ios,.spinner-lines-small.sc-ion-loading-ios,.spinner-bubbles.sc-ion-loading-ios,.spinner-circles.sc-ion-loading-ios,.spinner-crescent.sc-ion-loading-ios,.spinner-dots.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, #f9f9f9));--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600, #666666);--backdrop-opacity:var(--ion-backdrop-opacity, 0.3);color:var(--ion-text-color, #000);font-size:14px}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;padding-left:34px;padding-right:34px;padding-top:24px;padding-bottom:24px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-wrapper.sc-ion-loading-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px}}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.loading-translucent.sc-ion-loading-ios-h .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.loading-content.sc-ion-loading-ios{font-weight:bold}.loading-spinner.sc-ion-loading-ios+.loading-content.sc-ion-loading-ios{margin-left:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-spinner.sc-ion-loading-ios+.loading-content.sc-ion-loading-ios{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}",md:".sc-ion-loading-md-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-md-h{display:none}.loading-wrapper.sc-ion-loading-md{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-lines.sc-ion-loading-md,.spinner-lines-small.sc-ion-loading-md,.spinner-bubbles.sc-ion-loading-md,.spinner-circles.sc-ion-loading-md,.spinner-crescent.sc-ion-loading-md,.spinner-dots.sc-ion-loading-md{color:var(--spinner-color)}.sc-ion-loading-md-h{--background:var(--ion-color-step-50, #f2f2f2);--max-width:280px;--max-height:90%;--spinner-color:var(--ion-color-primary, #3880ff);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);color:var(--ion-color-step-850, #262626);font-size:14px}.loading-wrapper.sc-ion-loading-md{border-radius:2px;padding-left:24px;padding-right:24px;padding-top:24px;padding-bottom:24px;-webkit-box-shadow:0 16px 20px rgba(0, 0, 0, 0.4);box-shadow:0 16px 20px rgba(0, 0, 0, 0.4)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-wrapper.sc-ion-loading-md{padding-left:unset;padding-right:unset;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px}}.loading-spinner.sc-ion-loading-md+.loading-content.sc-ion-loading-md{margin-left:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-spinner.sc-ion-loading-md+.loading-content.sc-ion-loading-md{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}"}},95:function(n,t,e){"use strict";e.d(t,"a",(function(){return c})),e.d(t,"b",(function(){return u})),e.d(t,"c",(function(){return d})),e.d(t,"d",(function(){return m})),e.d(t,"e",(function(){return h})),e.d(t,"f",(function(){return s})),e.d(t,"g",(function(){return r})),e.d(t,"h",(function(){return a})),e.d(t,"i",(function(){return p})),e.d(t,"j",(function(){return l})),e.d(t,"k",(function(){return f})),e.d(t,"l",(function(){return o}));var i=e(10),r=function(n,t){return void 0===t&&(t=n),n.shadowRoot||t},o=function(n){return"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(n):"function"==typeof requestAnimationFrame?requestAnimationFrame(n):setTimeout(n)},a=function(n){return!!n.shadowRoot&&!!n.attachShadow},s=function(n){var t=n.closest("ion-item");return t?t.querySelector("ion-label"):null},c=function(n,t,e,i,r){if(n||a(t)){var o=t.querySelector("input.aux-input");o||((o=t.ownerDocument.createElement("input")).type="hidden",o.classList.add("aux-input"),t.appendChild(o)),o.disabled=r,o.name=e,o.value=i||""}},d=function(n,t,e){return Math.max(n,Math.min(t,e))},u=function(n,t){if(!n){var e="ASSERT: "+t;throw console.error(e),new Error(e)}},l=function(n){return n.timeStamp||Date.now()},f=function(n){if(n){var t=n.changedTouches;if(t&&t.length>0){var e=t[0];return{x:e.clientX,y:e.clientY}}if(void 0!==n.pageX)return{x:n.pageX,y:n.pageY}}return{x:0,y:0}},p=function(n){var t="rtl"===document.dir;switch(n){case"start":return t;case"end":return!t;default:throw new Error('"'+n+'" is not a valid value for [side]. Use "start" or "end" instead.')}},m=function(n,t){var e=n._original||n;return{_original:n,emit:h(e.emit.bind(e),t)}},h=function(n,t){var e;return void 0===t&&(t=0),function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];clearTimeout(e),e=setTimeout.apply(void 0,Object(i.d)([n,t],r))}}},96:function(n,t,e){"use strict";e.d(t,"a",(function(){return o})),e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return r})),e.d(t,"d",(function(){return c}));var i=e(10),r=function(n,t){return null!==t.closest(n)},o=function(n,t){var e;return"string"==typeof n&&n.length>0?Object.assign(((e={"ion-color":!0})["ion-color-"+n]=!0,e),t):t},a=function(n){var t={};return function(n){return void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter((function(n){return null!=n})).map((function(n){return n.trim()})).filter((function(n){return""!==n})):[]}(n).forEach((function(n){return t[n]=!0})),t},s=/^[a-z][a-z0-9+\-.]*:/,c=function(n,t,e,r){return Object(i.a)(void 0,void 0,void 0,(function(){var o;return Object(i.c)(this,(function(i){return null!=n&&"#"!==n[0]&&!s.test(n)&&(o=document.querySelector("ion-router"))?(null!=t&&t.preventDefault(),[2,o.push(n,e,r)]):[2,!1]}))}))}},98:function(n,t,e){"use strict";e.r(t),e.d(t,"MENU_BACK_BUTTON_PRIORITY",(function(){return a})),e.d(t,"OVERLAY_BACK_BUTTON_PRIORITY",(function(){return o})),e.d(t,"startHardwareBackButton",(function(){return r}));var i=e(10),r=function(){var n=document,t=!1;n.addEventListener("backbutton",(function(){if(!t){var e=0,r=[],o=new CustomEvent("ionBackButton",{bubbles:!1,detail:{register:function(n,t){r.push({priority:n,handler:t,id:e++})}}});n.dispatchEvent(o);var a=function(){if(r.length>0){var n={priority:Number.MIN_SAFE_INTEGER,handler:function(){},id:-1};r.forEach((function(t){t.priority>=n.priority&&(n=t)})),t=!0,r=r.filter((function(t){return t.id!==n.id})),(e=n,Object(i.a)(void 0,void 0,void 0,(function(){var n,t;return Object(i.c)(this,(function(i){switch(i.label){case 0:return i.trys.push([0,3,,4]),e&&e.handler?null==(n=e.handler(a))?[3,2]:[4,n]:[3,2];case 1:i.sent(),i.label=2;case 2:return[3,4];case 3:return t=i.sent(),console.error(t),[3,4];case 4:return[2]}}))}))).then((function(){return t=!1}))}var e};a()}}))},o=100,a=99}}]);
//# sourceMappingURL=14.js.map