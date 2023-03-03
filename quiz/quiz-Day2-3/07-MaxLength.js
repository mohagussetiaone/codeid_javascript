function maxWordLength(params) {
    var str = params.split(" ");
    var longest = 0;
    var word = null;
    for (let i = 0; i < str.length - 1; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}

console.log(maxWordLength("aku suka bootcamp sentul city"));//bootcamp