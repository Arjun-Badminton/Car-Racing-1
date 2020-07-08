class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playercountref = await database.ref('playerCount').once("value");
      if(playercountref.exists()){
        playerCount = playercountref.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
  }

  play(){
    form.hide();
    textSize(30);
    text("Gamestart",120,100);
    Player.getplayerInfo();
    if(allPlayers !== undefined){
      var displayposition = 150;
    for(var plr in allPlayers){
      textSize(15);
      text(allPlayers[plr].name+";"+allPlayers[plr].distance,120,displayposition);
      }
    }
    if(keyIsDown(UP_ARROW)&& player.index !== null){
      player.distance = player.distance+50;
      player.update();
    }
  }
}
