import anime from 'https://cdn.skypack.dev/animejs';

export default class AnimateHeart {
    constructor() {
        this.heart = $('#heartVector');
        if (this.heart) {
            this.addClickListeners();
        }
    }

    addClickListeners() {
        this.heart.on("click", this.animateHeart.bind(this));
    }

    animateHeart() {
        console.log('clicked');
        $('#heartVector').addClass('animated');
        anime({
            targets: "#heartVector",
            keyframes: [
                {scaleX: -1, easing: 'easeInQuart', duration: 500},
                {scaleX: 1, easing: 'easeOutElastic(1, .8)', duration: 2000},
            ],
            translateY: [
                {value: 10, duration: 400, easing: 'easeOutExpo'},
                {value: -100, duration: 1000, easing: 'easeOutQuint'},
                {value: 0, duration: 800, easing: function (el, i, total) {return this.easeOutBounce}.bind(this)}, //'easeOutElastic(1, .6)'
            ],
            complete: function() {
                $('#heartVector').removeClass('animated');
            }
          });
    }

    easeOutBounce(x) {
        const n1 = 7.5625;
        const d1 = 2.75;
        
        if (x < 1 / d1) {
            return n1 * x * x;
        } else if (x < 2 / d1) {
            return n1 * (x -= 1.5 / d1) * x + 0.75;
        } else if (x < 2.5 / d1) {
            return n1 * (x -= 2.25 / d1) * x + 0.9375;
        } else {
            return n1 * (x -= 2.625 / d1) * x + 0.984375;
        }
    }
}