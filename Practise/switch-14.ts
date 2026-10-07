//Perform basic arithmetic operations based on user input.
let num1:number = 10;
let num2:number = 5;
let operation:string = "+";
switch(operation)
{
    case "+":
        console.log("Addition: "+(num1+num2));
        break;
    case "-":
        console.log("Subtraction: "+(num1-num2));
        break;      
    case "*":
        console.log("Multiplication: "+(num1*num2));
        break;
    case "/":
        console.log("Division: "+(num1/num2));
        break;
    default:
        console.log("Invalid operation");
}

