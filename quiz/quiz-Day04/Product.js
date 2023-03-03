export default class Product{
    constructor(prodId,prodName, category, price=0,totalBuy=1){
        this.prodId = prodId,
        this.prodName = prodName,
        this.category = category,
        this.price = price,
        this.totalBuy = totalBuy,
        this.subTotal = price * totalBuy
    }

    setPrice(price){
        this.price = price;
        this.subTotal = this.price * this.totalBuy;
    }

    setTotalBuy(total){
        this.totalBuy = totalBuy;
        this.subTotal = this.price * this.totalBuy
    }

    toString(){}
}