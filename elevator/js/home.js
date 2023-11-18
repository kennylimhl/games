let buttons = [];

function createHomeMenu() {
    createHomeBg(width, height);

    // Buttons
    var btnW = 0.3*width;
    var btnH = 0.15*height;
    var btnX = 0.5*width - 0.5*btnW;
    var btnY = 0.7*height - 0.5*btnH;
    buttons = [
        new Button("New Game", btnX, btnY, btnW, btnH)
    ];

    // Background image
    // const img = new Image(0,0);
    // img.src = "http://localhost/base/elevator/images/bgHome.png";

    // img.onload = function() {
    //     // Background image
    //     //context.drawImage(img, 0, 0, width, height);
        
    // }
}

function createHomeBg(w, h) {

    let eW = 0.07*w;
    let eH = 0.2*h;

    gameObjects = [
        new Elevator(context, 0.1*w, 0.5*h, 0, 100, eW, eH, 0),
        new Elevator(context, 0.2*w, 0.5*h, 0, -150, eW, eH, 0),
        new Elevator(context, 0.7*w, 0.5*h, 0, 160, eW, eH, 0),
        new Elevator(context, 0.8*w, 0.5*h, 0, -110, eW, eH, 0)
    ];
}

function drawButtons() {
    for (let i = 0; i < buttons.length; i++) {
        var btnW = buttons[i].w;
        var btnH = buttons[i].h;
        var btnX = buttons[i].x;
        var btnY = buttons[i].y;
        var txt = buttons[i].name;
        context.fillStyle = '#fffdc9';
        context.fillRect(btnX, btnY, btnW, btnH); 
        context.strokeStyle = '#6b6b64';
        context.fillStyle = '#6b6b64';
        context.lineWidth = 5;
        context.strokeRect(btnX, btnY, btnW, btnH);
        context.font = "bold " + width / 20 + "px Courier New";
        var txtW = context.measureText(txt).width;
        context.fillText(txt, btnX + (btnW-txtW) * 0.5, btnY + btnH * 0.65);
    }
}

function drawTitle() {
    context.fillStyle = '#ffffff';
    context.font = "bold " + width / 10 + "px Courier New";
    txt = "Elevators";
    txtW = context.measureText(txt).width;
    context.fillText(txt, 0.5*width - 0.5*txtW, 0.4*height);
}

function homeLoop(timeStamp) {
    secondsPassed = (timeStamp-oldTimeStamp) / 1000;
    oldTimeStamp = timeStamp;
    // Move forward in time with a max amount
    secondsPassed = Math.min(secondsPassed, 0.1);

    clearCanvas();

    drawGameBg();
    drawButtons();
    drawTitle();

    for (let i = 0; i < gameObjects.length; i++) {
        gameObjects[i].update(secondsPassed);
        gameObjects[i].draw();
    }

    if (mode=="home") {

        window.requestAnimationFrame(homeLoop);
    }
}