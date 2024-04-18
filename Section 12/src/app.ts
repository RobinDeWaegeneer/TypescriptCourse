import "reflect-metadata";
import { plainToClass } from 'class-transformer'

import { Product } from './product-model'

const products = [
    {title: 'A Carpet', price: 29.99}, 
    {title: 'A Book', price: 10.99}
];

// const p1 = new Product('A Book', 12.99)

// const loaderProducts = products.map(prod =>{
//     return new Product(prod.title, prod.price);
// })

const loaderProducts = plainToClass(Product, products)

for (const prod of loaderProducts) {
    console.log(prod.getInformation())

}