class Star {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = Math.random() + 1;
        this.outerRadius = this.size * 2;
        this.innerRadius = this.size;
        this.animationCount = 0;
        this.timeout = Math.random() * 3000;
        this.alpha = Math.random();
    }

    animate(height) {
        if (this.timeout < this.animationCount) {
            if (this.y > height) {
                this.y = -20;
                this.timeout = Math.random() * 3000;
            } else {
                this.y = this.y + this.speed;
            }
            this.draw();
        }
        this.animationCount++;
    }

    draw() {
        let spikes = 10;
        let step = Math.PI / spikes;
        let rot = Math.PI / 2 * 3;
        let x = this.x;
        let y = this.y;


        ctx.beginPath();
        ctx.moveTo(this.x, this.y - this.outerRadius);

        for (let i = 0; i < spikes; i++) {
            x = this.x + Math.cos(rot) * this.outerRadius;
            y = this.y + Math.sin(rot) * this.outerRadius;
            ctx.lineTo(x, y);
            rot += step;

            x = this.x + Math.cos(rot) * this.innerRadius;
            y = this.y + Math.sin(rot) * this.innerRadius;
            ctx.lineTo(x, y);
            rot += step
        }

        ctx.lineTo(this.x, this.y - this.outerRadius);
        ctx.closePath();
        ctx.fillStyle = 'rgba(255, 255, 255, ' + this.alpha + ')';
        ctx.fill();

    }
}
