// String.prototype.yell = function () {
//     return `${this.toUpperCase()}!!!!!!!`
// };

// Array.prototype.pop = function () {
//     return "Sorry I want That Element, i will never pop it off"
// };

// This is a Factory Function.... 

// function makeColor(r, g, b) {
//     const color = {};
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.rgb = function () {
//         const { r, g, b } = this;
//         return `rgb(${r},${g},${b})`;
//     }
//     color.hex = function(){
//         const {r,g,b} = this;
//         return(
//             '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
//             );
//     }
//     return color;
// }
// const firstColor = makeColor(35,255,150);
// firstColor.hex();

//This is Constructor Functions....

// function Color(r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
//}
//Ifyou call it on its own like a regular function...
// Color(35,60,190); //undefind
//It returns undefind. seems useless!

//*************
//The New Operator!
//************* 

//1.Creates a blank, plain Javascript object;
//2. Links (sets the constuctor of) this object to another object;
//3. Passes the newly if the created object from Step 1 as the context;
//4.Returns this if the function doesn't return its own object.

// Color.prototype.rgb = function () {
//     const { r, g, b } = this;
//     return `rgb(${r},${g},${b})`;
// }

// Color.prototype.hex = function () {
//     const { r, g, b } = this;
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
// }

// Color.prototype.rgba = function (a = 1.0) {
//     const { r, g, b } = this;
//     return `rgba(${r}, ${g}, ${b},${a})`;
// };

// const color1 = new Color(34, 54, 60);
// coloe1.hex();
// const color2 = new Color(255, 23, 32);
// color2.hex();

class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }

    greet() {

    }
}

const c1 = new Color(255, 67, 89, 'Tomato');
