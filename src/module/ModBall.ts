export default class Ball {
      player: any;
      ctx: any;

      x: number;
      y: number;
      bubbleImage: any;

      radius: number;
      speed: number;

      distance: number; 
      counted: boolean;

      frameX: number;
      frameY: number;
      spriteWidth: number;
      spriteHeight: number;

      constructor (player: any, context: any, 
                  cw: number, ch: number, levelSpeed: number) {
         this.distance = 0;
         // init bubble
         this.player = player;
         this.ctx = context;

         this.x = Math.random() * cw;
         this.y = ch + 100;
         this.radius = 20;
         this.speed = Math.random() * 5 + (2 * levelSpeed); // speed bubble
         this.counted = false;

         this.bubbleImage = new Image();
         this.bubbleImage.src = '/src/imgs/static/flake_pop.png';

         this.frameX = 0;
         this.frameY = 0;

         this.spriteWidth = 450;
         this.spriteHeight = 450;
      }

      update(): void {
         this.y -= this.speed;
         const dx = this.x - this.player.x;
         const dy = this.y - this.player.y;

         this.distance = Math.sqrt(dx*dx + dy*dy);
      }

      draw(): void {
         this.ctx.fillStyle = 'rgba(0, 0, 0, 0.01)';
         this.ctx.fillRect(0, 0, this.ctx.width, this.ctx.height);
         
         this.ctx.beginPath();
         this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2); //size of circle 
         this.ctx.fill();
         this.ctx.closePath();
         this.ctx.stroke();

         this.ctx.drawImage(
            this.bubbleImage, 
            this.frameX * this.spriteWidth, this.frameY * this.spriteHeight,
            this.spriteWidth, this.spriteHeight, this.x - 22, this.y - 21,
            this.spriteWidth/6, this.spriteHeight/6);
      }
   } 