/**
 * Created by angel on 09/06/2017.
 */
import  {Routes,RouterModule} from '@angular/router'

import { HomeComponent } from './components/home/home.component';
import { PokemonesComponent } from './components/pokemones/pokemones.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { NewPokemonComponent } from './components/new-pokemon/new-pokemon.component';
import { BuscarComponent } from './components/buscar/buscar.component';

const APP_ROUTES: Routes=[
  {path:'home', component: HomeComponent},
  {path:'pokemones', component: PokemonesComponent} ,
  {path:'new', component: NewPokemonComponent} ,
  {path:'producto/:id', component: PokemonComponent},
  {path:'buscar/:text', component: BuscarComponent} ,
  {path:'**', pathMatch: 'full',redirectTo: 'home'}
];

export const APP_ROUTING =RouterModule.forRoot(APP_ROUTES);



