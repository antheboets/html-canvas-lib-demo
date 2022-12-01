(()=>{"use strict";class t{static clickableManager;#t;constructor({click:t,clickAction:e=(()=>{})}){this.timeoutFunc=null,this.timeoutNumber=0,t?(this.setClickable=!0,this.clickaction=e):(this.#t=!1,this.clickaction=e)}GetTimeoutTime(){if(null!==this.timeoutFunc){const t=this.timeoutFunc();if(Number.isInteger(t))return t}return Number.isInteger(this.timeoutNumber)&&0!==this.timeoutNumber?this.timeoutNumber:2978}get getClickable(){return this.#t}set setClickable(e){e?(this.#t=e,t.clickableManager.addToList(this)):e||(this.#t=e,t.clickableManager.removeFromList(this))}click(){if(this.#t)return this.clickaction()}isClicked(t,e){return!1}start(){}stop(){}draw(t){}}const e=t;function i(t=""){if(null==t)return"none";if("string"!=typeof t)return"none";switch(t.split(".").pop().toLowerCase()){case"mp4":case"webm":return"video";case"mp3":return"audio";case"png":case"jpg":return"image";default:return"none"}}function n(t,e){return{...t,...e}}function s(t="100%"){if(null==t)return 1;if("string"!=typeof t)return 1;if("%"!==t.slice(-1))return 1;let e=Number(t.slice(0,t.length-1));return isNaN(e)?1:e/100}function a(t){return null!=t&&("string"==typeof t&&("%"===t.slice(-1)&&NaN!==Number(t.slice(0,t.length-1))))}const o=class{#e;#i;#n;#s;constructor(t=0,e={}){this.#n=e,this.setCoordinate=t}set setCoordinate(t){if(this.#e=t,a(t))return this.#s=!0,void(this.#i=s(this.#e)*this.#n());this.#i=t,this.#s=!1}get getCoordinate(){return Math.round(this.#i)}get getCoordinateValue(){return this.#e}get isPercent(){return this.#s}updateAxis(t){this.#s&&(this.#i=s(this.#e)*t)}},h=class{#a;#n;#o;#h;#r;#c;constructor(t=0,e="manual",i={}){this.#h=0,this.#n=i,this.setMode=e,this.setSize=t}get getMode(){return this.#o}set setMode(t){switch(t){case"manual":default:this.#o="manual";break;case"canvasSize":this.#o="canvasSize",this.setSize=this.#n();break;case"native":this.#o="native",this.setSize=this.#h}}set setNativeSize(t){this.#h=t,"native"===this.#o&&(this.setSize=this.#c)}get getNativeSize(){return this.#h}set setSize(t){switch(this.#c=t,this.#o){case"manual":if(a(t)){this.#r=s(t)*this.#h,this.#a=!0;break}this.#r=t,this.#a=!1;break;case"canvasSize":if(this.#a=!0,a(t)){this.#r=s(t)*this.#n();break}this.#r=this.#n();break;case"native":if(a(t)){this.#r=s(t)*this.#h,this.#a=!0;break}this.#r=this.#h,this.#a=!1}}get getSize(){return Math.round(this.#r)}get getSizeValue(){return this.#c}get getSizeMode(){return this.#o}get isPercent(){return this.#a}updateSize(t){a(this.#c)?this.#r=s(this.#c)*t:this.#r=t}},r=class extends e{constructor({x:t,y:e,height:i,heightMode:n,width:s,widthMode:a,loadPromise:r}){super({...arguments[0]}),this.x=new o(t,(()=>p().canvasElement.width)),this.y=new o(e,(()=>p().canvasElement.height)),this.height=new h(i,n,(()=>p().canvasElement.height)),this.width=new h(s,a,(()=>p().canvasElement.width)),this.loadedPromise=new Promise(r)}set setHeight(t){this.height.setSize=t}get getHeight(){return this.height.getSize}set setWidth(t){this.width.setSize=t}get getWidth(){return this.width.getSize}set setHeightMode(t){this.height.setMode=t}get getHeightMode(){return this.height.getMode}set setWidthMode(t){this.width.setMode=t}get getWidthMode(){return this.width.getMode}get getNativeHeight(){return this.height.getNativeSize}get getNativeWidth(){return this.width.getNativeSize}set setXPos(t){this.x.setCoordinate(t)}get getXPos(){return this.x.getCoordinate}set setYPos(t){this.y.setCoordinate(t)}get getYPos(){return this.y.getCoordinate}isClicked(t,e){let i=this.getXPos+this.getWidth,n=this.getYPos+this.getHeight;return this.getXPos<t&&t<i&&this.getYPos<e&&e<n}},c=class extends r{constructor({path:t}){const e=new Image;arguments[0].loadPromise=(t,i)=>{e.onload=()=>{this.width.setNativeSize=e.width,this.height.setNativeSize=e.height,t()}},super({...arguments[0]}),this.image=e,this.image.src=t}draw(t){t.drawImage(this.image,this.getXPos,this.getYPos,this.getWidth,this.getHeight)}},l=class extends r{constructor({path:t}){const e=document.createElement("video");e.muted=!0,e.autoplay=!0,e.loop=!0,arguments[0].loadPromise=(t,i)=>{e.oncanplay=()=>{this.height.setNativeSize=e.height,this.width.setNativeSize=e.width,t()}},super({...arguments[0]}),e.src=t,this.videoContainer={video:e,ready:!1,scale:1/0}}draw(t){void 0!==this.videoContainer&&this.videoContainer.ready&&t.drawImage(this.videoContainer.video,this.getXPos,this.getYPos,this.getWidth,this.getHeight)}start(){this.videoContainer.ready=!0,this.videoContainer.video.play()}stop(){this.videoContainer.pause(),this.videoContainer.currentTime=0}};function d(t="",e=""){return`${t}: ${e}`}function u(){if(p().startAnimationtest){if(p().now=Date.now(),p().elapsed=p().now-p().then,p().elapsedFrameCount++,p().elapsed>p().fpsInterval&&(p().then=p().now-p().elapsed%p().fpsInterval,p().ctx.clearRect(0,0,p().canvasElement.width,p().canvasElement.height),p().layers.forEach((t=>{t.currentContent.draw(p().ctx,p().canvasElement.width,p().canvasElement.height)})),p().drawFps)){let t=p().now-p().startTime,e=Math.round(1e3/(t/++p().frameCount)*100)/100;p().ctx.font="16px Arial",p().ctx.strokeStyle="grey",p().ctx.fillStyle="rgba(190,190,190,0.8)",p().ctx.fillRect(10,10,200,130),p().ctx.strokeStyle="black",p().ctx.fillStyle="black",p().ctx.fillText(d("Fps",function(t=0,e=0,i=" "){let n="";for(let s=0;s+t.toString().length<e.toString().length;s++)n+=i;return`${n}${t}/${e}fps`}(e,p().fps)),20,30),p().ctx.fillText(d("Start time",t/1e3+"sec"),20,50),p().ctx.fillText(d("Drawn frame count",`${p().frameCount}`),20,70),p().ctx.fillText(d("Total frame count",`${p().elapsedFrameCount}`),20,90),p().ctx.fillText(d("Elapsed",`${p().elapsed}`),20,110),p().ctx.fillText(d("Then",`${p().then}`),20,130)}window.requestAnimationFrame(u)}}let m=null;function g(){return null===m&&(m=new class{constructor(){this.layers=[],this.now=0,this.fps=60,this.fpsInterval=1e3/this.fps,this.then=0,this.elapsed=0,this.drawFps=!1,this.frameCount=0,this.elapsedFrameCount=0,this.startAnimationtest=!1,this.canvasElement=document.createElement("canvas"),this.canvasElement.width=window.innerWidth,this.canvasElement.height=window.innerHeight,this.ctx=this.canvasElement.getContext("2d"),this.clickableList=[],e.clickableManager={addToList:t=>{this.clickableList.push(t)},removeFromList:t=>{this.clickableList.splice(this.clickableList.indexOf(t),1)}},document.body.appendChild(this.canvasElement),window.addEventListener("resize",(()=>{this.canvasElement.height=window.innerHeight,this.canvasElement.width=window.innerWidth,this.#l()})),this.canvasElement.addEventListener("click",(t=>{t.preventDefault,this.clickableList.forEach((e=>{e.isClicked(t.x,t.y)&&e.click()}))}))}async#d(){const t=this.layers.map((t=>Promise.all(t.getOnloadPromisesArray())));await Promise.all(t)}getLayer(t){return null==t||"number"!=typeof t||this.layers.length<=t?null:this.layers[t]}getLayers(){return this.layers.map((t=>t.getLayer()))}#u(t){this.layers.push(t)}createLayer(t=null){const e=new class{#m;#g;constructor(t="manual"){this.content=[],this.currentPos=0,this.currentContent=null,this.setMode=t,this.#g=null,this.timerActive=!1,this.loopThroughContent=!0}set setMode(t){this.#m="timer"===t?"timer":"manual"}get getMode(){return this.#m}next(){this.#p(!0)}previous(){this.#p(!1)}#v(t){null!==this.currentContent&&("timer"===this.#m&&this.#y(),this.currentContent.stop()),this.currentContent=t,"timer"===this.#m&&this.#w(),this.currentContent.start()}setContentPos(t=0){null!=t&&"number"==typeof t&&(t>=this.content.length||(this.currentPos=t,this.#v(this.content[this.currentPos])))}#p(t=!0){t?this.currentPos<this.content.length-1?(this.currentPos++,this.#v(this.content[this.currentPos])):this.loopThroughContent&&(this.currentPos=0,this.#v(this.content[0])):this.currentPos>0?(this.currentPos--,this.#v(this.content[this.currentPos])):this.loopThroughContent&&(this.currentPos=this.content.length-1,this.#v(this.content[0]))}getOnloadPromisesArray(){return this.content.map((t=>t.getOnloadPromisesArray))}getLayer(){return this.content}removeContent(t){}#f(){1===this.content.length&&this.#v(this.content[0]),null===this.currentContent&&this.#v(this.content[0])}start(){this.#f(),"timer"===this.#m&&this.#w(),this.currentContent.start()}#w(){if(!this.timerActive){const t=()=>{this.#p(),this.#g=window.setTimeout(t,this.currentContent.GetTimeoutTime())};this.#g=window.setTimeout(t,this.currentContent.GetTimeoutTime()),this.timerActive=!0}}#y(){null!==this.#g&&(clearTimeout(this.#g),this.timerActive=!1)}stop(){"timer"===this.#m&&this.#y(),this.currentContent.stop()}addContentFormObj(t){switch(t.contentType){case"image":this.#z(t);break;case"video":this.#b(t)}}#z(t){const e=new c({...t});Number.isInteger(t.time)&&(e.timeoutNumber=t.time),t.time instanceof Function&&(e.timeoutFunc=t.time),this.content.push(e)}#b(t){const e=new l({...t});Number.isInteger(t.time)&&(e.timeoutNumber=t.time),t.time instanceof Function&&(e.timeoutFunc=t.time),this.content.push(e)}};let i=!0,n=!1;void 0===t&&(i=!1),null===t&&i&&(i=!1),(Array.isArray(t)&&"object"==typeof t||"object"==typeof t||"string"==typeof t)&&(n=!0),i&&n&&this.#C(e,t),this.#u(e)}#C(t,e){if(Array.isArray(e)&&"object"==typeof e&&0!==e.length&&e.forEach((e=>{"object"==typeof e?(e.contentType=i(e.path),t.addContentFormObj(n({contentType:"",path:"",x:0,y:0,height:0,heightMode:"native",width:0,widthMode:"native",time:0,click:!1},e))):("string"==typeof e||e instanceof String)&&t.addContentFormObj(n({contentType:"",path:"",x:0,y:0,height:0,heightMode:"native",width:0,widthMode:"native",time:0,click:!1},{path:e,contentType:i(e)}))})),"object"==typeof e){let s;s=void 0!==e.contentType?e.contentType:i(e.path),t.addContentFormObj(n({contentType:"",path:"",x:0,y:0,height:0,heightMode:"native",width:0,widthMode:"native",time:0,click:!1},e))}("string"==typeof e||e instanceof String)&&t.addContentFormObj(n({contentType:"",path:"",x:0,y:0,height:0,heightMode:"native",width:0,widthMode:"native",time:0,click:!1},{path:e,contentType:i(e)}))}removeLayerContent(t,e){this.layers[t].removeLayerContent(e)}stop(){this.startAnimationtest=!1,this.layers.forEach((t=>{t.stop()}))}async startAsync(){await this.#d(),this.layers.forEach((t=>{t.start()})),this.then=Date.now(),this.frameCount=0,this.elapsedFrameCount=0,this.startTime=this.then,this.startAnimationtest=!0,u()}#l(){this.layers.forEach((t=>{t.content.forEach((t=>{t.height.isPercent&&t.height.updateSize(this.canvasElement.height),t.width.isPercent&&t.width.updateSize(this.canvasElement.width),t.x.isPercent&&t.x.updateAxis(this.canvasElement.width),t.y.isPercent&&t.y.updateAxis(this.canvasElement.height)}))}))}}),m}const p=g,v=new Date;function y(t,e=""){console.log(t,`${e}${(new Date-v)/1e3+" Sec"}`)}console.log("Welcome to the demo"),console.log("Web design is my passion"),console.log("The module source code:"),console.log("https://github.com/antheboets/canvas-lib"),console.log("The demo source code:"),console.log("https://github.com/antheboets/html-canvas-lib-demo"),window.addEventListener("load",(async()=>{y("dom loaded");const t=g();y("canvas created"),t.createLayer([{contentType:"video",path:"./../content/YouCantWinIfYouDontPlay.webm",heightMode:"canvasSize",widthMode:"canvasSize"}]),y("added background video"),t.createLayer([{contentType:"image",path:"./../content/backgroundLayer1.png",heightMode:"canvasSize",widthMode:"canvasSize",time:1e3},{contentType:"image",path:"./../content/backgroundLayer2.png",heightMode:"canvasSize",widthMode:"canvasSize",time:2e3},{contentType:"image",path:"./../content/backgroundLayer3.png",heightMode:"canvasSize",widthMode:"canvasSize",time:3e3}]),t.getLayer(1).setMode="timer",y("added the first layer");const e=()=>1e3*function(t=0,e=100){return Math.floor(Math.random()*(e-t)+t)}(1,4);t.createLayer([{contentType:"image",path:"./../content/random1.png",time:()=>{let i=e();return t.getLayer(3).setContentPos(9-i/1e3),i}},{contentType:"image",path:"./../content/random2.png",time:()=>{let i=e();return t.getLayer(3).setContentPos(9-i/1e3),i}}]),t.getLayer(2).setMode="timer",y("added the second layer");let i=[];for(let t=9;t>=0;t--)i.push({contentType:"image",path:`./../content/number${t}.png`,time:1e3,x:"75%",y:"75%",widthMode:"canvasSize",width:"20%",heightMode:"canvasSize",height:"20%"});y(i,"list of numbers "),t.createLayer(i),t.getLayer(3).setMode="timer",y("added the third layer"),function(t){t.createLayer({contentType:"image",path:"./../content/homeButton.png",x:20,y:20,click:!0,clickAction:()=>{window.location.replace("../index.html")}})}(t),y("added home button"),await t.startAsync(),y("canvas started"),y(t.getLayer(3).content,"list of numbers "),console.log(t,"done"),window.addEventListener("mousedown",(async e=>{e.preventDefault,y(t.getLayer(3).content)}))}))})();