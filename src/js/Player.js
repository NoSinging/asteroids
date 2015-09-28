
"use strict";
// player class has an update() & render() method
class Player {
    constructor() {

    }
    update () {

    }
    render () {
        // draw player as a circle
        ctx.beginPath();
        ctx.strokeStyle = '#ff0000';
        ctx.arc(200,200,10,0,2*Math.PI);
        ctx.stroke();
    }
}



