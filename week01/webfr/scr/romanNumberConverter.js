
function calcRomanNumber() {
    //Array of roman numerals and their corresponding values
    const romanNumerals = [
        ["M", 1000], ["CM", 900], ["D", 500], ["CD", 400],
        ["C", 100], ["XC", 90], ["L", 50], ["XL", 40],
        ["X", 10], ["IX", 9], ["V", 5], ["IV", 4], ["I", 1]
    ];

    //Get the user input
    let number = document.getElementById("inputNumber").value;

    //Check if the input is not empty
    if (number === "") {
        alert("Please enter a number");
        return;
    }

    //Check if the input is an integer
    if (!Number.isInteger(Number(number))) {
        alert("Please enter an integer number");
        return;
    }

    //Check if the input is not 0, since Romans didn't have a number 0
    if (number === "0") {
        alert("Romans didn't have a number 0!");
        return;
    }

    let romanNumber = "";
    //conver number to roman number
    //EXTERNAL CODE
    for (let i = 0; i < romanNumerals.length; i++) {
        while (number >= romanNumerals[i][1]) {
            romanNumber += romanNumerals[i][0];
            number -= romanNumerals[i][1];
        }
    }

    //Display the result
    document.getElementById("romanNumberOutput").innerText = "Roman number: " + romanNumber;
}