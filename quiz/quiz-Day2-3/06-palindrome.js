
function isPalindrome(word){
    const newWord = word.replace(/[^0-9a-z]/gi, '').toLowerCase().split("");
    for(let i = 0; i < (newWord.length) / 2; i++){ 
    if(newWord[i] == newWord[newWord.length-i-1]){ 
      return true; 
    } else 
      return false;
  }
}

console.log(isPalindrome('kasur ini rUsak'));//true