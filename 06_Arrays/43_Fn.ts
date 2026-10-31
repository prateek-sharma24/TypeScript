function search(ele:number,arr:number[])
{
    for(let i =0;i<arr.length;i++)
    {
        if(arr[i]===ele)
        {
            return true; //result found
        }
    }
    return false;
}
let arr:number[]=[10,20,30,40,50,60];
console.log(search(30,arr));
console.log(search(70,arr));
