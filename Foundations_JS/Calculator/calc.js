const DECIMAL_PRECISION = 3;
const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const divide = (a,b) => a / b;
const multiply = (a,b) => a * b;

const percent = (a) => a / 100;
const displayRef = document.querySelector('span');

let a = '';
let b = '';
let display = '';
let currentOperation = '';

const operate = (a, b, operator) =>{
    switch(operator)
    {
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a,b);
        case '/':
            return  b != 0 ? divide(a,b) : NaN;
        case '.':
        default: display += operator;

    }
}

function sign(first, second, operator)
{
    if(operator === '')
        {
            a = String(Number(first) * -1);
            displayRef.textContent = a;
        }
    else
    {
        b = String(Number(second) * -1);
        displayRef.textContent = b;
    }
}

function clear()
{
    a = '';
    b = '';
    displayRef.textContent = '';
    currentOperation = '';
    return '';
}

// We force 'a' to a type of number, to allow the storeNumber function to access b
function storeOperator(operator)
{
        currentOperation = operator;
        a = Number(a);
}

function storeNumber(number)
{
    if(typeof a === 'number')
    {
        b += number;
        displayRef.textContent = b;
    }
    else
    {
        a += number;
        displayRef.textContent = a;
    } 
}

function storeDecimal()
{
    if(typeof a === 'number')
    {
        if(!b.includes('.'))
        {
            b += '.';
            displayRef.textContent = b;
        }
    }
    else
    {
        if(!a.includes('.'))
            {
                a += '.';
                displayRef.textContent = a;
            }
    } 
}

function roundDecimal(number)
{
    return parseFloat(number.toFixed(DECIMAL_PRECISION));
}

function checkPrecision(number) {
    const regex = new RegExp(`^\\d+(\\.\\d{1,${DECIMAL_PRECISION}})?$`);
    return regex.test(number.toString());
}

function handlePrecision(number)
{
    if(checkPrecision(Number(number)))
        {
            displayRef.textContent = number;
        }
        else 
        {   
            displayRef.textContent = String(roundDecimal(Number(number)));
            console.log(String(roundDecimal(Number(number))));
        }
        return displayRef.textContent;
}

/* Equals and clear event listeners initialized separately for their unique functions.
Then event listeners are applied iteratively for number and operator buttons, which use similar functions */
document.querySelector('.equals').addEventListener("click", () => {
    if(b !== '')
        {
            let display = operate(a, Number(b), currentOperation);
            handlePrecision(display);
        }
    else displayRef.textContent = a;

});

document.querySelector('.percent').addEventListener("click", () => {

   a = handlePrecision(percent(a));
});

document.querySelector('.AC').addEventListener("click", () => {
    displayRef.textContent = clear();
});

document.querySelector('.sign').addEventListener("click", () => {
    sign(a,b, currentOperation);
});

document.querySelector('.decimal').addEventListener("click", () => {
    storeDecimal();
});

let operatorArray = ['multiply', 'subtract', 'add', 'divide'];
for(let operator of operatorArray)
    {
        let theButton = document.querySelector(`.${operator}`);
        theButton.addEventListener("click", () => {
            if(currentOperation === '')
                storeOperator(theButton.textContent);
            else
            {
                a = operate(a, Number(b), currentOperation);
                displayRef.textContent = a;
                b = '';
                storeOperator(theButton.textContent);
            } 
        });
    }

let numberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
for(let number of numberArray)
    {
        let theButton = document.querySelector(`.b${number}`);
        theButton.addEventListener("click", () => {
            storeNumber(theButton.textContent);
        });
    }