const character = 'luigi';

console.log(character);

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  console.log(input);
});
// let diameter = 10;
const circ = (diameter:number) => {
return diameter * Math.PI;
}

// console.log(circ('hii'));//causes error because it should be a number
console.log(circ(7.4));


//Arrays

let names = ['rey','afra'];

names.push('naveen');
// names.push(3)//error cause the array type is number
let mixed = ['rey',3,true]//possible and can add any types that is already present


//Objects

let ninja