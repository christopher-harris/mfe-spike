(self.webpackChunkshell=self.webpackChunkshell||[]).push([[409],{3409:(t,e,i)=>{"use strict";i.r(e),i.d(e,{UiComponent:()=>n,UiModule:()=>ht,UiService:()=>o});var s=i(7043);let o=(()=>{class t{constructor(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=s["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),n=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s["\u0275\u0275defineComponent"]({type:t,selectors:[["lib-ui"]],decls:2,vars:0,template:function(t,e){1&t&&(s["\u0275\u0275elementStart"](0,"p"),s["\u0275\u0275text"](1," ui works! "),s["\u0275\u0275elementEnd"]())},encapsulation:2}),t})();var r=i(7817);i(6237),i(369);let h=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=s["\u0275\u0275defineInjector"]({imports:[[r.si,r.BQ],r.BQ]}),t})();var a=i(2522),l=i(3017),c=i(9490),_=(i(6461),i(9765)),d=i(5319),p=i(6682),u=(i(5917),i(4581),i(9761),i(3190),i(5257)),g=(i(5435),i(6782));i(3637),i(7393),i(1593),i(7792);var f=i(4434);class m{attach(t){return this._attachedHost=t,t.attach(this)}detach(){let t=this._attachedHost;null!=t&&(this._attachedHost=null,t.detach())}get isAttached(){return null!=this._attachedHost}setAttachedHost(t){this._attachedHost=t}}class y extends m{constructor(t,e,i,s){super(),this.component=t,this.viewContainerRef=e,this.injector=i,this.componentFactoryResolver=s}}class v extends m{constructor(t,e,i){super(),this.templateRef=t,this.viewContainerRef=e,this.context=i}get origin(){return this.templateRef.elementRef}attach(t,e=this.context){return this.context=e,super.attach(t)}detach(){return this.context=void 0,super.detach()}}class w extends m{constructor(t){super(),this.element=t instanceof s.ElementRef?t.nativeElement:t}}class b extends class{constructor(){this._isDisposed=!1,this.attachDomPortal=null}hasAttached(){return!!this._attachedPortal}attach(t){return t instanceof y?(this._attachedPortal=t,this.attachComponentPortal(t)):t instanceof v?(this._attachedPortal=t,this.attachTemplatePortal(t)):this.attachDomPortal&&t instanceof w?(this._attachedPortal=t,this.attachDomPortal(t)):void 0}detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(t){this._disposeFn=t}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}}{constructor(t,e,i,s,o){super(),this.outletElement=t,this._componentFactoryResolver=e,this._appRef=i,this._defaultInjector=s,this.attachDomPortal=t=>{const e=t.element,i=this._document.createComment("dom-portal");e.parentNode.insertBefore(i,e),this.outletElement.appendChild(e),this._attachedPortal=t,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(e,i)})},this._document=o}attachComponentPortal(t){const e=(t.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(t.component);let i;return t.viewContainerRef?(i=t.viewContainerRef.createComponent(e,t.viewContainerRef.length,t.injector||t.viewContainerRef.injector),this.setDisposeFn(()=>i.destroy())):(i=e.create(t.injector||this._defaultInjector),this._appRef.attachView(i.hostView),this.setDisposeFn(()=>{this._appRef.detachView(i.hostView),i.destroy()})),this.outletElement.appendChild(this._getComponentRootNode(i)),this._attachedPortal=t,i}attachTemplatePortal(t){let e=t.viewContainerRef,i=e.createEmbeddedView(t.templateRef,t.context);return i.rootNodes.forEach(t=>this.outletElement.appendChild(t)),i.detectChanges(),this.setDisposeFn(()=>{let t=e.indexOf(i);-1!==t&&e.remove(t)}),this._attachedPortal=t,i}dispose(){super.dispose(),null!=this.outletElement.parentNode&&this.outletElement.parentNode.removeChild(this.outletElement)}_getComponentRootNode(t){return t.hostView.rootNodes[0]}}let C=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=s["\u0275\u0275defineInjector"]({}),t})();var x=i(7497),S=i(521),R=i(946);const E=(0,S.Mq)();class P{constructor(t,e){this._viewportRuler=t,this._previousHTMLStyles={top:"",left:""},this._isEnabled=!1,this._document=e}attach(){}enable(){if(this._canBeEnabled()){const t=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=t.style.left||"",this._previousHTMLStyles.top=t.style.top||"",t.style.left=(0,c.HM)(-this._previousScrollPosition.left),t.style.top=(0,c.HM)(-this._previousScrollPosition.top),t.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){const t=this._document.documentElement,e=t.style,i=this._document.body.style,s=e.scrollBehavior||"",o=i.scrollBehavior||"";this._isEnabled=!1,e.left=this._previousHTMLStyles.left,e.top=this._previousHTMLStyles.top,t.classList.remove("cdk-global-scrollblock"),E&&(e.scrollBehavior=i.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),E&&(e.scrollBehavior=s,i.scrollBehavior=o)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;const t=this._document.body,e=this._viewportRuler.getViewportSize();return t.scrollHeight>e.height||t.scrollWidth>e.width}}class O{constructor(t,e,i,s){this._scrollDispatcher=t,this._ngZone=e,this._viewportRuler=i,this._config=s,this._scrollSubscription=null,this._detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}}attach(t){this._overlayRef=t}enable(){if(this._scrollSubscription)return;const t=this._scrollDispatcher.scrolled(0);this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=t.subscribe(()=>{const t=this._viewportRuler.getViewportScrollPosition().top;Math.abs(t-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=t.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}}class k{enable(){}disable(){}attach(){}}function j(t,e){return e.some(e=>t.bottom<e.top||t.top>e.bottom||t.right<e.left||t.left>e.right)}function M(t,e){return e.some(e=>t.top<e.top||t.bottom>e.bottom||t.left<e.left||t.right>e.right)}class D{constructor(t,e,i,s){this._scrollDispatcher=t,this._viewportRuler=e,this._ngZone=i,this._config=s,this._scrollSubscription=null}attach(t){this._overlayRef=t}enable(){this._scrollSubscription||(this._scrollSubscription=this._scrollDispatcher.scrolled(this._config?this._config.scrollThrottle:0).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){const t=this._overlayRef.overlayElement.getBoundingClientRect(),{width:e,height:i}=this._viewportRuler.getViewportSize();j(t,[{width:e,height:i,bottom:i,right:e,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}}))}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}}let B=(()=>{class t{constructor(t,e,i,s){this._scrollDispatcher=t,this._viewportRuler=e,this._ngZone=i,this.noop=()=>new k,this.close=t=>new O(this._scrollDispatcher,this._ngZone,this._viewportRuler,t),this.block=()=>new P(this._viewportRuler,this._document),this.reposition=t=>new D(this._scrollDispatcher,this._viewportRuler,this._ngZone,t),this._document=s}}return t.\u0275fac=function(e){return new(e||t)(s["\u0275\u0275inject"](x.mF),s["\u0275\u0275inject"](x.rL),s["\u0275\u0275inject"](s.NgZone),s["\u0275\u0275inject"](f.DOCUMENT))},t.\u0275prov=s["\u0275\u0275defineInjectable"]({factory:function(){return new t(s["\u0275\u0275inject"](x.mF),s["\u0275\u0275inject"](x.rL),s["\u0275\u0275inject"](s.NgZone),s["\u0275\u0275inject"](f.DOCUMENT))},token:t,providedIn:"root"}),t})();class H{constructor(t){if(this.scrollStrategy=new k,this.panelClass="",this.hasBackdrop=!1,this.backdropClass="cdk-overlay-dark-backdrop",this.disposeOnNavigation=!1,t){const e=Object.keys(t);for(const i of e)void 0!==t[i]&&(this[i]=t[i])}}}class L{constructor(t,e,i,s,o){this.offsetX=i,this.offsetY=s,this.panelClass=o,this.originX=t.originX,this.originY=t.originY,this.overlayX=e.overlayX,this.overlayY=e.overlayY}}class I{constructor(t,e){this.connectionPair=t,this.scrollableViewProperties=e}}let A=(()=>{class t{constructor(t){this._attachedOverlays=[],this._document=t}ngOnDestroy(){this.detach()}add(t){this.remove(t),this._attachedOverlays.push(t)}remove(t){const e=this._attachedOverlays.indexOf(t);e>-1&&this._attachedOverlays.splice(e,1),0===this._attachedOverlays.length&&this.detach()}}return t.\u0275fac=function(e){return new(e||t)(s["\u0275\u0275inject"](f.DOCUMENT))},t.\u0275prov=s["\u0275\u0275defineInjectable"]({factory:function(){return new t(s["\u0275\u0275inject"](f.DOCUMENT))},token:t,providedIn:"root"}),t})(),F=(()=>{class t extends A{constructor(t){super(t),this._keydownListener=t=>{const e=this._attachedOverlays;for(let i=e.length-1;i>-1;i--)if(e[i]._keydownEvents.observers.length>0){e[i]._keydownEvents.next(t);break}}}add(t){super.add(t),this._isAttached||(this._document.body.addEventListener("keydown",this._keydownListener),this._isAttached=!0)}detach(){this._isAttached&&(this._document.body.removeEventListener("keydown",this._keydownListener),this._isAttached=!1)}}return t.\u0275fac=function(e){return new(e||t)(s["\u0275\u0275inject"](f.DOCUMENT))},t.\u0275prov=s["\u0275\u0275defineInjectable"]({factory:function(){return new t(s["\u0275\u0275inject"](f.DOCUMENT))},token:t,providedIn:"root"}),t})(),N=(()=>{class t extends A{constructor(t,e){super(t),this._platform=e,this._cursorStyleIsSet=!1,this._clickListener=t=>{const e=(0,S.sA)(t),i=this._attachedOverlays.slice();for(let s=i.length-1;s>-1;s--){const o=i[s];if(!(o._outsidePointerEvents.observers.length<1)&&o.hasAttached()){if(o.overlayElement.contains(e))break;o._outsidePointerEvents.next(t)}}}}add(t){if(super.add(t),!this._isAttached){const t=this._document.body;t.addEventListener("click",this._clickListener,!0),t.addEventListener("auxclick",this._clickListener,!0),t.addEventListener("contextmenu",this._clickListener,!0),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){if(this._isAttached){const t=this._document.body;t.removeEventListener("click",this._clickListener,!0),t.removeEventListener("auxclick",this._clickListener,!0),t.removeEventListener("contextmenu",this._clickListener,!0),this._platform.IOS&&this._cursorStyleIsSet&&(t.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1}}}return t.\u0275fac=function(e){return new(e||t)(s["\u0275\u0275inject"](f.DOCUMENT),s["\u0275\u0275inject"](S.t4))},t.\u0275prov=s["\u0275\u0275defineInjectable"]({factory:function(){return new t(s["\u0275\u0275inject"](f.DOCUMENT),s["\u0275\u0275inject"](S.t4))},token:t,providedIn:"root"}),t})(),T=(()=>{class t{constructor(t,e){this._platform=e,this._document=t}ngOnDestroy(){const t=this._containerElement;t&&t.parentNode&&t.parentNode.removeChild(t)}getContainerElement(){return this._containerElement||this._createContainer(),this._containerElement}_createContainer(){const t="cdk-overlay-container";if(this._platform.isBrowser||(0,S.Oy)()){const e=this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);for(let t=0;t<e.length;t++)e[t].parentNode.removeChild(e[t])}const e=this._document.createElement("div");e.classList.add(t),(0,S.Oy)()?e.setAttribute("platform","test"):this._platform.isBrowser||e.setAttribute("platform","server"),this._document.body.appendChild(e),this._containerElement=e}}return t.\u0275fac=function(e){return new(e||t)(s["\u0275\u0275inject"](f.DOCUMENT),s["\u0275\u0275inject"](S.t4))},t.\u0275prov=s["\u0275\u0275defineInjectable"]({factory:function(){return new t(s["\u0275\u0275inject"](f.DOCUMENT),s["\u0275\u0275inject"](S.t4))},token:t,providedIn:"root"}),t})();class V{constructor(t,e,i,s,o,n,r,h,a){this._portalOutlet=t,this._host=e,this._pane=i,this._config=s,this._ngZone=o,this._keyboardDispatcher=n,this._document=r,this._location=h,this._outsideClickDispatcher=a,this._backdropElement=null,this._backdropClick=new _.xQ,this._attachments=new _.xQ,this._detachments=new _.xQ,this._locationChanges=d.w.EMPTY,this._backdropClickHandler=t=>this._backdropClick.next(t),this._keydownEvents=new _.xQ,this._outsidePointerEvents=new _.xQ,s.scrollStrategy&&(this._scrollStrategy=s.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=s.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropElement}get hostElement(){return this._host}attach(t){let e=this._portalOutlet.attach(t);return!this._host.parentElement&&this._previousHostParent&&this._previousHostParent.appendChild(this._host),this._positionStrategy&&this._positionStrategy.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._ngZone.onStable.pipe((0,u.q)(1)).subscribe(()=>{this.hasAttached()&&this.updatePosition()}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();const t=this._portalOutlet.detach();return this._detachments.next(),this._keyboardDispatcher.remove(this),this._detachContentWhenStable(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),t}dispose(){const t=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._disposeBackdrop(this._backdropElement),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host&&this._host.parentNode&&(this._host.parentNode.removeChild(this._host),this._host=null),this._previousHostParent=this._pane=null,t&&this._detachments.next(),this._detachments.complete()}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(t){t!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=t,this.hasAttached()&&(t.attach(this),this.updatePosition()))}updateSize(t){this._config=Object.assign(Object.assign({},this._config),t),this._updateElementSize()}setDirection(t){this._config=Object.assign(Object.assign({},this._config),{direction:t}),this._updateElementDirection()}addPanelClass(t){this._pane&&this._toggleClasses(this._pane,t,!0)}removePanelClass(t){this._pane&&this._toggleClasses(this._pane,t,!1)}getDirection(){const t=this._config.direction;return t?"string"==typeof t?t:t.value:"ltr"}updateScrollStrategy(t){t!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=t,this.hasAttached()&&(t.attach(this),t.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;const t=this._pane.style;t.width=(0,c.HM)(this._config.width),t.height=(0,c.HM)(this._config.height),t.minWidth=(0,c.HM)(this._config.minWidth),t.minHeight=(0,c.HM)(this._config.minHeight),t.maxWidth=(0,c.HM)(this._config.maxWidth),t.maxHeight=(0,c.HM)(this._config.maxHeight)}_togglePointerEvents(t){this._pane.style.pointerEvents=t?"":"none"}_attachBackdrop(){const t="cdk-overlay-backdrop-showing";this._backdropElement=this._document.createElement("div"),this._backdropElement.classList.add("cdk-overlay-backdrop"),this._config.backdropClass&&this._toggleClasses(this._backdropElement,this._config.backdropClass,!0),this._host.parentElement.insertBefore(this._backdropElement,this._host),this._backdropElement.addEventListener("click",this._backdropClickHandler),"undefined"!=typeof requestAnimationFrame?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{this._backdropElement&&this._backdropElement.classList.add(t)})}):this._backdropElement.classList.add(t)}_updateStackingOrder(){this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){const t=this._backdropElement;if(!t)return;let e;const i=()=>{t&&(t.removeEventListener("click",this._backdropClickHandler),t.removeEventListener("transitionend",i),this._disposeBackdrop(t)),this._config.backdropClass&&this._toggleClasses(t,this._config.backdropClass,!1),clearTimeout(e)};t.classList.remove("cdk-overlay-backdrop-showing"),this._ngZone.runOutsideAngular(()=>{t.addEventListener("transitionend",i)}),t.style.pointerEvents="none",e=this._ngZone.runOutsideAngular(()=>setTimeout(i,500))}_toggleClasses(t,e,i){const s=t.classList;(0,c.Eq)(e).forEach(t=>{t&&(i?s.add(t):s.remove(t))})}_detachContentWhenStable(){this._ngZone.runOutsideAngular(()=>{const t=this._ngZone.onStable.pipe((0,g.R)((0,p.T)(this._attachments,this._detachments))).subscribe(()=>{this._pane&&this._host&&0!==this._pane.children.length||(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._previousHostParent.removeChild(this._host)),t.unsubscribe())})})}_disposeScrollStrategy(){const t=this._scrollStrategy;t&&(t.disable(),t.detach&&t.detach())}_disposeBackdrop(t){t&&(t.parentNode&&t.parentNode.removeChild(t),this._backdropElement===t&&(this._backdropElement=null))}}const X="cdk-overlay-connected-position-bounding-box",Y=/([A-Za-z%]+)$/;class z{constructor(t,e,i,s,o){this._viewportRuler=e,this._document=i,this._platform=s,this._overlayContainer=o,this._lastBoundingBoxSize={width:0,height:0},this._isPushed=!1,this._canPush=!0,this._growAfterOpen=!1,this._hasFlexibleDimensions=!0,this._positionLocked=!1,this._viewportMargin=0,this._scrollables=[],this._preferredPositions=[],this._positionChanges=new _.xQ,this._resizeSubscription=d.w.EMPTY,this._offsetX=0,this._offsetY=0,this._appliedPanelClasses=[],this.positionChanges=this._positionChanges,this.setOrigin(t)}get positions(){return this._preferredPositions}attach(t){this._validatePositions(),t.hostElement.classList.add(X),this._overlayRef=t,this._boundingBox=t.hostElement,this._pane=t.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition)return void this.reapplyLastPosition();this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect();const t=this._originRect,e=this._overlayRect,i=this._viewportRect,s=[];let o;for(let n of this._preferredPositions){let r=this._getOriginPoint(t,n),h=this._getOverlayPoint(r,e,n),a=this._getOverlayFit(h,e,i,n);if(a.isCompletelyWithinViewport)return this._isPushed=!1,void this._applyPosition(n,r);this._canFitWithFlexibleDimensions(a,h,i)?s.push({position:n,origin:r,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(r,n)}):(!o||o.overlayFit.visibleArea<a.visibleArea)&&(o={overlayFit:a,overlayPoint:h,originPoint:r,position:n,overlayRect:e})}if(s.length){let t=null,e=-1;for(const i of s){const s=i.boundingBoxRect.width*i.boundingBoxRect.height*(i.position.weight||1);s>e&&(e=s,t=i)}return this._isPushed=!1,void this._applyPosition(t.position,t.origin)}if(this._canPush)return this._isPushed=!0,void this._applyPosition(o.position,o.originPoint);this._applyPosition(o.position,o.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&W(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(X),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(!this._isDisposed&&(!this._platform||this._platform.isBrowser)){this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect();const t=this._lastPosition||this._preferredPositions[0],e=this._getOriginPoint(this._originRect,t);this._applyPosition(t,e)}}withScrollableContainers(t){return this._scrollables=t,this}withPositions(t){return this._preferredPositions=t,-1===t.indexOf(this._lastPosition)&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(t){return this._viewportMargin=t,this}withFlexibleDimensions(t=!0){return this._hasFlexibleDimensions=t,this}withGrowAfterOpen(t=!0){return this._growAfterOpen=t,this}withPush(t=!0){return this._canPush=t,this}withLockedPosition(t=!0){return this._positionLocked=t,this}setOrigin(t){return this._origin=t,this}withDefaultOffsetX(t){return this._offsetX=t,this}withDefaultOffsetY(t){return this._offsetY=t,this}withTransformOriginOn(t){return this._transformOriginSelector=t,this}_getOriginPoint(t,e){let i,s;if("center"==e.originX)i=t.left+t.width/2;else{const s=this._isRtl()?t.right:t.left,o=this._isRtl()?t.left:t.right;i="start"==e.originX?s:o}return s="center"==e.originY?t.top+t.height/2:"top"==e.originY?t.top:t.bottom,{x:i,y:s}}_getOverlayPoint(t,e,i){let s,o;return s="center"==i.overlayX?-e.width/2:"start"===i.overlayX?this._isRtl()?-e.width:0:this._isRtl()?0:-e.width,o="center"==i.overlayY?-e.height/2:"top"==i.overlayY?0:-e.height,{x:t.x+s,y:t.y+o}}_getOverlayFit(t,e,i,s){const o=U(e);let{x:n,y:r}=t,h=this._getOffset(s,"x"),a=this._getOffset(s,"y");h&&(n+=h),a&&(r+=a);let l=0-r,c=r+o.height-i.height,_=this._subtractOverflows(o.width,0-n,n+o.width-i.width),d=this._subtractOverflows(o.height,l,c),p=_*d;return{visibleArea:p,isCompletelyWithinViewport:o.width*o.height===p,fitsInViewportVertically:d===o.height,fitsInViewportHorizontally:_==o.width}}_canFitWithFlexibleDimensions(t,e,i){if(this._hasFlexibleDimensions){const s=i.bottom-e.y,o=i.right-e.x,n=Z(this._overlayRef.getConfig().minHeight),r=Z(this._overlayRef.getConfig().minWidth),h=t.fitsInViewportHorizontally||null!=r&&r<=o;return(t.fitsInViewportVertically||null!=n&&n<=s)&&h}return!1}_pushOverlayOnScreen(t,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:t.x+this._previousPushAmount.x,y:t.y+this._previousPushAmount.y};const s=U(e),o=this._viewportRect,n=Math.max(t.x+s.width-o.width,0),r=Math.max(t.y+s.height-o.height,0),h=Math.max(o.top-i.top-t.y,0),a=Math.max(o.left-i.left-t.x,0);let l=0,c=0;return l=s.width<=o.width?a||-n:t.x<this._viewportMargin?o.left-i.left-t.x:0,c=s.height<=o.height?h||-r:t.y<this._viewportMargin?o.top-i.top-t.y:0,this._previousPushAmount={x:l,y:c},{x:t.x+l,y:t.y+c}}_applyPosition(t,e){if(this._setTransformOrigin(t),this._setOverlayElementStyles(e,t),this._setBoundingBoxStyles(e,t),t.panelClass&&this._addPanelClasses(t.panelClass),this._lastPosition=t,this._positionChanges.observers.length){const e=this._getScrollVisibility(),i=new I(t,e);this._positionChanges.next(i)}this._isInitialRender=!1}_setTransformOrigin(t){if(!this._transformOriginSelector)return;const e=this._boundingBox.querySelectorAll(this._transformOriginSelector);let i,s=t.overlayY;i="center"===t.overlayX?"center":this._isRtl()?"start"===t.overlayX?"right":"left":"start"===t.overlayX?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${i} ${s}`}_calculateBoundingBoxRect(t,e){const i=this._viewportRect,s=this._isRtl();let o,n,r,h,a,l;if("top"===e.overlayY)n=t.y,o=i.height-n+this._viewportMargin;else if("bottom"===e.overlayY)r=i.height-t.y+2*this._viewportMargin,o=i.height-r+this._viewportMargin;else{const e=Math.min(i.bottom-t.y+i.top,t.y),s=this._lastBoundingBoxSize.height;o=2*e,n=t.y-e,o>s&&!this._isInitialRender&&!this._growAfterOpen&&(n=t.y-s/2)}if("end"===e.overlayX&&!s||"start"===e.overlayX&&s)l=i.width-t.x+this._viewportMargin,h=t.x-this._viewportMargin;else if("start"===e.overlayX&&!s||"end"===e.overlayX&&s)a=t.x,h=i.right-t.x;else{const e=Math.min(i.right-t.x+i.left,t.x),s=this._lastBoundingBoxSize.width;h=2*e,a=t.x-e,h>s&&!this._isInitialRender&&!this._growAfterOpen&&(a=t.x-s/2)}return{top:n,left:a,bottom:r,right:l,width:h,height:o}}_setBoundingBoxStyles(t,e){const i=this._calculateBoundingBoxRect(t,e);this._isInitialRender||this._growAfterOpen||(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));const s={};if(this._hasExactPosition())s.top=s.left="0",s.bottom=s.right=s.maxHeight=s.maxWidth="",s.width=s.height="100%";else{const t=this._overlayRef.getConfig().maxHeight,o=this._overlayRef.getConfig().maxWidth;s.height=(0,c.HM)(i.height),s.top=(0,c.HM)(i.top),s.bottom=(0,c.HM)(i.bottom),s.width=(0,c.HM)(i.width),s.left=(0,c.HM)(i.left),s.right=(0,c.HM)(i.right),s.alignItems="center"===e.overlayX?"center":"end"===e.overlayX?"flex-end":"flex-start",s.justifyContent="center"===e.overlayY?"center":"bottom"===e.overlayY?"flex-end":"flex-start",t&&(s.maxHeight=(0,c.HM)(t)),o&&(s.maxWidth=(0,c.HM)(o))}this._lastBoundingBoxSize=i,W(this._boundingBox.style,s)}_resetBoundingBoxStyles(){W(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){W(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(t,e){const i={},s=this._hasExactPosition(),o=this._hasFlexibleDimensions,n=this._overlayRef.getConfig();if(s){const s=this._viewportRuler.getViewportScrollPosition();W(i,this._getExactOverlayY(e,t,s)),W(i,this._getExactOverlayX(e,t,s))}else i.position="static";let r="",h=this._getOffset(e,"x"),a=this._getOffset(e,"y");h&&(r+=`translateX(${h}px) `),a&&(r+=`translateY(${a}px)`),i.transform=r.trim(),n.maxHeight&&(s?i.maxHeight=(0,c.HM)(n.maxHeight):o&&(i.maxHeight="")),n.maxWidth&&(s?i.maxWidth=(0,c.HM)(n.maxWidth):o&&(i.maxWidth="")),W(this._pane.style,i)}_getExactOverlayY(t,e,i){let s={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,t);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i));let n=this._overlayContainer.getContainerElement().getBoundingClientRect().top;return o.y-=n,"bottom"===t.overlayY?s.bottom=this._document.documentElement.clientHeight-(o.y+this._overlayRect.height)+"px":s.top=(0,c.HM)(o.y),s}_getExactOverlayX(t,e,i){let s,o={left:"",right:""},n=this._getOverlayPoint(e,this._overlayRect,t);return this._isPushed&&(n=this._pushOverlayOnScreen(n,this._overlayRect,i)),s=this._isRtl()?"end"===t.overlayX?"left":"right":"end"===t.overlayX?"right":"left","right"===s?o.right=this._document.documentElement.clientWidth-(n.x+this._overlayRect.width)+"px":o.left=(0,c.HM)(n.x),o}_getScrollVisibility(){const t=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(t=>t.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:M(t,i),isOriginOutsideView:j(t,i),isOverlayClipped:M(e,i),isOverlayOutsideView:j(e,i)}}_subtractOverflows(t,...e){return e.reduce((t,e)=>t-Math.max(e,0),t)}_getNarrowedViewportRect(){const t=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._viewportMargin,left:i.left+this._viewportMargin,right:i.left+t-this._viewportMargin,bottom:i.top+e-this._viewportMargin,width:t-2*this._viewportMargin,height:e-2*this._viewportMargin}}_isRtl(){return"rtl"===this._overlayRef.getDirection()}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(t,e){return"x"===e?null==t.offsetX?this._offsetX:t.offsetX:null==t.offsetY?this._offsetY:t.offsetY}_validatePositions(){}_addPanelClasses(t){this._pane&&(0,c.Eq)(t).forEach(t=>{""!==t&&-1===this._appliedPanelClasses.indexOf(t)&&(this._appliedPanelClasses.push(t),this._pane.classList.add(t))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(t=>{this._pane.classList.remove(t)}),this._appliedPanelClasses=[])}_getOriginRect(){const t=this._origin;if(t instanceof s.ElementRef)return t.nativeElement.getBoundingClientRect();if(t instanceof Element)return t.getBoundingClientRect();const e=t.width||0,i=t.height||0;return{top:t.y,bottom:t.y+i,left:t.x,right:t.x+e,height:i,width:e}}}function W(t,e){for(let i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t}function Z(t){if("number"!=typeof t&&null!=t){const[e,i]=t.split(Y);return i&&"px"!==i?null:parseFloat(e)}return t||null}function U(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}class Q{constructor(t,e,i,s,o,n,r){this._preferredPositions=[],this._positionStrategy=new z(i,s,o,n,r).withFlexibleDimensions(!1).withPush(!1).withViewportMargin(0),this.withFallbackPosition(t,e),this.onPositionChange=this._positionStrategy.positionChanges}get positions(){return this._preferredPositions}attach(t){this._overlayRef=t,this._positionStrategy.attach(t),this._direction&&(t.setDirection(this._direction),this._direction=null)}dispose(){this._positionStrategy.dispose()}detach(){this._positionStrategy.detach()}apply(){this._positionStrategy.apply()}recalculateLastPosition(){this._positionStrategy.reapplyLastPosition()}withScrollableContainers(t){this._positionStrategy.withScrollableContainers(t)}withFallbackPosition(t,e,i,s){const o=new L(t,e,i,s);return this._preferredPositions.push(o),this._positionStrategy.withPositions(this._preferredPositions),this}withDirection(t){return this._overlayRef?this._overlayRef.setDirection(t):this._direction=t,this}withOffsetX(t){return this._positionStrategy.withDefaultOffsetX(t),this}withOffsetY(t){return this._positionStrategy.withDefaultOffsetY(t),this}withLockedPosition(t){return this._positionStrategy.withLockedPosition(t),this}withPositions(t){return this._preferredPositions=t.slice(),this._positionStrategy.withPositions(this._preferredPositions),this}setOrigin(t){return this._positionStrategy.setOrigin(t),this}}const q="cdk-global-overlay-wrapper";class ${constructor(){this._cssPosition="static",this._topOffset="",this._bottomOffset="",this._leftOffset="",this._rightOffset="",this._alignItems="",this._justifyContent="",this._width="",this._height=""}attach(t){const e=t.getConfig();this._overlayRef=t,this._width&&!e.width&&t.updateSize({width:this._width}),this._height&&!e.height&&t.updateSize({height:this._height}),t.hostElement.classList.add(q),this._isDisposed=!1}top(t=""){return this._bottomOffset="",this._topOffset=t,this._alignItems="flex-start",this}left(t=""){return this._rightOffset="",this._leftOffset=t,this._justifyContent="flex-start",this}bottom(t=""){return this._topOffset="",this._bottomOffset=t,this._alignItems="flex-end",this}right(t=""){return this._leftOffset="",this._rightOffset=t,this._justifyContent="flex-end",this}width(t=""){return this._overlayRef?this._overlayRef.updateSize({width:t}):this._width=t,this}height(t=""){return this._overlayRef?this._overlayRef.updateSize({height:t}):this._height=t,this}centerHorizontally(t=""){return this.left(t),this._justifyContent="center",this}centerVertically(t=""){return this.top(t),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;const t=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,i=this._overlayRef.getConfig(),{width:s,height:o,maxWidth:n,maxHeight:r}=i,h=!("100%"!==s&&"100vw"!==s||n&&"100%"!==n&&"100vw"!==n),a=!("100%"!==o&&"100vh"!==o||r&&"100%"!==r&&"100vh"!==r);t.position=this._cssPosition,t.marginLeft=h?"0":this._leftOffset,t.marginTop=a?"0":this._topOffset,t.marginBottom=this._bottomOffset,t.marginRight=this._rightOffset,h?e.justifyContent="flex-start":"center"===this._justifyContent?e.justifyContent="center":"rtl"===this._overlayRef.getConfig().direction?"flex-start"===this._justifyContent?e.justifyContent="flex-end":"flex-end"===this._justifyContent&&(e.justifyContent="flex-start"):e.justifyContent=this._justifyContent,e.alignItems=a?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;const t=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(q),i.justifyContent=i.alignItems=t.marginTop=t.marginBottom=t.marginLeft=t.marginRight=t.position="",this._overlayRef=null,this._isDisposed=!0}}let J=(()=>{class t{constructor(t,e,i,s){this._viewportRuler=t,this._document=e,this._platform=i,this._overlayContainer=s}global(){return new $}connectedTo(t,e,i){return new Q(e,i,t,this._viewportRuler,this._document,this._platform,this._overlayContainer)}flexibleConnectedTo(t){return new z(t,this._viewportRuler,this._document,this._platform,this._overlayContainer)}}return t.\u0275fac=function(e){return new(e||t)(s["\u0275\u0275inject"](x.rL),s["\u0275\u0275inject"](f.DOCUMENT),s["\u0275\u0275inject"](S.t4),s["\u0275\u0275inject"](T))},t.\u0275prov=s["\u0275\u0275defineInjectable"]({factory:function(){return new t(s["\u0275\u0275inject"](x.rL),s["\u0275\u0275inject"](f.DOCUMENT),s["\u0275\u0275inject"](S.t4),s["\u0275\u0275inject"](T))},token:t,providedIn:"root"}),t})(),G=0,K=(()=>{class t{constructor(t,e,i,s,o,n,r,h,a,l,c){this.scrollStrategies=t,this._overlayContainer=e,this._componentFactoryResolver=i,this._positionBuilder=s,this._keyboardDispatcher=o,this._injector=n,this._ngZone=r,this._document=h,this._directionality=a,this._location=l,this._outsideClickDispatcher=c}create(t){const e=this._createHostElement(),i=this._createPaneElement(e),s=this._createPortalOutlet(i),o=new H(t);return o.direction=o.direction||this._directionality.value,new V(s,e,i,o,this._ngZone,this._keyboardDispatcher,this._document,this._location,this._outsideClickDispatcher)}position(){return this._positionBuilder}_createPaneElement(t){const e=this._document.createElement("div");return e.id="cdk-overlay-"+G++,e.classList.add("cdk-overlay-pane"),t.appendChild(e),e}_createHostElement(){const t=this._document.createElement("div");return this._overlayContainer.getContainerElement().appendChild(t),t}_createPortalOutlet(t){return this._appRef||(this._appRef=this._injector.get(s.ApplicationRef)),new b(t,this._componentFactoryResolver,this._appRef,this._injector,this._document)}}return t.\u0275fac=function(e){return new(e||t)(s["\u0275\u0275inject"](B),s["\u0275\u0275inject"](T),s["\u0275\u0275inject"](s.ComponentFactoryResolver),s["\u0275\u0275inject"](J),s["\u0275\u0275inject"](F),s["\u0275\u0275inject"](s.Injector),s["\u0275\u0275inject"](s.NgZone),s["\u0275\u0275inject"](f.DOCUMENT),s["\u0275\u0275inject"](R.Is),s["\u0275\u0275inject"](f.Location),s["\u0275\u0275inject"](N))},t.\u0275prov=s["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac}),t})();const tt={provide:new s.InjectionToken("cdk-connected-overlay-scroll-strategy"),deps:[K],useFactory:function(t){return()=>t.scrollStrategies.reposition()}};let et=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=s["\u0275\u0275defineInjector"]({providers:[K,tt],imports:[[R.vT,C,x.Cl],x.Cl]}),t})();const it={provide:new s.InjectionToken("mat-menu-scroll-strategy"),deps:[K],useFactory:function(t){return()=>t.scrollStrategies.reposition()}};let st=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=s["\u0275\u0275defineInjector"]({providers:[it],imports:[[f.CommonModule,r.BQ,r.si,et],x.ZD,r.BQ]}),t})();var ot=i(2590);let nt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=s["\u0275\u0275defineInjector"]({imports:[[r.BQ],r.BQ]}),t})();const rt=[l.SJ,h,a.g0,st,ot.ie,nt];let ht=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=s["\u0275\u0275defineInjector"]({imports:[[...rt],l.SJ,h,a.g0,st,ot.ie,nt]}),t})()}}]);