//Named function with rest parameters
function addNumbers(... nums:number[])
{
    let sum =0;
    let i=1;
    for(i=0; i<nums.length; i++)
    {
        sum =sum+nums[i];
    }
    console.log("sum of number is :", sum);

}
addNumbers(1,2);
addNumbers(1,2,3,4,5);