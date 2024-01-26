function convertTemperature() {
    // Get user input
    const temperatureInput = document.getElementById('temperature').value;
    const unitInput = document.getElementById('unit').value;

    // Validate input
    if (isNaN(temperatureInput) || temperatureInput === '') {
        alert('Please enter a valid number for temperature.');
        return;
    }

    // Convert temperature
    let convertedTemperature;
    let resultUnit;

    if (unitInput === 'celsius') {
        convertedTemperature = celsiusToFahrenheit(parseFloat(temperatureInput));
        resultUnit = 'Fahrenheit';
    } else if (unitInput === 'fahrenheit') {
        convertedTemperature = fahrenheitToCelsius(parseFloat(temperatureInput));
        resultUnit = 'Celsius';
    } else if (unitInput === 'kelvin') {
        convertedTemperature = celsiusToKelvin(parseFloat(temperatureInput));
        resultUnit = 'Kelvin';
    }

    // Display result
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${resultUnit}`;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}
