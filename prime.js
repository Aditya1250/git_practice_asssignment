

function checkPrime(num){
    let count=0;
    for(let i=0; i<=num; i++){
      if(num%i==0){
        count++
      }
    }
    if(count==2){
      console.log(num,"is a Prime number. ")
    }else{
      console.log(num,"is not a Prime number");
    }
    
  }
  // calling the function ------------------------
  checkPrime(5);