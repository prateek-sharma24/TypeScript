//Named function with default parameters

function calculationDiscount(price:number,rate:number=0.50):void
{
    let discount:number = price*rate;
    console.log("Discount amount:",discount);
}
calculationDiscount(10000,0.30);
calculationDiscount(10000);