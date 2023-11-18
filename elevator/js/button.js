class Button {
    constructor(name, x, y, w, h) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    click() {
        alert(this.name);
    }

    isButtonClicked(x, y) {
        if (x > this.x  && y > this.y && 
            x < this.x + this.w && y < this.y + this.h) {
            return this.name;
        }
        return "";
    }
}