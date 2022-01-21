class GameOverScene{
    constructor(Game){
        this.game = Game;
        this.gameOverContainer = new PIXI.Container();
        this.game.gameContainer.addChild(this.gameOverContainer);
        this.gameOverSprite = new PIXI.Sprite.from("assets/gameOver.png");
        this.gameOverSprite.x = 50;
        this.gameOverSprite.y = 200;
        this.gameOverSprite.width = 200;
        this.gameOverSprite.height = 200; 
        this.audioGameOver = new Howl({
            src : ["assets/audioGameOver.mp3"]
        });

        this.playAgainSprite = new PIXI.Sprite.from("assets/playAgain.png");
        this.playAgainSprite.x = 100;
        this.playAgainSprite.y = 400;
        this.playAgainSprite.width = 100;
        this.playAgainSprite.height = 100;
        this.playAgainSprite.interactive = true;
        this.playAgainSprite.buttonMode = true;
        this.draw();
        this.playAudio();
        this.playAgain();
    }
    draw(){
        this.gameOverContainer.addChild(this.gameOverSprite);
        this.gameOverContainer.addChild(this.playAgainSprite);
    }
    playAudio(){
        this.game.audioPlayGame.pause();
        this.audioGameOver.play();
    }
    playAgain(){
        this.playAgainSprite.on("pointerdown", () =>{
            location.reload();
        })
    }
}