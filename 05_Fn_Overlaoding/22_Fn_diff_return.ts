//With different return types

function processInput(input:number):number;
function processInput(input:string):string;

function processInput(input:number|string):string|number
{
    if(typeof input==="string")
    {
        return input.toUpperCase();
    }
    else
    {
        return input*2;
    }
}
console.log(processInput("Prateek"));
console.log(processInput(5));