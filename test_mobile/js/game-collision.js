function checkCollisionCanvas() {
    let x = player.x + player.w / 2;

    // Canvas boundaries
    if (player.y < -10 || player.y + player.h > height + 10) {
        mode = "game over";
    }

    if (x > width) {
        mode = "next level";
    }
}

function checkCollisionStaticObjects() {
    let x = player.x + player.w / 2;

    for (let i = 0; i < staticObjects.length; i++) {
        if (x >= staticObjects[i].x && 
            x < (staticObjects[i].x + staticObjects[i].w)) {

                if (player.y+player.h < staticObjects[i].y) {
                    if (player.y+player.h-player.fallSpeed >= staticObjects[i].y) {
                        player.y = staticObjects[i].y - player.h;
                    }
                    else {
                        player.y = player.y + player.fallSpeed;
                    }
                }
                else  if (player.y + player.h > staticObjects[i].y + 10) {
                    mode = "game over";
                }

                break;
        }
    }
}

function checkCollisionElevator() {
    let x = player.x + player.w / 2;

    for (let i = 0; i < gameObjects.length; i++) {
        if (x >= gameObjects[i].x && 
            x < (gameObjects[i].x + gameObjects[i].w)) {
                // Middle (Safe Zone)
                if (player.y >= gameObjects[i].y && 
                    player.y + player.h <= gameObjects[i].y + gameObjects[i].h + 10) 
                {
                    if (player.y + player.h + player.fallSpeed >= gameObjects[i].y + gameObjects[i].h )
                    {
                        player.y = gameObjects[i].y + gameObjects[i].h - player.h;
                    }
                    else
                    {
                        player.y = player.y + player.fallSpeed;
                    }
                }
                // Collides with Top
                else if (gameObjects[i].y > player.y && gameObjects[i].y < player.y + player.h) {
                    mode = "game over";
                }
                // Collides with Bottom
                else if (gameObjects[i].y + gameObjects[i].h > player.y && gameObjects[i].y + gameObjects[i].h < player.y + player.h) {
                    mode = "game over";
                }
                // Above the Top
                else if (player.y + player.h < gameObjects[i].y) 
                {
                    player.y = player.y + player.fallSpeed;
                }
                // Below bottom
                else 
                {
                    player.y = player.y + player.fallSpeed;
                }

                break;
        }
    }
}

function checkCollisionSlipperyFloor() {
    let x = player.x + player.w / 2;

    for (let i = 0; i < slipperyFloor.length; i++) {
        if (x >= slipperyFloor[i].x && 
            x < (slipperyFloor[i].x + slipperyFloor[i].w)) {
                
                player.x = player.x + slipperyFloor[i].speed;

                break;
        }
    }
}