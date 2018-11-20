//Print the absolute difference between the sums of the matrix's two diagonals as a single integer.

var arr = [[1,2],[6,10,1],[5,8,7]];
//var arr = [[1,2],[2,1]];
var sum1 = 0, sum2= 0, tot = 0;
for(var i = 0; i<arr.length;i++){
    for(var j = 0; j<arr.length;j++){
        if(i == j){
            sum1 = sum1 + arr[i][j]; 
        }
        if(j == arr.length-1-i){
            sum2 = sum2 + arr[i][j];
        }
    }
}
tot = tot + Math.abs(sum1-sum2);
console.log(tot);