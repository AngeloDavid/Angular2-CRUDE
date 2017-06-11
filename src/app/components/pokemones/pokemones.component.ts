import { Component, OnInit } from '@angular/core';
import {PokeServicesService} from "../../services/poke-services.service";
import {Pokem} from "../../interfaces/pokem";
@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styles: []
})
export class PokemonesComponent implements OnInit {

  public  jsonp:Pokem[];
  public arrayOfKeys;

  constructor( private pss:PokeServicesService ) {

  }

  ngOnInit() {
    this.pss.getPk().subscribe(resp=>{this.jsonp=<Pokem[]>resp;
        this.arrayOfKeys = Object.keys(this.jsonp);
        console.log(this.jsonp);
        console.log(this.arrayOfKeys)
      },
      error => console.error('Error: ' + error),
      () => console.log('Completed!'));

  }

}
