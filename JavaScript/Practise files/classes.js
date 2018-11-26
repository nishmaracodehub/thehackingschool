/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
class Polygon{
    constructor(arr) {
        this.arr = arr;
        this.perimeter = function () {
            var perimeter = 0;
            for (let i = 0; i < this.arr.length; i++){
                perimeter = perimeter + arr[i];
            }
            return perimeter;
        }
    }
}

const rectangle = new Polygon([10,20,10,20]);
console.log(rectangle.perimeter());
const square = new Polygon([10,10,10,10]);
console.log(square.perimeter());
const pentagon = new Polygon([10,20,30,40,43]);
console.log(pentagon.perimeter());