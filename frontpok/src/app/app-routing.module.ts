import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ListapokemonsComponent } from './views/listapokemons/listapokemons.component';
import { PokemoninfoComponent } from './views/pokemoninfo/pokemoninfo.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  }, 
  {
    path: "listaPokemons",
    component: ListapokemonsComponent
  }, 
  {
    path: "pokemonsInfo/:id",
    component: PokemoninfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
