import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { ProductService } from 'src/app/Services/product.service';
import { UserService } from 'src/app/Services/user.service';
import { IProduct, IUserData } from 'src/app/Shared/interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private router : Router,private ProductData:ProductService,private CardData:CartService ) 
  { }
  // User:any;
  productList:IProduct[]=[];
  ngOnInit(): void {
      this.ProductData.GetAllProducts()
      .subscribe(Data=>{this.productList = Data;
      this.productList.forEach((item:any)=>{
        Object.assign(item,{quantity:1,total:item.price});
      })
    });
  }
  addToCart(item:any)
  {
    const userRecords=localStorage.getItem('users');
    let flag=false;
    if(userRecords!==null)
    {
      const listOfUsers:IUserData[]=JSON.parse(userRecords);
      listOfUsers.forEach(u=>{
        if(u.isLogin===true)
        {
          this.CardData.addToCart(item);
          flag=true;
          return
        }
      })
      
      if(flag===false) 
        this.router.navigateByUrl('login');
    }
    else
    {
      this.router.navigateByUrl('login');
    }
  }
}
