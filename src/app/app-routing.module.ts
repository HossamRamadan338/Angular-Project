import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Components/cart/cart.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { MenComponent } from './Components/men/men.component';
import { WomenComponent } from './Components/women/women.component';
import { AccessoryComponent } from './Components/accessory/accessory.component';
import { ElectronicsComponent } from './Components/electronics/electronics.component';
import { ProductComponent } from './Components/product/product.component';
import { RegisterComponent } from './Components/register/register.component';
import { HeaderComponent } from './Components/header/header.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent},
  {path:'cart',component:CartComponent},
  {path:'login',component:LoginComponent},
  {path:'product',component:ProductComponent},
  {path:'men',component:MenComponent},
  {path:'women',component:WomenComponent},
  {path:'accessory',component:AccessoryComponent},
  {path:'electronics',component:ElectronicsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
