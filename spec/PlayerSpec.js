describe('Player', function (){
	it('should be able to create a player', function(){
		var player = new Player;
		expect(player).toBeDefined();
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
})