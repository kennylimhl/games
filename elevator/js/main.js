let canvas;
let context;
let mode;
let width;
let height;

let secondsPassed = 0;
let oldTimeStamp = 0;
let timePassed = 0;

function init() {
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
    width = canvas.width;
    height = canvas.height;
    mode = "home";

    createHomeMenu();

    canvas.addEventListener('click', function(e) {
        clickEvent(canvas, e);
    });

    canvas.addEventListener('mousedown', function(e) {
        mouseDownEvent(canvas, e);
    }, false);

    canvas.addEventListener('mouseup', function(e) {
        mouseUpEvent(canvas, e);
    }, false);

    document.body.onkeydown = function(e) {
        if (e.key == " " || e.code == "Space") {
            spaceDownEvent();
        }
    }

    document.body.onkeyup = function(e) {
        if (e.key == " " || e.code == "Space") {
            spaceUpEvent();
        }
    }

    window.requestAnimationFrame(homeLoop);
}

function gameLoop(timeStamp) {
    if (mode == "completed") {
        AllLevelsCompleted();
        return;
    }

    secondsPassed = (timeStamp-oldTimeStamp) / 1000;
    oldTimeStamp = timeStamp;
    // Move forward in time with a max amount
    secondsPassed = Math.min(secondsPassed, 0.1);

    clearCanvas();

    drawGameBg();

    for (let i = 0; i < staticObjects.length; i++) {
        staticObjects[i].draw();
    }

    for (let i = 0; i < gameObjects.length; i++) {
        gameObjects[i].update(secondsPassed);
        gameObjects[i].draw();
    }

    for (let i = 0; i < slipperyFloor.length; i++) {
        slipperyFloor[i].draw();
    }

    // ------Add gravity & collision detection--------- //
    checkCollisionCanvas();
    checkCollisionStaticObjects();
    checkCollisionElevator();
    checkCollisionSlipperyFloor();

    player.update();
    player.draw();
    update(secondsPassed);

    drawUI(timePassed.toFixed(2));

    if (firstClick == false) {
        const imgSpace = new Image(0,0);
        imgSpace.src = "http://localhost/base/elevator/images/spaceBar.png";
        context.drawImage(imgSpace, 0.4*width, 0.4*height, 0.3*width, 0.2*height);
    }

    if (mode == "game") {
        window.requestAnimationFrame(gameLoop);
    }
    if (mode == "game over") {
        gameOver(timePassed.toFixed(2));
    }
    if (mode == "next level") {
        nextLevel();
    }
    
}

function clearCanvas() {
    context.clearRect(0,0,canvas.width,canvas.height);
}

function update(secondsPassed) {
    timePassed += secondsPassed;
}