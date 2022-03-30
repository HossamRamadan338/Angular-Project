import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './Components/product/product.component';
import { CartComponent } from './Components/cart/cart.component';
import { FormsModule } from '@angular/forms';
import { MenComponent } from './Components/men/men.component';
import { WomenComponent } from './Components/women/women.component';
import { AccessoryComponent } from './Components/accessory/accessory.component';
import { ElectronicsComponent } from './Components/electronics/electronics.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProductComponent,
    CartComponent,
    MenComponent,
    WomenComponent,
    AccessoryComponent,
    ElectronicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
