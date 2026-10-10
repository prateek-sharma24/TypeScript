/*Write a program to find and print the first even number between 1 and 10 using a for
loop. Use the break statement to exit the loop as soon as you find the first even number*/
for(let i:number=1;i<=10;i++)
{
    if(i%2==0)
    {
        break;
    }
    console.log(i);
}