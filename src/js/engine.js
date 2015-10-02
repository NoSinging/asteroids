/* Engine.js
 * provides the game initiation & loop: 
 *  - initiates scene - using canvas element
 *  - event listener - for handling user input 
 *  - update - applying physics, i.e. motion
 *  - render - drawing game objects
 *  - collision dection - TODO
 *
 * This engine is available globally via the Engine variable and it also makes
 * the canvas' context (ctx) object globally available for easy rendering.
 *
 * Credits:
 * Game Loop is inspired by Udacity.com Object Oriented JavaScript course project.
 */

var Engine = (function(global) {
    /* create the canvas element, grab the 2D context for that canvas
     * set the canvas elements height/width and add it to the DOM.
     */
    var doc = global.document,
        win = global.window,
        canvas = doc.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        CANVAS_WIDTH = win.innerWidth,
        CANVAS_HEIGHT = win.innerHeight,
        lastTime;
    var hasTouch = true; //'ontouchstart' in window;

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

        // instantiate player
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

        // and for touch devices
      document.addEventListener("touchstart", function(evt) {
            evt.preventDefault();
            var touches = evt.touches;

            if (touches[0].pageX >  canvas.width-200 &&
                touches[0].pageX <  canvas.width-100 &&
                touches[0].pageY >  canvas.height-200 &&
                touches[0].pageY <  canvas.height-100) {
                console.log('touched the right box');
                player.handleInput('right');
            };
            if (touches[0].pageX >  canvas.width-400 &&
                touches[0].pageX <  canvas.width-300 &&
                touches[0].pageY >  canvas.height-200 &&
                touches[0].pageY <  canvas.height-100) {
                console.log('touched the left box');
                player.handleInput('left');
            };
            if (touches[0].pageX >  canvas.width-300 &&
                touches[0].pageX <  canvas.width-200 &&
                touches[0].pageY >  canvas.height-400 &&
                touches[0].pageY <  canvas.height-300) {
                console.log('touched the left box');
                player.handleInput('left');
            };
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
        player.position.wrap(new Vector(CANVAS_WIDTH, CANVAS_HEIGHT));
    }


    /* render all game entities
     */
    function render() {
        
        // render scene
        ctx.fillStyle = "#000000";
        ctx.fillRect(0,0,canvas.width,canvas.height);

        // for touch devices
        // show a touch control on bottom left
        if (hasTouch) {
            ctx.strokeStyle = '#ff0000';
            ctx.lineWidth=5;
            // clockwise controller
            ctx.strokeRect(canvas.width-200,canvas.height-200,100,100);
            // anti-clockwise controller
            ctx.strokeRect(canvas.width-400,canvas.height-200,100,100);
            // anti-clockwise thrust
            ctx.strokeRect(canvas.width-300,canvas.height-400,100,100);
        };

        // render play
        player.render();
    }


    // make context available globally
    global.ctx = ctx;

    // kick this puppy off!
    init();

})(this);
