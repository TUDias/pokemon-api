import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { NavComponent } from './components/template/nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { ListapokemonsComponent } from './views/listapokemons/listapokemons.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PokemoninfoComponent } from './views/pokemoninfo/pokemoninfo.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { PipesModule } from 'w-ng5';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ListapokemonsComponent,
    PokemonsComponent,
    PokemoninfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatCardModule,
    NgxPaginationModule,
    MatGridListModule,
    PipesModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
