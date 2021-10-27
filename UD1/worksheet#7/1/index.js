//Write a function that can take in any number of arguments, 
//and returns the sum of all of the arguments.

function suma(...arrayParametros){//AUI ESTA EL SPREAD
    let result =0;
    for (num of arrayParametros){
    result += num;
    
}return result;
}

let misuma = suma(1,2,4,5,6,7);
document.write(misuma);