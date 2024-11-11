class MobileNavToggle {
    constructor() {
        this.toggleButton = $("#mobileNavToggle");
        this.navMenu = $("#mobileNav");
        this.init();
    }

    init() {
        if (this.toggleButton && this.navMenu) {
            this.toggleButton.on('click', () => this.toggleNav());
        }
    }

    toggleNav() {
        $('body').toggleClass('overflow-hidden');
        this.toggleButton.toggleClass('open');
        if (this.navMenu.hasClass('open')) {
            this.navMenu.addClass('animateOut')
            setTimeout(() => {
                this.navMenu.removeClass('open');
                this.navMenu.removeClass('animateOut');
            }, 300);
        }
        else {
            this.navMenu.addClass('animateIn open');
            setTimeout(() => {
                this.navMenu.removeClass('animateIn');
            }, 300);
        }
    }
}

export default MobileNavToggle;