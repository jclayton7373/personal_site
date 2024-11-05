
class StickerClick {
    stickerSources = [
        `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	        viewBox="0 0 270 240" style="enable-background:new 0 0 270 240;" xml:space="preserve">
            <path class="st1" d="M142.51,95.41c-2.23-24.71-10.63-51.07-31.36-64.71c-28.89-19.01-71.89-2.61-87.32,28.34
                S16.9,128.95,37.8,156.5s52.18,45.35,84.18,58.47c5.23,2.15,10.75,4.23,16.38,3.72c4.97-0.45,9.52-2.88,13.83-5.4
                c39.25-22.98,71.18-58.26,90.14-99.59c5.34-11.63,9.73-24.03,9.74-36.82s-4.97-26.13-15.32-33.65c-11.09-8.05-26.19-8.16-39.52-4.96
                C168.06,45.28,142.93,67.28,142.51,95.41z"/>
        </svg>`,
        `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="210 30 760 660">
            xml:space="preserve">
            <path class="st0" d="M462.76,270.24c19.1-59.6,45.27-116.93,77.78-170.41c10.41-17.13,23.69-35.39,43.46-38.75
                c33.2-5.64,55.53,32.19,67.52,63.66c11.51,30.19,23.01,60.37,34.52,90.56c6.29,16.51,13.01,33.65,26.04,45.58
                c29.14,26.68,74.72,16.7,113.46,8.95s88.97-5.91,105.18,30.11c14.04,31.19-8.97,67.46-37.31,86.62
                c-28.34,19.16-62.62,29.05-88.7,51.2c-5.39,4.57-10.51,9.86-12.92,16.5c-4.81,13.29,2.3,27.56,7.83,40.57
                c16.17,38.01,19.6,81.3,9.62,121.38c-3.92,15.75-10.86,32.22-25.01,40.16c-28.96,16.24-61.86-12.53-82.57-38.49
                c-26.3-32.97-52.59-65.94-78.89-98.91c-48.1,50.22-99.38,102.43-166.11,121.99c-13.66,4-28.89,6.42-41.73,0.27
                c-27.9-13.34-24.74-55.49-7.79-81.37s43.25-46.64,51.41-76.47c3.07-11.22,3.13-23.82-2.77-33.84
                c-7.17-12.16-21.29-18.05-34.45-23.15c-39.77-15.4-79.54-30.81-119.31-46.21c-25.69-9.95-56.39-27.74-52.86-55.06
                c2.97-23.02,28.85-34.71,51.27-40.71C359.45,268.65,421.02,262.41,462.76,270.24z"/>
        </svg>`,

    ]

    constructor(imagePath) {
        this.imagePath = imagePath;
        this.init();
    }

    init() {
        document.addEventListener('click', this.handleClick.bind(this));
    }

    handleClick(event) {
        // Create a new image element
        const img = document.createElement('div');
        const randomIndex = Math.floor(Math.random() * this.stickerSources.length);
        img.innerHTML = this.stickerSources[randomIndex];
        img.style.left = event.pageX + 'px';
        img.style.top = event.pageY + 'px';
        const randomSize = Math.floor(Math.random() * 20) + 20;
        img.style.width = randomSize + 'px';
        img.style
        img.classList.add('stickerClick', 'stickerFadeIn');
        const randomRotation = Math.floor(Math.random() * 30) - 15;
        img.style.transform = `rotate(${randomRotation}deg)`;

        // Append the image to the body
        document.body.appendChild(img);

        // Remove the image after 60 seconds
        setTimeout(() => {
            img.classList.add('stickerFadeOut');
            img.addEventListener('animationend', () => {
                document.body.removeChild(img);
            });
        }, 60 * 1000);
    }
}

export default StickerClick;

// Usage
//const stickerClick = new StickerClick('path/to/your/image.png'); // Replace with the path to your image