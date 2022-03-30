import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { IUserData } from 'src/app/Shared/interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router,private userService:UserService) 
  {
  }
  userModel:IUserData={ 
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
    checkAgree:false,isLogin:false};
  ngOnInit(): void {
  }
  goToPage()
  {
    this.router.navigateByUrl('register');
  }
  getLocalStorage() {
    const userRecords=localStorage.getItem('users');
    if(userRecords!==null)
    {
      const listOfUsers:IUserData[]=JSON.parse(userRecords);
      var userCurrent;
      listOfUsers.forEach(u=>{
        if(u.email==this.userModel.email&&u.password==this.userModel.password)
        {
     
      u.isLogin=true;
      
      localStorage.setItem("users", JSON.stringify(listOfUsers));
      this.userService.sendObjectFromLogin(u);
          userCurrent=Object.assign(u);
        }
        console.log(u.email + "   :"+this.userModel.email);
      })
      if(userCurrent!==undefined)
      {
        this.router.navigateByUrl('home');
        alert("User is found");
        console.log(userCurrent);
      }
      else
      {
        alert("UserName is not found ");
      }
    }
    else
    {
      alert("UserName is not found ");
    }
  } 
   
}
