describe('Player', function (){
	it('should be able to create a player', function(){
		var player = new Player;
		expect(player).toBeDefined();
	});
	it('should be able to set initial position', function(){
		var player = new Player(new Vector(200,100));
		expect(player.getPosition().x).toBe(200);
		expect(player.getPosition().y).toBe(100);
	});
	it('the initial player rotation should be zero', function(){
		var player = new Player;
		expect(player.getRotation()).toBe(0);
	});
	it('should be able to rotate player clockwise and anti-clockwise', function(){
		var player = new Player;
		var initialRotation = player.getRotation();
		player.rotateClockwise();
		expect(player.getRotation()).toBeGreaterThan(initialRotation);

		player.rotateAntiClockwise();
		expect(player.getRotation()).toBe(initialRotation);
	});
	it('the initial player velocity should be zero', function(){
		var player = new Player;
		expect(player.getVelocity()[0]).toBe(0);
		expect(player.getVelocity()[1]).toBe(0);
	});
})