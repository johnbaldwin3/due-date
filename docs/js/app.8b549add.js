(function(t){function e(e){for(var i,s,o=e[0],l=e[1],c=e[2],d=0,f=[];d<o.length;d++)s=o[d],a[s]&&f.push(a[s][0]),a[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(i=!1)}i&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},a={app:0},r=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("1356"),a=n.n(i);a.a},1356:function(t,e,n){},1613:function(t,e,n){"use strict";var i=n("9845"),a=n.n(i);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),a=n("bb71");n("da64"),n("b56c");i["a"].use(a["a"],{iconfont:"md"});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{app:""}},[n("v-toolbar",{attrs:{dark:"",color:"teal lighten-1"}},[n("v-toolbar-title",{staticClass:"text--center",attrs:{center:""}},[n("h1",[t._v(" When is Nicki Due!?")])])],1),n("v-content",[n("v-container",[n("v-layout",{attrs:{"align-center":"","justify-center":"",row:""}},[n("v-flex",{attrs:{xs12:""}},[n("flip-countdown",{attrs:{deadline:"2019-05-25 00:00:00"}})],1)],1),n("v-layout",{attrs:{"align-center":"","justify-center":"",row:""}},[n("v-flex",{attrs:{xs6:"","offset-xs3":""}},[n("v-btn",{staticClass:"text--white",attrs:{"prepend-icon":"clear",dark:"",color:"teal darken-1",target:"_blank",href:"https://babybety.com/pool/john-and-nicki-baldwin/?accesspool="}},[t._v(" Join the office pool!"),n("v-icon",{attrs:{right:"",dark:""}},[t._v("child_friendly")])],1)],1)],1)],1)],1)],1)},s=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-layout",[n("v-flex",{attrs:{xs6:"","offset-xs3":""}},[n("ul",{staticClass:"vuejs-countdown"},[t.days>0?n("li",[n("p",{staticClass:"digit"},[t._v(t._s(t._f("twoDigits")(t.days)))]),n("p",{staticClass:"text"},[t._v(t._s(t.days>1?"days":"day"))])]):t._e(),n("li",[n("p",{staticClass:"digit"},[t._v(t._s(t._f("twoDigits")(t.hours)))]),n("p",{staticClass:"text"},[t._v(t._s(t.hours>1?"hours":"hour"))])]),n("li",[n("p",{staticClass:"digit"},[t._v(t._s(t._f("twoDigits")(t.minutes)))]),n("p",{staticClass:"text"},[t._v("min")])]),n("li",[n("p",{staticClass:"digit"},[t._v(t._s(t._f("twoDigits")(t.seconds)))]),n("p",{staticClass:"text"},[t._v("Sec")])])])])],1)],1)},l=[],c=(n("6b54"),n("a481"),n("84b4"),null),u={name:"vuejsCountDown",props:{deadline:{type:String},end:{type:String},stop:{type:Boolean}},data:function(){return{now:Math.trunc((new Date).getTime()/1e3),date:null,diff:0}},created:function(){var t=this;if(!this.deadline&&!this.end)throw new Error("Missing props 'deadline' or 'end'");var e=this.deadline?this.deadline:this.end;if(this.date=Math.trunc(Date.parse(e.replace(/-/g,"/"))/1e3),!this.date)throw new Error("Invalid props value, correct the 'deadline' or 'end'");c=setInterval(function(){t.now=Math.trunc((new Date).getTime()/1e3)},1e3)},computed:{seconds:function(){return Math.trunc(this.diff)%60},minutes:function(){return Math.trunc(this.diff/60)%60},hours:function(){return Math.trunc(this.diff/60/60)%24},days:function(){return Math.trunc(this.diff/60/60/24)}},watch:{now:function(){this.diff=this.date-this.now,(this.diff<=0||this.stop)&&(this.diff=0,clearInterval(c))}},filters:{twoDigits:function(t){return t.toString().length<=1?"0"+t.toString():t.toString()}},destroyed:function(){clearInterval(c)}},d=u,f=(n("fdb3"),n("2877")),p=n("6544"),h=n.n(p),v=n("a523"),_=n("0e8f"),m=n("a722"),b=Object(f["a"])(d,o,l,!1,null,"0d84e8e9",null);b.options.__file="Countdown.vue";var w=b.exports;h()(b,{VContainer:v["a"],VFlex:_["a"],VLayout:m["a"]});var g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container flip-clock"},[t._l(t.timeData,function(e){return[n("span",{key:e.label,staticClass:"flip-clock__piece",attrs:{id:e.elementId}},[n("span",{staticClass:"flip-clock__card flip-card"},[n("b",{staticClass:"flip-card__top"},[t._v(t._s(t._f("twoDigits")(e.current)))]),n("b",{staticClass:"flip-card__bottom",attrs:{"data-value":t._f("twoDigits")(e.current)}}),n("b",{staticClass:"flip-card__back",attrs:{"data-value":t._f("twoDigits")(e.previous)}}),n("b",{staticClass:"flip-card__back-bottom",attrs:{"data-value":t._f("twoDigits")(e.previous)}})]),n("span",{staticClass:"flip-clock__slot",attrs:{"mt-1":""}},[t._v(t._s(e.label))])])]})],2)},y=[],C=null,x=n("c64e"),D={name:"flipCountdown",props:{deadline:{type:String},stop:{type:Boolean},labels:{type:Object,required:!1,default:function(){return{days:"Days",hours:"Hours",minutes:"Minutes",seconds:"Seconds"}}}},data:function(){var t=x();return{now:Math.trunc((new Date).getTime()/1e3),date:null,interval:null,diff:0,show:!1,timeData:[{current:0,previous:0,label:this.labels.days,elementId:"flip-card-days-"+t},{current:0,previous:0,label:this.labels.hours,elementId:"flip-card-hours-"+t},{current:0,previous:0,label:this.labels.minutes,elementId:"flip-card-minutes-"+t},{current:0,previous:0,label:this.labels.seconds,elementId:"flip-card-seconds-"+t}]}},created:function(){var t=this;if(!this.deadline)throw new Error("Missing props 'deadline'");var e=this.deadline;if(this.date=Math.trunc(Date.parse(e.replace(/-/g,"/"))/1e3),!this.date)throw new Error("Invalid props value, correct the 'deadline'");this.interval=setInterval(function(){t.now=Math.trunc((new Date).getTime()/1e3)},1e3)},mounted:function(){0!==this.diff&&(this.show=!0)},computed:{seconds:function(){return Math.trunc(this.diff)%60},minutes:function(){return Math.trunc(this.diff/60)%60},hours:function(){return Math.trunc(this.diff/60/60)%24},days:function(){return Math.trunc(this.diff/60/60/24)}},watch:{now:function(t){this.diff=this.date-this.now,this.diff<=0||this.stop?(this.diff=0,this.updateTime(3,0),clearInterval(this.interval)):(this.updateTime(0,this.days),this.updateTime(1,this.hours),this.updateTime(2,this.minutes),this.updateTime(3,this.seconds))}},filters:{twoDigits:function(t){return t.toString().length<=1?"0"+t.toString():t.toString()}},methods:{updateTime:function(t,e){if(!(t>=this.timeData.length||void 0===e)){window["requestAnimationFrame"]&&(this.frame=requestAnimationFrame(this.updateTime.bind(this)));var n=this.timeData[t],i=e<0?0:e;if(i!==n.current){n.previous=n.current,n.current=i;var a=document.querySelector("#".concat(n.elementId));a&&(a.classList.remove("flip"),a.offsetWidth,a.classList.add("flip"))}}}},beforeDestroy:function(){window["cancelAnimationFrame"]&&cancelAnimationFrame(this.frame)},destroyed:function(){clearInterval(C)}},M=D,j=(n("1613"),Object(f["a"])(M,g,y,!1,null,"058ab628",null));j.options.__file="FlipCountdown.vue";var k=j.exports,S={name:"app",components:{Countdown:w,FlipCountdown:k}},T=S,I=(n("034f"),n("7496")),O=n("8336"),V=n("549c"),F=n("132d"),E=n("71d9"),A=n("2a7f"),P=Object(f["a"])(T,r,s,!1,null,null,null);P.options.__file="App.vue";var q=P.exports;h()(P,{VApp:I["a"],VBtn:O["a"],VContainer:v["a"],VContent:V["a"],VFlex:_["a"],VIcon:F["a"],VLayout:m["a"],VToolbar:E["a"],VToolbarTitle:A["a"]}),i["a"].filter("zerofill",function(t){return(t<10&&t>-1?"0":"")+t}),i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(q)}}).$mount("#app")},6862:function(t,e,n){},9845:function(t,e,n){},b56c:function(t,e,n){},fdb3:function(t,e,n){"use strict";var i=n("6862"),a=n.n(i);a.a}});
//# sourceMappingURL=app.8b549add.js.map