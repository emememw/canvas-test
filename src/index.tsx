import * as React from "react";
import { render } from "react-dom";

import "./styles.css";

import { Renderer, AssetManager, GameLoop } from "../lib/index";

import sprites from "../sprites.png";

let x = 0;

class App extends React.Component {
  async componentDidMount() {
    Renderer.createDisplay(256, 144);
    await AssetManager.loadImage("sprites", sprites);

    GameLoop.init({
      render: () => {
        // TODO
        for (let i = 0; i < 500; i++) {
          Renderer.render(
            AssetManager.getSpriteImage("sprites", 0, 0),
            x + 1 * parseInt(i / 4, 10),
            0 + 1 * parseInt(i / 4, 10)
          );
        }
      },
      update: () => {
        // TODO
        if (x < Renderer.display.canvas.width) {
          x++;
        } else {
          x = 0;
        }
      }
    });

    GameLoop.start();
  }

  render() {
    return (
      <div id="app">
        <style
          dangerouslySetInnerHTML={{
            __html: `
          html, body {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
          }

          #root, #app {
            width: 100%;
            height: 100%;
          }

          canvas {
            width: 100%;
            image-rendering: -moz-crisp-edges;
            image-rendering: -webkit-crisp-edges;
            image-rendering: pixelated;
            image-rendering: crisp-edges;
            background: #000;
          }

        `
          }}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
