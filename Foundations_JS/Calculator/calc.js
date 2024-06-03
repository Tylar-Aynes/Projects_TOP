const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const divide = (a,b) => a / b;
const multiply = (a,b) => a * b;
const sign = (a) => a * -1;
const percent = (a) => a / 100;
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
            return divide(a,b);
        case '.':
            break;
        case '%':
            return percent(a);
        case 'AC':
            break;
        case '+ / -':
            return sign(a);

    }

}

let a = 0;
let b = 0;

let buttonList = document.querySelectorAll('button');
for(const button of buttonList)
    {
        button.addEventListener("click", () =>
        {
            operate(a,b,button.textContent);
            console.log(button.textContent + " " +  new Date());
        });
    }