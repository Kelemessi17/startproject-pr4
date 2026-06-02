import { Actor, CollisionType, Vector } from "excalibur";
import { Resources } from "./resources";

export class Platform extends Actor {

    constructor(x,y) {
        super({
            pos: new Vector(x, y),
            width: 220,
            height: 100,
            anchor: Vector.Zero, 
            collisionType: CollisionType.Fixed 
        })
    }

    onInitialize(engine) {
        this.sprite = Resources.Platform.toSprite();
        this.graphics.use(this.sprite);
    }

    onPreUpdate(engine) {
        
        if (this.pos.x <= -220) {
            this.pos.x = this.pos.x + 1540
        }
    }
}







         
