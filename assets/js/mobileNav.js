class MobileNavToggle {
    constructor() {
        this.toggleButton = document.getElementById("mobileNavToggle");
        this.navMenu = document.getElementById("mobileNav");
        this.init();
    }

    init() {
        if (this.toggleButton && this.navMenu) {
            this.toggleButton.addEventListener('click', () => this.toggleNav());
        }
    }

    toggleNav() {
        this.navMenu.classList.toggle('open');
    }
}

export default MobileNavToggle;