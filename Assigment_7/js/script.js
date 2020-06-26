"use strict";

const ipt = document.querySelector(".input");
const res = document.querySelector(".result");
const detbtn = document.querySelector(".delete");
const keys = document.querySelectorAll(".bottom span");

let operation = "";
let answer;
let decimalAdded = false;

const operators = ["+", "-", "x", "÷"];

function handleKeyPress(e) {
    const key = e.target.dataset.key;
    const lastChar = operation[operation.length - 1];

    if (key === "=") {
        return;
    }

    if (key === "." && decimalAdded) {
        return;
    }

    if (operators.indexOf(key) !== -1) {
        decimalAdded = false;
    }

    if (operation.length === 0 && key === "-") {
        operation += key;
        ipt.innerHTML = operation;
        return;
    }

    if (operation.length === 0 && operators.indexOf(key) !== -1) {
        ipt.innerHTML = operation;
        return;
    }

    if (operators.indexOf(lastChar) !== -1 && operators.indexOf(key) !== -1) {
        operation = operation.replace(/.$/, key);
        ipt.innerHTML = operation;
        return;
    }

    if (key) {
        if (key === ".") decimalAdded = true;
        operation += key;
        ipt.innerHTML = operation;
        return;
    }

}

function evaluate(e) {
    const key = e.target.dataset.key;
    const lastChar = operation[operation.length - 1];

    if (key === "=" && operators.indexOf(lastChar) !== -1) {
        operation = operation.slice(0, -1);
    }

    if (operation.length === 0) {
        answer = "";
        res.innerHTML = answer;
        return;
    }

    try {

        if (operation[0] === "0" && operation[1] !== "." && operation.length > 1) {
            operation = operation.slice(1);
        }

        const final = operation.replace(/x/g, "*").replace(/÷/g, "/");
        answer = +(eval(final)).toFixed(5);

        if (key === "=") {
            decimalAdded = false;
            operation = `${answer}`;
            answer = "";
            ipt.innerHTML = operation;
            res.innerHTML = answer;
            return;
        }

        res.innerHTML = answer;

    } catch (e) {
        if (key === "=") {
            decimalAdded = false;
            ipt.innerHTML = `<span class="error">${operation}</span>`;
            res.innerHTML = `<span class="error">Bad Expression</span>`;
        }
        console.log(e);
    }

}

function cleaript(e) {

    if (e.ctrlKey) {
        operation = "";
        answer = "";
        ipt.innerHTML = operation;
        res.innerHTML = answer;
        return;
    }

    operation = operation.slice(0, -1);
    ipt.innerHTML = operation;

}

detbtn.addEventListener("click", cleaript);
keys.forEach(key => {
    key.addEventListener("click", handleKeyPress);
    key.addEventListener("click", evaluate);
});