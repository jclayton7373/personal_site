import colorPicker from "./colorPicker.js";
import initializeForm from "./initializeForm.js";
import StickerClick from "./stickerClick.js";
import MobileNavToggle from "./mobileNav.js";

$(document).ready(function () {
    new colorPicker();
    new initializeForm();
    new StickerClick('/assets/images/heart.svg');
    new MobileNavToggle();

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
        const top = linkTo === "#" ? 0 : $(linkTo).offset().top;
        $('html,body').animate({
            scrollTop: top},
            300);
        });
});