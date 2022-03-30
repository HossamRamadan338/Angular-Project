import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../Shared/interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItemList:any=[];
  subject:any=new BehaviorSubject<any>([]);
  constructor() { }
  getProducts()
  {
    return this.subject.asObservable();
  }
  addToCart(product:any)
  {
    for(let i=0 ;i< this.cartItemList.length;i++)
    {
      if(this.cartItemList[i].id===product.id)
      {
        this.cartItemList[i].quantity+=1;
        this.cartItemList[i].total+=this.cartItemList[i].price;
        this.subject.next(this.cartItemList);
        this.getTotalPrice();
        return;
      }
    }
    this.cartItemList.push(product);
    this.subject.next(this.cartItemList);
    this.getTotalPrice();
  }
 
  getTotalPrice():number
  {
    let getTotal=0;
    this.cartItemList.map((item:any)=>{getTotal+=item.total})
    return getTotal;
  }
  removeCartItem(product:any)
  {
    this.cartItemList.map((item:any,index:any)=>{
      if(product.id===item.id)
      {
        if(item.quantity===1)
        {
          this.cartItemList.splice(index,1)
        }
        else
        {
          item.quantity-=1;
          item.total-=item.price;
          this.subject.next(this.cartItemList);
          this.getTotalPrice();
          return;
        }
      }
    })
    this.subject.next(this.cartItemList) 
  }
  removeAllCart()
  {
    this.cartItemList=[];
    this.subject.next(this.cartItemList)
    
  }
}
