class BossAlien{
    constructor(Game){
        this.game = Game;
        this.bossAlienContainer = new PIXI.Container();
        this.game.gameContainer.addChild(this.bossAlienContainer);
        this.bossImages = ["assets/boss1.png","assets/boss2.png","assets/boss3.png","assets/boss4.png"];
        this.textures = [];
        this.health = 200;
        this.vx = 5;
        this.frame = 0;
        for(let i = 0; i < 4; i++ ){
            this.texture = PIXI.Texture.from(this.bossImages[i]);
            this.textures.push(this.texture);
        }
        this.animatedBossSprite = new PIXI.AnimatedSprite(this.textures);
        this.animatedBossSprite.y = 50;
        this.animatedBossSprite.width = 100;
        this.animatedBossSprite.height = 100; 
        this.animatedBossSprite.anchor.set(0.5,0.5)

        this.levelUpText = new PIXI.Text("LEVEL 2", {fontSize : 30, fill : 0xffffff});
        this.levelUpText.x = 80;
        this.levelUpText.y = 200;
    }
    drawLevelUpText(){
        this.bossAlienContainer.addChild(this.levelUpText);
    }
    drawBoss(){
        this.bossAlienContainer.addChild(this.animatedBossSprite);
        this.animatedBossSprite.play();
        this.animatedBossSprite.animationSpeed = 0.1;
    }
    move(){
        this.animatedBossSprite.x += this.vx;
    }
    collision(){
        if(this.animatedBossSprite.x  > GAME_WIDTH || this.animatedBossSprite.x < 0){
            this.vx = -this.vx;
        }
    }
    fireBullet(){
        this.bulletBoss = new BulletAlien(this.game);
        this.bulletBoss.bulletAlienSprite.x = this.animatedBossSprite.x - 30;
        this.bulletBoss.bulletAlienSprite.y = this.animatedBossSprite.y ;

        this.bulletBoss2 = new BulletAlien(this.game);
        this.bulletBoss2.bulletAlienSprite.x = this.animatedBossSprite.x + 30;
        this.bulletBoss2.bulletAlienSprite.y = this.animatedBossSprite.y ;
    }
    update(){
        this.game.bossFireInterval = setInterval(() =>{
            this.frame ++ ;
            if(this.frame % 10 == 0 ){
                this.fireBullet();
            }
            if(this.frame % 30 == 0){
                this.bossAlienContainer.removeChild(this.levelUpText);
            }
            this.move();
            this.collision();
        },100)
    }
   stopFireBulletBoss(){
       clearInterval(this.game.bossFireInterval);
   }
    
}