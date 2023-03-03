function isCharsUnique(string){
    var count = string.split("").sort();
    console.log();
    for (let i = 1; i <= count.length; i++) {
        if (count[i] === count[i - 1]){
            return false;
        }
    }
    return true;
}

console.log(isCharsUnique('abcdefg'));//true
console.log(isCharsUnique('abcdefga'));//false