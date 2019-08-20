class Obstacle {
  constructor(w,playerY, playerH, ctx) {
    this.ctx = ctx;
    this.w = 15; //
    this.h = this.w * 3;
    this.enemyW = 100;
    this.enemyH = 80;
    this.dx = 12;
    this.x = w;
    this.y = playerY + playerH - this.h - 5;
    this.posY = 500
    
    //imagen del gorila:
    this.imgEnemy = new Image();
    this.imgEnemy.src = "img/totemGorila2.png";

  }

  draw() {

    this.ctx.drawImage(
      this.imgEnemy,
      this.x, //donde ponerlo inicio (x, y)
      this.y -30,
      60,
      80
    )
  }

  move() {
    this.x -= this.dx;
  }
}