// Number to segment mapping
const numberMapping = {
    0: ["a", "b", "c", "d", "e", "f"],
    1: ["b", "c"],
    2: ["a", "b", "g", "e", "d"],
    3: ["a", "b", "g", "c", "d"],
    4: ["f", "g", "b", "c"],
    5: ["a", "f", "g", "c", "d"],
    6: ["a", "f", "g", "e", "d", "c"],
    7: ["a", "b", "c"],
    8: ["a", "b", "c", "d", "e", "f", "g"],
    9: ["a", "b", "c", "d", "f", "g"]
};

function displayDigit() {
    // Get the user input
    let number = document.getElementById("inputNumber").value;
    let inputValidation = validateInput(number);
    if(inputValidation !== undefined) {
        alert(inputValidation);
        return;
    }

    // Ensure the number is a string with leading zeros to handle all 3 displays
    let numberString = String(number).padStart(3, '0');

    // Loop through each display
    for (let displayIndex = 0; displayIndex < 3; displayIndex++) {
        let digit = numberString[displayIndex];
        displayDigitOnDisplay(digit, displayIndex + 1);
    }
}

function displayDigitOnDisplay(digit, displayNumber) {
    // Get all segments for this display
    let segmentIds = ["a", "b", "c", "d", "e", "f", "g"].map(id => id + displayNumber);
    let activeSegments = numberMapping[digit];

    segmentIds.forEach(id => {
        const segment = document.getElementById(id);
        segment.style.visibility = "visible";
        if (activeSegments.includes(id.replace(/\d/, ''))) {
            segment.style.backgroundColor = "lime";
        } else {
            segment.style.visibility = "hidden";
        }
    });
}

function validateInput(number){
    // Check if the input is not empty
    if (number === "") {
        return "Please enter a number";
    }

    // Check if the input is an integer
    if (!Number.isInteger(Number(number))) {
        return "Please enter an integer number";
    }

    // Check if the input is between 0 and 999
    if (number < 0 || number > 999) {
        return "Please enter a number between 0 and 999";
    }
}
