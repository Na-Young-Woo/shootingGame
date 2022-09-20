// canvas setting
let canvas;
let ctx;
canvas = document.createElement("canvas");
ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 700;
document.body.appendChild(canvas);
// images load
let backgrundImage, spaceImage, bulletImage, enermyImage, GameoverImage;
let gameOver = false;
// ship size(squeare)
let spaceSlide;
// ship location
let spaceshipX, spaceshipY;
spaceSlide = 60;
spaceshipX = canvas.width / 2 - spaceSlide / 2;
spaceshipY = canvas.height - spaceSlide - 15;
// 총알 저장 리스트
let bulletList = [];
let enermyList = [];
function Bullet() {
  this.x = 0;
  this.y = 0;
  this.init = function () {
    this.x = spaceshipX + 18;
    this.y = spaceshipY;
    bulletList.push(this);
  };
  this.update = function () {
    this.y -= 7;
  };
}
let generateRandomValue = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1));
};
function Enermy() {
  this.x = 0;
  this.y = 0;
  this.init = function () {
    this.x = generateRandomValue(0, canvas.width - 48);
    this.y = 0;
    enermyList.push(this);
  };
  this.update = function () {
    this.y += 3;
    if (this.y >= canvas.height - 48) {
      gameOver = true;
      console.log("gameover");
      console.log(canvas.height - 48);
    }
  };
}
let createEneremy = () => {
  setInterval(() => {
    let e = new Enermy();
    e.init();
  }, 500);
};
let keysdown = {};
let loadImage = () => {
  backgrundImage = new Image();
  backgrundImage.src = "images/background.jpg";
  spaceImage = new Image();
  spaceImage.src = "images/spaceship.png";
  bulletImage = new Image();
  bulletImage.src = "images/bullet.png";
  GameoverImage = new Image();
  GameoverImage.src = "images/gameover.png";
  enermyImage = new Image();
  enermyImage.src = "images/enermy.png";
};
let createBullet = () => {
  console.log("총알 발사");
  let b = new Bullet();
  b.init();
};
// push direction key,
function setupKeyboardListener() {
  document.addEventListener("keydown", function (event) {
    keysdown[event.key] = true;
    console.log(keysdown);
    document.addEventListener("keyup", function (event) {
      delete keysdown[event.key];
      if (event.key == " ") {
        createBullet();
      }
    });
  });
}
let update = () => {
  if ("ArrowRight" in keysdown && spaceshipX <= canvas.width - spaceSlide) {
    spaceshipX += 5;
  }
  if ("ArrowLeft" in keysdown && spaceshipX >= 0) {
    spaceshipX -= 5;
  }
  // 총알의 y좌표 업데이트 함수 호출
  bulletList.forEach((ele) => {
    ele.update();
  });
  enermyList.forEach((ele) => {
    ele.update();
  });
}; // images render
let render = () => {
  ctx.drawImage(backgrundImage, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(spaceImage, spaceshipX, spaceshipY);
  bulletList.forEach((ele) => {
    ctx.drawImage(bulletImage, ele.x, ele.y);
  });
  enermyList.forEach((ele) => {
    ctx.drawImage(enermyImage, ele.x, ele.y);
  });
};
// continue visible
let main = () => {
  if (!gameOver) {
    update(); // 좌표값을 업데이트하고
    render(); // 그려주고
    requestAnimationFrame(main);
  } else {
    ctx.drawImage(GameoverImage, 10, 100, 380, 380);
  }
};
loadImage();
setupKeyboardListener();
createEneremy();
main();
// 총알 만들기
// 1. 스페이스바를 누르면 총알 발사
// 2. 총알 발사 : 총알 y값이 --, 총알 xrkqtdl 스페이스를 누른 순간의 우주선 좌표
// 3. 발사된 총알들은 총알 배열에 저장한다.
// 4. 총알들은 x,y 좌표가 있어야 한다.
// 5. 총알 배열을 가지고 render 그려줌.
