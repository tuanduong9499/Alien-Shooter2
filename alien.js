class Alien{
    constructor(Game){
        this.game = Game;
        this.alienContainer = new PIXI.Container();
        this.game.gameContainer.addChild(this.alienContainer);
        this.alienSprite = new PIXI.Sprite.from("assets/alien.png");
        this.alienSprite.x = 50+ Math.floor(Math.random() * (GAME_WIDTH - 50));
        this.alienSprite.y = 0;
        this.alienSprite.width = 50;
        this.alienSprite.height = 50;
        this.alienSprite.anchor.set(0.5, 0.5); 
        this.vx = 2;
        this.vy = 2;
        this.update()
    }
    draw(){
        this.alienContainer.addChild(this.alienSprite);
    }
    move(){
        this.alienSprite.y += this.vy;
    }
    collision(){
        if(this.alienSprite.y > 500){
            this.alienContainer.removeChild(this.alienSprite);
        }
        
    }
    fireBullet(){
        this.bulletAlien = new BulletAlien(this.game);
        this.bulletAlien.bulletAlienSprite.x = this.alienSprite.x;
        this.bulletAlien.bulletAlienSprite.y = this.alienSprite.y
    }
    update(){
        setInterval(() =>{
            this.move();
            this.collision();
        },20)
    }
    
   
}