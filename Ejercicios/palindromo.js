var original = new numero("01")

function numero(number){
    this.number = number;
    this.inverse;
    
    var palindrome = number + "-";

    for(var i = number.length; i > 0; i--){
     palindrome += number.substring(i - 1, i);
    
    }
    
    this.inverse  = palindrome;
}

console.log(original.inverse);