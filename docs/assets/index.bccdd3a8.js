var t=Object.defineProperty,e=(e,s,i)=>(((e,s,i)=>{s in e?t(e,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[s]=i})(e,"symbol"!=typeof s?s+"":s,i),i);!function(){const t=document.createElement("link").relList;if(!(t&&t.supports&&t.supports("modulepreload"))){for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver((t=>{for(const s of t)if("childList"===s.type)for(const t of s.addedNodes)"LINK"===t.tagName&&"modulepreload"===t.rel&&e(t)})).observe(document,{childList:!0,subtree:!0})}function e(t){if(t.ep)return;t.ep=!0;const e=function(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),"use-credentials"===t.crossorigin?e.credentials="include":"anonymous"===t.crossorigin?e.credentials="omit":e.credentials="same-origin",e}(t);fetch(t.href,e)}}();class s{constructor(t){e(this,"doc"),e(this,"boxesContent",{controls:'\n      <div class="box__game--item box__game--animate">   \n        <div class="form__game">\n          <div class="flex justify-between text-yellow-700 mb-1">\n            <h2 class="font-bold text-lg"> \n              <i class="bx bx-dialpad-alt"></i> Controles\n            </h2>\n            <i class=\'bx bx-x bx-border border-yellow-700 cursor-pointer\' id="modal-close"></i>\n          </div>\n          <div class="grid grid-cols-3 gap-3 items-center text-yellow-700">\n            <div class="col-span-2 text-justify">\n            Para controlar el pecesito solo debes hacer click derecho dentro de la pescera.</div>\n            <div class="bg-yellow-500 rounded">\n              <i class=\'bx bx-mouse-alt text-7xl py-4 text-white\'></i>\n            </div>\n          </div>\n          <div class="text-yellow-700">\n            Pulsa la tecla <b>ESC</b> para pausar el juego\n          </div>\n        </div> \n      </div>',collection:'\n      <div class="box__game--collection box__game--animate">\n          <div class="form__game text-yellow-700 ">\n            <div class="flex justify-between mb-1">\n              <h2 class="font-bold text-lg"> \n                <i class="bx bx bx-box"></i> Colección\n              </h2>\n              <i class=\'bx bx-x bx-border border-yellow-700 cursor-pointer\' id="modal-close"></i>\n            </div>\n            <p>Todos tus personajes se encuentran aqui.</p>\n            <div class="box__item__group">\n\n              <div class="box__item group">\n                <figure class="relative">\n                  <img src="src/imgs/collect/fish_green.png" class="w-25 sm:w-100" alt="vite">\n                  <figcaption class="item__name transition\n                    group-hover:bg-yellow-300 group-hover:text-yellow-700">P. Lima</figcaption>\n                </figure>\n              </div>\n              <div class="box__item group">\n                <figure class="relative">\n                  <img src="src/imgs/collect/fish_purple.png" class="w-25 sm:w-100" alt="vite">\n                  <figcaption class="item__name transition\n                    group-hover:bg-yellow-300 group-hover:text-yellow-700">P. Morado</figcaption>\n                </figure>\n              </div>\n              <div class="box__item group ">\n                <figure class="relative">\n                  <img src="src/imgs/collect/fish_blue.png" class="w-25 sm:w-100" alt="vite">\n                  <figcaption class="item__name transition\n                    group-hover:bg-yellow-300 group-hover:text-yellow-700">P. Cyan</figcaption>\n                </figure>\n              </div>\n              \n            </div>\n            <button class="btn btn-outline-yellow px-2 py-1 mx-auto" id="select-fish">\n              <i class=\'bx bx-chevron-right\' ></i>\n              Seleccionar \n              <i class=\'bx bx-chevron-left\' ></i>\n            </button>\n          </div>\n        </div>',ranking:'\n      <div class="box__game--item box__game--animate w-80">   \n        <div class="form__game">\n          <div class="flex justify-between text-yellow-700 mb-1">\n            <h2 class="font-bold text-lg"> \n              <i class=\'bx bx-medal\' ></i> Ranking\n            </h2>\n            <i class=\'bx bx-x bx-border border-yellow-700 cursor-pointer\' id="modal-close"></i>\n          </div>\n\n          <div class="group__ranking py-2">\n            <div class="item__ranking">\n              <div class="col-span-1">\n                <i class=\'bx bx-user bx-sm\' ></i>\n              </div>\n              <div class="col-span-5">\n                <p >El man pro</p>\n              </div>\n              <div class="col-span-2 text-center"> \n                <i class=\'bx bx-chevron-right\'></i>\n                <span class="text-lg">423</span>\n              </div>\n            </div>\n            <div class="item__ranking">\n              <div class="col-span-1">\n                <i class=\'bx bx-user bx-sm\' ></i>\n              </div>\n              <div class="col-span-5">\n                <p >Tilin Cosmico</p>\n              </div>\n              <div class="col-span-2 text-center"> \n                <i class=\'bx bx-chevron-right\'></i>\n                <span class="text-lg">323</span>\n              </div>\n            </div>\n            <div class="item__ranking">\n              <div class="col-span-1">\n                <i class=\'bx bx-user bx-sm\' ></i>\n              </div>\n              <div class="col-span-5">\n                <p >Creeper con tallarin</p>\n              </div>\n              <div class="col-span-2 text-center"> \n                <i class=\'bx bx-chevron-right\'></i>\n                <span class="text-lg">101</span>\n              </div>\n            </div>\n          </div>\n\n\n        </div> \n      </div>',info:'<div class="box__game--item box__game--animate">   \n        <div class="form__game">\n          <div class="flex justify-between text-yellow-700 mb-1">\n            <h2 class="font-bold text-lg"> \n             <i class=\'bx bx-info-circle\'></i> Información\n            </h2>\n            <i class=\'bx bx-x bx-border border-yellow-700 cursor-pointer\' id="modal-close"></i>\n          </div>\n          <div class="text-yellow-700">\n            Este proyecto fue realizado con el fin de profundizar en typescript y el tipado dinámico del mismo, y ver la extensibilidad del lenguaje o superset.\n          </div>\n          <div class="text-yellow-700">\n            Creado por Antik :) SALUDOS CRACKS .-.\n          </div>\n        </div> \n      </div>'}),e(this,"boxPause",'\n      <div class="box__game--item ">\n          <h1 class="text-2xl sm:text-3xl text-yellow-700 text-center">PAUSA</h1>\n          <div class="flex space-x-2">\n            <button class="btn__box btn__anim btn-outline-yellow w-6/12" id="play-game">\n              <i class=\'bx bx-sm bx-right-arrow mr-2\'></i>\n            </button>\n            <button class="btn__box btn__anim btn-outline-yellow w-6/12" id="reset-game">\n              <i class=\'bx bx-sm bx-revision\'></i>\n            </button>\n         </div>\n      </div>'),e(this,"linkItems"),e(this,"modalGame"),e(this,"modalContent",null),this.doc=t,this.modalGame=this.doc.getElementById("modal-game"),this.linkItems=this.doc.querySelectorAll(".link__item"),this.modalOpenGame('\n      <div class="box__game--item ">\n         <div class="form__game text-center">\n            <div>\n              <img src="src/imgs/logo_orange.png" class="w-25" alt="logo"></img>\n            </div>\n            <input type="text" value="" autofocus="autofocus" class="input__text" placeholder="Ingrese NickName" maxlength="10" id="init-game-nick">\n         </div>\n         <div class="flex space-x-2">\n            <button class="btn__box btn__anim btn-outline-yellow w-9/12" id="init-game-play">\n              <i class=\'bx bx-sm bx-right-arrow mr-2\'></i> Jugar\n            </button>\n            <a href="https://www.paypal.com/donate/?hosted_button_id=U36PRU2NDT82W" target="_blank" \n              class="rounded-md border-2 btn__box btn__anim btn-outline-yellow w-3/12">\n              <i class=\'bx bx-sm bx-heart\' ></i>\n            </a>\n         </div>\n      </div>')}resetNavItems(){this.linkItems.forEach((t=>t.classList.remove("active")))}renderBoxContent(t){const e=Object.entries(this.boxesContent).find(((e,s)=>s===t&&e));void 0!==e&&(this.modalOpenGame(e[1]),this.animateBoxContent(!0))}animateBoxContent(t){t?setTimeout((()=>this.modalContent.classList.add("active")),200):this.modalContent.classList.remove("active")}modalCloseFunc(){this.animateBoxContent(!1),setTimeout((()=>{this.modalGame.classList.remove("active","absolute"),this.modalGame.removeChild(this.modalContent),this.resetNavItems()}),400)}modalOpenGame(t){this.modalGame.insertAdjacentHTML("afterbegin",t),this.modalGame.classList.add("active","absolute"),this.modalContent=this.modalGame.children[0]}pauseGame(){this.modalOpenGame(this.boxPause)}reportStatus(t){this.modalOpenGame(`\n        <div class="box__game--item">\n          <div class="text-yellow-700 text-center">\n            <h1 class="text-xl font-bold">Perdiste: ${t.nick}</h1>\n            <p> Puntaje Total: ${t.score+t.alga}. </p>\n            <p> Puntaje Bonus: ${t.alga}. </p>\n          </div>\n          <div class="flex space-x-2">\n            <button class="btn__box btn__anim btn-outline-yellow w-6/12" id="reset-game-over">\n              <i class='bx bx-sm bx-revision'></i>\n            </button>\n            <a href="https://www.paypal.com/donate/?hosted_button_id=U36PRU2NDT82W" target="_blank" \n            class="rounded-md border-2 btn__box btn__anim btn-outline-yellow w-6/12">\n              <i class='bx bx-sm bx-heart' ></i>\n            </a>\n          </div>\n        </div>`)}}class i{constructor(t,s,i,a){e(this,"mouse"),e(this,"ctx"),e(this,"x"),e(this,"y"),e(this,"speed"),e(this,"radius"),e(this,"angle"),e(this,"frameX"),e(this,"frameY"),e(this,"frame"),e(this,"playerLeft"),e(this,"playerRight"),e(this,"spriteWidth"),e(this,"spriteHeight"),this.mouse=t,this.ctx=s,this.x=i,this.y=a/2,this.speed=15,this.radius=30,this.angle=0,this.frameX=0,this.frameY=0,this.frame=0,this.playerLeft=new Image,this.playerLeft.src="src/assets/fish_green_left.png",this.playerRight=new Image,this.playerRight.src="src/assets/fish_green_right.png",this.spriteWidth=498,this.spriteHeight=327}setSpeed(t){this.speed=t}update(){const t=this.x-this.mouse.x,e=this.y-this.mouse.y,s=Math.atan2(e,t);this.angle=s,this.mouse.x!=this.x&&(this.x-=t/this.speed),this.mouse.y!=this.y&&(this.y-=e/this.speed)}draw(){this.mouse.click&&(this.ctx.lineWidth=.2,this.ctx.beginPath(),this.ctx.moveTo(this.x,this.y),this.ctx.lineTo(this.mouse.x,this.mouse.y),this.ctx.stroke()),this.ctx.fillStyle="rgba(0, 0, 0, 0.01)",this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.radius,0,2*Math.PI),this.ctx.fill(),this.ctx.closePath(),this.ctx.fillRect(this.x,this.y,this.radius,10),this.ctx.save(),this.ctx.translate(this.x,this.y),this.ctx.rotate(this.angle),this.x>=this.mouse.x?this.ctx.drawImage(this.playerLeft,this.frameX*this.spriteWidth,this.frameY*this.spriteHeight,this.spriteWidth,this.spriteHeight,-40,-30,this.spriteWidth/6,this.spriteHeight/6):this.ctx.drawImage(this.playerRight,this.frameX*this.spriteWidth,this.frameY*this.spriteHeight,this.spriteWidth,this.spriteHeight,-40,-30,this.spriteWidth/6,this.spriteHeight/6),this.ctx.restore()}}class a{constructor(t,s,i,a,n){e(this,"player"),e(this,"ctx"),e(this,"x"),e(this,"y"),e(this,"bubbleImage"),e(this,"radius"),e(this,"speed"),e(this,"distance"),e(this,"counted"),e(this,"frameX"),e(this,"frameY"),e(this,"spriteWidth"),e(this,"spriteHeight"),this.distance=0,this.player=t,this.ctx=s,this.x=Math.random()*i,this.y=a+100,this.radius=30,this.speed=5*Math.random()+2*n,this.counted=!1,this.bubbleImage=new Image,this.bubbleImage.src="src/imgs/static/bubble_pop.png",this.frameX=0,this.frameY=0,this.spriteWidth=450,this.spriteHeight=450}update(){this.y-=this.speed;const t=this.x-this.player.x,e=this.y-this.player.y;this.distance=Math.sqrt(t*t+e*e)}draw(){this.ctx.fillStyle="rgba(47, 128, 255, 0.7)",this.ctx.fillRect(0,0,this.ctx.width,this.ctx.height),this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.radius,0,2*Math.PI),this.ctx.fill(),this.ctx.closePath(),this.ctx.stroke(),this.ctx.drawImage(this.bubbleImage,this.frameX*this.spriteWidth,this.frameY*this.spriteHeight,this.spriteWidth,this.spriteHeight,this.x-43,this.y-45,this.spriteWidth/6,this.spriteHeight/6)}}class n{constructor(t,s,i,a,n){e(this,"player"),e(this,"ctx"),e(this,"x"),e(this,"y"),e(this,"bubbleImage"),e(this,"radius"),e(this,"speed"),e(this,"distance"),e(this,"counted"),e(this,"frameX"),e(this,"frameY"),e(this,"spriteWidth"),e(this,"spriteHeight"),this.distance=0,this.player=t,this.ctx=s,this.x=Math.random()*i,this.y=a+100,this.radius=20,this.speed=5*Math.random()+2*n,this.counted=!1,this.bubbleImage=new Image,this.bubbleImage.src="src/imgs/static/flake_pop.png",this.frameX=0,this.frameY=0,this.spriteWidth=450,this.spriteHeight=450}update(){this.y-=this.speed;const t=this.x-this.player.x,e=this.y-this.player.y;this.distance=Math.sqrt(t*t+e*e)}draw(){this.ctx.fillStyle="rgba(0, 0, 0, 0.01)",this.ctx.fillRect(0,0,this.ctx.width,this.ctx.height),this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.radius,0,2*Math.PI),this.ctx.fill(),this.ctx.closePath(),this.ctx.stroke(),this.ctx.drawImage(this.bubbleImage,this.frameX*this.spriteWidth,this.frameY*this.spriteHeight,this.spriteWidth,this.spriteHeight,this.x-22,this.y-21,this.spriteWidth/6,this.spriteHeight/6)}}class l{constructor(t,s,i,a){e(this,"ctx"),e(this,"width"),e(this,"height"),e(this,"player"),e(this,"bubblesArray",[]),e(this,"ballsArray",[]),e(this,"levelArray_0",[[10,1],[15,3],[20,6],[25,10]]),e(this,"levelArray_1",[[30,1],[25,2],[20,3],[15,4]]),e(this,"index",0),e(this,"score",0),e(this,"ballscore",5),e(this,"alga",0),e(this,"nick",""),e(this,"anim",0),e(this,"sanim",0),this.player=t,this.ctx=s,this.width=i,this.height=a}handleBubble(t){this.score>60&&this.score<90?(this.index=1,this.player.speed=10):this.score>100&&this.score<140?(this.index=2,this.player.speed=5):this.score>140&&(this.index=3,this.player.speed=3),t%this.levelArray_0[this.index][0]==0&&this.bubblesArray.push(new a(this.player,this.ctx,this.width,this.height,this.levelArray_0[this.index][1]));for(let e=0;e<this.bubblesArray.length;e++)this.bubblesArray[e].update(),this.bubblesArray[e].draw();for(let e=0;e<this.bubblesArray.length;e++)this.bubblesArray[e].y<0-2*this.bubblesArray[e].radius&&this.bubblesArray.splice(e,1),this.bubblesArray[e]&&this.bubblesArray[e].distance<this.bubblesArray[e].radius+this.player.radius&&(this.bubblesArray[e].counted||(this.score++,this.score%10==0&&(this.alga+=1,this.sanim--),this.bubblesArray[e].counted=!0,this.bubblesArray.splice(e,1)))}handleBall(t){this.score>60&&this.score<90?(this.index=1,this.player.speed=10):this.score>100&&this.score<140?(this.index=2,this.player.speed=5):this.score>140&&(this.index=3,this.player.speed=3),t%this.levelArray_1[this.index][0]==0&&this.ballsArray.push(new n(this.player,this.ctx,this.width,this.height,this.levelArray_1[this.index][1]));for(let e=0;e<this.ballsArray.length;e++)this.ballsArray[e].update(),this.ballsArray[e].draw();for(let e=0;e<this.ballsArray.length;e++)this.ballsArray[e].y<0-2*this.ballsArray[e].radius&&this.ballsArray.splice(e,1),this.ballsArray[e]&&this.ballsArray[e].distance<this.ballsArray[e].radius+this.player.radius&&(this.ballsArray[e].counted||(this.ballscore--,this.ballsArray[e].counted=!0,this.ballsArray.splice(e,1)))}}((t,e)=>{const a=t.getElementById("canvas");function n({body:{clientWidth:t,clientHeight:s}}){e.matchMedia("(min-width: 640px)").matches?(a.width=t-90,a.height=s-210):(a.width=t-22,a.height=s-180)}e.addEventListener("resize",(()=>n(t))),n(t);const r=a.getContext("2d");r.font="50px georgia";const{width:h,height:o}=a,c={x:h/2,y:o/2,click:!1},{left:d,top:b}=a.getBoundingClientRect();a.addEventListener("mousedown",(t=>{c.click=!0,c.x=t.x-d,c.y=t.y-b})),a.addEventListener("mouseup",(()=>c.click=!1));const m=new i(c,r,a.width,a.height),x=new l(m,r,a.width,a.height),p=t.getElementById("score");p.textContent="00000";const g=t.getElementById("level");g.textContent="Facil";const u=t.getElementById("alga"),y=t.getElementById("dead");let v,f=0,_=!0,w=!1,A=0;function k(){cancelAnimationFrame(v)}function I(){requestAnimationFrame(C)}function C(){if(r.clearRect(0,0,a.width,a.height),x.handleBubble(f),x.handleBall(f),m.update(),m.draw(),y.textContent=`${x.ballscore}`,0==x.ballscore)return x.ballscore=5,k(),e={nick:x.nick,score:x.score,alga:x.alga},L.reportStatus(e),void t.getElementById("reset-game-over").addEventListener("click",(()=>{L.modalCloseFunc(),E(),I(),_=!0}));var e;A=`${x.score}`.length,u.textContent=`${x.alga}`,p.textContent="00000".substr(A)+x.score,g.textContent=0==x.index?"Facil":1==x.index?"Moderado":2==x.index?"Dificil":"Insano",f++,v=requestAnimationFrame(C)}function E(){f=1,x.score=0,x.alga=0,x.ballscore=5,x.bubblesArray=[],m.mouse=c,m.speed=15,x.index=0}const L=new s(t),P=t.getElementById("init-game-nick"),B=t.getElementById("init-game-play");L.linkItems.forEach(((e,s)=>{e.addEventListener("click",(()=>{k(),L.resetNavItems(),e.classList.add("active"),L.renderBoxContent(s),w=!0,t.getElementById("modal-close").addEventListener("click",(()=>{L.modalCloseFunc(),I(),w=!1})),1==s&&function(){const e=t.querySelectorAll(".box__item__group .box__item"),s=t.getElementById("select-fish"),i=["fish_green","fish_purple","fish_blue"];let a=0;e.forEach(((t,s)=>{t.addEventListener("click",(()=>{e.forEach((t=>t.classList.remove("active"))),t.classList.add("active"),a=s}))})),s.addEventListener("click",(()=>{const t=`src/assets/${i[a]}_left.png`,e=`src/assets/${i[a]}_right.png`;m.playerRight.src=e,m.playerLeft.src=t,_=!0,w=!1,L.modalCloseFunc(),I()}))}()}))})),e.addEventListener("keyup",(e=>{if("Escape"==e.key&&f>0&&!w){if(_){k(),L.pauseGame();t.getElementById("play-game").addEventListener("click",(()=>{L.modalCloseFunc(),I(),_=!0}));t.getElementById("reset-game").addEventListener("click",(()=>{L.modalCloseFunc(),E(),I(),_=!0}))}else L.modalCloseFunc(),I();_=!_}})),B.addEventListener("click",(()=>{if(P.value.length<3)return P.focus();L.modalCloseFunc(),x.nick=P.value,C()}))})(document,window);
