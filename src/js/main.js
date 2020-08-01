//Classes

// UI Class: Provides helper functions for accessing and controlling the UI.
// UI.initialize = Initializes the controls on the UI to their default values.
// UI.convertWeight = Converts the inputed number of punds to the various other weight measurements.
class UI {
    static initalize() {
        // Initalize the weight input value to an empty string
        document.querySelector('#weightInput').value = '';
        // Hide the list of other weight measurements
        document.querySelector('#output').style.visibility = 'hidden';
    }

    static convertWeight(e) {
        // Show the list of other weight measurements on weight input
        document.getElementById("output").style.visibility = "visible";

        // Grab the weight entered in to the weight input
        const lbs = e.target.value;

        // Convert the entered weight to metric tons
        document.getElementById("tOutput").innerHTML = lbs / 2204.623;
        // Convert the entered weight to killograms
        document.getElementById("kgOutput").innerHTML = lbs / 2.204623;
        // Convert the entered weight to grams
        document.getElementById("gOutput").innerHTML = lbs / 0.002204623;
        // Convert the entered weight to milligrams
        document.getElementById("mgOutput").innerHTML = lbs / 0.000002204623;
        // Convert the entered weight to micrograms
        document.getElementById("mcgOutput").innerHTML = lbs / 0.000000002204623;
        // Convert the entered weight to stones
        document.getElementById("stOutput").innerHTML = lbs / 14;
        // Convert the entered weight to ounces
        document.getElementById("ozOutput").innerHTML = lbs / 0.0625;
    }
}

// Events

// Initalize UI
document.addEventListener('DOMContentLoaded', UI.initalize);

// Display weight conversions
document.querySelector('#weightInput').addEventListener('input', UI.convertWeight);