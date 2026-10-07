// Check if a number is a multiple of both 5 and 10.
let num:number = 50;
if(num%5===0)
{
    if(num%10===0)
    {
        console.log("The number is a multiple of both 5 and 10");
    }
    else
    {
        console.log("The number is a multiple of 5 but not a multiple of 10");
    }

}
else
{
    console.log("The number is not a multiple of 5");
}