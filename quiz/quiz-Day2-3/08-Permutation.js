const checkPermute = function(stringOne, stringTwo) {
    // if different lengths, return false
    if(stringOne.length !== stringTwo.length){
      return false
      // else sort and compare 
      // (doesnt matter how it's sorted, as long as it's sorted the same way)
    }
    let array1 = stringOne.split("").sort();
    let array2 = stringTwo.split("").sort();
    for(let i = 0; i < array1.length; i++){
      if(array1[i] !== array2[i]){
        return false;
      }
    }
    return true;
  };
  

  console.log(checkPermute('aba', 'aab'))//true;
  console.log(checkPermute('aba', 'aaba'))//false;
  console.log(checkPermute('aba', 'aa'))//false;