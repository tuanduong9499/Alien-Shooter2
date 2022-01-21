class GameBoard{
    constructor(Game){
        this.game = Game;
        this.gameBoardContainer = new PIXI.Container(); 
        this.game.gameContainer.addChild(this.gameBoardContainer);
        this.scores = 0;
        this.styleText = {fontSize : 30, fill : 0xffffff};
        this.scoreText = new PIXI.Text("Score : " + this.scores, this.styleText); 
        this.scoreText.x = 5;
        this.scoreText.y = 560;
    }
    drawBackground(){
        const texture = PIXI.Texture.from("assets/background7.png");
        this.backgroundSprite = new PIXI.TilingSprite(
            texture,
            this.game.app.screen.width,
            this.game.app.screen.height,
        );
        this.gameBoardContainer.addChild(this.backgroundSprite);
    }
    updateBackground(){
        this.backgroundSprite.tilePosition.y += 2;
    }
    drawScores(){
        this.gameBoardContainer.addChild(this.scoreText);
    }
    updateScores(){
        this.scoreText.text = "Score : " + this.scores;
    }
    
}