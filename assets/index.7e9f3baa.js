var N=Object.defineProperty;var O=(o,t,r)=>t in o?N(o,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[t]=r;var c=(o,t,r)=>(O(o,typeof t!="symbol"?t+"":t,r),r);import{o as h,c as d,a as u,u as E,R,b as l,t as w,r as f,w as T,d as I,e as p,p as S,f as L,g as m,h as _,i as g,F as C,j as X,k as Y,l as q,m as M}from"./vendor.7cd6b74e.js";const A=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}};A();const F={setup(o){return(t,r)=>(h(),d("header",null,[u(E(R))]))}},H="modulepreload",V={},P="/colision-vue3/",U=function(t,r){return!r||r.length===0?t():Promise.all(r.map(n=>{if(n=`${P}${n}`,n in V)return;V[n]=!0;const e=n.endsWith(".css"),s=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${s}`))return;const i=document.createElement("link");if(i.rel=e?"stylesheet":H,e||(i.as="script",i.crossOrigin=""),i.href=n,document.head.appendChild(i),e)return new Promise((a,b)=>{i.addEventListener("load",a),i.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>t())};var v=(o,t)=>{const r=o.__vccOpts||o;for(const[n,e]of t)r[n]=e;return r};const j={name:"InputForm",props:["label","labelName","modelValue","regExp","maxlength"],emits:["update:modelValue"],methods:{inputValidate(o){this.regExp.test(o.data)?this.modelValue:o.target.value=o.target.value.slice(0,o.target.value.length-1),this.$emit("update:modelValue",o.target.value)}}},W={class:"form"},D=["for"],B=["value","maxlength"];function z(o,t,r,n,e,s){return h(),d("div",W,[l("label",{for:r.label},w(r.labelName),9,D),l("input",{type:"text",value:r.modelValue,onInput:t[0]||(t[0]=(...i)=>s.inputValidate&&s.inputValidate(...i)),maxlength:r.maxlength},null,40,B)])}var K=v(j,[["render",z],["__scopeId","data-v-488b59da"]]);const G={name:"TheForm",components:{InputForm:K},props:["showOrders"],data(){return{info:{positionX:"",positionY:"",currentOrientation:"",width:"",height:"",orders:""},label:{positionY:"positionY",nameY:"Vertical Position",positionX:"positionX",nameX:"Horizontal Position",height:"height",nameHeight:"Square height",width:"width",nameWidth:"Square width",orientation:"orientation",nameOrientation:"Initial orientation",orders:"orders",nameOrders:"Code your movements"},maxlength:{positionY:3,positionX:3,orientation:1,width:3,height:3},numRegExp:/^[0-9]/,orientationRegExp:/[neswNESW]/,ordersRegExp:/[lraLRA]/,divError:!1,positionError:!1}},methods:{start:function(){if(parseInt(this.info.positionX)>=parseInt(this.info.width)||parseInt(this.info.positionY)>=parseInt(this.info.height)){this.positionError=!0,setTimeout(()=>{this.positionError=!1},3e3);return}if(this.info.positionX==""||this.info.positionY==""||this.info.currentOrientation==""||this.info.height==""||this.info.width==""){this.divError=!0,setTimeout(()=>{this.divError=!1},3e3);return}else this.info.currentOrientation=this.info.currentOrientation.toLowerCase(),this.info.orders=this.info.orders.toLowerCase(),this.$emit("setObject",this.info)}}},J=o=>(S("data-v-4dec2668"),o=o(),L(),o),Q={class:"container"},Z={class:"form"},$=J(()=>l("input",{type:"submit",value:"Send"},null,-1)),ee={key:0,class:"error"},te={key:1,class:"error"};function oe(o,t,r,n,e,s){const i=f("input-form");return h(),d("div",Q,[l("div",Z,[l("form",{class:"form-group",onSubmit:t[6]||(t[6]=T((...a)=>s.start&&s.start(...a),["prevent"]))},[u(i,{label:e.label.positionX,"label-name":e.label.nameX,modelValue:e.info.positionX,"onUpdate:modelValue":t[0]||(t[0]=a=>e.info.positionX=a),"reg-exp":e.numRegExp,maxlength:e.maxlength.positionX},null,8,["label","label-name","modelValue","reg-exp","maxlength"]),u(i,{label:e.label.positionY,labelName:e.label.nameY,modelValue:e.info.positionY,"onUpdate:modelValue":t[1]||(t[1]=a=>e.info.positionY=a),"reg-exp":e.numRegExp,maxlength:e.maxlength.positionY},null,8,["label","labelName","modelValue","reg-exp","maxlength"]),u(i,{label:e.label.orientation,"label-name":e.label.nameOrientation,modelValue:e.info.currentOrientation,"onUpdate:modelValue":t[2]||(t[2]=a=>e.info.currentOrientation=a),"reg-exp":e.orientationRegExp,maxlength:e.maxlength.orientation},null,8,["label","label-name","modelValue","reg-exp","maxlength"]),u(i,{label:e.label.width,"label-name":e.label.nameWidth,modelValue:e.info.width,"onUpdate:modelValue":t[3]||(t[3]=a=>e.info.width=a),"reg-exp":e.numRegExp,maxlength:e.maxlength.width},null,8,["label","label-name","modelValue","reg-exp","maxlength"]),u(i,{label:e.label.height,labelName:e.label.nameHeight,modelValue:e.info.height,"onUpdate:modelValue":t[4]||(t[4]=a=>e.info.height=a),"reg-exp":e.numRegExp,maxlength:e.maxlength.height},null,8,["label","labelName","modelValue","reg-exp","maxlength"]),r.showOrders?(h(),I(i,{key:0,label:e.label.orders,"label-name":e.label.nameOrders,modelValue:e.info.orders,"onUpdate:modelValue":t[5]||(t[5]=a=>e.info.orders=a),"reg-exp":e.ordersRegExp},null,8,["label","label-name","modelValue","reg-exp"])):p("",!0),$],32),e.divError?(h(),d("div",ee," You need to set all data, thank you. ")):p("",!0),e.positionError?(h(),d("div",te," The positioin of Rover is already out of the square. ")):p("",!0)])])}var re=v(G,[["render",oe],["__scopeId","data-v-4dec2668"]]);class x{constructor(t,r,n,e,s){c(this,"orientationName",["N","E","S","W"]);c(this,"position",{y:0,x:0});c(this,"square",{y:0,x:0});c(this,"orientationNumber",0);c(this,"finished",!1);c(this,"movements",null);c(this,"crashed",!1);this.position.x=r,this.position.y=n,this.square.x=e,this.square.y=s,this.pointerOrientation=t}set currentOrientation(t){switch(t.toLowerCase()){case"n":this.orientationNumber=0;break;case"e":this.orientationNumber=1;break;case"s":this.orientationNumber=2;break;case"w":this.orientationNumber=3}}moveOn(t){switch(t){case 0:this.position.y++;break;case 1:this.position.x++;break;case 2:this.position.y--;break;case 3:this.position.x--}}rotate(t){t.toLowerCase()==="l"&&(this.orientationNumber--,this.orientationNumber===-1&&(this.orientationNumber=3)),t.toLowerCase()==="r"&&(this.orientationNumber++,this.orientationNumber===4&&(this.orientationNumber=0))}}const se={name:"TheResult",props:["value"]},ie={class:"result"},ne={class:"label"},ae={class:"value"};function le(o,t,r,n,e,s){return h(),d("div",ie,[l("div",ne,[m(o.$slots,"default")]),l("div",ae,w(r.value),1)])}var ue=v(se,[["render",le]]);const he={props:["value"]},de={class:"display"},ce={class:"label"},me={class:"value"};function pe(o,t,r,n,e,s){return h(),d("div",de,[l("div",ce,[m(o.$slots,"default",{},void 0,!0)]),l("div",me,w(r.value),1)])}var ve=v(he,[["render",pe],["__scopeId","data-v-63079447"]]);const _e={name:"TheMath",components:{TheForm:re,TheMoves:ve,TheResult:ue},props:["choice","needTo"],emits:["views"],data(){return{orders:"",rover:x,emitPayload:null,objectNew:!1,crash:!1,movements:0}},mounted(){window.addEventListener("keydown",this.keyHandler)},destroyed(){window.removeEventListener("keydown",this.keyHandler)},methods:{runRover(o){this.rover=new x(o.currentOrientation,parseInt(o.positionX),parseInt(o.positionY),parseInt(o.width),parseInt(o.height)),this.orders=o.orders,this.rover.currentOrientation=o.currentOrientation,this.emitPayload=o.positionX,this.objectNew=!0},doTheMath(){let o=0;for(let t=0;t<this.orders.length;t++)if((this.orders.charAt(t)=="l"||this.orders.charAt(t)=="r")&&this.rover.rotate(this.orders.charAt(t)),this.orders.charAt(t)=="a"&&this.rover.moveOn(this.rover.orientationNumber),this.rover.position.x<=0||this.rover.position.x>=this.rover.square.x||this.rover.position.y<=0||this.rover.position.y>=this.rover.square.y){this.colision(t+1),o=1;break}if(o==0)return this.rover.finished=!0,this.rover.movements=this.orders.length,this.rover.crashed=!0,this.rover},colision(o){return this.rover.finished=!0,this.rover.movements=o,this.rover.crashed=!1,window.removeEventListener("keydown",this.keyHandler),this.rover},keyHandler(o){switch(this.movements++,o.keyCode){case 76:this.rover.rotate("L");break;case 82:this.rover.rotate("r");break;case 65:this.rover.moveOn(this.rover.orientationNumber);break}(this.rover.position.x<=0||this.rover.position.x>=this.rover.square.x||this.rover.position.y<=0||this.rover.position.y>=this.rover.square.y)&&this.colision(this.movements)},reset(){this.rover=new x,this.$emit("views",!1)}}},fe={key:0},ge={class:"do-math"},be={key:0,class:"display"},ye=g("X:"),xe=g("Y:"),we=g("Orientation:"),Ve={key:1,class:"result"},ke=g("Result:"),Ne=g("Movement:"),Oe={class:"reset"};function Ee(o,t,r,n,e,s){const i=f("the-form"),a=f("the-moves"),b=f("the-result");return r.choice?(h(),d("main",fe,[u(i,{onSetObject:s.runRover,showOrders:r.needTo},null,8,["onSetObject","showOrders"]),l("div",ge,[r.needTo?(h(),d("button",{key:0,class:"btn",onClick:t[0]||(t[0]=(...y)=>s.doTheMath&&s.doTheMath(...y))},"Do the Math")):p("",!0)]),e.objectNew?(h(),d("div",be,[u(a,{value:e.rover.position.x},{default:_(()=>[m(o.$slots,"default",{},()=>[ye],!0)]),_:3},8,["value"]),u(a,{value:e.rover.position.y},{default:_(()=>[m(o.$slots,"default",{},()=>[xe],!0)]),_:3},8,["value"]),u(a,{value:e.rover.orientationName[e.rover.orientationNumber]},{default:_(()=>[m(o.$slots,"default",{},()=>[we],!0)]),_:3},8,["value"])])):p("",!0),e.rover.finished?(h(),d("div",Ve,[u(b,{value:e.rover.crashed},{default:_(()=>[m(o.$slots,"default",{},()=>[ke],!0)]),_:3},8,["value"]),u(b,{value:e.rover.movements},{default:_(()=>[m(o.$slots,"default",{},()=>[Ne],!0)]),_:3},8,["value"])])):p("",!0),l("div",Oe,[l("button",{class:"btn",onClick:t[1]||(t[1]=(...y)=>s.reset&&s.reset(...y))},"Reset")])])):p("",!0)}var Re=v(_e,[["render",Ee],["__scopeId","data-v-4ea91660"]]);const Te={components:{TheMath:Re},data(){return{selected:!1,program:!1}},methods:{choice(o){this.selected=!0,o.target.value=="program"?this.program=!0:this.program=!1},reset(){this.selected=!1,this.program=!1,location.reload()}}},Ie=l("h1",null,"Are Rover gonna crush?",-1),Se=X('<div class="program"><input type="radio" name="choice" value="program" id="program"><label for="program">Do you wanna program Rover</label></div><div class="drive"><input type="radio" name="choice" value="drive" id="drive"><label for="drive">Do you prefer drive Rover</label></div><div class="info">Crashed: False/Uncrushed: True</div>',3),Le=[Se];function Ce(o,t,r,n,e,s){const i=f("the-math");return h(),d(C,null,[Ie,l("form",{action:"choice",class:"action",onChange:t[0]||(t[0]=(...a)=>s.choice&&s.choice(...a))},Le,32),u(i,{choice:e.selected,needTo:e.program,onViews:s.reset},null,8,["choice","needTo","onViews"])],64)}var Xe=v(Te,[["render",Ce]]);const Ye=Y({history:q("/colision-vue3/"),routes:[{path:"/",name:"home",component:Xe},{path:"/about",name:"about",component:()=>U(()=>import("./AboutView.586b9fe8.js"),["assets/AboutView.586b9fe8.js","assets/AboutView.ab071ea6.css","assets/vendor.7cd6b74e.js"])}]}),k=M(F);k.use(Ye);k.mount("#app");export{v as _};
