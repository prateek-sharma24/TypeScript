//Different parameter counts with the same return type
function add(a:number,b:number):number
function add(a:number,b:number,c:number):number

function add(a:number,b:number,c?:number):number
{
    if(c!==undefined)
    {
        return a+b+c;
    }
    else
    {
        return a+b;
    }
}
console.log(add(19,20,12));
console.log(add(19,20));