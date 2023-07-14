// This array will store our whole order
let cart = [ {Name: 'Apple', Price: 30} ]; // this is an array with an object within 

let total = 10;

let cartList = document.querySelector('#cart_list')


function addToCart(item, price) {
    let menuItem = new Food (item, price); // this assigns a new FOOD CLASS

    menuItem.disply(); // this calls the Display METHOD for the THIS which is FOOD class

    menuItem.upDateTotal(); // this updates the total as shown in the FOOD CLASS by calling the method to the menuItem

    menuItem.showOnCart();

    slip.addItem(  {Name: 'fruit', Price: 10}  )

    slip.printSlip();



}

//This is an object with methods within 
class Food {
    constructor(item, price){
        this.item = item;      // NOTE that the THIS tag represent the obeject name which Food
        this.price = price;
    }

//this is a method just like a function but without the function keyword

    disply(){
        console.log(this);  //NOTE the THIS represent the object name whic is FOOD 
    }

//this is also a method again NOTE we dont add the function keyword

    upDateTotal(){
        total = total + this.price;

        console.log(total);
    }

    
    showOnCart(){
        cartList.innerHTML += `<li> ${this.item} - ${this.price} </li>`  // the innerHTML allows you to add another li to the cartList from the HTML
    }
    
}
let items = [];

class checkOutSlip{ 
        addItem(itemsToAdd){
            cart.push(itemsToAdd);
                } // This line defines the addItem method of the checkOutSlip class. It adds the itemsToAdd object to the cart array.


                
            printSlip (){
                cart.map((current) => {
                    document.querySelector('.checkoutSlip').innerHTML += `<li> ${current.Name} - ${current.Price} </li>`
                })
            }
            }
        


const slip = new checkOutSlip();




