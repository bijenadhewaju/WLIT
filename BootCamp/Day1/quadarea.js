//area of square and rectangle with common area function

function area(){
    if(!this.breadth) {// incase of no breadth i.e square
        return Math.pow(this.length,2);
    }
    else
    return this.length* this.breadth;
    }

const square= {
    length: 4,
    area:area
};

const rectangle= {
    length: 10,
    breadth: 6,
    area:area
};
console.log("The area of square is: "+square.area())
console.log("The area of rectangle is: "+rectangle.area())