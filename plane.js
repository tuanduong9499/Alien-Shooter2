class Plane{
    constructor(Game){
        this.game = Game;
        this.planeContainer = new PIXI.Container();
        this.game.gameContainer.addChild(this.planeContainer);
        this.planeSprite = new PIXI.Sprite.from("assets/plane.png");
        this.planeSprite.x = GAME_WIDTH/2;
        this.planeSprite.y = GAME_HEIGHT - 50;
        this.planeSprite.width = 50;
        this.planeSprite.height = 50;
        this.planeSprite.anchor.set(0.5, 0.5); 
        this.draw();
    }
    draw(){
        this.planeContainer.addChild(this.planeSprite);
    }
    move(){
        document.addEventListener("mousemove", (e) => {
            this.planeSprite.x = e.clientX - window.innerWidth / 2 + GAME_WIDTH / 2;
            this.planeSprite.y = e.clientY - 50;
        });
    }
    fireBullet(){
        this.bulletPlane = new BulletPlane(this.game);
    }
    
    
}