//kelvin
//celsius
//fahrenheit

//kelvin to celsius
//Celsius = Kelvin - 273.15;

//kelvin to fahrenheit
//Fahrenheit = (Kelvin − 273.15) × 9/5 + 32 ;
const kelvinConverter = (temperature) =>{
    let celsius = temperature - 273.15;
    let fahrenheit = ((temperature - 273.15) * 1.8) + 32;
    let celsius1 = celsius.toFixed(2);
    let fahrenheit1 = fahrenheit.toFixed(2);


    return {celsiusTemp : celsius1,
            fahrenheitTemp : fahrenheit1}
         

}

let abc = kelvinConverter(123);

console.log(abc)
//{celsius : celsius,fahrenheit : fahrenheit};
//abc?.celsiusTemp
//abc?.fahrenheitTemp 


//celsius to kelvin
//Kelvin = celsius + 273.15;

//celsius to fahrenheit
//Fahrenheit = (9/5 × Celsius) + 32;
const celsiusConverter = (temperature) => {
    let kelvin = temperature + 273.15;
    let fahrenheit = (1.8 * temperature) + 32;
    let kelvin1 = kelvin.toFixed(2);
    let fahrenheit1 = fahrenheit.toFixed(2);

    
    return {kelvinTemp : kelvin1,
            fahrenheitTemp : fahrenheit1};
}
let efg = celsiusConverter(123);//{kelvinTemp : kelvin,fahrenheitTemp : fahrenheit};
//efg?.kelvinTemp
//efg?.fahrenheitTemp


//fahrenheit to kelvin
//Kelvin = (fahrenheit − 32) × 5 ⁄ 9 + 273.15;

//fahrenheit to celsius
//Celsius = (fahrenheit - 32) × 5/9;

const fahrenheitConverter = (temperature) => { 
    let kelvin = (temperature - 32) * 1.8 + 273.15;
    let celsius = (temperature - 32) * 1.8;
    let kelvin1 = kelvin.toFixed(2);
    let celsius1 = celsius.toFixed(2);
    

    return {kelvinTemp : kelvin1,
            celsiusTemp : celsius1};
}
let hij = fahrenheitConverter(123);//{kelvinTemp : kelvin,celsiusTemp : celsius};
//hij?.kelvinTemp
//hij?.celsiusTemp