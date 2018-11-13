
//1)
// //Input->Arrayof'n'elements.UpdateallelementsofgivenarraytosomeMINIMUMvalue,suchthatSUMofallelementsofthisnewarrayisstrictlygreaterthanthe SUM of all elements of initial array.

// function findElement(arr){
//     var  sum, res = [];
//     sum = arr.reduce((a,b) => a + b); // sum of the elements of the given array

//     //take each element of array mutiple it with the length and push the result to another array
//     for( var i = 0; i < arr.length; i ++){ //looping through each element of given array
//         var minElement = arr[i]; 
//         res.push(minElement * arr.length); //pushing the result to new array
//     }

//     //check if any value in the new array is greater than the sum of elements of given array and return it
//     function check(arr1){
//         for(var j = 0; j< arr1.length; j++){
//             if(res[j] > sum)
//              return res[j];
//         }
//     };
//     //finding the index of the value in new array which is greater than sum of the elements of given array
//     var finalNum = res.indexOf(check(res));

//     //Using the above indexvalue print the element to which that index belongs to in given array
//     console.log(arr[finalNum]);
// }
// findElement([1,2,3,4,5]);

//2)
//Find thenumber of common factors of the given two given numbers

function cFactors(a,b){
    //Use the primeNum function to print the result if one of the given numbers is prime
    if(primeNum(a) || primeNum(b)){
        console.log(1);
    }else{
        var num = 1; //counter to count the number of common mutiples
        var range = Math.min(a,b); //findnig the min value of two numbers and use it for range
        for(var j = 2;j<=range; j++){ //loop to find the number of common mutiple in above range
            if( a % j == 0 && b % j == 0){
                num +=1; //adding 1 to num everytime a common mutiple is found
            }
        }
        console.log(num); // printing the number of common mutiples for given numbers.
    }
        //function to find if a given number is prime
        function primeNum(num){
            var count = 1;
            for(var i = 2; i <=7; i++){ if(num % i == 0) count += 1;}
            if(count > 2) return false;
            else return true;
        }

}
cFactors(120,200);