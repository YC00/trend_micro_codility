function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var max = Number.MIN_SAFE_INTEGER;
    for(var i=0; i<A.length; i++){
        var tmpVal1 = A[i]+A[i]+(i-i);
        if(tmpVal1>max){
            max = tmpVal1;
        }
        
        if(i<A.length-1){
            for(j=i+1; j<A.length; j++){
                var tmpVal2 = A[i]+A[j]+(j-i);
                if(tmpVal2>max){
                    max = tmpVal2;
                }
            }
        }
    }
    return max;
}
