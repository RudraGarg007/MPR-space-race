class CoreClass{
    constructor(){
      
    }
    getState(){
       database.ref("gameState").on("value",
       function (data){ gameState = data.val()},
       function (error){console.error(error);})
    }
    updateState(state){
        database.ref("/").update({
            "gameState": state
        })
    }
    start(){
        if (gameState == "wait"){
            playerSpace = new PlayerSpaceShip();
            playerSpace.getCount();
            idSector = new IdSector ();
            idSector.display();
        }
        ship1 = createSprite(100,200);
        ship1.addImage("ship1",ship1Img) 
        ship2 = createSprite(300,200);
        ship2.addImage("ship2", ship2Img)
        ship3 = createSprite(500,200);
        ship3.addImage("ship3", ship3Img)
        ship4 = createSprite(700,200);
        ship4.addImage("ship4", ship4Img)

        ships = [ship1,ship2,ship3,ship4] 
    }
    play(){
        idSector.waitingMsg.hide();
        idSector.heading.hide();

        var y1 = 200
        PlayerSpaceShip.getAllPlayers();
        // background(spaceGround);
        // image(spaceGround,0,-displayHeight*4,-displayWidth*2,displayHeight*5)

        if (allPlayers != undefined ){
            background(spaceGround);
           image(spaceGround,0,-displayHeight*5,-displayWidth*2,displayHeight*5)

            var index = 0;
            var x =0;
            var y ;
            
            for(var item in allPlayers ){
                console.log("")
                index=index+1;
                x=x+200
                y=displayHeight-allPlayers[item].distance
                ships[index-1].x = x
                ships[index-1].y = y
                if (index == playerSpace.index){
                    ships[index-1].shapeColor = color("rgb(125,50,125)");
                    camera.position.x = displayWidth/2
                    camera.position.y = ships[index-1].y
                }
                
            }

            
        }

        if(keyDown("up")&& playerSpace.index != null){
            playerSpace.speed += 10 ;
            playerSpace.distance = playerSpace.distance + playerSpace.speed/60;
            playerSpace.updateDetails();
        }
         if(playerSpace.distance > 20000){
             gameState= "end"
         }
        drawSprites()
    }

    end(){
        console.log('game ended')
    }
}