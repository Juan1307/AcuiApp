
export default class NavBar {
   doc: Document;

   readonly boxesContent = {
      controls: `
      <div class="box__game--item box__game--animate">   
        <div class="form__game">
          <div class="flex justify-between text-yellow-700 mb-1">
            <h2 class="font-bold text-lg"> 
              <i class="bx bx-dialpad-alt"></i> Controles
            </h2>
            <i class='bx bx-x bx-border border-yellow-700 cursor-pointer' id="modal-close"></i>
          </div>
          <div class="grid grid-cols-3 gap-3 items-center text-yellow-700">
            <div class="col-span-2 text-justify">
            Para controlar el pecesito solo debes hacer click derecho dentro de la pescera.</div>
            <div class="bg-yellow-500 rounded">
              <i class='bx bx-mouse-alt text-7xl py-4 text-white'></i>
            </div>
          </div>
          <div class="text-yellow-700">
            Pulsa la tecla <b>ESC</b> para pausar el juego
          </div>
        </div> 
      </div>`,
      collection: `
      <div class="box__game--collection box__game--animate">
          <div class="form__game text-yellow-700 ">
            <div class="flex justify-between mb-1">
              <h2 class="font-bold text-lg"> 
                <i class="bx bx bx-box"></i> Colección
              </h2>
              <i class='bx bx-x bx-border border-yellow-700 cursor-pointer' id="modal-close"></i>
            </div>
            <p>Todos tus personajes se encuentran aqui.</p>
            <div class="box__item__group">

              <div class="box__item group">
                <figure class="relative">
                  <img src="/src/imgs/collect/fish_green.png" class="w-25 sm:w-100" alt="vite">
                  <figcaption class="item__name transition
                    group-hover:bg-yellow-300 group-hover:text-yellow-700">P. Lima</figcaption>
                </figure>
              </div>
              <div class="box__item group">
                <figure class="relative">
                  <img src="/src/imgs/collect/fish_purple.png" class="w-25 sm:w-100" alt="vite">
                  <figcaption class="item__name transition
                    group-hover:bg-yellow-300 group-hover:text-yellow-700">P. Morado</figcaption>
                </figure>
              </div>
              <div class="box__item group ">
                <figure class="relative">
                  <img src="/src/imgs/collect/fish_blue.png" class="w-25 sm:w-100" alt="vite">
                  <figcaption class="item__name transition
                    group-hover:bg-yellow-300 group-hover:text-yellow-700">P. Cyan</figcaption>
                </figure>
              </div>
              
            </div>
            <button class="btn btn-outline-yellow px-2 py-1 mx-auto" id="select-fish">
              <i class='bx bx-chevron-right' ></i>
              Seleccionar 
              <i class='bx bx-chevron-left' ></i>
            </button>
          </div>
        </div>`,
      ranking: `
      <div class="box__game--item box__game--animate w-80">   
        <div class="form__game">
          <div class="flex justify-between text-yellow-700 mb-1">
            <h2 class="font-bold text-lg"> 
              <i class='bx bx-medal' ></i> Ranking
            </h2>
            <i class='bx bx-x bx-border border-yellow-700 cursor-pointer' id="modal-close"></i>
          </div>

          <div class="group__ranking py-2">
            <div class="item__ranking">
              <div class="col-span-1">
                <i class='bx bx-user bx-sm' ></i>
              </div>
              <div class="col-span-5">
                <p >El man pro</p>
              </div>
              <div class="col-span-2 text-center"> 
                <i class='bx bx-chevron-right'></i>
                <span class="text-lg">423</span>
              </div>
            </div>
            <div class="item__ranking">
              <div class="col-span-1">
                <i class='bx bx-user bx-sm' ></i>
              </div>
              <div class="col-span-5">
                <p >Tilin Cosmico</p>
              </div>
              <div class="col-span-2 text-center"> 
                <i class='bx bx-chevron-right'></i>
                <span class="text-lg">323</span>
              </div>
            </div>
            <div class="item__ranking">
              <div class="col-span-1">
                <i class='bx bx-user bx-sm' ></i>
              </div>
              <div class="col-span-5">
                <p >Creeper con tallarin</p>
              </div>
              <div class="col-span-2 text-center"> 
                <i class='bx bx-chevron-right'></i>
                <span class="text-lg">101</span>
              </div>
            </div>
          </div>


        </div> 
      </div>`,
      info: `<div class="box__game--item box__game--animate">   
        <div class="form__game">
          <div class="flex justify-between text-yellow-700 mb-1">
            <h2 class="font-bold text-lg"> 
             <i class='bx bx-info-circle'></i> Información
            </h2>
            <i class='bx bx-x bx-border border-yellow-700 cursor-pointer' id="modal-close"></i>
          </div>
          <div class="text-yellow-700">
            Este proyecto fue realizado con el fin de profundizar en typescript y el tipado dinámico del mismo, y ver la extensibilidad del lenguaje o superset.
          </div>
          <div class="text-yellow-700">
            Creado por Antik :) SALUDOS CRACKS .-.
          </div>
        </div> 
      </div>`
   };

