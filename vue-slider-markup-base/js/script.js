// array oggetti
const slides = [
{
    image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

console.log(slides);

// variabile default
const { createApp } = Vue;


// *** metodo 1 per montare applicativo al dom su id app ***
createApp({
    data() {
        return {
            title: 'Carousel',
            // array di oggetti (images)
            images: [
                'img/01.webp',
                'img/02.webp',
                'img/03.webp',
                'img/04.webp',
                'img/05.webp',
            ],
            // definisco indice corrente da dove parte la visualizzazione delle immagini
            currentIndex: 0,
        };
    },
    methods: {
        //creo ciclo infinito per switchare image
        nextImage() {
            // Se l'immagine corrente è l'ultima ALLORA portami alla prima immagine
             if (this.currentIndex === this.images.length - 1) {
                 this.currentIndex = 0;
            // ALTRIMENTI vai avanti di uno
            } else {
                this.currentIndex++;
            }
        },
        prevImage() {
                // SE l'immagine corrente è la prima ALLORA portami all'ultima immagine
             if (this.currentIndex === 0) {
                this.currentIndex = this.images.length - 1;
                // ALTRIMENTI vai indietro di uno
             } else {
                 this.currentIndex--;
            }
        },
        setImage(index) {
            console.log(index);
            this.currentIndex = index;
        },
    },
}).mount('#app');



// *** metodo 2 ***
// const defaultOptions = {
//     data() {
//         return {
//             title: 'demo',
//         };
//     },
//     methods: {},
// };

// const app = creatApp(defaultOptions);

// app.mount('#app');




// *** v-if ***
// createApp({
//     data() {
//         return {
//             title: 'demo',
//             showDiv: true,
//         };
//     },
//     methods: {
//         provaIf() {
//             return true;
//         },
//     },
// }) .mount('#app');