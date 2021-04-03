class IdSector {
    constructor(){

        this.heading = createElement("H1");

        this.input = createInput("Enter name");

        this.startButton = createButton("Flight time");

        this.waitingMsg = createElement("H3")

        this.reset = createButton('reset')
    }
    display(){
        
        this.heading.html("MPR:Space Race");
        this.heading.position(displayWidth/2,150);

        this.input.position(displayWidth/2,300);

        this.startButton.position(displayWidth/2,360);
        this.reset.position(displayWidth-100,20)
        this.startButton.mousePressed( ()=> {

            this.input.hide();

            this.startButton.hide();
            
            this.waitingMsg.html("Welecome, "+ this.input.value()+" kindly wait for others to hop in");
            this.waitingMsg.position(displayWidth/2, 300);

            playerCount++
            playerSpace.index = playerCount;
            playerSpace.name = this.input.value();
            playerSpace.updateCount(playerSpace.index);
            playerSpace.updateDetails();

        });

        this.reset.mousePressed(()=> {

            playerSpace.updateCount(0);
            PlayerSpaceShip.updateShpisAtEnd(0);
            core.updateState("wait");
        })
    }
}