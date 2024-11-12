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
        $("#mobileNav a").on('click', (e) => this.click(e));
    }

    click(e) {
        this.close();
        e.preventDefault();
        setTimeout(() => {
            const linkTo = e.currentTarget.getAttribute('href');
            const top = linkTo === "#" ? 0 : $(linkTo).offset().top - 50;
            $('html,body').animate({
                scrollTop: top},
                300);
            }, 200);
    }

    close() {
        $('body').removeClass('overflow-hidden');

        this.navMenu.addClass('animateOut')
        setTimeout(() => {
            this.navMenu.removeClass('open');
            this.navMenu.removeClass('animateOut');
        }, 300);
    }

    open() {
        $('body').addClass('overflow-hidden');

        this.navMenu.addClass('animateIn open');
        setTimeout(() => {
            this.navMenu.removeClass('animateIn');
        }, 300);
    }

    toggleNav() {
        if (this.navMenu.hasClass('open')) {
            this.close();
        }
        else {
            this.open();
        }
    }
}

export default MobileNavToggle;