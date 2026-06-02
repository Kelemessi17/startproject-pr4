import { Actor, CollisionType, Resource, Vector } from "excalibur";
import { Resources, ResourceLoader } from './resources.js'


export class firstObstacle extends Actor {

    constructor() {
        super({
            width: 40,
            height: 30,
            collisionType: CollisionType.Passive
        })
    }


    onInitialize(engine) {

        this.sprite = Resources.Obstacle.toSprite();
        this.graphics.use(this.sprite);
        this.sprite.scale = new Vector(0.045, 0.045);

        // this.pos = new Vector(1350, 620);
        this.pos = new Vector(600, 640);
        this.vel = Vector.Zero;
        this.elapsed = 0;

        // this.on("exitviewpoint", (e) => this.resetPosition(e));
        this.on("exitviewport", () =>  {
         this.kill();
        });
    }


    onPostUpdate(engine, delta) {
        this.elapsed += delta;
        if (this.elapsed > 3000 && this.vel.x === 0) {
            this.vel = new Vector(Math.random() * -150 - 200, 0);
        }
    }




    // onCollisionStart(engine, other) {
    //     if (other.owner instanceof Bubble) {
    //         this.scene.add(new Bones(this.pos.x, this.pos.y));
    //         this.resetPosition();
    //         this.kill();
    //     }
    // }

}
