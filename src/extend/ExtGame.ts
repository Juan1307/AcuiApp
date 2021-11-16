import Bubble from './../module/ModBubble';
import Ball from './../module/ModBall';
import Player from './../module/ModPlayer';

export default class Game {
   // game introduction
   ctx: CanvasRenderingContext2D;
   width: number;
   height: number;

   // instances
   player: Player;

   bubblesArray: Bubble[] = [];
   ballsArray: Ball[] = [];
   levelArray_0: number[][] = [[10, 1],[15, 3],[20, 6],[25, 10]];
   levelArray_1: number[][] = [[30, 1],[25, 2],[20, 3],[15, 4]];
   index = 0;

   // states
   score = 0;
   ballscore = 5;
   alga = 0;
   nick = '';
   anim = 0;
   sanim = 0;

   constructor(player: Player, context: CanvasRenderingContext2D,  width: number, height: number){
      
      this.player = player;
      this.ctx = context;
      this.width = width;
      this.height = height;
   }

   handleBubble(gameFrame: number): void {

      // levels 
      if (this.score > 60 && this.score < 90) {
         this.index = 1; //medium
         this.player.speed = 10
      } else if (this.score > 100 && this.score < 140){ 
         this.index = 2; //hard
         this.player.speed = 5;
      } else if (this.score > 140){
         this.index = 3; //insane
         this.player.speed = 3;
      }  


      if (gameFrame % this.levelArray_0[this.index][0] == 0) {
         this.bubblesArray.push(
            new Bubble(this.player, this.ctx, this.width, this.height, 
                        this.levelArray_0[this.index][1] /*speed bubbles*/)
            );
      }

      // loop render bubles
      for (let i = 0; i < this.bubblesArray.length; i++) {
         this.bubblesArray[i].update();
         this.bubblesArray[i].draw();
      }

      for (let i = 0; i < this.bubblesArray.length; i++) { //elemnt radius concret
         
         if (this.bubblesArray[i].y < 0 - (this.bubblesArray[i].radius * 2)) {
            this.bubblesArray.splice(i, 1);
         }

         if(this.bubblesArray[i]){
            if (this.bubblesArray[i].distance  < this.bubblesArray[i].radius + this.player.radius){
               
               if(!this.bubblesArray[i].counted) {
                  this.score++; //increment score 

                  if(this.score % 10 === 0){
                     this.alga += 1;
                     this.sanim--;
                  }


                  this.bubblesArray[i].counted = true; //set state counted 
                  this.bubblesArray.splice(i, 1); //delete bubble when collision is on
               }
            }
         }
      }
   }

   handleBall(gameFrame: number): void {
     // levels 
      if (this.score > 60 && this.score < 90) {
         this.index = 1; //medium
         this.player.speed = 10
      } else if (this.score > 100 && this.score < 140){ 
         this.index = 2; //hard
         this.player.speed = 5;
      } else if (this.score > 140){
         this.index = 3; //insane
         this.player.speed = 3;
      }  

      if (gameFrame % this.levelArray_1[this.index][0] == 0) {
        this.ballsArray.push(
            new Ball(this.player, this.ctx,
                     this.width, this.height,
                     this.levelArray_1[this.index][1])
            );
      }

      // loop render bubles
      for (let i = 0; i < this.ballsArray.length; i++) {
         this.ballsArray[i].update();
         this.ballsArray[i].draw();
      }

      for (let i = 0; i < this.ballsArray.length; i++) { //elemnt radius concret
         
         if (this.ballsArray[i].y < 0 - (this.ballsArray[i].radius * 2)) {
            this.ballsArray.splice(i, 1);
         }

         if(this.ballsArray[i]){
            if (this.ballsArray[i].distance  < this.ballsArray[i].radius + this.player.radius){
               
               if(!this.ballsArray[i].counted) {
                  this.ballscore--; //increment ballscore 

                  this.ballsArray[i].counted = true; //set state counted 
                  this.ballsArray.splice(i, 1); //delete bubble when collision is on
               }
            }
         }
      }


   }
} 