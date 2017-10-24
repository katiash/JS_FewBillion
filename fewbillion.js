var sum=0;
var count=0;

function doCalc(n){
    return .01*(Math.pow(2, n));
}

function timeToEarn(value){
    var sum=0;
    for(var count=0; sum<value; count++){
        sum  += doCalc(count);
    }
    return count;
}


function TTE(value){
    console.log("It would take only " + timeToEarn(value) + " days to hit " + value+ "!");
}
 

for(count; count<30; count++){
       sum  += doCalc(count);
}

console.log("The total sum at 30 days is: " + sum);
TTE(10000);
TTE(1000000000);
TTE(Infinity);



