function factorize(n){
    var factors=[];
    for(var i =0; i <= n; i++){
        if(n % i == 0){
            factor.push(i);
        }
    }
    return factors;
}

function findUnique(str){
    var uniqueStr = "";
    for(var i=0;i < str.length; i++){
        if(uniqueStr.indexOf(str.charAt(i)) == -1){
            uniqueStr += str[i];
        }
    }
    return uniqueStr;
}