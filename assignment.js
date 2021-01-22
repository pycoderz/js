
// 1 No Assignment (inchToFeet, feetToMile converter)
// 1 inch = 0.0833333 feet

function inchToFeet(inch, feet = 0.0833333) {
    console.log(inch * feet + " Feet");
}
inchToFeet(100);

// 1 feet = 0.000189394 mile

function feetToMile(feets, mile = 0.000189394){
            console.log(feets * mile + " Mile");
}
feetToMile(inchToFeet);

// 2 No Assignment (Wood Calculator)

woodCalculator = (Chair,Table,Khat) => {return (Chair*1+Table*3+Khat*5)};
console.log(woodCalculator(5,2,1) + " Qubic Feet");

// 3 No Assignment (Bric Calculator)

function feetCalculator(oneto10Tala = (15*10), tento20Tala = (12*10), tweentyto22Tala = (10*2)) {
    return (oneto10Tala + tento20Tala + tweentyto22Tala);
}

console.log(feetCalculator()*1000 + " Bricks");

// 5 No Assignment

let officeJabo = true;
let grourMangsoAse = true;

kiKorbo = (officeJabo == true) ? "Chata Niye Ber Hobo!" : "Office a Mail Kore Dibo";
console.log(kiKorbo);

if (officeJabo == false){
    console.log("Khichuri Ranna Korbo!");
    
    if (grourMangsoAse == true){
    console.log("Gorur Mangso Diye Khichuri Khabo!");
    }
    else {
    console.log("Dim Vaji Diye Khichuri Khabo!");
    }
}

