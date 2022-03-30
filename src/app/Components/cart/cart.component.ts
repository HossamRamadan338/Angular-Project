import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  productInCart:any=[];
  TotalPriceCart:number=0;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((Data:any)=>{
      this.productInCart=Data;
      this.TotalPriceCart=this.cartService.getTotalPrice();
    })
  }
  removeItem(item:any)
  {
    this.cartService.removeCartItem(item);
  }
  removeAll()
  {
    this.cartService.removeAllCart();
  }
}
