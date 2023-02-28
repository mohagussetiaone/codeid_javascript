/**
 * konversi fareinheit to kelvin
 * rumus Kelvin = (Fareinheit + 459.67)/1.8
 * 
 */

function fareinheitToKelvin(fareinheit){
    const rumus_kelvin = (fareinheit + 459.67)/1.8
    if(typeof fareinheit == 'number'){
        return `Convert Farenheit 1 (${fareinheit}) to Kelvin = ${Math.floor(rumus_kelvin)}`
    } else if (!isNaN(fareinheit)){
        return `Convert Farenheit 2 (${fareinheit}) to Kelvin = ${Math.ceil(rumus_kelvin)}`
    } else if(isNaN(fareinheit)){
        return 'Fareinheit must an number'
    }
}

console.log(fareinheitToKelvin(45)); //Convert Fareinheit (45) to Kelvin = 280
console.log(fareinheitToKelvin("1")); //Convert Fareinheit (1) to Kelvin = 811
console.log(fareinheitToKelvin("F")); //Fareinheit must an number