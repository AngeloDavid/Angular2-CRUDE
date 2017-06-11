import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PokemonesComponent } from './components/pokemones/pokemones.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { NewPokemonComponent } from './components/new-pokemon/new-pokemon.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import {APP_ROUTING} from "./app.router";
import {PokeServicesService} from "./services/poke-services.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PokemonesComponent,
    PokemonComponent,
    NewPokemonComponent,
    BuscarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [PokeServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
