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

function spaceDownEvent() {
    move = true;
    firstClick = true;
}

function spaceUpEvent() {
    move = false;
}

function getCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    return new Coordinate(x, y);
}

function activateButtonEvent(btn) {
    switch (btn) {
        case "New Game":
            buttons = [];
            mode = "game";
            level = 1;
            createWorld();
            firstClick = false;
            window.requestAnimationFrame(gameLoop);
            break;
        default:
            break;
    }
}

class Coordinate {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }
}