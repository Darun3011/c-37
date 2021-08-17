class Player{

constructor(){



}

getPlayerCount(){

var playerCountref = database.ref('playerCount');
playerCountref.on('value',function(data){
playerCount = data.val();
});

}

updatePlayerCount(count){

var playerCountref = database.ref('/');
playerCountref.update({
playerCount:count
});
}

}