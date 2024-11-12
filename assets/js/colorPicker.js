export default class colorPicker {

    constructor() {
        this.root = document.querySelector(":root");
        this.setColorsFromCookies();
        this.initializeColorPicker();
        this.initializeRandomButton();
        this.initializePresetButtons();
        this.setInputValues();
    }
    
    addEventListenerToColorInput(id, property) {
        var isValidHexFunc = this.isValidHex.bind(this);
        var setColorFunc = this.setColor.bind(this);
        $(id).on("input", function () {
            if (isValidHexFunc($(this).val())) {
                $(this).removeClass("is-invalid");
                setColorFunc(property, $(this).val());
            } else {
                $(this).addClass("is-invalid");
            }
        });
    }

    addEventListenerToColorPickerInput(id, property) {
        var setColorFunc = this.setColor.bind(this);
        $(id).on("input", function () {
            setColorFunc(property, $(this).val());
        });
    }


    setColor(property, color) {
        this.root.style.setProperty(property, color);
        this.setInputValues();
        this.saveColorsToCookies();
    }

    setColors(
        mainColor,
        textColor,
        accentColor1,
        accentColor2,
        accentColor3,
    ) {
        this.root.style.setProperty("--main-color", mainColor);
        this.root.style.setProperty("--text-color", textColor);
        this.root.style.setProperty("--accent-color-1", accentColor1);
        this.root.style.setProperty("--accent-color-2", accentColor2);
        this.root.style.setProperty("--accent-color-3", accentColor3);

        $("#color-picker-1").attr("value", mainColor);
        $("#color-picker-2").attr("value", textColor);
        $("#color-picker-3").attr("value", accentColor1);
        $("#color-picker-4").attr("value", accentColor2);
        $("#color-picker-5").attr("value", accentColor3);


        this.setInputValues();
        this.saveColorsToCookies();
    }

    setInputValues() {
        $("#color-input-1").val(
            getComputedStyle(this.root).getPropertyValue("--main-color"),
        );
        $("#color-input-2").val(
            getComputedStyle(this.root).getPropertyValue("--text-color"),
        );
        $("#color-input-3").val(
            getComputedStyle(this.root).getPropertyValue("--accent-color-1"),
        );
        $("#color-input-4").val(
            getComputedStyle(this.root).getPropertyValue("--accent-color-2"),
        );
        $("#color-input-5").val(
            getComputedStyle(this.root).getPropertyValue("--accent-color-3"),
        );
    }

    initializeColorPicker() {
        $("#colorBlockContainer").on("click", function () {
            $("#colorPicker").addClass("active");
            $("#colorPickerBackground").addClass("active");
            $("body").addClass("overflow-hidden");
        });
        $("#colorBlockContainerMobile").on("click", function () {
            $("#colorPicker").addClass("active");
            $("#colorPickerBackground").addClass("active");
            $("body").addClass("overflow-hidden");
        });

        $("#colorPickerBackground").on("click", function () {
            $("#colorPicker").removeClass("active");
            $("#colorPickerBackground").removeClass("active");
            $("body").removeClass("overflow-hidden");
        });
        
        this.addEventListenerToColorInput("#color-input-1", "--main-color");
        this.addEventListenerToColorInput("#color-input-2", "--text-color");
        this.addEventListenerToColorInput("#color-input-3", "--accent-color-1");
        this.addEventListenerToColorInput("#color-input-4", "--accent-color-2");
        this.addEventListenerToColorInput("#color-input-5", "--accent-color-3");

        this.addEventListenerToColorPickerInput("#color-picker-1", "--main-color");
        this.addEventListenerToColorPickerInput("#color-picker-2", "--text-color");
        this.addEventListenerToColorPickerInput("#color-picker-3", "--accent-color-1");
        this.addEventListenerToColorPickerInput("#color-picker-4", "--accent-color-2");
        this.addEventListenerToColorPickerInput("#color-picker-5", "--accent-color-3");
    }

    initializePresetButtons() {
        const setColors = this.setColors.bind(this);

        $(".colorPreset:not(#randomColor)").on("click", function () {
            const mainColor = $(this).data("main-color");
            const textColor = $(this).data("text-color");
            const accentColor1 = $(this).data("accent-color-1");
            const accentColor2 = $(this).data("accent-color-2");
            const accentColor3 = $(this).data("accent-color-3");
            
            setColors(mainColor, textColor, accentColor1, accentColor2, accentColor3);
        });
    }

    initializeRandomButton() {
        $("#randomColor").on("click", function () {
                var timesRun = 0;
                var myInterval = setInterval(function() {
                        const mainColor = "#" + Math.floor((Math.random() * 0xEFFFFF) + 0x100000).toString(16);
                        const accentColor1 = "#" + Math.floor((Math.random() * 0xEFFFFF) + 0x100000).toString(16);
                        const textColor = "#" + Math.floor((Math.random() * 0xEFFFFF) + 0x100000).toString(16);
                        const accentColor2 = "#" + Math.floor((Math.random() * 0xEFFFFF) + 0x100000).toString(16);
                        const accentColor3 = "#" + Math.floor((Math.random() * 0xEFFFFF) + 0x100000).toString(16);
                        this.setColors(mainColor, textColor, accentColor1, accentColor2, accentColor3);

                        timesRun += 1;
                        if(timesRun === 10){
                                clearInterval(myInterval);
                        }
             }.bind(this), 100);
        }.bind(this));
    }


    saveColorsToCookies() {
        const mainColor = getComputedStyle(this.root).getPropertyValue("--main-color");
        const textColor = getComputedStyle(this.root).getPropertyValue("--text-color");
        const accentColor1 = getComputedStyle(this.root).getPropertyValue("--accent-color-1");
        const accentColor2 = getComputedStyle(this.root).getPropertyValue("--accent-color-2");
        const accentColor3 = getComputedStyle(this.root).getPropertyValue("--accent-color-3");

        document.cookie = `mainColor=${mainColor}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
        document.cookie = `textColor=${textColor}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
        document.cookie = `accentColor1=${accentColor1}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
        document.cookie = `accentColor2=${accentColor2}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
        document.cookie = `accentColor3=${accentColor3}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    }

    setColorsFromCookies(){
        const cookies = document.cookie.split('; ');
        const cookieObject = {};

        for (const cookie of cookies) {
          const [name, value] = cookie.split('=');
          cookieObject[name] = decodeURIComponent(value);
        }

        if (!(
            this.isValidCookie(cookieObject.mainColor) &&
            this.isValidCookie(cookieObject.accentColor1) &&
            this.isValidCookie(cookieObject.textColor) &&
            this.isValidCookie(cookieObject.accentColor2) &&
            this.isValidCookie(cookieObject.accentColor3)
        )) {
            return;
        }

        this.setColors(cookieObject.mainColor, cookieObject.textColor, cookieObject.accentColor1, cookieObject.accentColor2, cookieObject.accentColor3);
    }

    isValidHex(hex) {
        return /^#([0-9A-F]{3}){1,2}$/i.test(hex);
    }

    isValidCookie(cookie) {
        return typeof cookie !== "undefined" && this.isValidHex(cookie);
    }
}
