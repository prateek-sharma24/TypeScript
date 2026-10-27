//Named function with  Rest parameters - multiple types

function findElements(...elements:(number|string)[]):number
{
    return elements.length;

}
console.log(findElements(3,"Prateek",4,2,"Scout"));
console.log(findElements(10,20,30,40,50));
console.log(findElements("abc","xyz"));