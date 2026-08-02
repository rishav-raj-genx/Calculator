let string = "";
let string1 = "";
let isDark = true;
let body = document.querySelector("body")
let input = document.querySelector(".inpute");
let display = document.querySelector(".display");
let buttons = document.querySelectorAll(".button");
let color = document.querySelector("#color")
let white = document.querySelectorAll(".white")
let i = document.querySelector("i");
let button = document.querySelector("button")

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', clickMe);
    button.addEventListener('keydown', key);
})

function clickMe(cc) {
    if (cc.target.id === "color" || cc.target.closest("#color")) {
        isDark = !isDark;
        if (isDark) {
            body.classList.remove("body");
            body.classList.add("bb");
        } else {
            body.classList.remove("bb");
            body.classList.add("body");
        }
    } else if (cc.target.innerHTML == '=') {
        cal();
    } else if (cc.target.innerHTML == 'C') {
        input.value = "";
        string = '';
        display.value = "";
    } else if (cc.target.innerHTML == 'x') {
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