import { WorldScene } from "./scenes/world.js";


const config = {

  type: Phaser.AUTO,

  width: 640,
  height: 480,

  parent: "game-container",

  backgroundColor: "#1b2638",

  physics: {

    default: "arcade",

    arcade: {
      debug: false
    }

  },

  scene: [
    WorldScene
  ]

};


export const game =
  new Phaser.Game(config);
