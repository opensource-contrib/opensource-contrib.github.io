/*! For license information please see home-15fba6d74bb4d4f026cc.js.LICENSE.txt */
(()=>{var t={59:(t,i,e)=>{var a,r,n;r=[e(193)],void 0===(n="function"==typeof(a=function(t){function i(t){this.init(t)}i.prototype={value:0,size:100,startAngle:-Math.PI,thickness:"auto",fill:{gradient:["#3aeabb","#fdd250"]},emptyFill:"rgba(0, 0, 0, .1)",animation:{duration:1200,easing:"circleProgressEasing"},animationStartValue:0,reverse:!1,lineCap:"butt",insertMode:"prepend",constructor:i,el:null,canvas:null,ctx:null,radius:0,arcFill:null,lastFrameValue:0,init:function(i){t.extend(this,i),this.radius=this.size/2,this.initWidget(),this.initFill(),this.draw(),this.el.trigger("circle-inited")},initWidget:function(){this.canvas||(this.canvas=t("<canvas>")["prepend"==this.insertMode?"prependTo":"appendTo"](this.el)[0]);var i=this.canvas;if(i.width=this.size,i.height=this.size,this.ctx=i.getContext("2d"),window.devicePixelRatio>1){var e=window.devicePixelRatio;i.style.width=i.style.height=this.size+"px",i.width=i.height=this.size*e,this.ctx.scale(e,e)}},initFill:function(){var i,e=this,a=this.fill,r=this.ctx,n=this.size;if(!a)throw Error("The fill is not specified!");if("string"==typeof a&&(a={color:a}),a.color&&(this.arcFill=a.color),a.gradient){var s=a.gradient;if(1==s.length)this.arcFill=s[0];else if(s.length>1){for(var o=a.gradientAngle||0,l=a.gradientDirection||[n/2*(1-Math.cos(o)),n/2*(1+Math.sin(o)),n/2*(1+Math.cos(o)),n/2*(1-Math.sin(o))],h=r.createLinearGradient.apply(r,l),c=0;c<s.length;c++){var d=s[c],u=c/(s.length-1);t.isArray(d)&&(u=d[1],d=d[0]),h.addColorStop(u,d)}this.arcFill=h}}function g(){var a=t("<canvas>")[0];a.width=e.size,a.height=e.size,a.getContext("2d").drawImage(i,0,0,n,n),e.arcFill=e.ctx.createPattern(a,"no-repeat"),e.drawFrame(e.lastFrameValue)}a.image&&(a.image instanceof Image?i=a.image:(i=new Image).src=a.image,i.complete?g():i.onload=g)},draw:function(){this.animation?this.drawAnimated(this.value):this.drawFrame(this.value)},drawFrame:function(t){this.lastFrameValue=t,this.ctx.clearRect(0,0,this.size,this.size),this.drawEmptyArc(t),this.drawArc(t)},drawArc:function(t){if(0!==t){var i=this.ctx,e=this.radius,a=this.getThickness(),r=this.startAngle;i.save(),i.beginPath(),this.reverse?i.arc(e,e,e-a/2,r-2*Math.PI*t,r):i.arc(e,e,e-a/2,r,r+2*Math.PI*t),i.lineWidth=a,i.lineCap=this.lineCap,i.strokeStyle=this.arcFill,i.stroke(),i.restore()}},drawEmptyArc:function(t){var i=this.ctx,e=this.radius,a=this.getThickness(),r=this.startAngle;t<1&&(i.save(),i.beginPath(),t<=0?i.arc(e,e,e-a/2,0,2*Math.PI):this.reverse?i.arc(e,e,e-a/2,r,r-2*Math.PI*t):i.arc(e,e,e-a/2,r+2*Math.PI*t,r),i.lineWidth=a,i.strokeStyle=this.emptyFill,i.stroke(),i.restore())},drawAnimated:function(i){var e=this,a=this.el,r=t(this.canvas);r.stop(!0,!1),a.trigger("circle-animation-start"),r.css({animationProgress:0}).animate({animationProgress:1},t.extend({},this.animation,{step:function(t){var r=e.animationStartValue*(1-t)+i*t;e.drawFrame(r),a.trigger("circle-animation-progress",[t,r])}})).promise().always((function(){a.trigger("circle-animation-end")}))},getThickness:function(){return t.isNumeric(this.thickness)?this.thickness:this.size/14},getValue:function(){return this.value},setValue:function(t){this.animation&&(this.animationStartValue=this.lastFrameValue),this.value=t,this.draw()}},t.circleProgress={defaults:i.prototype},t.easing.circleProgressEasing=function(t){return t<.5?.5*(t*=2)*t*t:1-.5*(t=2-2*t)*t*t},t.fn.circleProgress=function(e,a){var r="circle-progress",n=this.data(r);if("widget"==e){if(!n)throw Error('Calling "widget" method on not initialized instance is forbidden');return n.canvas}if("value"==e){if(!n)throw Error('Calling "value" method on not initialized instance is forbidden');if(void 0===a)return n.getValue();var s=arguments[1];return this.each((function(){t(this).data(r).setValue(s)}))}return this.each((function(){var a=t(this),n=a.data(r),s=t.isPlainObject(e)?e:{};if(n)n.init(s);else{var o=t.extend({},a.data());"string"==typeof o.fill&&(o.fill=JSON.parse(o.fill)),"string"==typeof o.animation&&(o.animation=JSON.parse(o.animation)),(s=t.extend(o,s)).el=a,n=new i(s),a.data(r,n)}}))}})?a.apply(i,r):a)||(t.exports=n)},518:(t,i,e)=>{"use strict";var a=e(193),r=e.n(a);e(59),r()(".circle-progress").each(((t,i)=>{r()(i).circleProgress({value:parseInt(i.dataset.value)/100,size:100,startAngle:-Math.PI/2,fill:{gradient:["white","white"]}}).on("circle-animation-progress",((t,i,e)=>{r()(t.currentTarget).find("strong").text((100*e).toFixed(0))}))}))}},i={};function e(a){if(i[a])return i[a].exports;var r=i[a]={exports:{}};return t[a].call(r.exports,r,r.exports,e),r.exports}e.m=t,e.x=t=>{},e.n=t=>{var i=t&&t.__esModule?()=>t.default:()=>t;return e.d(i,{a:i}),i},e.d=(t,i)=>{for(var a in i)e.o(i,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:i[a]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=(t,i)=>Object.prototype.hasOwnProperty.call(t,i),(()=>{var t={177:0},i=[[518,193]],a=t=>{},r=(r,n)=>{for(var s,o,[l,h,c,d]=n,u=0,g=[];u<l.length;u++)o=l[u],e.o(t,o)&&t[o]&&g.push(t[o][0]),t[o]=0;for(s in h)e.o(h,s)&&(e.m[s]=h[s]);for(c&&c(e),r&&r(n);g.length;)g.shift()();return d&&i.push.apply(i,d),a()},n=self.webpackChunkhexo_theme_materialize=self.webpackChunkhexo_theme_materialize||[];function s(){for(var a,r=0;r<i.length;r++){for(var n=i[r],s=!0,o=1;o<n.length;o++){var l=n[o];0!==t[l]&&(s=!1)}s&&(i.splice(r--,1),a=e(e.s=n[0]))}return 0===i.length&&(e.x(),e.x=t=>{}),a}n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n));var o=e.x;e.x=()=>(e.x=o||(t=>{}),(a=s)())})(),e.x()})();
//# sourceMappingURL=home-15fba6d74bb4d4f026cc.js.map