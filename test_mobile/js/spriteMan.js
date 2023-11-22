const spriteImage = 'http://localhost/base/elevator/images/spriteMan.png';

class SpriteMan {
    constructor () {
        this.img = new Image();
        this.img.src = spriteImage;
        this.startX = 15;
        this.startY = 25;   
        this.startW = 60;
        this.startH = 90;   //90
        this.spriteW = 58.87;
        this.spriteH = 130;
        this.row = 2;
        this.col = 17;
    }
}