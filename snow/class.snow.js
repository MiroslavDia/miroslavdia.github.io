class Snow {
    constructor(width, height) {
        this.count = width / 5;
        this.maxSize = 7;
        this.y = -30;
        this.stars = [];
        this.animate = this.animate.bind(this);
        this.width = width;
        this.height = height;
    }

    start() {
        this.createStars();
        this.animate();
    }

    animate() {
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, this.width, this.height);
        this.stars.forEach(star => star.animate(this.height));
        requestAnimationFrame(this.animate);
    }

    createStars() {
        for (let i = 0; i < this.count; i++) {
            let size = Math.floor(Math.random() * Math.floor(this.maxSize));
            let x = Math.floor(Math.random() * Math.floor(this.width));
            this.stars.push(new Star(x, this.y, size));
        }
    };

}
