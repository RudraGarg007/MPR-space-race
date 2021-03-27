class IdSector {
    constructor(){

        this.heading = createElement("H1");

        this.input = createInput("Enter name");

        this.startButton = createButton("Flight time");

        this.waitingMsg = createElement("H3")
    }
    display(){
        
        this.heading.html("MPR:Space Race");
        this.heading.position(displayWidth/2,150);

        this.input.position(displayWidth/2,300);

        this.startButton.position(displayWidth/2,360);
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
    }
}