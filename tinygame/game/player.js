export class Player {

  constructor(scene, x, y) {

    this.scene = scene;

    this.speed = 160;


    /*
     * Create a simple placeholder player.
     *
     * We'll eventually replace this with
     * an actual sprite.
     */

    this.sprite =
      scene.add.rectangle(
        x,
        y,
        28,
        28,
        0x4f7cff
      );


    /*
     * Give the player a physics body.
     */

    scene.physics.add.existing(
      this.sprite
    );


    this.body =
      this.sprite.body;


    this.body.setCollideWorldBounds(true);


    /*
     * Keyboard controls.
     */

    this.keys =
      scene.input.keyboard.addKeys({
        up: Phaser.Input.Keyboard.KeyCodes.W,
        down: Phaser.Input.Keyboard.KeyCodes.S,
        left: Phaser.Input.Keyboard.KeyCodes.A,
        right: Phaser.Input.Keyboard.KeyCodes.D
      });

  }


  update() {

    let velocityX = 0;
    let velocityY = 0;


    /*
     * Movement
     */

    if (this.keys.left.isDown) {
      velocityX = -this.speed;
    }

    if (this.keys.right.isDown) {
      velocityX = this.speed;
    }

    if (this.keys.up.isDown) {
      velocityY = -this.speed;
    }

    if (this.keys.down.isDown) {
      velocityY = this.speed;
    }


    /*
     * Prevent diagonal movement from
     * being faster.
     */

    if (
      velocityX !== 0 &&
      velocityY !== 0
    ) {

      velocityX *= 0.707;
      velocityY *= 0.707;

    }


    this.body.setVelocity(
      velocityX,
      velocityY
    );

  }

}
