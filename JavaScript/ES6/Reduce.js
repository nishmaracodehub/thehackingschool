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

//Counting instance of values in an object

var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

var cntNames = names.reduce(function (allNames, name) {
    if (name in allNames) {
        allNames[name]++;
    } else {
        allNames[name] = 1;
    }
    return allNames;
}, {});

console.log(cntNames);

//Grouping Objects by a propery

var people = [{
        name: 'Alice',
        age: 21
    },
    {
        name: 'Max',
        age: 20
    },
    {
        name: 'Jane',
        age: 20
    }
];

function groupBy(objArray, prop) {
    return objArray.reduce(function (acc, obj) {
        let key = obj[prop];
        if (!acc[key]) acc[key] = [];
        acc[key].push(obj);
        return acc;
    }, {});
}

var groupedPeople = groupBy(people, 'age');

console.log(groupedPeople);