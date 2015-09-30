/* Engine.js
 * Game Loop is copied from Udacity.com Object Oriented JavaScript course project.
 * This file provides the game loop functionality (update and render).
 *
 * This engine is available globally via the Engine variable and it also makes
 * the canvas' context (ctx) object globally available.
 */

var Engine = (function(global) {
    /* create the canvas element, grab the 2D context for that canvas
     * set the canvas elements height/width and add it to the DOM.
     */
    var doc = global.document,
        win = global.window,
        canvas = doc.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        CANVAS_WIDTH = 505,
        CANVAS_HEIGHT = 606,
        lastTime;

    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;

    doc.body.appendChild(canvas);


    /* This function serves as the kickoff point for the game loop itself
     * and handles calling the update and render methods.
     */
    function main() {

        /* Get our time delta information which is required if your game
         * requires smooth animation. Because everyone's computer processes
         * instructions at different speeds we need a constant value that
         * would be the same for everyone (regardless of how fast their
         * computer is) - hurray time!
         */
        var now = Date.now(),
            dt = (now - lastTime) / 1000.0;

        update(dt);
        render();

        /* Set our lastTime variable which is used to determine the time delta
         * for the next time this function is called.
         */
        lastTime = now;

        /* Use the browser's requestAnimationFrame function to call this
         * function again as soon as the browser is able to draw another frame.
         */
        win.requestAnimationFrame(main);
    }

    /* This function does some initial setup that should only occur once,
     * particularly setting the lastTime variable that is required for the
     * game loop.
     */
    function init() {

        // Now instantiate player
        player = new Player(new Vector(250,300));


        // This listens for key presses and sends the keys to 
        // Player.handleInput() method. 
        document.addEventListener('keydown', function(e) {
            var allowedKeys = {
                37: 'left',
                38: 'up',
                39: 'right',
                40: 'down'
            };

            player.handleInput(allowedKeys[e.keyCode]);
        });


        lastTime = Date.now();
        main();
    }

    /* update all game entity's data, e.g. position. 
     */
    function update(dt) {
        player.update(dt);

        // wrap the player to the canvas
        // viewing the wrapped nature of the canvas as a 'property'/ responsibility
        // of the canvas.  In much the same way as the 2D surface of a sphere
        // 'wraps' in 3D.  This is unbeknown to the entity on the 2D surface 
        player.position.wrap(new Vector(this.CANVAS_WIDTH, this.CANVAS_HEIGHT));
    }


    /* render all game entities
     */
    function render() {
        
        ctx.fillStyle = "#000000";
        ctx.fillRect(0,0,canvas.width,canvas.height);

        player.render();
    }


    // make context available globally
    global.ctx = ctx;
    global.CANVAS_WIDTH = CANVAS_WIDTH;
    global.CANVAS_HEIGHT = CANVAS_HEIGHT;

    // kick this puppy off!
    init();

})(this);
