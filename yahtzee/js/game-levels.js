function createLevel(levelNum) {
    levelNum = 5;
    switch (levelNum) {
        case 1:
            var w = 0.2*width;
            var h = 0.4*height;

            gameObjects = [
                new Elevator(context, 0.1*width, getRndInteger(0, height-h), 0, -100, w, h, 1),
                new Elevator(context, 0.7*width, getRndInteger(0, height-h), 0, 80, w, h, 1)
            ];

            staticObjects = [
                new StaticObject(context, 0, 0.6*height, 0.1*width, 0.5*height),
                new StaticObject(context, 0.9*width, 0.6*height, 0.1*width, 0.5*height),
                new StaticObject(context, 0.3*width, 0.5*height, 0.4*width, 0.7*height)
            ];

            slipperyFloor = [];

            mode = "game";
            // statObj = new StaticObject(context, 0.4*width, 0.3*height, 0.2*width, 0.7*height);
            // staticObjects.push(statObj);
            break;
        case 2:
            var w = 0.1*width;
            var h = 0.3*height;

            gameObjects = [
                new Elevator(context, 0.1*width, getRndInteger(0, height-h), 0, -80, w, h, 1),
                new Elevator(context, 0.3*width, getRndInteger(0, height-h), 0, 100, w, h, 1),
                new Elevator(context, 0.6*width, getRndInteger(0, height-h), 0, -150, w, h, 1),
                new Elevator(context, 0.8*width, getRndInteger(0, height-h), 0, 200, w, h, 1)
            ];

            w = 0.1 * width;

            staticObjects = [
                new StaticObject(context, 0, 0.6*height, 0.1*width, height),
                new StaticObject(context, 0.9*width, 0.4*height, 0.1*width, height),
                
                new StaticObject(context, 0.2*width, 0.5*height, w, height),
                new StaticObject(context, 0.4*width, 0.4*height, w*2, height),
                new StaticObject(context, 0.7*width, 0.7*height, w, height)
            ];

            slipperyFloor = [];

            mode = "game";

            break;
        case 3:
            var w = 0.1*width;
            var h = 0.3*height;

            gameObjects = [
                new Elevator(context, 0.1*width, getRndInteger(0, height-h), 0, -150, w, h, 1),
                new Elevator(context, 0.3*width, getRndInteger(0, height-h), 0, 100, w, h, 0),
                new Elevator(context, 0.6*width, getRndInteger(0, height-h), 0, -150, w, h, 0),
                new Elevator(context, 0.8*width, getRndInteger(0, height-h), 0, 100, w, h, 1)
            ];

            w = 0.1 * width;

            staticObjects = [
                new StaticObject(context, 0, 0.6*height, 0.1*width, height),
                new StaticObject(context, 0.9*width, 0.4*height, 0.1*width, height),
                
                new StaticObject(context, 0.2*width, 0.4*height, w, height),
                new StaticObject(context, 0.4*width, 0.6*height, w*2, height),
                new StaticObject(context, 0.7*width, 0.3*height, w, height)
            ];

            slipperyFloor = [];

            mode = "game";

            break;
        case 4:
            var w = 0.1*width;
            var h = 0.3*height;

            gameObjects = [
                new Elevator(context, 0.1*width, getRndInteger(0, height-h), 0, -80, w, h, 1),
                new Elevator(context, 0.2*width, getRndInteger(0, height-h), 0, 100, w, h, 1),
                new Elevator(context, 0.5*width, getRndInteger(0, height-h), 0, -200, w, h, 1),
                new Elevator(context, 0.7*width, getRndInteger(0, height-h), 0, -150, w, h, 1),
                new Elevator(context, 0.8*width, getRndInteger(0, height-h), 0, 80, w, h, 1)
            ];

            w = 0.1 * width;

            staticObjects = [
                new StaticObject(context, 0, 0.6*height, 0.1*width, height),
                new StaticObject(context, 0.9*width, 0.4*height, 0.1*width, height),
                
                new StaticObject(context, 0.3*width, 0.4*height, w*2, height),
                new StaticObject(context, 0.6*width, 0.6*height, w, height)
            ];

            slipperyFloor = [];

            mode = "game";

            break;
        case 5:
            var w = 0.1*width;
            var h = 0.3*height;

            gameObjects = [
                new Elevator(context, 0.1*width, getRndInteger(0, height-h), 0, -150, w, h, 1),
                new Elevator(context, 0.8*width, getRndInteger(0, height-h), 0, 100, w, h, 1)
            ];

            w = 0.1 * width;

            staticObjects = [
                new StaticObject(context, 0, 0.6*height, 0.1*width, height),
                new StaticObject(context, 0.9*width, 0.4*height, 0.1*width, height),
                
                new StaticObject(context, 0.2*width, 0.5*height, w*6, height)
            ];

            slipperyFloor = [
                new SlipperyFloor(context, 0.2*width, 0.5*height, w*6)
            ];

            mode = "game";

            break;
        default:
            mode = "completed";
            break;
    }
}