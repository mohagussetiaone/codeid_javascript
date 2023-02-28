/**
 * hitung detik ke dalam day, hour, minute and seconds
 */


function getPeriodTimes(seconds) {
    // Perhitungan pembagi sisa hari
    const y = seconds % 86400
    const z = seconds / 60
    const day = seconds / 86400
    const hour = y / 3600
    const minute = z % 60
    const second = y % 60
    if(typeof seconds == "string" && isNaN(seconds)){
        return `${seconds} is not number`
    } else if (typeof seconds == "string"){
        return `${Math.floor(day)} Hari ${Math.floor(hour)}Jam ${Math.floor(minute)} Menit ${Math.floor(second)} Detik`
    }
}

console.log(getPeriodTimes("700005A"));//700005A is not number
console.log(getPeriodTimes("700005"));//8 hari 2 jam 26 menit 45 detik