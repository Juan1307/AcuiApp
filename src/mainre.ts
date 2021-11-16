import 'virtual:windi.css';
import './tailwind.css';

import NavBar from './module/ModControl';
/*const app = document.querySelector<HTMLDivElement>('#app')!;
app.innerHTML = '<h1>Hi from Appp</h1> ';*/

((d, w) => {

   // INITIALIZATION IN BUTTON
   const navbar = new NavBar(d);
      
      const inputNick = d.getElementById('init-game-nick') as HTMLInputElement;
      const btnPlay = d.getElementById('init-game-play') as HTMLElement;

      // PLAY GAME INIT
      btnPlay.addEventListener('click', () => {
         const valCount = inputNick.value.length;
         const valStr = inputNick.value;

         if (valCount < 3) return inputNick.focus();
         navbar.modalCloseFunc();

      });
   
   return;

    // HTMLElement | null
   const canvas = <HTMLCanvasElement>d.getElementById('canvas'); 
         canvas.width = 1020;
         canvas.height = 450;

   const ctx = canvas.getContext('2d')!;
         ctx.font = '50px georgia';

   let score = 0;
   let gameFrame = 0;

   // maouse init
   const { width: cw, height: ch } = canvas;

   const mouse: State = { 
      x: cw/2, y: ch/2, 
      // x: 0, y: 0, 
      click: false 
   };
   const { left: canvasL, top: canvasT} = canvas.getBoundingClientRect();

   // listen mouse event in canvas
   canvas.addEventListener('mousedown', (evt) => {
      mouse.click = true;

      mouse.x = evt.x - canvasL;
      mouse.y = evt.y - canvasT;
     
   });


   canvas.addEventListener('mouseup', () => {
      mouse.click = false;
   });

   // PLayer Intective
   class Player {
      x: number;
      y: number;

      // circle
      radius: number;
      angle: number;
      frameX: number;
      frameY: number;
      frame: number;

      spriteWidth: number;
      spriteHeight: number;

      constructor () {
         this.x = cw;
         this.y = ch/2;
         
         this.radius = 30;
         this.angle = 0;
         this.frameX = 0;
         this.frameY = 0;
         this.frame = 0;

         this.spriteWidth = 498;
         this.spriteHeight = 327;
      }

      update(){
         const dx = this.x - mouse.x;
         const dy = this.y - mouse.y;
         // circle speed in dy and dx
         if (mouse.x != this.x) this.x -= dx/15;
         if (mouse.y != this.y) this.y -= dy/15;
      }

      draw(){

         // on clicked in canvas box
         if(mouse.click) {
            ctx.lineWidth = 0.2;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
         }

         // draw circle player
         ctx.fillStyle = 'red';
         ctx.beginPath();
         ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
         ctx.fill();
         ctx.closePath(); 
         // ctx.fillRect(this.x, this.y, this.radius, 10);
      }
   }

   // init PLayer class
   const player = new Player(); 

   // BubblesInteractive 
   const bubblesArray: Bubble[] = [];

   class Bubble {
      
      x: number;
      y: number;

      radius: number;
      speed: number;

      distance: number; 
      counted: boolean;

      constructor () {
         this.x = Math.random() * cw;
         this.y = ch + 100;
         this.radius = 30;
         this.speed = Math.random() * 5 + 1;
         this.distance = 0;
         this.counted = false;
      }

      update() {
         this.y -= this.speed;
         const dx = this.x - player.x;
         const dy = this.y - player.y;

         this.distance = Math.sqrt(dx*dx + dy*dy);
      }

      draw() {
         ctx.fillStyle = 'blue';
         ctx.beginPath();
         ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2); //size of circle 
         ctx.fill();
         ctx.closePath();
         ctx.stroke();
      }
   } 

   // bubbles randoms
   function handleBubble () {
      // generate bublles by mod 50
      if (gameFrame % 50 == 0) {
         bubblesArray.push(new Bubble());
         // console.log(bubblesArray.length); //call arrays by one loop
      }

      // loop render bubles
      for (const bubble of bubblesArray) {
         bubble.update();
         bubble.draw();
      }

      for (let i = 0; i < bubblesArray.length; i++) { //elemnt radius concret
         
         if (bubblesArray[i].y < 0 - (bubblesArray[i].radius * 2)) {
            bubblesArray.splice(i, 1);
         }

         if (bubblesArray[i].distance  < bubblesArray[i].radius + player.radius){
            
            if(!bubblesArray[i].counted) {
               score++; //increment score 
               bubblesArray[i].counted = true; //set state counted 
               bubblesArray.splice(i, 1); //delete bubble when collision is on
            }
         }
      }

   }

   // blubble player
   function animate () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      handleBubble();
      
      player.update();
      player.draw();
      ctx.fillText('score: '+ score, 10, 50);

      gameFrame++;
      // lopp this function 
      requestAnimationFrame(animate);
   } 
   animate();


   console.log(w);
   // console.log(canvas,ctx);

})(document, window)

















