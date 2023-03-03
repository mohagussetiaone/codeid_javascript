/** berapa banyak tahun kabisat antara tahun1 ke tahun2 */

function howManyKabisat(year1,year2){
    let tahun = []
    for(let i = year1; i <= year2; i++){
        tahun.push(i)
    }
    let kabisat = [];
    tahun.forEach((year)=> {
        if(isKabisat(year)){
            kabisat.push(year)
        }
    })
    return kabisat;
}

function isKabisat(year){
    if((year % 4 == 0 && year % 100 !== 0 || year % 400 == 0)){
        return year;
    } else {
        return false;
    }
}

console.log(howManyKabisat(1997,2021));