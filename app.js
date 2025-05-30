// This is just additional practice that my instructor Tristan Hall provided for Objects.
// Played around with this when I had time... will continue to learn more and add to this page at a later date.
// PRACTICE SESSIONS for working on objects & for better understanding of coding objects in JS

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
const laptop = {
    make: 'Apple',
    model: 'MacBook Air', 
    ram: 24, //I wanted to write 24 GB but then that would make this a string.
    storage: 494, // Actually 494.38 GB, but making it a whole number.
}
console.log (laptop);

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

// EXERCISE 2 
const wineBottle = {
    name: '19 Crimes Cali Red By Snoop Dogg',
    grape: 'Red Blend',
    vintage: 2021,
    volume: 750, //ml
    amountRemaining: 25,
    style: 'Intense',
    body: 'Full-bodied',
    drink(amount){
        return wineBottle.amountRemaining - amount; 
    },
    refill(amount){
        return wineBottle.amountRemaining + amount;
    },
}

//I want to create a function that says if the drink function is activated, 
// then update the amount remaining property. Else if the refill function is activated, 
// then update the amount remaining property with the refill amount. Not sure how to do this.
// if (wineBottle.drink === true)

wineBottle.drink(5);//calling function with argument of 5
console.log(wineBottle.drink(5));//checking to see if it works - outcome should be 20 

console.log(wineBottle.amountRemaining);
//How do I get amountRemaining to update to the new drink or refill number?

wineBottle.refill(10);//calling function with argument of 10
console.log(wineBottle.refill(10));//checking to see if it works - outcome should be 35

// console.log(wineBottle);

//From 4/29
//Earlier, chatGpt said what's not working is that I'm not saving the result after doing adding and subtracting.


/*What I messaged Tristan Hall about 4/30/25 to better understand coding this exercise 2:

I just messaged Alara. She said that all I was missing was adding a return to this. I’m going to try that and go from there.


Sylvia Remington
  9:14 PM
So this is what I ended up with... But I don't know how to think through the part of: 
how do I get the amountRemaining to update to the new drink or update to the refill number? 
Could you help me with the thought process behind figuring this out? 
I get stuck... and I really don't even know what to do from there. 
ChatGPT said the following but I don't understand what this means: 
"To fix this, you need to assign the new value back to amountRemaining inside your drink and refill methods." 
And then they give an example of how to solve the code, but I don't understand their version of the solve either. 
I'm just trying to figure out how to think through the code so that I can further research it on my own, 
but I'm not sure how to think through it at this point. 

The code that chatgpt gave an example of was:  
drink(amount) {
        this.amountRemaining -= amount; // update the value
        return this.amountRemaining;    // optional: return new value
    },... I understand the "this" part... 
    But I don't understand what it means to assign a value back to the amountRemaining 
    (Does that mean to save it?). 
    Also, I don't understand -= either. 
    
Could you help me with questions I can ask when I get stuck to move forward? 
I'm still learning how to think like a coder.
*/

/*
EXERCISE 3
write a Product class that has the following properties:

name (string)
description (string)
price (number)
*/
// class Product {
    // (MY NOTE: What is a product class?)

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