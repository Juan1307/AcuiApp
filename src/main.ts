import 'virtual:windi.css';
import './tailwind.css';

// modules
import NavBar from './module/ModControl';
import Player from './module/ModPlayer';
import Game from './extend/ExtGame';

((d, w) => {
   
   /* === CANVAS INIT === */
   const canvas = <HTMLCanvasElement>d.getElementById('canvas'); 

   w.addEventListener('resize', () => canvasResize(d));

   type Client = { body: { clientWidth: number, clientHeight: number} };
   function canvasResize ({ body:{ clientWidth, clientHeight } }: Client) {
      if (w.matchMedia("(min-width: 640px)").matches){
         canvas.width = clientWidth - 90;
         canvas.height = clientHeight - 210;
      }else{
         canvas.width = clientWidth - 22;
         canvas.height = clientHeight - 180;
      }
   } canvasResize(d);

   const ctx = canvas.getContext('2d')!;
         ctx.font = '50px georgia';
   
   const { width: cw, height: ch } = canvas;
   type State = { x: number, y: number, click: boolean };
   const mouse: State = { 
      x: cw/2, y: ch/2, // x: 0, y: 0, 
      click: false 
   };

   const { left: canvasL, top: canvasT} = canvas.getBoundingClientRect();
   canvas.addEventListener('mousedown', (evt) => {
      mouse.click = true;
      mouse.x = evt.x - canvasL;
      mouse.y = evt.y - canvasT;
   });
   canvas.addEventListener('mouseup', () => mouse.click = false );

 

   /* === PLAYER GAME INIT === */
   const player = new Player(mouse, ctx, canvas.width, canvas.height);
   const game = new Game(player, ctx, canvas.width, canvas.height);


   const scoreGame = d.getElementById('score') as HTMLElement;
         scoreGame.textContent = '00000';
   const levelGame = d.getElementById('level') as HTMLElement;
         levelGame.textContent = 'Facil';
   const algaGame = d.getElementById('alga') as HTMLElement;
   const deadGame = d.getElementById('dead') as HTMLElement;

   let gameFrame = 0;
   let handleFrame: number;
   let stateGame = true;
   let stateNavBar = false;
   let countDigits = 0;
   
   // lineGame.style.width = `${barNumber}%`;

   function cancelhandleAnimate(){
      cancelAnimationFrame(handleFrame);
   }
   function accepthandleAnimate(){
      requestAnimationFrame(handleAnimate);
   }

   type Report = {nick:string, score:number, alga:number}; 
   
   function reportGame(data:Report){
      navbar.reportStatus(data);
      const reset = d.getElementById('reset-game-over') as HTMLDivElement;
         reset.addEventListener('click', () => {
            navbar.modalCloseFunc(); 
            resetGame(); 
            accepthandleAnimate(); 
            stateGame = true;
         });
   }

   function handleAnimate() {
      ctx.clearRect(0, 0,  canvas.width, canvas.height);

      game.handleBubble(gameFrame); // init bubbles
      game.handleBall(gameFrame); // init balls
      player.update();
      player.draw();

      deadGame.textContent = `${game.ballscore}`;
      if(game.ballscore == 0) {
         game.ballscore = 5;
         cancelhandleAnimate();
         reportGame({nick: game.nick, 
                     score: game.score,
                     alga: game.alga});
         return;
      }

      // render scroe and level status 
      countDigits = `${game.score}`.length;
      algaGame.textContent = `${game.alga}`;

      scoreGame.textContent = `00000`.substr(countDigits) + game.score;
      levelGame.textContent = game.index == 0 ? 'Facil'
                              :(game.index == 1) ? 'Moderado'
                              :(game.index == 2) ? 'Dificil' : 'Insano';

      gameFrame++;
      handleFrame = requestAnimationFrame(handleAnimate); // run player and bubbles
   }

   function resetGame(){
      gameFrame = 1;
      game.score = 0;
      game.alga = 0;
      game.ballscore = 5;
      game.bubblesArray = [];
      player.mouse = mouse;
      player.speed = 15;
      game.index = 0;
   }

     /* === NAVBAR ITEMS CONTROL === */
   const navbar = new NavBar(d);
   const inputNick = d.getElementById('init-game-nick') as HTMLInputElement;
   const btnPlay = d.getElementById('init-game-play') as HTMLElement;

   
   
   // === COLLECTION SELECTED ===
   function readFishSelected () {
      const arrItems:NodeListOf<Element> = d.querySelectorAll('.box__item__group .box__item');
      const btnSelectFish = d.getElementById('select-fish') as HTMLDivElement;
      const arrImgs = ['fish_green','fish_purple','fish_blue'];
      
      let sindex = 0;

      arrItems.forEach((item, index) => {
         item.addEventListener('click', () => {
            arrItems.forEach((item) => item.classList.remove('active'));
            item.classList.add('active');
            sindex = index;
         });
      });

      btnSelectFish.addEventListener('click', () => {
         const f_left = `/src/assets/${arrImgs[sindex]}_left.png`;
         const f_right = `/src/assets/${arrImgs[sindex]}_right.png`;

         player.playerRight.src = f_right;
         player.playerLeft.src = f_left;
         stateGame = true;
         stateNavBar = false;
         navbar.modalCloseFunc();
         accepthandleAnimate();
      });
   }
   
   //  ==== NAVBAR STATES ====

   navbar.linkItems.forEach((item, index) => {
      item.addEventListener('click', () => {
         cancelhandleAnimate();

         navbar.resetNavItems();
         item.classList.add('active');
         navbar.renderBoxContent(index);

         stateNavBar = true;
         closeClickBox();

         if(index == 1) readFishSelected();
      });
   });

   function closeClickBox(){
      const close =  d.getElementById('modal-close') as HTMLDivElement;
      close.addEventListener('click', () => {
         navbar.modalCloseFunc();
         accepthandleAnimate();
         stateNavBar = false;
      });
   }

   // === ESC PAUSE GAME ===
   w.addEventListener('keyup', (evt) => {
      if(evt.key == 'Escape' && gameFrame > 0 && !stateNavBar) {

         if(stateGame) {
            cancelhandleAnimate();
            navbar.pauseGame();
            
            const play =  d.getElementById('play-game') as HTMLDivElement;
            play.addEventListener('click', () => {
               navbar.modalCloseFunc();
               accepthandleAnimate();
               stateGame = true;
            });

            const reset =  d.getElementById('reset-game') as HTMLDivElement;
            reset.addEventListener('click', () => {
               navbar.modalCloseFunc(); 
               resetGame(); 
               accepthandleAnimate(); 
               stateGame = true;
            });

         } else {
            navbar.modalCloseFunc();
            accepthandleAnimate();
         }
         stateGame = !stateGame;
      }
   });

   btnPlay.addEventListener('click', () => {
      const valCount = inputNick.value.length;
      if (valCount < 3) return inputNick.focus();
      navbar.modalCloseFunc();
      game.nick = inputNick.value;
      handleAnimate();
   });
})(document, window)

















