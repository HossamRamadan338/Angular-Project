import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/Services/home.service';
import { IProduct } from 'src/app/Shared/interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private ProductData:HomeService) 
  { }
  SomeProduct:IProduct[]=[];
  ngOnInit(): void {
    
    this.ProductData.GetAllProducts().subscribe(Data=>
      {
        this.SomeProduct = Data.filter((value, index, self) =>
        index === self.findIndex((t) => (t.category === value.category )))
      })
  }
}
