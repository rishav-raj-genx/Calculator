let string = "";
let string1 = "";
let input = document.querySelector(".inpute");
let display = document.querySelector(".display");
let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', clickMe);
    button.addEventListener('keydown', key);
})

function clickMe(cc) {
    if (cc.target.innerHTML == '=') {
        cal();
    } else if (cc.target.innerHTML == 'C') {
        input.value = "";
        string = '';
        display.value = "";
    } else if (cc.target.classList.contains("fa-sun")) {
        // buttons.style.border-color = "black";
        input.style.color = "black";
} else if (cc.target.innerHTML == 'X') {
        string = string.slice(0, -1);
        input.value = string;
    } else {
        string = string + cc.target.innerHTML;
        input.value = string;
        display.value = "";
    }
}

function cal() {
    try {
        string1 = eval(string);
        input.value = "";
        string = '';
        display.value = string1;
    } catch (error) {
        display.value = "Error";
        string = "";
        input.value = "";

    }
}

function key(event) {
    if (['/', '*', '-', '+', 'Enter', 'Backspace'].includes(event.key)) {
        event.preventDefault();
    }

    if (event.key === 'Enter') {
        cal();
    } else if (event.key === 'Backspace') {
        string = string.slice(0, -1);
        input.value = string;
    } else if (event.key === 'Escape') {
        string = "";
        input.value = "";
        display.value = "";
    } else if (!isNaN(event.key) || ['+', '-', '*', '/', '.'].includes(event.key)) {
        string += event.key;
        input.value = string;
    } else {
        display.value = "";
    }
}