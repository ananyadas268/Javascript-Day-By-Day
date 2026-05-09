let prices=[250,645,300,900,50];
for(let price of prices){
     let discount=price*0.1;
     let priceafterdiscount=price-discount;
     console.log(`Original price = ${priceafterdiscount}, Discount = ${discount}`);
}
