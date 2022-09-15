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
// images render
let render = () => {
  ctx.drawImage(backgrundImage, 0, 0, canvas.width, canvas.height);
};
// continue visible
let main = () => {
  render();
  requestAnimationFrame(main);
  console.log("animation");
};
loadImage();
main();
