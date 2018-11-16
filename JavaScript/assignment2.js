// Write a program to find if a number is a Febonacci or not
// print febonacci series

// var febonacci = function(result,len){
//     var num1 = result[0],
//         num2 = result[1],
//         next,
//         cnt = 2;

//         while(cnt < len){
//             next = num1 + num2;
//             num1 = num2;
//             num2 = next;
//             result.push(next);
//             cnt++;
//         }
//         return result;
// }
// console.log(febonacci([5,10],10));

//Using Recursion

// function febonacci(result,len){
//     if(result.length>=len)
//         return result;
    
//     result.push(result[result.length-2] + result[result.length-1])

//     return febonacci(result,len);
// }

// console.log(febonacci([0,1],10));



//Write a program to find GCD (Greatest Common Divisor) or HCF (Highest Common Factor) of two
//numbers is the largest number that divides both of them using recursion.

//Write a program find GCD of the array elements given an array of numbers

//Write a program given an array of ‘N’ numbers, find LCM of it.

//Remove Duplicates from an array using JavaScript

//Write a program to find the Sum of Array Elements.

// function sumArray(arr){
//     var sum = 0;
//     for(var i = 0; i < arr.length; i ++){
//         sum = sum + arr[i];
//     }
//    // sum = arr.reduce((a,b) => a + b);
//     console.log(sum);
// }

// sumArray([1,2,3,4,5]);


//Write a program for swapping of two arrays elements




//Write a program to find the highest and the lowest number in array

// function checkArray(arr){
//     var sort = arr.slice().sort(function(a,b){ return a - b;});
//     console.log(sort);
//     var high = sort[sort.length-1];
//     var low = sort[0];
   
//     console.log("Highest Number in array is " + high);
//     console.log("Lowest Number in array is " + low);
// }

// checkArray([4,8,2,1,9])