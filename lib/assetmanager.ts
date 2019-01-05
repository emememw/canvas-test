import SpriteImage from "./spriteimage";

class AssetManager {
  images: Map<string, Image> = new Map();

  loadImage(key, src) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => {
        this.images.set(key, image);
        console.log(this.images);
        resolve();
      };
      image.onerror = () => reject();
      image.src = src;
    });
  }

  getSpriteImage(imageKey: string, dx: number, dy: number): SpriteImage {
    return {
      image: this.images.get(imageKey),
      dx,
      dy
    } as SpriteImage;
  }
}

export default new AssetManager();
