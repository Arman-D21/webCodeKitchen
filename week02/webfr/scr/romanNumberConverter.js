const getRomanNumerals = () => [
    ["M", 1000], ["CM", 900], ["D", 500], ["CD", 400],
    ["C", 100], ["XC", 90], ["L", 50], ["XL", 40],
    ["X", 10], ["IX", 9], ["V", 5], ["IV", 4], ["I", 1]
];

const getUserInput = () => document.getElementById("inputNumber").value;
const displayResult = (romanNumber) => {
    document.getElementById("romanNumberOutput").innerText = "Roman number: " + romanNumber;
};


const validateInput = (number) => {
    if (number === "") {
        alert("Please enter a number");
        return false;
    }

    if (!Number.isInteger(Number(number))) {
        alert("Please enter an integer number");
        return false;
    }

    if (number === "0") {
        alert("Romans didn't have a number 0!");
        return false;
    }

    return true;
};

const convertToRoman = (number) => {
    const romanNumerals = getRomanNumerals();
    let romanNumber = "";

    for (let i = 0; i < romanNumerals.length; i++) {
        while (number >= romanNumerals[i][1]) {
            romanNumber += romanNumerals[i][0];
            number -= romanNumerals[i][1];
        }
    }

    return romanNumber;
};

const calcRomanNumber = () => {
    const number = getUserInput();

    if (!validateInput(number)) {
        return;
    }

    const romanNumber = convertToRoman(Number(number));
    displayResult(romanNumber);
};
