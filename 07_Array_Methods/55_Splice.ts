//let number:number[]= [1,2,3,4,5,6];
let fruit:string[]=['apple','bannana','orange','mango'];
//console.log("Number Arrays:",number);
console.log("Fruits Arrays:",fruit);
//console.log("Size of an Number Array:",number.length);
console.log("Size of fruits array:",fruit.length);
console.log("Current element infruit array",fruit)
let removed_element = fruit.splice(1,2)//it contains only delete count
console.log("Removed Elements",removed_element);

// To add elements
fruit.splice(1,0,"pineapple","grapes");
console.log("After new Splice",fruit);

//To replace the elements
fruit.splice(1,2,"mango","cherry");
console.log("After splice",fruit);

