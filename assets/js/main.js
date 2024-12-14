import colorPicker from "./colorPicker.js";
import initializeForm from "./initializeForm.js";
import StickerClick from "./stickerClick.js";
import MobileNavToggle from "./mobileNav.js";
import AnimateHeaderDrawing from "./animateHeaderDrawing.js";
import AnimateHeart from "./animateHeart.js";

$(document).ready(function () {
    new colorPicker();
    new initializeForm();
    new StickerClick('/assets/images/heart.svg');
    new MobileNavToggle();
    new AnimateHeaderDrawing();
    new AnimateHeart();

    $("svg.nameVector").hover(function(){
        $(this).addClass("animated");    
    }, function() {
        $("svg.nameVector").bind("animationiteration", function(){
            $(this).removeClass("animated");
            $("svg.nameVector").unbind("animationiteration");
        });
    });

    $(".desktopNav a").on("click", function(e){
        e.preventDefault();
        const linkTo = e.currentTarget.getAttribute('href');
        history.pushState(null, null, linkTo);
        const top = linkTo === "#" ? 0 : $(linkTo).offset().top - 50;
        $('html,body').animate({
            scrollTop: top},
            300);
        });

        const fadeInElements = document.querySelectorAll('.fadeIntoView');
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -50px 0px',
            threshold: 0.20,
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        fadeInElements.forEach(element => {
            observer.observe(element);
        });
});