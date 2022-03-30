import { Component, OnInit } from '@angular/core';
import { IUserData } from 'src/app/Shared/interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userModel:IUserData={ 
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
    checkAgree:false,
    isLogin:false};
  constructor(private router:Router) { }
    checkConfirm:boolean=false;
  ngOnInit(): void {
  }
  setLocalStorage() {
    console.log("okkk")
    const userRecords=localStorage.getItem('users');
    if(userRecords!==null)
    {
      var listOfUsers:IUserData[]=JSON.parse(userRecords);
      listOfUsers.push(this.userModel)
      localStorage.setItem("users", JSON.stringify(listOfUsers));

    }
    else
    {
      var listOfUsers:IUserData[]=[];
      listOfUsers.push(this.userModel)
      localStorage.setItem("users", JSON.stringify(listOfUsers));
    }
    this.router.navigateByUrl('login');
    alert("Data saved");
  }  
  // checkconfirmPassword(pass:string,repass:string):boolean{
  //   if(pass.length!==repass.length)
  //       return false;
  //   for(let i=0;i<pass.length;i++){
  //       if(pass[i]===repass[i])
  //           continue;
  //       else{
  //           return false;
  //       }
  //   }
  //   return true;
  // }  
}
