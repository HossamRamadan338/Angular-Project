import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUserData } from '../Shared/interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private subject=new BehaviorSubject<IUserData>({name:"",email:"",password:"",confirmPassword:"",checkAgree:false,isLogin:false});

  constructor() { }
  sendObjectFromLogin(obj:IUserData)
  {
    this.subject.next(obj);
  }
  getObjectFromLogin():Observable<IUserData>
  {
    return this.subject.asObservable();
  }
}
