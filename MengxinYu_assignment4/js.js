 

    /*** Cart Functions ***/
    //cart Arrey
    //Item Object
    
    var MXY_shoppingCart = {};
    
    MXY_shoppingCart.cart = [];
    
    MXY_shoppingCart.Item=function(name,number,size,price){
    this.name=name;
    this.number=number;
    this.size=size;
    this.price=price;       
    };

//add an item to cart
    MXY_shoppingCart.addItemToCart=function(name, number, size, price){
    for (var i in this.cart){
      if(this.cart[i].name === name){
          this.cart[i].number += number;
          this.saveCart();
          return;    
          }
      }
  
      var item = new this.Item (name,number,size,price);
      this.cart.push (item); 
      this.saveCart();
  }
      
//minus the number of an item from cart
  MXY_shoppingCart.minusItemNumberFromCart=function(name){
  for (var i in this.cart){
    if(this.cart[i].name === name){
        this.cart[i].number--;
      if (this.cart[i].number === 0){
          this.cart.splice(i,1);
      }
        break;
    }
  }
    this.saveCart();
}

//remove an item from cart
MXY_shoppingCart.removeItemFromCart=function(name){
    for (var i in this.cart){
        if(this.cart[i].name === name){
            this.cart.splice(i,1);
            break;
        }
    }
    this.saveCart();
}

//clear the cart
MXY_shoppingCart.clearCart=function(){
    this.cart=[];
    this.saveCart();
}

//count how many objects are in the cart in total
MXY_shoppingCart.countTotalNumber=function(){
    var totalNumber=0;
    for(var i in this.cart){
        totalNumber += this.cart[i].number;
    }
    return totalNumber;
}

//set number for an item


//calculate the total price
MXY_shoppingCart.countTotalPrice=function(){
    var totalPrice=0;
    for (var i in this.cart){
        totalPrice += this.cart[i].number * this.cart[i].price;
    }
    return totalPrice.toFixed(2);
}

//list the cart
MXY_shoppingCart.listCart=function(){
    var cartCopy = [];
    for (var i in this.cart){
        var item = this.cart[i];
        var itemCopy = {};
        for (var j in item){
            itemCopy[j] = item[j];
        }
        itemCopy.total = (item.price * item.number).toFixed(2);
        cartCopy.push(itemCopy);
    }
    return cartCopy;
}
        
//save the cart
MXY_shoppingCart.saveCart=function(){
    localStorage.setItem("shoppingCart", JSON.stringify(this.cart));
}
        
MXY_shoppingCart.loadCart=function(){
    this.cart = JSON.parse(localStorage.getItem("shoppingCart"));
}

    MXY_shoppingCart.loadCart();






