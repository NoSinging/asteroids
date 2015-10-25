"use strict";
class Scene {
    constructor(w, h) {
        this.width = w;
        this.height = h;
    }

    getCentre () {
        return new Vector (this.width/2, this.height/2);
    }

    getCorner () {
        return new Vector (this.width, this.height);
    }
    
    render () {
        // render scene
        ctx.fillStyle = "#000000";
        ctx.fillRect(0,0,this.width,this.height);
    }
    
}

