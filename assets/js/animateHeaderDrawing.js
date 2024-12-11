export default class AnimateHeaderDrawing {
    constructor() {
        this.svgElement = $('#headerDrawing');
        if (this.svgElement) {
            this.addHoverListeners();
        }
    }

    addHoverListeners() {
        this.svgElement.hover(() => console.log('hover'), () => console.log('unhover'));

        var elem = this.svgElement;
        this.svgElement.hover(function(){
            $(this).addClass("animated");
        }, function() {
            $(this).bind("animationiteration", function(){
                $(this).removeClass("animated");
                elem.unbind("animationiteration");
            });
        });
    }
}