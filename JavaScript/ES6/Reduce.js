//Reduce Method executes the reducer function(that you provide) on each member of the array resulting in a single output value

const array1 = [1, 2, 3, 4, 5, 6];

const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(array1.reduce(reducer));

console.log(array1.reduce(reducer, 5));

//Sum all the Values in an array

var sum = [2, 4, 8, 3, 6].reduce((acc, cur) => acc + cur);

console.log(sum);

//sum of values in an Object array

var sum = [{
    x: 1
}, {
    x: 2
}].reduce((acc, cur) => acc + cur.x, 0);

console.log(sum);

//flatten an array of arrays

var flattened = [
    [1, 2],
    [3, 4],
    [5, 6]
].reduce((acc, cur) => acc.concat(cur), []);

console.log(flattened);