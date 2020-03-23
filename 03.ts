class Product {
    name: String;
    category: String;
    priceNum: number;
    price: String;

    constructor(item: String) {
        let arr: String[] = item.split(',');
        this.name = arr[0];
        this.category = arr[1];
        this.priceNum = Number(arr[2]);
        this.price = 'Rp ' + this.priceNum.toFixed(0)
    }
}

let text: String =`NAME, CATEGORY, PRICE
Xiaomi Redmi 5A, Smartphone, 1199000
Macbook Air, Laptop, 13775000
Samsung Galaxy J7, Smartphone, 3549000
DELL XPS 13, Laptop, 26799000
Xiaomi Mi 6, Smartphone, 5399000
LG V30 Plus, Smartphone, 10499000`;

let arr: String[] = text.split(/\r?\n/);
let products: Product[] = [];
for (let i: number = 1; i < arr.length; i++) {
    let value: String = arr[i];
    let prod = new Product(value);
    products.push(prod);
}

products = products.sort((a, b) => {
    return a.priceNum - b.priceNum;
})

console.log(JSON.stringify(products));
