// Write a function min that takes two arguments and returns their minimum.

// // Your code here.

// console.log(min(0, 10))
// // → 0
// console.log(min(0, -10))
// // → -10

var findMin = (number0, number1) => {
    if (number0 >= number1){
        return "comparing " + number0 + "and "  + number1 + ", minimum is :" + number1;
    }
    else{
        return "comparing " + number0 + "and "  + number1 + ", minimum is :" + number0;
    }
};

console.log(findMin(1999,-88));
