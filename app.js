// This is just additional practice that my instructor Tristan Hall provided for Objects.
// This page is called problems.js

console.log('Working!'); //to check if js page is linked and working

/*
EXERCISE 1
Create an object that defines a laptop. It should have the following properties:

make (string)
model (string)
ram (number)
storage (number)
*/

// EXERCISE 1
// const laptop = {
//     make: 'Apple',
//     model: 'MacBook Air', 
//     ram: 24, //I wanted to write 24 GB but then that would make this a string.
//     storage: 494, // Actually 494.38 GB, but making it a whole number.
// }
// console.log (laptop);

/*
EXERCISE 2
Create an object that defines a bottle of wine. It should have the following properties:

name (string)
grape (string, eg: Merlot)
vintage (number, eg: 2017)
volume (number, eg: 750)
amountRemaining (number, eg: 750)

It should have the following methods:

drink(amount) - removes the `amount` from the `amountRemaining`
refill(amount) - adds the `amount` to the amountRemaining
*/

// EXERCISE 2 - FIRST TRY
const wineBottle = {
    name: '19 Crimes Cali Red By Snoop Dogg',
    grape: 'Red Blend',
    vintage: 2021,
    volume: 750, //ml
    amountRemaining: 25,
    style: 'Intense',
    body: 'Full-bodied',
    drink(amount){
        wineBottle.amountRemaining - amount; //am I doing this part right? or do I need to have a return here?
        // console.log(wineBottle.drink); //is this where I can check this?
    },
    refill(amount){
        wineBottle.amountRemaining + amount;//am I doing this part right? Or do I need to have a return here?
    },
}

wineBottle.drink(5);//calling function with argument of 5
console.log(wineBottle.drink);//checking to see if it works - outcome should be 20
//What's logging is [Function: drink]

wineBottle.refill(10);//calling function with argument of 10
console.log(wineBottle.refill);//checking to see if it works - outcome should be 35
//What's logging is [Function: refill]

// console.log(wineBottle);





/*
EXERCISE 3
write a Product class that has the following properties:
What is a product class?

name (string)
description (string)
price (number)
*/
// class Product {

// }

// EXERCISE 3
// const product = {
//   name: 'The Supahstaaaar Doll',
//   description: 'This doll performs the superstar pose anytime someone yells supahstaaaar!',
//   price: 9.99,
// }
// console.log(product);
// console.log(product.name);
// console.log(product.description);
// console.log(product.price);


/*
Write a Cart class that has the following properties:
contents (array)

and the following methods:
addItem(product) - adds the given Product instance into the contents array
removeItem(product) - removes the given Product instance from the contents array
empty() - removes all products from the contents array
getTotal() - returns the total price of all products in the contents

? the product mentioned above is talking about an instance of the Product class above
? for example, the addItem(product) method will take an instance of the Product class as an argument
? e.g:
? const hat = new Product('hat', 'it's a lovely hat', 1000)
? const cart = new Cart()
? cart.addItem(hat)


*/

class Cart {
  
}

/*
Write a Shape class that has the following properties:

width (number)
height (number)

and the following methods:

getArea() - returns the area of the shape
getPerimeter() - returns the total length of all sides of the shape
*/

class Shape {

}



// ! please do not alter below ✋

// module.exports = {
//   laptop,
//   wineBottle,
//   Product,
//   Cart,
//   Shape
// }