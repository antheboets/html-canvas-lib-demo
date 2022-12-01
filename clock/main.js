(()=>{"use strict";const t=class{constructor(){this.timeoutFunc=null,this.timeoutNumber=0}GetTimeoutTime(){if(null!==this.timeoutFunc){const t=this.timeoutFunc();if(Number.isInteger(t))return t}return Number.isInteger(this.timeoutNumber)&&0!==this.timeoutNumber?this.timeoutNumber:2978}start(){}stop(){}draw(t){}};function e(t=""){if(null==t)return"none";if("string"!=typeof t)return"none";switch(t.split(".").pop().toLowerCase()){case"mp4":case"webm":return"video";case"mp3":return"audio";case"png":case"jpg":return"image";default:return"none"}}function i(t,e){return{...t,...e}}function s(t="100%"){if(null==t)return 1;if("string"!=typeof t)return 1;if("%"!==t.slice(-1))return 1;let e=Number(t.slice(0,t.length-1));return isNaN(e)?1:e/100}function n(t){return null!=t&&("string"==typeof t&&("%"===t.slice(-1)&&NaN!==Number(t.slice(0,t.length-1))))}const a=class{#t;#e;#i;#s;constructor(t=0,e={}){this.#i=e,this.setCoordinate=t}set setCoordinate(t){if(this.#t=t,n(t))return this.#s=!0,void(this.#e=s(this.#t)*this.#i());this.#e=t,this.#s=!1}get getCoordinate(){return Math.round(this.#e)}get getCoordinateValue(){return this.#t}get isPercent(){return this.#s}updateAxis(t){this.#s&&(this.#e=s(this.#t)*t)}},o=class{#n;#i;#a;#o;#h;#r;constructor(t=0,e="manual",i={}){this.#o=0,this.#i=i,this.setMode=e,this.setSize=t}get getMode(){return this.#a}set setMode(t){switch(t){case"manual":default:this.#a="manual";break;case"canvasSize":this.#a="canvasSize",this.setSize=this.#i();break;case"native":this.#a="native",this.setSize=this.#o}}set setNativeSize(t){this.#o=t,"native"===this.#a&&(this.setSize=this.#r)}get getNativeSize(){return this.#o}set setSize(t){switch(this.#r=t,this.#a){case"manual":if(n(t)){this.#h=s(t)*this.#o,this.#n=!0;break}this.#h=t,this.#n=!1;break;case"canvasSize":if(this.#n=!0,n(t)){this.#h=s(t)*this.#i();break}this.#h=this.#i();break;case"native":if(n(t)){this.#h=s(t)*this.#o,this.#n=!0;break}this.#h=this.#o,this.#n=!1}}get getSize(){return Math.round(this.#h)}get getSizeValue(){return this.#r}get getSizeMode(){return this.#a}get isPercent(){return this.#n}updateSize(t){n(this.#r)?this.#h=s(this.#r)*t:this.#h=t}},h=class extends t{constructor(t,e){super(),this.x=new a(t.x,(()=>g().canvasElement.width)),this.y=new a(t.y,(()=>g().canvasElement.height)),this.height=new o(t.height,t.heightMode,(()=>g().canvasElement.height)),this.width=new o(t.width,t.widthMode,(()=>g().canvasElement.width)),this.loadedPromise=new Promise(e)}set setHeight(t){this.height.setSize=t}get getHeight(){return this.height.getSize}set setWidth(t){this.width.setSize=t}get getWidth(){return this.width.getSize}set setHeightMode(t){this.height.setMode=t}get getHeightMode(){return this.height.getMode}set setWidthMode(t){this.width.setMode=t}get getWidthMode(){return this.width.getMode}get getNativeHeight(){return this.height.getNativeSize}get getNativeWidth(){return this.width.getNativeSize}set setXPos(t){this.x.setCoordinate(t)}get getXPos(){return this.x.getCoordinate}set setYPos(t){this.y.setCoordinate(t)}get getYPos(){return this.y.getCoordinate}},r=class extends h{constructor(t){const e=new Image;super(t,((t,i)=>{e.onload=()=>{this.width.setNativeSize=e.width,this.height.setNativeSize=e.height,t()}})),this.image=e,this.image.src=t.path}draw(t){t.drawImage(this.image,this.getXPos,this.getYPos,this.getWidth,this.getHeight)}},c=class extends h{constructor(t){const e=document.createElement("video");e.muted=!0,e.autoplay=!0,e.loop=!0,super(t,((t,i)=>{e.oncanplay=()=>{this.height.setNativeSize=e.height,this.width.setNativeSize=e.width,t()}})),e.src=t.path,this.videoContainer={video:e,ready:!1,scale:1/0}}draw(t){void 0!==this.videoContainer&&this.videoContainer.ready&&t.drawImage(this.videoContainer.video,this.getXPos,this.getYPos,this.getWidth,this.getHeight)}start(){this.videoContainer.ready=!0,this.videoContainer.video.play()}stop(){this.videoContainer.pause(),this.videoContainer.currentTime=0}};function d(t="",e=""){return`${t}: ${e}`}function u(){if(g().startAnimationtest){if(g().now=Date.now(),g().elapsed=g().now-g().then,g().elapsedFrameCount++,g().elapsed>g().fpsInterval&&(g().then=g().now-g().elapsed%g().fpsInterval,g().ctx.clearRect(0,0,g().canvasElement.width,g().canvasElement.height),g().layers.forEach((t=>{t.currentContent.draw(g().ctx,g().canvasElement.width,g().canvasElement.height)})),g().drawFps)){let t=g().now-g().startTime,e=Math.round(1e3/(t/++g().frameCount)*100)/100;g().ctx.font="16px Arial",g().ctx.strokeStyle="grey",g().ctx.fillStyle="rgba(190,190,190,0.8)",g().ctx.fillRect(10,10,200,130),g().ctx.strokeStyle="black",g().ctx.fillStyle="black",g().ctx.fillText(d("Fps",function(t=0,e=0,i=" "){let s="";for(let n=0;n+t.toString().length<e.toString().length;n++)s+=i;return`${s}${t}/${e}fps`}(e,g().fps)),20,30),g().ctx.fillText(d("Start time",t/1e3+"sec"),20,50),g().ctx.fillText(d("Drawn frame count",`${g().frameCount}`),20,70),g().ctx.fillText(d("Total frame count",`${g().elapsedFrameCount}`),20,90),g().ctx.fillText(d("Elapsed",`${g().elapsed}`),20,110),g().ctx.fillText(d("Then",`${g().then}`),20,130)}window.requestAnimationFrame(u)}}let l=null;function m(){return null===l&&(l=new class{constructor(){this.layers=[],this.now=0,this.fps=60,this.fpsInterval=1e3/this.fps,this.then=0,this.elapsed=0,this.drawFps=!1,this.frameCount=0,this.elapsedFrameCount=0,this.startAnimationtest=!1,this.canvasElement=document.createElement("canvas"),this.canvasElement.width=window.innerWidth,this.canvasElement.height=window.innerHeight,this.ctx=this.canvasElement.getContext("2d"),document.body.appendChild(this.canvasElement),window.addEventListener("resize",(()=>{this.canvasElement.height=window.innerHeight,this.canvasElement.width=window.innerWidth,this.#c()}))}async#d(){const t=this.layers.map((t=>Promise.all(t.getOnloadPromisesArray())));await Promise.all(t)}getLayer(t){return null==t||"number"!=typeof t||this.layers.length<=t?null:this.layers[t]}getLayers(){return this.layers.map((t=>t.getLayer()))}#u(t){this.layers.push(t)}createLayer(t=null){const e=new class{#l;#m;constructor(t="manual"){this.content=[],this.currentPos=0,this.currentContent=null,this.setMode=t,this.#m=null,this.timerActive=!1,this.loopThroughContent=!0}set setMode(t){this.#l="timer"===t?"timer":"manual"}get getMode(){return this.#l}next(){this.#g(!0)}previous(){this.#g(!1)}#p(t){null!==this.currentContent&&("timer"===this.#l&&this.#v(),this.currentContent.stop()),this.currentContent=t,"timer"===this.#l&&this.#y(),this.currentContent.start()}setContentPos(t=0){null!=t&&"number"==typeof t&&(t>=this.content.length||(this.currentPos=t,this.#p(this.content[this.currentPos])))}#g(t=!0){t?this.currentPos<this.content.length-1?(this.currentPos++,this.#p(this.content[this.currentPos])):this.loopThroughContent&&(this.currentPos=0,this.#p(this.content[0])):this.currentPos>0?(this.currentPos--,this.#p(this.content[this.currentPos])):this.loopThroughContent&&(this.currentPos=this.content.length-1,this.#p(this.content[0]))}getOnloadPromisesArray(){return this.content.map((t=>t.getOnloadPromisesArray))}getLayer(){return this.content}removeContent(t){}#w(){1===this.content.length&&this.#p(this.content[0]),null===this.currentContent&&this.#p(this.content[0])}start(){this.#w(),"timer"===this.#l&&this.#y(),this.currentContent.start()}#y(){if(!this.timerActive){const t=()=>{this.#g(),this.#m=window.setTimeout(t,this.currentContent.GetTimeoutTime())};this.#m=window.setTimeout(t,this.currentContent.GetTimeoutTime()),this.timerActive=!0}}#v(){null!==this.#m&&(clearTimeout(this.#m),this.timerActive=!1)}stop(){"timer"===this.#l&&this.#v(),this.currentContent.stop()}addContentFormObj(t){switch(t.contentType){case"image":this.#z(t);break;case"video":this.#f(t)}}#z(t){const e=new r(t);Number.isInteger(t.time)&&(e.timeoutNumber=t.time),t.time instanceof Function&&(e.timeoutFunc=t.time),this.content.push(e)}#f(t){const e=new c(t);Number.isInteger(t.time)&&(e.timeoutNumber=t.time),t.time instanceof Function&&(e.timeoutFunc=t.time),this.content.push(e)}};let i=!0,s=!1;void 0===t&&(i=!1),null===t&&i&&(i=!1),(Array.isArray(t)&&"object"==typeof t||"object"==typeof t||"string"==typeof t)&&(s=!0),i&&s&&this.#S(e,t),this.#u(e)}#S(t,s){if(Array.isArray(s)&&"object"==typeof s&&0!==s.length&&s.forEach((s=>{"object"==typeof s?(s.contentType=e(s.path),t.addContentFormObj(i({contentType:"",path:"",x:0,y:0,height:0,heightMode:"canvasSize",width:0,widthMode:"canvasSize",time:0},s))):("string"==typeof s||s instanceof String)&&t.addContentFormObj(i({contentType:"",path:"",x:0,y:0,height:0,heightMode:"canvasSize",width:0,widthMode:"canvasSize",time:0},{path:s,contentType:e(s)}))})),"object"==typeof s){let n;n=void 0!==s.contentType?s.contentType:e(s.path),t.addContentFormObj(i({contentType:"",path:"",x:0,y:0,height:0,heightMode:"canvasSize",width:0,widthMode:"canvasSize",time:0},{path:s.path,contentType:n,timer:s.timer}))}("string"==typeof s||s instanceof String)&&t.addContentFormObj(i({contentType:"",path:"",x:0,y:0,height:0,heightMode:"canvasSize",width:0,widthMode:"canvasSize",time:0},{path:s,contentType:e(s)}))}removeLayerContent(t,e){this.layers[t].removeLayerContent(e)}stop(){this.startAnimationtest=!1,this.layers.forEach((t=>{t.stop()}))}async startAsync(){await this.#d(),this.layers.forEach((t=>{t.start()})),this.then=Date.now(),this.frameCount=0,this.elapsedFrameCount=0,this.startTime=this.then,this.startAnimationtest=!0,u()}#c(){this.layers.forEach((t=>{t.content.forEach((t=>{t.height.isPercent&&t.height.updateSize(this.canvasElement.height),t.width.isPercent&&t.width.updateSize(this.canvasElement.width),t.x.isPercent&&t.x.updateAxis(this.canvasElement.width),t.y.isPercent&&t.y.updateAxis(this.canvasElement.height)}))}))}}),l}const g=m,p=new Date;function v(t,e=""){console.log(t,`${e}${(new Date-p)/1e3+" Sec"}`)}console.log("Welcome to the demo"),console.log("Web design is my passion"),console.log("The module source code:"),console.log("https://github.com/antheboets/canvas-lib"),console.log("The demo source code:"),console.log("https://github.com/antheboets/html-canvas-lib-demo"),window.addEventListener("load",(async()=>{v("dom loaded");const t=(t=0,e=0,i=1)=>{const s=[];for(let n=0;n<10;n++)s.push({contentType:"image",path:`./../content/number${n}.png`,time:1e3*i,x:t,y:e,heightMode:"native",widthMode:"native"});return s},e=m();v("canvas created"),e.createLayer([{contentType:"video",path:"./../content/MeEnteringUnauthorizedZoneAtWork.webm",heightMode:"canvasSize",widthMode:"canvasSize"}]),v("added background video");let i=250;e.createLayer(t("75%",i,1)),e.getLayer(1).setMode="timer",e.createLayer(t("50%",i,10)),e.getLayer(2).setMode="timer",e.createLayer(t("25%",i,100)),e.getLayer(3).setMode="timer",e.createLayer(t("0%",i,1e3)),e.getLayer(4).setMode="timer",function(t){t.createLayer({contentType:"image",path:"./../content/homeButton.png",x:20,y:20,click:!0,clickAction:()=>{window.location.replace("../index.html")}})}(e),v("added home button"),await e.startAsync(),v("canvas started"),console.log(e,"done"),window.addEventListener("mousedown",(async t=>{t.preventDefault}))}))})();