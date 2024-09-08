// Kelvin to Celsius and Fahrenheit
const kelvinConverter = (temperature) => {
    let celsius = temperature - 273.15;
    let fahrenheit = ((temperature - 273.15) * 1.8) + 32;
    let celsius1 = celsius.toFixed(2);
    let fahrenheit1 = fahrenheit.toFixed(2);

    return {
        celsiusTemp: celsius1,
        fahrenheitTemp: fahrenheit1
    };
};

// Celsius to Kelvin and Fahrenheit
const celsiusConverter = (temperature) => {
    let kelvin = temperature + 273.15;
    let fahrenheit = (1.8 * temperature) + 32;
    let kelvin1 = kelvin.toFixed(2);
    let fahrenheit1 = fahrenheit.toFixed(2);

    return {
        kelvinTemp: kelvin1,
        fahrenheitTemp: fahrenheit1
    };
};

// Fahrenheit to Kelvin and Celsius
const fahrenheitConverter = (temperature) => { 
    let kelvin = (temperature - 32) * (5 / 9) + 273.15;
    let celsius = (temperature - 32) * (5 / 9);
    let kelvin1 = kelvin.toFixed(2);
    let celsius1 = celsius.toFixed(2);

    return {
        kelvinTemp: kelvin1,
        celsiusTemp: celsius1
    };
};

// Event Handlers
function convertKelvin() {
    const kelvinInput = parseFloat(document.getElementById('kelvinInput').value);
    if (!isNaN(kelvinInput)) {
        const result = kelvinConverter(kelvinInput);
        document.getElementById('kelvinResults').innerHTML = 
            `<p>Celsius: ${result.celsiusTemp} °C</p>
             <p>Fahrenheit: ${result.fahrenheitTemp} °F</p>`;
    } else {
        document.getElementById('kelvinResults').innerHTML = 
            `<p>Please enter a valid number.</p>`;
    }
}

function convertCelsius() {
    const celsiusInput = parseFloat(document.getElementById('celsiusInput').value);
    if (!isNaN(celsiusInput)) {
        const result = celsiusConverter(celsiusInput);
        document.getElementById('celsiusResults').innerHTML = 
            `<p>Kelvin: ${result.kelvinTemp} K</p>
             <p>Fahrenheit: ${result.fahrenheitTemp} °F</p>`;
    } else {
        document.getElementById('celsiusResults').innerHTML = 
            `<p>Please enter a valid number.</p>`;
    }
}

function convertFahrenheit() {
    const fahrenheitInput = parseFloat(document.getElementById('fahrenheitInput').value);
    if (!isNaN(fahrenheitInput)) {
        const result = fahrenheitConverter(fahrenheitInput);
        document.getElementById('fahrenheitResults').innerHTML = 
            `<p>Kelvin: ${result.kelvinTemp} K</p>
             <p>Celsius: ${result.celsiusTemp} °C</p>`;
    } else {
        document.getElementById('fahrenheitResults').innerHTML = 
            `<p>Please enter a valid number.</p>`;
    }
}
