(self.webpackChunkshell=self.webpackChunkshell||[]).push([[238],{7238:(t,s,n)=>{"use strict";n.r(s),n.d(s,{AUTO_STYLE:()=>e,AnimationBuilder:()=>i,AnimationFactory:()=>o,NoopAnimationPlayer:()=>S,animate:()=>h,animateChild:()=>f,animation:()=>c,group:()=>a,keyframes:()=>y,query:()=>F,sequence:()=>l,stagger:()=>m,state:()=>u,style:()=>_,transition:()=>p,trigger:()=>r,useAnimation:()=>d,"\u0275AnimationGroupPlayer":()=>g,"\u0275PRE_STYLE":()=>E});class i{}class o{}const e="*";function r(t,s){return{type:7,name:t,definitions:s,options:{}}}function h(t,s=null){return{type:4,styles:s,timings:t}}function a(t,s=null){return{type:3,steps:t,options:s}}function l(t,s=null){return{type:2,steps:t,options:s}}function _(t){return{type:6,styles:t,offset:null}}function u(t,s,n){return{type:0,name:t,styles:s,options:n}}function y(t){return{type:5,steps:t}}function p(t,s,n=null){return{type:1,expr:t,animation:s,options:n}}function c(t,s=null){return{type:8,animation:t,options:s}}function f(t=null){return{type:9,options:t}}function d(t,s=null){return{type:10,animation:t,options:s}}function F(t,s,n=null){return{type:11,selector:t,animation:s,options:n}}function m(t,s){return{type:12,timings:t,animation:s}}function D(t){Promise.resolve(null).then(t)}class S{constructor(t=0,s=0){this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._started=!1,this._destroyed=!1,this._finished=!1,this._position=0,this.parentPlayer=null,this.totalTime=t+s}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(t=>t()),this._onDoneFns=[])}onStart(t){this._onStartFns.push(t)}onDone(t){this._onDoneFns.push(t)}onDestroy(t){this._onDestroyFns.push(t)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){D(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(t=>t()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(t=>t()),this._onDestroyFns=[])}reset(){this._started=!1}setPosition(t){this._position=this.totalTime?t*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(t){const s="start"==t?this._onStartFns:this._onDoneFns;s.forEach(t=>t()),s.length=0}}class g{constructor(t){this._onDoneFns=[],this._onStartFns=[],this._finished=!1,this._started=!1,this._destroyed=!1,this._onDestroyFns=[],this.parentPlayer=null,this.totalTime=0,this.players=t;let s=0,n=0,i=0;const o=this.players.length;0==o?D(()=>this._onFinish()):this.players.forEach(t=>{t.onDone(()=>{++s==o&&this._onFinish()}),t.onDestroy(()=>{++n==o&&this._onDestroy()}),t.onStart(()=>{++i==o&&this._onStart()})}),this.totalTime=this.players.reduce((t,s)=>Math.max(t,s.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(t=>t()),this._onDoneFns=[])}init(){this.players.forEach(t=>t.init())}onStart(t){this._onStartFns.push(t)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(t=>t()),this._onStartFns=[])}onDone(t){this._onDoneFns.push(t)}onDestroy(t){this._onDestroyFns.push(t)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(t=>t.play())}pause(){this.players.forEach(t=>t.pause())}restart(){this.players.forEach(t=>t.restart())}finish(){this._onFinish(),this.players.forEach(t=>t.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(t=>t.destroy()),this._onDestroyFns.forEach(t=>t()),this._onDestroyFns=[])}reset(){this.players.forEach(t=>t.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(t){const s=t*this.totalTime;this.players.forEach(t=>{const n=t.totalTime?Math.min(1,s/t.totalTime):1;t.setPosition(n)})}getPosition(){const t=this.players.reduce((t,s)=>null===t||s.totalTime>t.totalTime?s:t,null);return null!=t?t.getPosition():0}beforeDestroy(){this.players.forEach(t=>{t.beforeDestroy&&t.beforeDestroy()})}triggerCallback(t){const s="start"==t?this._onStartFns:this._onDoneFns;s.forEach(t=>t()),s.length=0}}const E="!"}}]);