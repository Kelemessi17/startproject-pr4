import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import { Player } from './player'

// voeg hier jouw eigen resources toe
const Resources = {
    Platform: new ImageSource('images/platform.png'),
    Player: new ImageSource('images/fenerbahce.png'),
    Obstacle: new ImageSource('images/galatasaray.png'),
}

const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }


