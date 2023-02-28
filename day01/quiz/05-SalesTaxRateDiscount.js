 /**
  * hitung sales discount plus tax rate
  * function getSalesDiscount
  */

 function getSalesDiscount(price,tax,discount){
    const total_sales = price;
    let discount_5 = (discount / 100) * price;
    let priceAfterDiscount = price - (discount / 100) * price
    let pajak = ( tax / 100) * priceAfterDiscount;
    let total_payment = priceAfterDiscount + pajak;
    if(typeof price !== 'number' && typeof(tax, discount) == 'number'){
        return 'Price harus dalam angka';
    } else if (typeof(price,discount) == 'number' && typeof tax !== 'number'){
        return 'Pajak harus dalam angka';
    } else if (isNaN(price,tax,discount)) {
        return 'Price, Tax & Discount harus dalam angka';
    }else if (!isNaN(price,tax,discount)){
        return `Total Sales : Rp.${total_sales}
Discount (${discount}%) : Rp.${discount_5}
Price After discount : Rp.${priceAfterDiscount}
Pajak (${tax}%) : Rp.${pajak}
----------------------------------
Total Payment : ${Intl.NumberFormat("ID", {
    style: "currency",
    currency: "IDR",
  }).format(total_payment)}`
    }
 }

console.log(getSalesDiscount("a", 1,5));//Price harus dalam angka
console.log(getSalesDiscount(500, "pajak",5));//Pajak harus dalam angka
console.log(getSalesDiscount("harga", "pajak","discount"));//Price, Tax & Discount harus dalam angkaa
console.log(getSalesDiscount(4500, 10,5));
/**
    Total Sales 	: Rp.4500 
    Discount (5%) 	: Rp.225
    PriceAfterDiscount 	: Rp.4275
    Pajak (10%) 	: Rp.427.5
    ----------------------------------
    TotalPayment 	: Rp.4702.5
 */