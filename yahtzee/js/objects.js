class GameObject {
    constructor (context, x, y) {
        this.context = context;
        this.x = x;
        this.y = y;
        this.isColliding = false;
    }
}

class Dice extends GameObject {
    constructor (context, x, y, w, fColor, bColor, num) {
        super (context, x, y);
        
        this.vx = 0;
        this.vy = 5;
        this.w = w;
        this.bounceNum = 2;
        this.bounceH = 5;
        this.fColor = fColor;
        this.bColor = bColor;
        this.num = num;
    }

    draw () {
        // Background
        this.context.fillStyle = bcolor;
        this.context.fillRect(this.x, this.y, this.w, this.h);

        // Dots
        this.context.fillStyle = fcolor;
        let d;

        switch (num) {
            case 1:
                d = this.w/2;
                this.context.beginPath();
                this.context.arc(this.x+d, this.y+d, 50, 0, 2*Math.PI);
                this.context.fill();
                break;

            default:
                d = this.w/2;
                this.context.beginPath();
                this.context.arc(this.x+d, this.y+d, 50, 0, 2*Math.PI);
                this.context.fill();
                break;
        }
        
    }

    click() {

    }

    update (secondsPassed) {
        // this.x += this.vx * secondsPassed;
        // this.y += this.vy * secondsPassed;

        // if (this.b == 0) {
        //     if (this.y + this.h < 0) {
        //         this.y = height;
        //     }

        //     if (this.y > height) {
        //         this.y = -this.h;
        //     }
        // }
        // if (this.b == 1) {
        //     if (this.y <= 0) {
        //         this.y = 1;
        //         this.vy = -this.vy;
        //     }
        //     if (this.y + this.h >= height) {
        //         this.y = height - this.h - 1;
        //         this.vy = -this.vy;
        //     }
        // }
    }
}

class Player extends GameObject {
    constructor (context, img, x, y, w, h, sx, sy, sw, sh) {
        super (context, x, y);

        this.w = w;
        this.h = h;
        this.sx = sx;
        this.sy = sy;
        this.sw = sw;
        this.sh = sh;
        this.img = img;

        this.frameX = 0;
        this.frameY = 0;
        this.anim = 3;
        this.animCount = 0;
        this.speed = 7;
        this.fallSpeed = 3;
        
    }

    draw () {
        this.context.drawImage(this.img, this.sx, this.sy, this.sw, this.sh, this.x, this.y, this.w, this.h);
        // this.context.fillStyle = '#ff0000';
        // this.context.fillRect(this.x, this.y-10, this.w, 10);
    }

    update() {

        if (move) {
            if (this.animCount % this.anim == 0) {
                if (this.frameX < playerSprite.col - 1) {
                    this.frameX++;
                }
                else {
                    this.frameX = 0;
                    if (this.frameY < playerSprite.row - 1) {
                        this.frameY++;
                    }
                    else {
                        this.frameY = 0;
                    }
                }

                this.sx = this.frameX * playerSprite.spriteW + playerSprite.startX;
                this.sy = this.frameY * playerSprite.spriteH + playerSprite.startY;
                this.x = this.x + this.speed;

                this.animCount = 0;
            }
            this.animCount++;
        }
    }
}

class StaticObject extends GameObject {
    constructor (context, x, y, w, h) {
        super (context, x, y);

        this.w = w;
        this.h = h;
    }

    draw () {
        this.context.fillStyle = '#b38302';
        this.context.fillRect(this.x, this.y, this.w, this.h);
    }
}

class SlipperyFloor extends GameObject {
    constructor (context, x, y, w) {
        super (context, x, y);

        this.w = w;
        this.h = height * 0.02;
        this.speed = 1;
    }

    draw () {
        this.context.fillStyle = '#03adfc';
        this.context.fillRect(this.x, this.y - this.h, this.w, this.h);
    }
}