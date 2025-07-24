import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ProductosComponent } from './components/productos/productos.component';

export const routes: Routes = [
    {path:"home", component:HomeComponent},
    {path:"nosotros", component:NosotrosComponent},
    {path:"productos", component:ProductosComponent},
];
