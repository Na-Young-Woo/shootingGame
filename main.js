// canvas setting
let canvas;
let ctx;
canvas = document.createElement("canvas");
ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 700;
document.body.appendChild(canvas);
// images load
let backgrundImage, spaceImage, bulletImage, enermyMdImage, GameoverImage;
// ship size(squeare)
let spaceSlide;
// ship location
let spaceshipX, spaceshipY;
spaceSlide = 60;
spaceshipX = canvas.width / 2 - spaceSlide / 2;
spaceshipY = canvas.height - spaceSlide - 15;
console.log(spaceshipY);
let loadImage = () => {
  backgrundImage = new Image();
  backgrundImage.src = "images/background.jpg";
  spaceImage = new Image();
  spaceImage.src = "images/spaceship.png";
  bulletImage = new Image();
  bulletImage.src = "images/bullet.png";
  enermyMdImage = new Image();
  enermyMdImage.src = "images/enermy-md.png";
  GameoverImage = new Image();
  GameoverImage.src = "images/gameover.png";
};
let keysdown = {};
// push direction key,
function setupKeyboardListener() {
  document.addEventListener("keydown", function (event) {
    keysdown[event.key] = true;
    console.log("눌린 키", keysdown);
    document.addEventListener("keyup", function (event) {
      delete keysdown[event.key];
      console.log("클릭 후", keysdown);
    });
  });
}
let update = () => {
  if ("ArrowRight" in keysdown && spaceshipX < 400 - spaceSlide) {
    spaceshipX += 5;
    console.log(spaceshipX);
  }
  if ("ArrowLeft" in keysdown && spaceshipX > 0) {
    spaceshipX -= 5;
    console.log(spaceshipX);
  }
  // if ("ArrowDown" in keysdown && spaceshipY > 625) {
  //   spaceshipY += 5;
  //   console.log(spaceshipY);
  //   // spaceshipY -= 5;
  // }
  // if ("ArrowUp" in keysdown) {
  //   spaceshipY -= 5;
  //   console.log(spaceshipY);
  //   // spaceshipY -= 5;
  // }
  // 우주선의 좌표값이 무한대로 업데이트가 아닌 경기장 안에서만 있게하려면?
}; // images render
let render = () => {
  ctx.drawImage(backgrundImage, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(spaceImage, spaceshipX, spaceshipY);
};
// continue visible
let main = () => {
  update(); // 좌표값을 업데이트하고
  render(); // 그려주고
  requestAnimationFrame(main);
};
loadImage();
main();
setupKeyboardListener();

// change ship location
// rerender
