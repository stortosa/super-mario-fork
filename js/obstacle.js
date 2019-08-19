class Obstacle {
  constructor(w,playerY, playerH, ctx) {
    this.ctx = ctx;
    this.w = 15; //
    this.h = this.w * 3;
    this.enemyW = 130;
    this.enemyH = 90;
    this.dx = 10;
    this.x = w;
    this.y = playerY + playerH - this.h - 5;
    this.posY = 500
    //imagen del gorila:
    this.imgEnemy = new Image();
    this.imgEnemy.src = "img/totemGorila.png";
  }

  draw() {

    this.ctx.drawImage(
      this.imgEnemy,
      this.x, //donde ponerlo inicio (x, y)
      this.y -40,
      100,
      100
    )
  }

  move() {
    this.x -= this.dx;
  }
}