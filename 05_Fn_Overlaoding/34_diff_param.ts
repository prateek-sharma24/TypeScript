//Different paramaters with same return types

function getInfo(id:number):string;
function getInfo(name:string):string;

function getInfo(param:string|number):string
{
    if(typeof param === "number")
    {
        return(`User ID is ${param}`);
    }
    else
    {
        return(`Username is ${param}`);
    }
}
console.log(getInfo(10));
console.log(getInfo("Prateek"));