class Slingshot {
    constructor(bodyA, pointB) {
        var options = {
            'length' : 10,
            'stiffness' : 0.01,
            bodyA : bodyA,
            pointB : pointB
        }
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
    }
    fly() {
        this.slingshot.bodyA = null;
    }
    attach(body) {
        this.slingshot.bodyA = body;
    }
    display () {
        if(this.slingshot.bodyA) {
            var pointA = this.slingshot.bodyA.position;
            var pointB = this.slingshot.pointB;

            push();
            strokeWeight(3);
            line(pointA.x - 5, pointA.y, pointB.x - 10, pointB.y);
            line(pointA.x - 5, pointA.y, pointB.x + 10, pointB.y);
            pop();
        }
    }
}