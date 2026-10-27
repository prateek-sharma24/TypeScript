function DisplayDetails(id: number,name: string,mailId?: string):void
{
    console.log("ID:", id);
    console.log("Name:",name);
    if(mailId!=undefined)
    {
        console.log("Mail ID:",mailId);
    }
}
DisplayDetails(1,"Prateek","sharma@y.com");
DisplayDetails(1,"Prateek");