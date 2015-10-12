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
    // FIXME: format this more neatly
    var doc = global.document,
        win = global.window,
        canvas = doc.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        CANVAS_WIDTH = win.innerWidth,
        CANVAS_HEIGHT = win.innerHeight,
        lastTime;
    var hasTouch = 'ontouchstart' in window;

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
        var now = Date.now();
        var dt = (now - lastTime) / 1000.0;

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

        scene = new Scene(CANVAS_WIDTH, CANVAS_HEIGHT);
        global.scene = scene;

        // instantiate player
        player = new Player(scene.getCentre());

        // Add touch controllers
        // FIXME: only for touch devices

        rotationController  = new RotationController(player);
        thrustController    = new ThurstController(player);

        // This listens for key presses and sends the keys to 
        // Player.handleInput() method. 
        // FIXME: move to the keyEventHandler and put logic in controllers
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
      document.addEventListener("touchstart", handleStart,false);
      document.addEventListener("touchmove", handleStart,false);
      // FIXME: make thrust continuous while touching control


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
        // FIXME: wrap around scene
        player.position.wrap(new Vector(CANVAS_WIDTH, CANVAS_HEIGHT));
    }


    /* render all game entities
     */
    function render() {
        
        scene.render();

        // show controllers on touch devices
        // FIXME: let the control decide if it is visible
        if (hasTouch) {
            rotationController.render();
            thrustController.render();
        };

        // render player
        player.render();
    }


    // make context available globally
    global.ctx = ctx;

    // kick this puppy off!
    init();


    function handleStart(evt) {
        evt.preventDefault();
//        var touches = evt.changedTouches;
        var touches = evt.touches;

        for (var i = 0; i < touches.length; i++) {
            //console.log("touchstart:" + i + "...");
            //touchVector = new Vector(touches[i].pageX,touches[i].pageY);
            rotationController.handleTouchEvent(new Vector(touches[i].pageX,touches[i].pageY));
            thrustController.handleTouchEvent(new Vector(touches[i].pageX,touches[i].pageY));
            };

//console.log(touches);
/*
        touches.forEach(function (touch, index, array) {
            // get touch vector
            touchVector = new Vector(touch.pageX,touch.pageY);

            rotationController.handleTouchEvent(touchVector.clone());
            thrustController.handleTouchEvent(touchVector.clone());
            });
*/
        };

})(this);
