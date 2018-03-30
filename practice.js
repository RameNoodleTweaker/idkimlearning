function reduce(array, callback, startiingValue) {
    var resultsSoFar = startingValue;
    for(var i = 0; i <array.length; i++){
        
        resultSoFar = callback(resultSoFar, array[i]);
        
    }
        return resultsSoFar;

}