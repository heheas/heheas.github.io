import { game } from "./game/game.js";


const pipButton =
  document.getElementById("pip-button");

const gameContainer =
  document.getElementById("game-container");


pipButton.addEventListener("click", async () => {

  /*
   * Check browser support.
   */

  if (!("documentPictureInPicture" in window)) {

    alert(
      "Document Picture-in-Picture is not supported."
    );

    return;
  }


  /*
   * Open the PiP window.
   */

  try {

    const pipWindow =
      await documentPictureInPicture.requestWindow({
        width: 640,
        height: 480
      });


    /*
     * Style the PiP document.
     */

    const style =
      pipWindow.document.createElement("style");

    style.textContent = `
      html,
      body {
        margin: 0;
        padding: 0;

        width: 100%;
        height: 100%;

        overflow: hidden;

        background: #000;
      }

      #game-container {
        width: 100%;
        height: 100%;

        margin: 0;
        padding: 0;

        overflow: hidden;
      }

      canvas {
        display: block;
      }
    `;

    pipWindow.document.head.appendChild(style);


    /*
     * Move the game container into PiP.
     *
     * We are NOT creating another Phaser game.
     *
     * The existing Phaser canvas moves with it.
     */

    pipWindow.document.body.appendChild(
      gameContainer
    );


    /*
     * When PiP closes, put the game back.
     */

    pipWindow.addEventListener(
      "pagehide",
      () => {

        document.body
          .querySelector("main")
          .appendChild(gameContainer);

      }
    );

  } catch (error) {

    console.error(
      "Could not open Picture-in-Picture:",
      error
    );

  }

});
