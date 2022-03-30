import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { ProductService } from 'src/app/Services/product.service';
import { IProduct, IUserData } from 'src/app/Shared/interface';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.scss']
})
export class MenComponent implements OnInit {

  constructor(private router :Router,private ProductData:ProductService,private CardData:CartService) 
  { }
  productListMen:IProduct[]=[];
  ngOnInit(): void {
    this.ProductData.GetAllProducts().subscribe(Data=>
      {
        this.productListMen = Data.filter(item =>item.category=="men's clothing")
        this.productListMen.forEach((item:any)=>{
          Object.assign(item,{quantity:1,total:item.price});
        })
      })
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
        else
        flag=false;
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
