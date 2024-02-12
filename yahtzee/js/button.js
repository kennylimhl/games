let buttons = [];

class Button {
    constructor(text, x, y, w, h, tcolor, lcolor, bcolor, fontSize) {
        this.text = text;
        this.fontSize = fontSize; //20
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.tcolor = tcolor;
        this.lcolor = lcolor;   //'#6b6b64' grey
        this.bcolor = bcolor;   //'#fffdc9' light yellow
        this.v = true;
    }

    click() {
        alert(this.name);
    }

    isButtonClicked(x, y) {
        if (x > this.x  && y > this.y && 
            x < this.x + this.w && y < this.y + this.h) {
            return true;
        }
        return false;
    }

    draw() {
        context.fillStyle = this.bcolor;
        context.strokeStyle = this.lcolor;
        context.fillRect(this.x, this.y, this.w, this.h); 
        context.lineWidth = 5;
        context.strokeRect(this.x, this.y, this.w, this.h);
        context.font = "bold " + width / this.fontSize + "px Courier New";
        var txtW = context.measureText(this.text).width;
        context.fillStyle = this.tcolor;
        context.fillText(this.text, this.x + (this.w-txtW) * 0.5, this.y + this.h * 0.65);
    }
}

function initButton() {
    canvas.addEventListener('click', function(e) {
        clickEvent(canvas, e);
    });

    canvas.addEventListener('mousedown', function(e) {
        mouseDownEvent(canvas, e);
    }, false);

    canvas.addEventListener('mouseup', function(e) {
        mouseUpEvent(canvas, e);
    }, false);

}

function clickEvent(canvas, e) {
    
    clickPos = getCursorPosition(canvas, e);

    // Check for buttons clicked
    let btn;
    for (let i = 0; i < buttons.length; i++) {
        btn = buttons[i].isButtonClicked(clickPos.x, clickPos.y);

        if (btn != "") {
            activateButtonEvent(btn);
        }
        btn = "";
    }
    
}

function mouseDownEvent(canvas, e) {
    move = true;
    firstClick = true;
}

function mouseUpEvent(canvas, e) {
    move = false;
}

function getCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    return new Coordinate(x, y);
}

class Coordinate {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }
}

// function drawButton(item, index) {
//     if (item.v) {
//         var btnW = item.w;
//         var btnH = item.h;
//         var btnX = item.x;
//         var btnY = item.y;
//         var txt = item.name;
//         context.fillStyle = '#fffdc9';
//         context.fillRect(btnX, btnY, btnW, btnH); 
//         context.strokeStyle = '#6b6b64';
//         context.fillStyle = '#6b6b64';
//         context.lineWidth = 5;
//         context.strokeRect(btnX, btnY, btnW, btnH);
//         context.font = "bold " + width / 20 + "px Courier New";
//         var txtW = context.measureText(txt).width;
//         context.fillText(txt, btnX + (btnW-txtW) * 0.5, btnY + btnH * 0.65);
//     }
// }