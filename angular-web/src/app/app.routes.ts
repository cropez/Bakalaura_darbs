import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CatalogComponent } from './catalog/catalog.component';
import { AutorizacijaComponent } from './autorizacija/autorizacija.component';
import { ProfileComponent } from './profile/profile.component'; 
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component'; 

export const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: AutorizacijaComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'profile', component: ProfileComponent }, 
  { path: 'cart', component: ShoppingCartComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
