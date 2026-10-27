//Write a program to check the grade of a student based on the marks obtained in an exam
let marks:number = 85;
if(marks<0 || marks>100)
{
    console.log("Invalid marks");
}
else if(marks>=90)
{
    console.log("Grade A");
}
else if(marks>=75)
{
    console.log("Grade B");
}
else if(marks>=60)
{
    console.log("Grade C");
}
else
{
    console.log("Grade D");
}