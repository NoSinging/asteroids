"use strict";
class RotationController {
    constructor(player) {
    this.player = player;
    this.position = new Vector(200, scene.height-200);
    this.RADIUS = 100;
    }

    handleTouchEvent(touchVector) {
        // get touch vector relative to rotation controller centre
        var relativeTouchVector = touchVector.clone().subtract(this.position);

        // if touch is within 1.5x radius of rotation control then
        // count it as a rotation controller movement
        if (relativeTouchVector.length() < (this.RADIUS * 1.5)) {
            this.player.setRotation(relativeTouchVector.angle());
        };
    }

    render () {
        // circle
        ctx.strokeStyle = '#ff0000';
        ctx.lineWidth=5;
        // rotation controller is a circle
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.RADIUS, 0, 2*Math.PI);
        ctx.stroke();
    }
    
}

