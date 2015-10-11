"use strict";
class ThurstController {
    constructor(player) {
    this.player = player;
    this.position = new Vector(scene.width-200, scene.height-200);
    this.RADIUS = 50;
    }

    handleTouchEvent(touchVector) {
        // get touch vector relative to rotation controller centre
        var relativeTouchVector = touchVector.clone().subtract(this.position);

        // thrust
        if (relativeTouchVector.length() <this.RADIUS) {
            player.thrust();
        };
    }

    render () {
        // circle
        ctx.strokeStyle = '#ff0000';
        ctx.lineWidth=5;
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.RADIUS, 0, 2*Math.PI);
        ctx.stroke();
    }
    
}

