// This is just additional practice that my instructor Tristan Hall provided for Objects.

/*
Create an object that defines a laptop. It should have the following properties:

make (string)
model (string)
ram (number)
storage (number)
*/

const laptop = {


}

/*
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

const wineBottle = {

}

/*
write a Product class that has the following properties:

name (string)
description (string)
price (number)
*/

class Product {
  
}

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

module.exports = {
  laptop,
  wineBottle,
  Product,
  Cart,
  Shape
}