import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingCosts;

  constructor(
    private cartService: CartService
  ) { 
  }

  // sets shippingCosts property using the getShippingPrices method from the cart service 
  ngOnInit() {
    this.shippingCosts = this.cartService.getShippingPrices();
  }

}