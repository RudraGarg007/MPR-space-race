var database, gameState, playerCount, idSector, core, playerSpace, spaceGround;
var allPlayers,ship1,ship2,ship3,ship4,ships;
var ship1Img,ship2Img,ship3Img,ship4Img
function preload(){
    spaceGround = loadImage("./images/space.jpg");
    ship1Img = loadImage("./images/ship1re.png");
    ship2Img = loadImage("./images/ship2re.png");
    ship3Img = loadImage("./images/ship3re.png");
    ship4Img = loadImage("./images/ship4re.png");
}

function setup(){
    createCanvas(displayWidth,displayHeight);
    database  = firebase.database();
    gameState = "wait";
    playerCount = 0;
    core = new CoreClass ();
    core.getState();
    core.start();
}

function draw(){
    if(playerCount == 4 && gameState == "wait") {
        gameState = "play";
        core.updateState(gameState);
    } 
    if(gameState == "play"){
        core.play();
    }
    if(gameState == "end"){
        core.end();
    } 
}
