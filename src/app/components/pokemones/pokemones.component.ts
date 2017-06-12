import { Component, OnInit } from '@angular/core';
import {PokeServicesService} from "../../services/poke-services.service";
import {Pokem} from "../../interfaces/pokem";
@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styles: []
})
export class PokemonesComponent implements OnInit {

  public  pokemones:Pokem[];
  public arrayOfKeys;

  constructor( private pss:PokeServicesService ) {

  }

  ngOnInit() {
    this.pss.getPk().subscribe(resp=>{this.pokemones=<Pokem[]>resp;
        this.arrayOfKeys = Object.keys(this.pokemones);
        /*console.log(this.pokemones);
        console.log(this.arrayOfKeys)*/
      },
      error => console.error('Error: ' + error),
      () => console.log('Completed!'));
    //console.log(this.pss.pokesList);
  }

}
