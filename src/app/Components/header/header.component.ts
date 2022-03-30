import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { UserService } from 'src/app/Services/user.service';
import { IUserData } from 'src/app/Shared/interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  totalItem:number=0;
  obj!:IUserData;
  // isLogin:boolean=this.obj.isLogin;
  constructor(private  cartService:CartService,private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((Data:any)=>{this.totalItem=Data.length});
  }
  loggedin()
  {
    this.userService.getObjectFromLogin().subscribe(res=>{this.obj=res
      // console.log("isLogin from Loggedin: "+this.obj.isLogin);
      // thisLogin=this.obj.isLogin;
    });
      return this.obj.isLogin
  }
  onLogout()
  {
    this.userService.getObjectFromLogin().subscribe(res=>{this.obj=res});
    const userRecords=localStorage.getItem('users');
    if(userRecords!==null)
    {
      var listOfUsers:IUserData[]=JSON.parse(userRecords);
      for (let index = 0; index < listOfUsers.length; index++) {
        if(this.obj.email === listOfUsers[index].email)
          listOfUsers[index].isLogin=false;
      }
      localStorage.setItem("users", JSON.stringify(listOfUsers));
    }
    // this.router.navigateByUrl('login');
    window.location.reload()
//     this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true })
//   .then(() => {
//       this.router.navigate(['Your actualComponent']);
// });
  }
}
