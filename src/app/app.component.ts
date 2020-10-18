import { NgModule, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Burger Jawn';

  foodMenu = [{
    image: 'https://assets.stickpng.com/images/585abfdf4f6ae202fedf2936.png',
    item: "Fries",
    description: "Oily, salty & hot!",
    quantity: 0,
    price: 50,
    special: true
  },
  {
    image: "https://i2.wp.com/freepngimages.com/wp-content/uploads/2016/11/bacon-burger.png?fit=895%2C895",
    item: "Burger",
    description: "Beefy, fresh & hot!",
    quantity: 0,
    price: 10,
    special: false
  },
  {
    image: 'https://www.jing.fm/clipimg/full/195-1952265_coca-cola-can-png-image-transparent-background-soda.png',
    item: "Soda",
    description: "Sweeter than water!",
    quantity: 0,
    price: 30,
    special: false 
  }]
  cartTotal = 0;
  totalPrice = 0;


  upQuantity(foodItem){
    foodItem.quantity++;
    this.cartTotal++;
    this.totalPrice += foodItem.price;
    }

  decQuantity(foodItem){
  if(foodItem.quantity > 0){
    foodItem.quantity--;
    this.cartTotal--;
    this.totalPrice -= foodItem.price;
  } 
    }
}
