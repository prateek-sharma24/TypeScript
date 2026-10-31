let words:string[]=['hello','world','typescript'];
function captitalizeWords(arr:string[]):string[]
{
    let result:string[]=[];
for(let i=0;i<arr.length;i++)
{
    result[i]=arr[i].toUpperCase();
    return result;
}
}
console.log(captitalizeWords(words));