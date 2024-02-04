// 1. Create an array called ages
let ages = [3, 9, 23, 64, 2, 8, 28, 93];


// 1.a Programmatically subtract the first element from the last element
let lastIndex = ages.length - 1;
let result = ages[lastIndex] - ages[0];
console.log("subtract first from last result:", result);


// 1.b Add a new age and repeat subtraction dynamically.
ages.push(73);
result = ages[ages.length - 1] - ages[0];
console.log("dynamic subtraction result:", result);


// 1.c Use a loop to calculate the average age.
let sum = 0;
    for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
    }
    let average = sum / ages.length;
console.log("average age:", average);


// 2. Create an array called names that contains,
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];


// 2.a Use a loop to iterate through the array and calculate the average number of letters per name.
let totalLetters = 0;
    for (let i = 0; i < names.length; i++) {
    totalLetters += names[i].length;
    }
    let averageLetters = totalLetters / names.length;
console.log("average letters per name:", averageLetters);


// 2.b Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
let concatenatedNames = '';
    for (let i = 0; i < names.length; i++) {
    concatenatedNames += names[i] + ' ';
}
console.log("concatenated names:", concatenatedNames.trim());


// 3-4. This is how to access the last element of an array using the ages from before.
console.log("the last element of ages array:", ages[ages.length - 1]);
console.log("teh first number of ages array:", ages[0]);


// 5. Create a new array for name lengths.
let nameLengths = [];
    for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}
console.log("name lenghts array:", nameLengths);


// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
let sumNameLengths = 0;
    for (let i = 0; i < nameLengths.length; i++) {
    sumNameLengths += nameLengths[i];
}
console.log("sum of the name lengths loop:", sumNameLengths);


// 7. Write a function to concatenate a word n number of times to itself.
function concatenateWord(word, n) {
    let result = '';
    for (let i = 0; i < n; i++) {
        result += word;
    }
    return result;
}
console.log("concatenate word func:", concatenateWord('Ello', 4));


// 8. Function to return a full name.
function getFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
console.log("full name:", getFullName('John', 'Doe'));


// 9. Function to check if the sum of an array is greater than 100.
function isSumGreaterThan100(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0) > 100;
}
console.log("some sum greater than 100:", isSumGreaterThan100([23, 31, 64]));


// 10. Function to calculate the average of an array.
function calculateAverage(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
}
console.log("average of numbers:", calculateAverage([10, 20, 30]));


// 11. Function to compare averages of two arrays
function compareAverages(array1, array2) {
    return calculateAverage(array1) > calculateAverage(array2);
}
console.log("comparer number averages:", compareAverages([10, 20, 30], [5, 10, 15]));


// 12. Function to decide if it's hot and if there's enough money to buy a drink.
function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
}
console.log("will buy drink:", willBuyDrink(true, 15.00));


// 13. Create your own function 
function countEvenNumbers(numbers) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            count++;
        }
    }
    return count;
}
console.log("count even numbers:", countEvenNumbers([2, 5, 8, 11, 14]));



