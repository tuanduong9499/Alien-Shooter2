class BulletAlien{
    constructor(Game){
        this.game = Game;
        this.bulletAlienContainer = new PIXI.Container();
        this.game.alien.alienContainer.addChild(this.bulletAlienContainer);
        this.bulletAlienSprite = new PIXI.Sprite.from("assets/bullet.png");
        this.bulletAlienSprite.x = 0;
        this.bulletAlienSprite.y = 0;
        this.bulletAlienSprite.width = 30;
        this.bulletAlienSprite.height = 30;
        this.bulletAlienSprite.anchor.set(0.5, 0.5);
        this.vy = 5;
        this.audioExplodingPlane = new Howl({
            src : ["assets/audioExplodingPlane.mp3"]
        }) 
        this.draw();
        this.update();
    }
    draw(){
        this.bulletAlienContainer.addChild(this.bulletAlienSprite);
    }
    move(){
        this.bulletAlienSprite.y += this.vy;
    }
    collision(){
        if(this.game.collision(this.bulletAlienSprite, this.game.plane.planeSprite)){
            this.hiddenBullet();
            this.game.bossAlien.stopFireBulletBoss();
            this.gameOverScene = new GameOverScene(this.game);
            this.game.stopFireBulletPlane();
            this.game.stopShowAlien();
            
        }
        if(this.bulletAlienSprite.y > 550){
            this.bulletAlienContainer.removeChild(this.bulletAlienSprite);
        }
    }
    update(){
        setInterval(() =>{
            this.move();
            this.collision();
        },20)
    }
    hiddenBullet(){
        this.bulletAlienContainer.removeChild(this.bulletAlienSprite);
    }
}