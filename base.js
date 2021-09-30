class BaseClass {
	constructor(x, y) {

		var options = {
			isStatic:true,
			restitution :0,
            friction : 1,
		}
		this.body = Bodies.rectangle(x, y, 40, 40, options);
		this.r = 40;
		this.image = loadImage("mango.png");

		World.add(world, this.body);
	}

	display() {
        var pos = this.body.position;
        
        push()
		translate(pos.x, pos.y);
		rotate(this.body.angle);
		imageMode(CENTER);
		image(this.image, 0, 0, 40, 40)
		pop()
    }
}