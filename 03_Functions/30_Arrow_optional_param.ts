let displayDetails=(id:number,name:string,mailId?:string):void=>
{
    console.log("ID:",id);
    console.log("Name:", name);
    if(mailId!==undefined)
    {
        console.log("Mail:",mailId);
    }
}
displayDetails(123,"Scout","scout@gmal.com");
displayDetails(145,"Prateek");