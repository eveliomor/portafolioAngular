import { NgModule } from "@angular/core";

import { Routes, RouterModule, Router } from "@angular/router";
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';

// Especificar las rutas de mi aplicación en un arreglo
const app_routes: Routes = [
  { path: 'home', component: PortafolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'item/:id', component: ItemComponent },  // Se establece en la ruta que se indique el id del item a mostrar
  { path: 'search/:termino', component: SearchComponent },  // Se establece en la ruta que se indique el termino a buscar
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot( app_routes, { useHash: true } )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
