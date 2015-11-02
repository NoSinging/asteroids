"use strict";
class Polygon {
    constructor(vertices, scale, colour, lineWidth) {
        this.position = new Vector(0, 0);
        this.vertices = vertices;
        this.rotation = 0.0;
        this.colour = colour;
        this.lineWidth = lineWidth;

        //scale the vertices
        this.vertices.forEach(function(vertex) {vertex.multiply(scale)});
    }

    setPosition (position) {
        this.position = position;
        return this;
    }

    setRotation (rotation) {
        this.rotation = rotation;
        return this;
    }
    render () {
        var i;
        ctx.beginPath();
        ctx.lineWidth = this.lineWidth;
        ctx.strokeStyle = this.colour;
        // move to the starting point: the origin (i.e. position) + 1st vertex (relative to origin)
        ctx.moveTo( this.position.x + this.vertices[0].clone().rotate(this.rotation).x, 
                    this.position.y + this.vertices[0].clone().rotate(this.rotation).y);

        // draw a line to each vertex
        for (i = 1; i < this.vertices.length; i++) {

            ctx.lineTo( this.position.x + this.vertices[i].clone().rotate(this.rotation).x, 
                        this.position.y + this.vertices[i].clone().rotate(this.rotation).y);
        }
        ctx.closePath();
        ctx.stroke();
    }
}
