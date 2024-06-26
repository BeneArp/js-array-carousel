// Consegna:
// Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

// MILESTONE 1
// Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un’immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull’aspetto logico.

// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal. Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile. Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

// MILESTONE 3
// Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

// BONUS 1:
// Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l’utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.

// BONUS 2:
// Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato. Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.



// ARREY CON LE FOTO
const gamesCover = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"];


// prendo dal dom il container in cui inserire i div
const boxContainer = document.querySelector(".container");



// ciclo per creare un div con l'immagine contenuta nell'arrey, si ripete per tutti gli elementi dell'array
// prendo tutto il contenuto dell'array
for(let i = 0; i < gamesCover.length; i++){

    // stampo in console il contenuto dell'array
    // console.log(gamesCover[i]);

    // salvo quello che trovo nell'array in una variabile
   let imgArray = i;
   console.log(gamesCover[imgArray]);

    // inner html con immagine corrispondente associata grazie al ciclo
    let boxContent = `  <div class="box">
                            <img src="${gamesCover[imgArray]}" alt="">
                        </div>`;
    
    // inserisco nel dom l'html creato con js
    boxContainer.innerHTML += boxContent;

}

// seleziono tutti i box nel dom
const items = document.getElementsByClassName("box");
// stampo in console
console.log(items);

// creo una variabile per definire quale item è l'attivo
let activeItem = 0

// aggiungo la classe active al primo item della lista
items[activeItem].classList.add("active");


// riferimento alle icone dal dom
const frecciaSu = document.querySelector(".fa-caret-up");
const frecciaGiu = document.querySelector(".fa-caret-down");


// EVENTO AL CLICK FRECCIA GIù
frecciaGiu.addEventListener("click",
    function(){
        // console.log("hai cliccato la freccia in giù");

        // si verifica solo se ci sono ancora elmenti nella lista per poter aumentare l'indice
        if(activeItem < items.length - 1){
            // rimuovo la classe acitve dall'item corrente
            items[activeItem].classList.remove("active");

            // aumneto di uno l'indice della lista item
            activeItem = activeItem + 1;

            // aggiungo la classe active al nuovo item
            items[activeItem].classList.add("active");

        // se l'indice dell'item attivo è l'ultimo della lista le foto ricominciano dalla prima
        }else if(activeItem === items.length - 1){

            // rimuovo la classe acitve dall'item corrente
            items[activeItem].classList.remove("active");

            // azzero l'indice della lista
            activeItem = 0;

            // aggiungo la classe active al nuovo item
            items[activeItem].classList.add("active");
        }
    }
)

// EVENTO FRECCIA IN SU
frecciaSu.addEventListener("click",
    function(){
        console.log("hai cliccato la freccia in su");

        // si verifica solo se l'indice dell'item attivo è diverso da 0
        if(activeItem !== 0){
            // rimuovo la classe acitve dall'item corrente
            items[activeItem].classList.remove("active");

            // diminuisco di uno l'indice della lista item
            activeItem = activeItem - 1;

            // aggiungo la classe active al nuovo item
            items[activeItem].classList.add("active");
            
        // se l'indice dell'item attivo è il primo della lista le foto ricominciano dall'ultima
        }else if(activeItem === 0){
            // rimuovo la classe acitve dall'item corrente
            items[activeItem].classList.remove("active");

            // porto l'indice all'ultimo item della lista
            activeItem =  items.length - 1;

            // aggiungo la classe active al nuovo item
            items[activeItem].classList.add("active");
        }
    }
)

