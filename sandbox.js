var character = 'luigi';
console.log(character);
var inputs = document.querySelectorAll('input');
inputs.forEach(function (input) {
    console.log(input);
});
// let diameter = 10;
var circ = function (diameter) {
    return diameter * Math.PI;
};
// console.log(circ('hii'));//causes error because it should be a number
console.log(circ(7.4));
//Arrays
var names = ['rey', 'afra'];
names.push('naveen');
// names.push(3)//error cause the array type is number
var mixed = ['rey', 3, true]; //possible and can add any types that is already present
//Objects
var ninja;
