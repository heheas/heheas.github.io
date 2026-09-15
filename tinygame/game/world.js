import { Player } from "../player.js";


export class WorldScene extends Phaser.Scene {

  constructor() {

    super({
      key: "WorldScene"
    });

  }


  create() {

    /*
     * ================================
     * WORLD
     * ================================
     */

    this.createWorld();


    /*
     * ================================
     * PLAYER
     * ================================
     */

    this.player =
      new Player(
        this,
        320,
        240
      );


    /*
     * ================================
     * NPCs
     * ================================
     */

    this.createNPC(
      200,
      180,
      "Elder"
    );

    this.createNPC(
      450,
      300,
      "Merchant"
    );


    /*
     * ================================
     * INTERACTION
     * ================================
     */

    this.interactionKey =
      this.input.keyboard.addKey(
        Phaser.Input.Keyboard.KeyCodes.E
      );


    /*
     * ================================
     * UI
     * ================================
     */

    this.createUI();

  }


  update() {

    this.player.update();


    /*
     * Check for NPC interaction.
     */

    if (
      Phaser.Input.Keyboard.JustDown(
        this.interactionKey
      )
    ) {

      this.checkNPCInteraction();

    }

  }


  /*
   * ================================
   * WORLD CREATION
   * ================================
   */

  createWorld() {

    /*
     * Grass
     */

    this.add
      .rectangle(
        320,
        240,
        640,
        480,
        0x3b6e3b
      );


    /*
     * Path
     */

    this.add
      .rectangle(
        320,
        240,
        120,
        480,
        0xc8a96b
      );


    /*
     * Small river
     */

    this.add
      .rectangle(
        540,
        240,
        80,
        480,
        0x3d8dcc
      );


    /*
     * Trees
     */

    const trees = [
      [80, 80],
      [150, 120],
      [100, 380],
      [180, 420],
      [400, 80],
      [470, 100],
      [400, 420],
      [300, 400]
    ];


    for (const [x, y] of trees) {

      this.createTree(x, y);

    }

  }


  createTree(x, y) {

    /*
     * Tree trunk
     */

    this.add.rectangle(
      x,
      y + 12,
      12,
      28,
      0x704214
    );


    /*
     * Tree leaves
     */

    this.add.circle(
      x,
      y - 5,
      28,
      0x174d2a
    );

  }


  /*
   * ================================
   * NPC
   * ================================
   */

  createNPC(x, y, name) {

    const npc =
      this.add.rectangle(
        x,
        y,
        26,
        26,
        0xf2c94c
      );


    npc.npcName = name;


    /*
     * NPC name
     */

    this.add.text(
      x,
      y - 35,
      name,
      {
        fontSize: "12px",
        color: "#ffffff",

        backgroundColor: "#000000aa",

        padding: {
          x: 5,
          y: 3
        }
      }
    )
    .setOrigin(0.5);


    /*
     * Give NPC a physics body.
     */

    this.physics.add.existing(npc);

    npc.body.setImmovable(true);


    if (!this.npcs) {
      this.npcs = [];
    }

    this.npcs.push(npc);

  }


  /*
   * ================================
   * NPC INTERACTION
   * ================================
   */

  checkNPCInteraction() {

    if (!this.npcs) {
      return;
    }


    for (const npc of this.npcs) {

      const distance =
        Phaser.Math.Distance.Between(
          this.player.sprite.x,
          this.player.sprite.y,
          npc.x,
          npc.y
        );


      if (distance < 60) {

        this.showDialogue(
          npc.npcName
        );

        return;

      }

    }

  }


  /*
   * ================================
   * DIALOGUE
   * ================================
   */

  showDialogue(npcName) {

    /*
     * Remove previous dialogue.
     */

    if (this.dialogue) {
      this.dialogue.destroy();
    }


    this.dialogue =
      this.add.text(
        320,
        420,
        `${npcName}: Hello, traveler!`,
        {
          fontSize: "16px",

          color: "#ffffff",

          backgroundColor: "#111111ee",

          padding: {
            x: 15,
            y: 10
          }
        }
      )
      .setOrigin(0.5)
      .setDepth(100);


    /*
     * Automatically remove it.
     */

    this.time.delayedCall(
      3000,
      () => {

        if (this.dialogue) {

          this.dialogue.destroy();

          this.dialogue = null;

        }

      }
    );

  }


  /*
   * ================================
   * UI
   * ================================
   */

  createUI() {

    this.add.text(
      15,
      15,
      "WASD / Arrow Keys: Move\nE: Talk",
      {
        fontSize: "14px",
        color: "#ffffff",

        backgroundColor: "#000000aa",

        padding: {
          x: 8,
          y: 6
        }
      }
    )
    .setDepth(100);

  }

}
