/*
 * Vue Slider
 */

const app = new Vue({

    el: '#app',

    data:{

        slides: [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title:
                    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            },
        ],

        activeSlides: 1,
    },

    created(){
        setInterval(() => {

            this.activeSlides++;

            if (this.activeSlides > this.slides.length - 1) {
                this.activeSlides = 0;
            }

        }, 3000);
    },

    methods: {


        prevSlide(){
            this.activeSlides--;

            if (this.activeSlides < 0) {
                this.activeSlides = this.slides.length - 1;
            }
        },

        nextSlide(){
            this.activeSlides++;

            if (this.activeSlides > this.slides.length - 1) {
                this.activeSlides = 0;
            }
        },

        activeSlide(i){
            this.activeSlides = i;
        },

    }
    
    




});
