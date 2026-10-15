// Named function with optional parameters

function displayDetails(id: number, name: string, mailId: string): void {
    
    console.log("ID:", id);
    console.log("Name:", name);
    console.log("Mail Id:", mailId);
}

displayDetails(1, "Prateek", "sharma@y.com");
displayDetails(2, "Alex");