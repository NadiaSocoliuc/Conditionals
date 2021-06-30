let a = -7;
let b = 60;

if (a > b) {
    console.log(`The larger number is ` + `a`);
} else if (a < b) {
    console.log(`The larger number is ` + `b`);
} else {
    console.log(`The numbers are equal ` +  `a` + ` = ` + `b`)
}

let num1 = 3;
let num2 = -7;
let num3 = 2;

if (num1 < 0 && num2 < 0 && num3 < 0) {
    console.log(`The sign is ` + num1 * num2 * num3)
} else if (num1 < 0 && num2 > 0 && num3 > 0) {
    console.log(`The sign is ` +  num1 * num2 * num3)
} else if (num1 > 0 && num2 < 0 && num3 > 0) {
    console.log(`The sign is ` +  num1 * num2 * num3)
} else if (num1 > 0 && num2 > 0 && num3 < 0) {
    console.log(`The sign is ` +  num1 * num2 * num3)
} else if (num1 > 0 && num2 < 0 && num3 < 0) {
    console.log(`The sign is ` +  num1 * num2 * num3)
} else {
    console.log(`The sign is +` +  num1 * num2 * num3)
}


let x = -1; 
let z = 4;
let y = 0;

if (x > z && x > y && z > y) {
    console.log(x + ", " + z + ", " + y)
} else if (x > z && x > y && z < y) {
    console.log(x + ", " + y + ", " + z)
} else if (x < z && x > y && z > y) {
    console.log(z + ", " + x + ", " + y)
} else if (x < z && x < y && z > y) {
    console.log(z + ", " + y + ", " + x)
} else if (x < z && x < y && z < y) {
    console.log(y + ", " + z + ", " + x)
} else if (x > z && x < y && z < y) {
    console.log(y + ", " + x + ", " + z)
}


let c = 0;
let d = -2;
let e = -6;
let f = -5;
let g = -1;

if (f > c && f > d && f > e && f > g) {
    console.log(f)
} else if (c > d && c > e && c > f && c > g) {
    console.log(c)
} else if (d > c && d > e && d > f && d > g) {
    console.log(d)
} else if (e > c && e > d && e > f && e > g) {
    console.log(e)
} else if (g > c && g > d && g > e && g > f) {
    console.log(g)
} 