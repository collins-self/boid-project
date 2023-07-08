import * as PIXI from 'pixi.js';

// APP init

const APP_WIDTH = 400;
const APP_HEIGHT = 300;
const ANTIALIAS = true;
const BACKGROUND = 0x85B09A;

let appSettings = {
    width: APP_WIDTH,
    height: APP_HEIGHT,
    antialias: ANTIALIAS,
    backgroundColor: BACKGROUND,
}

let app = new PIXI.Application<HTMLCanvasElement>(appSettings);
document.body.appendChild(app.view);

// Creature Sprite
let creatureGraphics = new PIXI.Graphics();

let triangleWidth = 100,
    triangleHeight = triangleWidth,
    triangleHalfway = triangleWidth / 2;

creatureGraphics.beginFill(0x255C99, 1);
creatureGraphics.lineStyle(0, 0x255C99, 1);
creatureGraphics.moveTo(triangleWidth, 0);
creatureGraphics.lineTo(triangleHalfway, triangleHeight);
creatureGraphics.lineTo(0, 0);
creatureGraphics.lineTo(triangleHalfway, 0);
creatureGraphics.endFill();

app.stage.addChild(creatureGraphics);
