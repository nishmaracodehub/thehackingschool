//Program for traversing 3 dimensional array


// var arr = [[[1,2],[2,3]],[[3,4],[4,5]],[[1,3],[1,2]]];
// for(var i = 0; i < arr.length;i++){
//     for(var j = 0; j < arr[i].length;j++){
//         for(var k = 0; k < arr[j].length; k++){
//             console.log(arr[i][j][k]);
//         }
//     }
// }

//Extract prime numbers in an Array

var prime1 = [1,2,3,4,7,11,13,15,17,19,23];
var newPrime = [];
//Method 1:
// function checkPrime(num){
//     var prime = num != 1;
//     for(var i=2; i<num; i++){
//         if(num % i == 0){
//             prime = false;
//             break;
//         }
//     }
//     return prime;
// }
// for(var j = 0; j < prime1.length; j++){
//     if(checkPrime(prime1[j])){
//         newPrime.push(prime1[j]);
//     }
// }
// console.log(newPrime);

//Method 2:

// for(var i = 0; i < prime1.length;i++){
//     var cnt = 0;
//     for(var j=2;j<=prime1[i];j++){
//         if(prime1[i] % j == 0){
//             cnt += 1;
//         }
//     }
//     if(cnt == 1){
//         newPrime.push(prime1[i]);
//     }
// }
// console.log(newPrime);

//Method 3: (this is funny one)

prime1.splice(0,1);
prime1.splice(2,1);
console.log(prime1);
