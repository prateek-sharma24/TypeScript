function greet(a:number):string;
function greet(b:string):string;
function greet(isMarried:boolean):string

function greet(value:string|boolean|number):string
{
    if(typeof value === "string")
    {
        return `Hello ${value}`;
    }
    else if(typeof value === "number")
    {
        return `You are ${value} years old`;
    }
    else
    {
        let res = value ?"Married" : "Single";
        return res;
    }
}
console.log(greet("Prateek"));
console.log(greet(34));
console.log(greet(true));