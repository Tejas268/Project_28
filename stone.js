class stone extends BaseClass {
	constructor(x, y) {
		super(x, y);
		this.image = loadImage("stone.png");
		Body.setStatic(this.body, false);
	}

}