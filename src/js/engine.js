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
        ctx = canvas.getContext('2d');

    canvas.width = 505;
    canvas.height = 606;

    doc.body.appendChild(canvas);


    /* This function serves as the kickoff point for the game loop itself
     * and handles calling the update and render methods.
     */
    function main() {

        update();
        render();


        /* Use the browser's requestAnimationFrame function to call this
         * function again as soon as the browser is able to draw another frame.
         */
        win.requestAnimationFrame(main);
    }

    // initialise game
    function init() {

        // Now instantiate player
        player = new Player;


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

        main();
    }

    /* update all game entity's data, e.g. position. 
     */
    function update() {
        player.update();
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

    // kick this puppy off!
    init();

})(this);
