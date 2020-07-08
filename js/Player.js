class Player {
  constructor(){
    this.name = null;
    this.distance = 0;
    this.index = 0;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }
  static getplayerInfo(){
    var playerinfoRef = database.ref('players');
    playerinfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}