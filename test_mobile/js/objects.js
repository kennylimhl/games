class GameObject {
    constructor (context, x, y) {
        this.context = context;
        this.x = x;
        this.y = y;
        this.isColliding = false;
    }
}

class Elevator extends GameObject {
    constructor (context, x, y, vx, vy, w, h, bounce) {
        super (context, x, y);
        
        this.vx = vx;
        this.vy = vy;
        this.w = w;
        this.h = h;
        this.b = bounce;

        this.deadZoneThickness = 0.005*height;
    }

    draw () {
        this.context.fillStyle = '#000000';
        this.context.fillRect(this.x, this.y, this.w, this.h);
        this.context.fillStyle = '#fff5d9';
        this.context.fillRect(this.x+10, this.y+10, this.w-20, this.h-20);
        this.context.fillStyle = '#ff4000';
        this.context.fillRect(this.x, this.y-this.deadZoneThickness, this.w, this.deadZoneThickness);
        this.context.fillRect(this.x, this.y+this.h, this.w, this.deadZoneThickness);
    }

    update (secondsPassed) {
        this.x += this.vx * secondsPassed;
        this.y += this.vy * secondsPassed;

        if (this.b == 0) {
            if (this.y + this.h < 0) {
                this.y = height;
            }

            if (this.y > height) {
                this.y = -this.h;
            }
        }
        if (this.b == 1) {
            if (this.y <= 0) {
                this.y = 1;
                this.vy = -this.vy;
            }
            if (this.y + this.h >= height) {
                this.y = height - this.h - 1;
                this.vy = -this.vy;
            }
        }
    }

    click () {

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