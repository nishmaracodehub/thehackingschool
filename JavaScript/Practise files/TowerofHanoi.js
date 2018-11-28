function towerOfHanoi(n,source,des,aux){
    if(n == 1){
        console.log(n + " from " + source+ " to " + des);
    }
    else{
        towerOfHanoi(n-1,source,aux,des)
        console.log(n + " from " + source + " to " + des);
        towerOfHanoi(n-1,aux,des,source)
    }
}

towerOfHanoi(3,"A","C","B");