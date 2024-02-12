let gameObjects;
let staticObjects;
let slipperyFloor;
let player;
let playerSprite;
let level = 0;
let move = false;

function createWorld() {

    playerSprite = new SpriteMan();

    //createStaticObjects();
    //createUI();
    createPlayer(playerSprite);
    createLevel(level);
}

function drawGameBg() {
    context.fillStyle = '#363636';
    context.fillRect(0, 0, width, height);
}

function drawUI(tm) {
    var txt, txtW;
    // Level
    context.fillStyle = '#ffffff';
    context.font = "bold " + width / 30 + "px Courier New";
    txt = "Level " + level;
    txtW = context.measureText(txt).width;
    context.fillText(txt, (width-txtW)*0.5, height*0.05);

    // Time
    // context.fillStyle = '#ffffff';
    // context.font = "bold " + width / 30 + "px Courier New";
    txt = tm.toString();
    txtW = context.measureText(txt).width;
    context.fillText(txt, (0.99*width-txtW), height*0.05);
}

function createStaticObjects() {
    staticObjects = [
        new StaticObject(context, 0, 0.6*height, 0.1*width, 0.5* height),
        new StaticObject(context, 0.9*width, 0.6*height, 0.1*width, 0.5*height)
    ];
}

function createPlayer(sprite) {
    player = new Player(context, sprite.img, 0, 0.3*height, 40, 80, sprite.startX, sprite.startY, sprite.startW, sprite.startH);
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function nextLevel()
{
    level = level + 1;
    createWorld();
    window.requestAnimationFrame(gameLoop);
}

function gameOver(tm) 
{
    // Draw Game Over UI
    var w = 0.5*width;
    var h = 0.6*height;
    var x = 0.5*width - 0.5*w;
    var y = 0.5*height - 0.5*h;
    var txt;
    var txtW;
    context.fillStyle = '#000000';
    context.fillRect(x, y, w, h); 
    context.strokeStyle = '#6b6b64';
    context.lineWidth = 5;
    context.strokeRect(x, y, w, h);

    context.fillStyle = '#ffffff';
    context.font = "bold " + width / 20 + "px Courier New";
    txt = "Game Over";
    txtW = context.measureText(txt).width;
    context.fillText(txt, x + (w-txtW)*0.5, y + h * 0.2);

    context.font = "bold " + width / 40 + "px Courier New";
    txt = "Level: " + (level) + "  Time: " + tm;
    txtW = context.measureText(txt).width;
    context.fillText(txt, x + (w-txtW)*0.5, y + h * 0.4);

    setTimeout(function() {
        // New Game button
        var btnW = 0.3*width;
        var btnH = 0.15*height;
        var btnX = 0.5*width - 0.5*btnW;
        var btnY = 0.65*height - 0.5*btnH;
        buttons = [
            new Button("New Game", btnX, btnY, btnW, btnH)
        ];
        context.fillStyle = '#fffdc9';
        context.fillRect(btnX, btnY, btnW, btnH); 
        context.strokeStyle = '#6b6b64';
        context.fillStyle = '#6b6b64';
        context.lineWidth = 5;
        context.strokeRect(btnX, btnY, btnW, btnH);
        context.font = "bold " + width / 20 + "px Courier New";
        txt = buttons[0].name;
        txtW = context.measureText(txt).width;
        context.fillText(txt, btnX + (btnW-txtW) * 0.5, btnY + btnH * 0.65);
    }, 1000);
}

function AllLevelsCompleted() 
{
    var tm = timePassed.toFixed(2);
    level = level - 1;

    // Draw UI
    var w = 0.6*width;
    var h = 0.6*height;
    var x = 0.5*width - 0.5*w;
    var y = 0.5*height - 0.5*h;
    var txt;
    var txtW;
    context.fillStyle = '#600060';
    context.fillRect(x, y, w, h); 
    context.strokeStyle = '#ad5cff';
    context.lineWidth = 5;
    context.strokeRect(x, y, w, h);

    context.fillStyle = '#ffffff';
    context.font = "bold " + width / 20 + "px Courier New";
    txt = "Congratulations!";
    txtW = context.measureText(txt).width;
    context.fillText(txt, x + (w-txtW)*0.5, y + h * 0.2);
    context.font = "bold " + width / 35 + "px Courier New";
    txt = "You are now the King of Elevators";
    txtW = context.measureText(txt).width;
    context.fillText(txt, x + (w-txtW)*0.5, y + h * 0.35);

    context.font = "bold " + width / 30 + "px Courier New";
    txt = "Level: " + (level) + "  Time: " + tm;
    txtW = context.measureText(txt).width;
    context.fillText(txt, x + (w-txtW)*0.5, y + h * 0.55);

    setTimeout(function() {
        // New Game button
        var btnW = 0.3*width;
        var btnH = 0.15*height;
        var btnX = 0.5*width - 0.5*btnW;
        var btnY = 0.68*height - 0.5*btnH;
        buttons = [
            new Button("New Game", btnX, btnY, btnW, btnH)
        ];
        context.fillStyle = '#fffdc9';
        context.fillRect(btnX, btnY, btnW, btnH); 
        context.strokeStyle = '#ad5cff';
        context.fillStyle = '#6b6b64';
        context.lineWidth = 5;
        context.strokeRect(btnX, btnY, btnW, btnH);
        context.font = "bold " + width / 20 + "px Courier New";
        txt = buttons[0].name;
        txtW = context.measureText(txt).width;
        context.fillText(txt, btnX + (btnW-txtW) * 0.5, btnY + btnH * 0.65);
    }, 1000);
}