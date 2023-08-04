function incToFeet(inc) {

    const feet = inc / 12;
    return feet;
}

let inch = 112;
let result = incToFeet(inch);
console.log("my height", result.toFixed(2));

let bro_inch = 90;
let bro_result = incToFeet(bro_inch);
console.log("brother size", bro_result.toFixed(2));