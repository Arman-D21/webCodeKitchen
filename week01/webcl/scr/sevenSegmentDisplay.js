// Number to segment mapping
const numberMapping = {
    0: ["a", "b", "c", "e", "f", "g"],
    1: ["c", "f"],
    2: ["a", "c", "d", "e", "g"],
    3: ["a", "c", "d", "f", "g"],
    4: ["b", "c", "d", "f"],
    5: ["a", "b", "d", "f", "g"],
    6: ["a", "b", "d", "e", "f", "g"],
    7: ["a", "c", "f"],
    8: ["a", "b", "c", "d", "e", "f", "g"],
    9: ["a", "b", "c", "d", "f", "g"]
};

function displayDigit() {
    //Get the user input
    let number = document.getElementById("inputNumber").value;
    let inputValidation = validateInput(number);
    if(inputValidation !== undefined) {
        alert(inputValidation);
        return;
    }

    //Get all segments
    let segments = document.getElementsByClassName('segment');

    for (let i = 0; i < segments.length; i++) {
        //check if segment id is in the numberMapping then color red
        if (numberMapping[number].includes(segments[i].id)) {
            segments[i].style.backgroundColor = "red";
        }else{
            //reset the color to grey
            segments[i].style.backgroundColor = "grey";
        }
    }
}

function validateInput(number){
    //Check if the input is not empty
    if (number === "") {
        return "Please enter a number";
    }

    //Check if the input is an integer
    if (!Number.isInteger(Number(number))) {
        return "Please enter an integer number";
    }

    //Check if the input is between 0 and 9
    if (number < 0 || number > 9) {
        return "Please enter a number between 0 and 9";
    }
}