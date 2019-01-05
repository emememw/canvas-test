import Display from "./display";
import SpriteImage from "./spriteimage";

class Renderer {
  display: Display | null = null;
  tileSize = 16;

  createDisplay(width: number, height: number): Display {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d");
    const display = {} as Display;
    display.canvas = canvas;
    display.context = context;
    this.display = display;
    document.querySelector("#app").appendChild(canvas);
    context.fillStyle = "#000000";
    return display;
  }

  render(spriteImage: SpriteImage, x: number, y: number) {
    this.display.context.drawImage(
      spriteImage.image,
      spriteImage.dx * this.tileSize,
      spriteImage.dy * this.tileSize,
      this.tileSize,
      this.tileSize,
      x,
      y,
      this.tileSize,
      this.tileSize
    );
  }
}

export default new Renderer();