   readonly boxPause = `
      <div class="box__game--item ">
          <h1 class="text-2xl sm:text-3xl text-yellow-700 text-center">PAUSA</h1>
          <div class="flex space-x-2">
            <button class="btn__box btn__anim btn-outline-yellow w-6/12" id="play-game">
              <i class='bx bx-sm bx-right-arrow mr-2'></i>
            </button>
            <button class="btn__box btn__anim btn-outline-yellow w-6/12" id="reset-game">
              <i class='bx bx-sm bx-revision'></i>
            </button>
         </div>
      </div>`;

   // navbar DOM
   linkItems: NodeListOf<Element>; 

   // modal DOM
   modalGame: HTMLDivElement; 
   modalContent: HTMLDivElement | null = null;

   constructor(d: Document){
      this.doc = d;
      this.modalGame = this.doc.getElementById('modal-game') as HTMLDivElement;
      this.linkItems = this.doc.querySelectorAll('.link__item');
      // this.selectNavItems();

      // init box game
      this.modalOpenGame(`
      <div class="box__game--item ">
         <div class="form__game text-center">
            <div>
              <img src="/src/imgs/logo_orange.png" class="w-25" alt="logo"></img>
            </div>
            <input type="text" value="" autofocus="autofocus" class="input__text" placeholder="Ingrese NickName" maxlength="10" id="init-game-nick">
         </div>
         <div class="flex space-x-2">
            <button class="btn__box btn__anim btn-outline-yellow w-9/12" id="init-game-play">
              <i class='bx bx-sm bx-right-arrow mr-2'></i> Jugar
            </button>
            <a href="https://www.paypal.com/donate/?hosted_button_id=U36PRU2NDT82W" target="_blank" 
              class="rounded-md border-2 btn__box btn__anim btn-outline-yellow w-3/12">
              <i class='bx bx-sm bx-heart' ></i>
            </a>
         </div>
      </div>`);

   }

   resetNavItems(): void {
      this.linkItems.forEach((item) => item.classList.remove('active'));
   }

   renderBoxContent(index: number): void {
     
      const entries = Object.entries(this.boxesContent);
      const boxElem = entries.find( (box, idx) => {
         return (idx === index) ? box : false;
      });

      if (boxElem !== undefined) { 
         this.modalOpenGame(boxElem[1]);
         this.animateBoxContent(true);
      }
   }

   animateBoxContent(mode: boolean): void {
      if (mode) {
         setTimeout(() => this.modalContent!.classList.add('active'), 200)
      } else this.modalContent!.classList.remove('active');
   }

   modalCloseFunc(): void {
      this.animateBoxContent(false);

      setTimeout(() => {
         this.modalGame.classList.remove('active', 'absolute');
         this.modalGame.removeChild(this.modalContent!);
         this.resetNavItems();
      }, 400);
   }

   modalOpenGame(elem: string): void {
      this.modalGame.insertAdjacentHTML('afterbegin', elem);
      this.modalGame.classList.add('active', 'absolute');
      // señect current box
      this.modalContent = this.modalGame.children[0] as HTMLDivElement;
   }

   pauseGame(): void {
     this.modalOpenGame(this.boxPause);
   }

   reportStatus(data: any): void {
     
     this.modalOpenGame(`
        <div class="box__game--item">
          <div class="text-yellow-700 text-center">
            <h1 class="text-xl font-bold">Perdiste: ${data.nick}</h1>
            <p> Puntaje Total: ${data.score + data.alga}. </p>
            <p> Puntaje Bonus: ${data.alga}. </p>
          </div>
          <div class="flex space-x-2">
            <button class="btn__box btn__anim btn-outline-yellow w-6/12" id="reset-game-over">
              <i class='bx bx-sm bx-revision'></i>
            </button>
            <a href="https://www.paypal.com/donate/?hosted_button_id=U36PRU2NDT82W" target="_blank" 
            class="rounded-md border-2 btn__box btn__anim btn-outline-yellow w-6/12">
              <i class='bx bx-sm bx-heart' ></i>
            </a>
          </div>
        </div>`);
   }
}