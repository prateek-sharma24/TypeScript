function greet(name:string, smg: (message:string) =>void)
{

    
    smg("Hello");
    console.log(name);
}
//Call back function
function showMessage (message:string)
{
    console.log(message);
}
greet("Prateek",showMessage);