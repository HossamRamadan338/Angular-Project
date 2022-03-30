import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../Shared/interface';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) 
  { }
  private _url:string="https://mocki.io/v1/1a13d8e5-5da9-4637-ba44-4fb6726bb76e";
  GetAllProducts():Observable<IProduct[]>
  {
    return this.http.get<IProduct[]>(this._url).pipe(catchError(err=>{return throwError(()=>err.Message||"null")}));
  }
}
