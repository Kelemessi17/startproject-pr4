import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Player } from './player.js'
import { Platform } from './platform.js'
import { firstObstacle } from './obstacle.js'

export class Game extends Engine {

    constructor() {
        super({
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
        })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")

        for (let x = 0; x < 1600; x += 220) {
            const backgroundPlatform = new Platform(x, 670);
            backgroundPlatform.vel.x = -200;
            this.add(backgroundPlatform);
        }

        const player = new Player();
        this.add(player);

        const obstacle = new firstObstacle();
        this.add(obstacle);
    }


}

new Game()
