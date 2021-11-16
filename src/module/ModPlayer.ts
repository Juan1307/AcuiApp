type State = { x: number, y: number, click: boolean };
// PLayer Intective
export default class Player {
      // this.mouse
      mouse: State;
      ctx: any;

      x: number;
      y: number;
      speed: number;

      // circle
      radius: number;
      angle: number;
      frameX: number;
      frameY: number;
      frame: number;

      // player sprite
      playerLeft: any;
      playerRight: any;

      spriteWidth: number;
      spriteHeight: number;

      constructor (mouse: State, context: CanvasRenderingContext2D, cw: number, ch:number) {
         // init player context canvas
         this.mouse = mouse;
         this.ctx = context;

         this.x = cw;
         this.y = ch/2;
         this.speed = 15;
         
         this.radius = 30;
         this.angle = 0;
         this.frameX = 0;
         this.frameY = 0;
         this.frame = 0;

         this.playerLeft = new Image();
         this.playerLeft.src = '/src/assets/fish_green_left.png';
         this.playerRight = new Image();
         this.playerRight.src = '/src/assets/fish_green_right.png';
         // this.playerRight.src = './../src/assets/fish_green_right.png';

         this.spriteWidth = 498;
         this.spriteHeight = 327;
      }

      setSpeed(val: number): void {
         this.speed = val;
      }

      update(): void {
         const dx = this.x - this.mouse.x; //ancho x 1000 - evtclick - 20
         const dy = this.y - this.mouse.y;

         const theta = Math.atan2(dy, dx);
         this.angle = theta;
         // circle velocity
         // restamos en x = ancho con la distancia entre elevt mouse click
         if (this.mouse.x != this.x) this.x -= dx/this.speed;
         if (this.mouse.y != this.y) this.y -= dy/this.speed;
      }

      draw() : void{

         // on clicked in canvas box
         if(this.mouse.click) {
            this.ctx.lineWidth = 0.2;
            this.ctx.beginPath();
            this.ctx.moveTo(this.x, this.y);
            this.ctx.lineTo(this.mouse.x, this.mouse.y);
            this.ctx.stroke();
         }

         // draw circle player
         this.ctx.fillStyle = 'rgba(0, 0, 0, 0.01)';
         this.ctx.beginPath();
         this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2); //el diametro del (circulo * x)
         this.ctx.fill();
         this.ctx.closePath(); 
         this.ctx.fillRect(this.x, this.y, this.radius, 10);
         
         this.ctx.save();
         this.ctx.translate(this.x, this.y); //la rotacion en x / y
         this.ctx.rotate(this.angle);

         //calculamos respecto al ancho del canvas
         if(this.x >= this.mouse.x){
            //
             this.ctx.drawImage(this.playerLeft, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight,
                            this.spriteWidth, this.spriteHeight, 0 - 40, 0 - 30,
                            this.spriteWidth/6, this.spriteHeight/6 /*el ancho del elemnto divido entre los sprtites del png*/
                            );
         } else {
            this.ctx.drawImage(this.playerRight, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight,
                            this.spriteWidth, this.spriteHeight, 0 - 40, 0 - 30,
                            this.spriteWidth/6, this.spriteHeight/6 /*el ancho del elemnto divido entre los sprtites del png*/
                            );
         }

         this.ctx.restore(); //restaura el canvas elem
      }
   }