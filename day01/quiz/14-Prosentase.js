/** Buat program untuk menampilkan prosentasi dari income*/

function getProsentase(start,end){
    let kenaikan = ((end - start) / start % 100 * 100)
    let penurunan = ((end - start) / start % 100 * 100)
    let pembulatan = parseInt(Math.floor(penurunan))
    if(typeof(start,end) !== "number"){
        return `${start} or ${end} harus dalam angka`
    } else if (start >= end){
        return `Total penurunan income ${pembulatan}%`
    } else if (start <= end){
        return `Total kenaikan income ${kenaikan}% `
    }
}

console.log(getProsentase("abc","bca"));//abc or bca harus dalam angka
console.log(getProsentase(600000.00,750000.00));//Total kenaikan income 25%
console.log(getProsentase(750000.00,650000.00));//Total penurunan income -14%


