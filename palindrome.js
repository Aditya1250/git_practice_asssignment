function checkPalindrome(str) {
     
    let bag="";
    for(let i=str.length-1;i>0;i--){
        
           bag=bag+str[i];  
     }
    if(bag==str){
        console.log(" this string is Palindrome");
    }
    else{
        console.log("this string is not Palindrome");
    }
  
}
checkPalindrome("madam");


