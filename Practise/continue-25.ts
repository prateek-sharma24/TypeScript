/*Write a program to print numbers from 1 to 30, but skip numbers that are multiples of 5.
Use the continue statement within a while loop.*/
for(let i:number=1;i<=30;i++)
{
    if(i%5==0)
    {
        continue;
    }
    console.log(i);

}
