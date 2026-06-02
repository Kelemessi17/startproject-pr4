import { Actor, CollisionType, Keys, Resource, Vector } from "excalibur";
import { Resources } from "./resources";

export class Player extends Actor {

    constructor() {
        super({
            width: 40,
            height: 30,
            collisionType: CollisionType.Passive
        })
    }

    onInitialize(engine) {

        this.sprite = Resources.Player.toSprite();
        this.graphics.use(this.sprite);
        this.sprite.scale = new Vector(0.04, 0.04);

        this.pos = new Vector(500, 640)
        this.vel = new Vector(0, 0);
        this.isGrounded = true;
    }

    onPreUpdate(engine) {
        let xspeed = 0;
        let yspeed = 0;

        if (engine.input.keyboard.isHeld(Keys.Left)) {
            xspeed = -300;
        }
        if (engine.input.keyboard.isHeld(Keys.Right)) {
            xspeed = 300;
        }

        if (this.isGrounded === false) {
            this.vel.y = this.vel.y + 30;
        }

        if (engine.input.keyboard.wasPressed(Keys.Up) && this.isGrounded === true) {
            this.vel.y = -600;
            this.isGrounded = false;
        }

       if (this.pos.y >= 640 && this.vel.y >= 0) {
            this.pos.y = 640;
            this.vel.y = 0;
            this.isGrounded = true;
        }

        if (this.pos.x < 45) {
            this.pos.x = 45; 
        }
        if (this.pos.x > 1237) {
            this.pos.x = 1237; 
        }

        yspeed = this.vel.y;
        this.vel = new Vector(xspeed, yspeed);
    }



    // onCollisionStart (engine, other) {
    //     if (other.owner instanceof Bubble) {
    //         this.scene.add(new Bones(this.pos.x, this.pos.y));
    //         this.resetPosition();
    //         this.kill ();
    //     }
    // }
}