describe('Scene', function (){
	it('should be able to get the midpoint of a scene', function(){
		var scene = new Scene(400,500);
		expect(scene.getCentre()).toEqual(new Vector(200,250));
	});
})