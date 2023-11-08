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

// This is Javascribt Classes.....

class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
        this.calcHSL ();
    }

    greet() {
        return `Hello From ${this.name}!`;
    }
    innerRGB() {
        const { r, g, b } = this;
        return `rgb ${r},${g},${b}`
    }
    innerHex() {
    }
    rgb() {
        return `(${this.innerRGB()})`;
    }
    rgba(a = 1.0) {
        return `(${this.innerRGB()},${a})`;
    }
    hex() {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
    }
    calcHSL() {
        let { r, g, b } = this;
        //Make r,g and b fractions of 1 
        r /= 255;
        g /= 255;
        b /= 255;

        //Find greatest and samllest channel values 
        let cmin = Math.min(r, g, b),
            cmax = Math.max(r, g, b),
            delta = cmax - cmin,
            h = 0,
            s = 0,
            l = 0;

        if (delta == 0) h = 0
        else if (cmax == r) h = ((g - b) / delta) % 6;//between yellow & magenta
        else if (cmax == g)
            //green is max
            h = (b - r) / delta + 2;
        else
            //blue is max
            h = (r - g) / delta + 4;
        h = Math.round(h * 60);

        //Make negative hues positive behind 360
        if (h < 0) h += 360;

        //Calculate lightness
        l = (cmax + cmin) / 2;

        //Calculate saturation
        s = delta == 0 ? 0 : delta / (1 - Math.abs((2 * l) - 1));
        //Multiply l and s by 100 for percentage
        s = + (s * 100).toFixed(1);
        l = + (l * 100).toFixed(1);
        this.h = h;
        this.s = s;
        this.l = l,


    }
}

const red = new Color(255, 67, 89, 'Tomato');
const white = new Color(255, 255, 255, 'White');