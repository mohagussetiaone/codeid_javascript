/** buat segitiga  */ 
let result1 = ""
for (let i = 4; i > 0; i--) {
    for (let j = 1; j <= i; j++){
        result1 += j + " ";
    }
    result1 += "\n";
}
console.log(result1);
// output 
// 1 2 3 4 
// 1 2 3 
// 1 2 
// 1 

let result2 = "";
for (let i = 0; i < 5; i++) {
    for(let j = 5; j > i; j--){
        result2 += j - i + " ";
    }
    result2 += "\n";
}
console.log(result2);

// output
// 5 4 3 2 1  
// 4 3 2 1  
// 3 2 1
// 2 1  
// 1  

