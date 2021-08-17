class Game{

    constructor(){




    }

getState(){

var gameStateRef = database.ref("gameState");

gameStateRef.on('value',function(data){
gameState = data.val();  
});
}

update(state){

var gameStateRef = database.ref("/");
gameStateRef.update({

gameState:state

});
}


start(){

    if(gameState === 0){
            player = new Player(); 
            player.getPlayerCount();
            form = new Form(); 
            form.display();
    }
}

}






