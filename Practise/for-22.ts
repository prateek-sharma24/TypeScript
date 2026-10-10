//Print Sum of Even Numbers between 1 and 20
let sum:number=0;
for(let i:number=1;i<=20;i++)
{
    if(i%2==0)
    {
        sum+=i;
        
    }
    
}
console.log("Sum of Even Numbers between 1 and 20 is: " ,sum);