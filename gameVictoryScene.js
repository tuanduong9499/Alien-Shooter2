class GameVictoryScene{
    constructor(Game){
        this.game = Game;
        this.gameVictoryContainer = new PIXI.Container();
        this.game.gameContainer.addChild(this.gameVictoryContainer);
        this.gameVictorySprite = new PIXI.Sprite.from("assets/victoryGame.png");
        this.gameVictorySprite.x = 50;
        this.gameVictorySprite.y = 200;
        this.gameVictorySprite.width = 200;
        this.gameVictorySprite.height = 200;

        this.victoryText = new PIXI.Text("VICTORY", {fontSize : 30, fill : 0xffffff});
        this.victoryText.x = 80;
        this.victoryText.y = 400;
        this.draw();
    }
    draw(){
        this.gameVictoryContainer.addChild(this.gameVictorySprite);
        this.gameVictoryContainer.addChild(this.victoryText);
    }
}