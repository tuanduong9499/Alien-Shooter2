class GameStartScene{
    constructor(Game){
        this.game = Game;
        this.gameStartContainer = new PIXI.Container();
        this.game.gameContainer.addChild(this.gameStartContainer);
        this.gameStartSprite = new PIXI.Sprite.from("assets/gameStart.png");
        this.gameStartSprite.x = 50;
        this.gameStartSprite.y =  200;
        this.gameStartSprite.width = 200;
        this.gameStartSprite.height = 200;
        this.gameStartSprite.interactive = true;
        this.gameStartSprite.buttonMode = true;
        this.audioClick = new Howl({
            src: ['assets/click.mp3']
        });
        this.audioGameStart = new Howl({
            src: ['assets/audioStartGame.mp3']
        });
        this.draw();
        this.handle();
        this.playAudio();
    }
    draw(){
        this.gameStartContainer.addChild(this.gameStartSprite);
    }
    playAudio(){
        this.audioGameStart.play();
    }
    handle(){
        this.gameStartSprite.on("pointerdown", () =>{
            this.gameStartContainer.removeChild(this.gameStartSprite);
            this.game.gamePlayScene();
            this.audioClick.play();
            this.audioGameStart.pause();
        });
    }
}