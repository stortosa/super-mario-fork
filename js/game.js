var Game = {
  canvas: undefined,
  ctx: undefined,
  fps: 60,
  scoreBoard: undefined,
  keys: {
    TOP_KEY: 38,
    SPACE: 32
  },
  init: function(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");

    ScoreBoard.init(this.ctx);

    this.start();
  },
  start: function() {
    this.fps = 60;

    this.reset();

    this.interval = setInterval(() => {
      this.clear();

      this.framesCounter++;

      // controlamos que frameCounter no sea superior a 1000
      if (this.framesCounter > 1000) {
        this.framesCounter = 0;
      }

      // controlamos la velocidad de generación de obstáculos
      // if (this.framesCounter % 50 === 0) {
      //   this.generateObstacle();
      // }

      this.score += 0.01;

      this.moveAll();
      this.drawAll();
      this.collision(this.player, this.obstacles);
      // eliminamos obstáculos fuera del canvas
      // this.clearObstacles();

      if (this.collision(this.player, this.obstacles) === true) {
        this.gameOver();
      }
    }, 1000 / this.fps);
  },

  stop: function() {
    clearInterval(this.interval);
  },

  //fin del juego
  gameOver: function() {
    this.stop();

    if (confirm("GAME OVER. Play again?")) {
      this.reset();
      this.start();
    }
  },

  //reseteamos todos los elementos del juego para empezar en un estado limpio
  reset: function() {
    this.background = new Background(this.canvas.width, this.canvas.height, this.ctx);
    this.player = new Player(this.canvas.width, this.canvas.height, this.ctx, this.keys);
    this.obstacles = new Obstacle(this.ctx, 800, 500, 13, this.wCanvas, this.framesCounter);
    // this.item = new FlyItems(this.ctx, this.info, this.posY)
    this.items = [];
    this.scoreBoard = ScoreBoard;
    this.framesCounter = 0;
    // this.obstacles = [];
    this.score = 0;
  },

  //SISTEMA DE COLISIONES:
  collision: function(a,b) {
    let collision = false;
    if(b.x + b.width >= a.x && b.x < a.x + a.width){
      if(b.y + b.height >= a.y && b.y < a.y + a.height){
        collision = true;
      }
    }
    if(b.x <= a.x && b.x + b.width >= a.x + a.width){
      if(b.y <= a.y && b.y + b.height >= a.y + a.height){
        collision = true;
      }
    }
    if(a.x <= b.x && a.x + a.width >= b.x + b.width){
      if(a.y <= b.y && a.y + a.height >= b.y + b.height){
        collision = true;
      }
    }
    return collision;
  },

  // chequea si ha sucedido una colisión
  // isCollision: function() {
  //   // colisiones genéricas
  //   // (p.x + p.w > o.x && o.x + o.w > p.x && p.y + p.h > o.y && o.y + o.h > p.y )
  //   // esto chequea que el personaje no estén en colisión con cualquier obstáculo
  //   return this.obstacles.some(obstacle => {
  //     return (
  //       this.player.x + this.player.w >= obstacle.x &&
  //       this.player.x < obstacle.x + obstacle.w &&
  //       this.player.y + (this.player.h - 20) >= obstacle.y
  //     );
  //   });
  // },

  //generamos los items:
  generateItem: function () {
    this.flyItemsArr.push(
      new FlyItems(
        this.ctx,
        this.thisData[this.arrCounter],
        Math.floor((Math.random() * (500 - 100 + 30) + 100))
      )
    );
    this.arrCounter++;
    // viewData.push(this.thisData[this.arrCounter])
  },

  //limpieza de la pantalla
  clear: function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },

  //dibuja todos los assets del juego
  drawAll: function() {
    this.background.draw();
    this.player.draw(this.framesCounter);
    this.obstacles.draw(this.framesCounter)
    this.drawScore();
  },

  //mueve todos los objetos del escenario, el fondo, el jugador y los obstáculos
  moveAll: function() {
    this.background.move();
    this.player.move();
    this.obstacles.move()
    // this.obstacles.forEach(function(obstacle) {
    //   obstacle.move();
    // });
  },

  //pinta el marcador
  drawScore: function() {
    this.scoreBoard.update(this.score);
  }
};
