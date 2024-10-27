import colorPicker from "./colorPicker.js";
import initializeForm from "./initializeForm.js";

$(document).ready(function () {
    new colorPicker();
    new initializeForm();

    $("svg#nameVector").hover(function(){
        $(this).addClass("animated");    
    }, function() {
        $("svg#nameVector").bind("animationiteration", function(){
            $(this).removeClass("animated");
            $("svg#nameVector").unbind("animationiteration");
        });
    });
});