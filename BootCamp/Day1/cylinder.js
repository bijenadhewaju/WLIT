const cylinder ={
    radius : 7,
    height : 11,
    area(){
        return Math.PI * Math.pow(this.radius,2) * this.height;
    }
};
console.log("The area of cylinder is: "+cylinder.area());


// BROWSER VERSION- Takes Input
// const cylinder ={
//     r : parseFloat(prompt("Enter the radius")),
//     h : parseFloat(prompt("Enter the height")),
//     area(){
//         return Math.PI * Math.pow(this.r,2) * this.h;
//     }
// };
// console.log("The area of cylinder is"+cylinder.area());