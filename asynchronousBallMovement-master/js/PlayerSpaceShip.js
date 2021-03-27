class PlayerSpaceShip{
    constructor(){
        this.name = null;

        this.distance = 0; 

        this.speed = 0;

        this.index = null 
    }
    getCount(){
        database.ref("playerCount").on("value",
        function (data){ playerCount = data.val()},
        function (error){console.error(error);})
    }
    updateCount(count){
        database.ref("/").update({
            "playerCount": count
        })
    }
    updateDetails(){
        var playerIndex = "players/player"+this.index
        database.ref(playerIndex).update({
            "name" : this.name,
            "distance" : this.distance
        })
    }
    static getAllPlayers(){
        database.ref("players").on("value",
        function (data){allPlayers = data.val()},
        function (error){console.error(error);})

    }
}