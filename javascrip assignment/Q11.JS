let myArray = [1, 2, 3];
let evenNumbers = [];

for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] % 2 === 0) {
    evenNumbers.push(myArray[i]);
  }
}

console.log(evenNumbers); // [2, 4, 6, 8, 10]