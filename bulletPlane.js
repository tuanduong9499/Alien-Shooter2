class BulletPlane{
    constructor(Game){
        this.game = Game;
        this.bulletPlaneContainer = new PIXI.Container();
        this.game.plane.planeContainer.addChild(this.bulletPlaneContainer);
        this.bulletPlaneSprite = new PIXI.Sprite.from("assets/bullet2.png");
        this.bulletPlaneSprite.x = this.game.plane.planeSprite.x;
        this.bulletPlaneSprite.y = this.game.plane.planeSprite.y;
        this.bulletPlaneSprite.width = 20;
        this.bulletPlaneSprite.height = 20;
        this.bulletPlaneSprite.anchor.set(0.5, 0.5);
        this.vy = 15 ;
        this.audioExplodingAlien = new Howl({
            src : ["assets/audioExplodingAlien.mp3"],
            volume : 5
        });
        this.frame = 0;
        this.draw();
        this.update();
    }
    draw(){
        this.bulletPlaneContainer.addChild(this.bulletPlaneSprite);
    }
    move(){
        this.bulletPlaneSprite.y += -this.vy;
    }
    collision(){
        for(let i = 0; i < this.game.aliens.length; i++){
            let aliens = this.game.aliens
            if(this.game.collision(this.bulletPlaneSprite, aliens[i].alienSprite)){
                this.game.gameBoard.scores ++;
                if(this.game.gameBoard.scores == 20){
                    this.game.bossAlien.drawBoss();
                    this.game.bossAlien.update();
                    this.game.bossAlien.drawLevelUpText();
                    this.game.stopShowAlien();
                }
                this.audioExplodingAlien.play();
                this.game.gameBoard.updateScores();
                this.hiddenBullet();
                aliens[i].alienSprite.visible = false;
                aliens.splice(i, 1);
            }  
        }
        if(this.bulletPlaneSprite.y < 10){
            this.bulletPlaneContainer.removeChild(this.bulletPlaneSprite);
        }
    }
    update(){
        setInterval(() =>{
            this.move();
            this.collision(); 
            if(this.game.gameBoard.scores >= 20){
                this.collisionWithBoss()
            }
        },20)
    }
    hiddenBullet(){
        this.vy = -this.vy;
        this.bulletPlaneContainer.removeChild(this.bulletPlaneSprite);
    }
    collisionWithBoss(){
        if(this.game.collisionBoss(this.bulletPlaneSprite, this.game.bossAlien.animatedBossSprite)){
            this.game.bossAlien.health --;
            if(this.game.bossAlien.health < 0){
                this.bulletPlaneSprite.visible = false;
                this.game.bossAlien.animatedBossSprite.visible = false;
                this.gameVictory = new GameVictoryScene(this.game);
                this.game.bossAlien.stopFireBulletBoss();
                this.game.stopFireBulletPlane();
            }
            this.audioExplodingAlien.play();
        }
        if(this.game.bossAlien.health < 0){
            this.frame ++;
            if(this.frame == 50 ){
                location.reload();
            }
        }
       
    }
}