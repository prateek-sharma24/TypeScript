/*Write a program to print the odd numbers from 1 to 20 using a for loop. Use the
continue statement to skip even numbers. */

for(let i: number=1; i<=20;i++)
{
    if(i%2==0)
    {
        continue;
    }
    console.log(i)
}