// const names = ['nishanth', 'maraboina', 30];
// let [fn, ln, age] = ['nishanth', 'maraboina', 30];
// fn = 'nish';
// console.log(fn + " " + ln);

// function livingPlace(city, state) {
//     const place = {
//         city,
//         state
//     };

//     console.log(place);
// }

// livingPlace("Hyderabad", "Telangana");

//Spread
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [...arr1];
// arr2.push(true);
// console.log(arr1);
// console.log(arr2);

// //REST
// function add(...arr) {
//     console.log(arr);
// }

// add(4, 5, 6, 7, 8);

const animals = [{
        "name": "cat",
        "size": "small",
        "weight": 5
    },
    {
        "name": "dog",
        "size": "small",
        "weight": 10
    },
    {
        "name": "lion",
        "size": "medium",
        "weight": 150
    },
    {
        "name": "elephant",
        "size": "big",
        "weight": 5000
    }
]

//Filter

let smallAnimals = animals.filter((animal) => animal.size === 'small');
console.log(smallAnimals);

//Map

let animalNames = animals.map((animal) => animal.name);
console.log(animalNames);

//Reduce
let totWeight = animals.reduce((weight, animal) => weight += animal.weight, 0);
console.log(totWeight);