import { Component, OnInit } from '@angular/core';
import {PokeServicesService} from "../../services/poke-services.service";
import {Pokem} from "../../interfaces/pokem";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styles: []
})
export class PokemonComponent implements OnInit {

  private pokemon:Pokem=null;
  private key:string;

  constructor(private pss:PokeServicesService, private ar:ActivatedRoute) {
    this.ar.params.subscribe( params=>{
       this.key=params['id'];
    });
    //console.log(this.key);
  }

  ngOnInit() {
    this.pss.getPk().subscribe(resp=>{
      let pkes=<Pokem[]>resp;
      let arrayOfKeys = Object.keys(pkes);
      //console.log(arrayOfKeys);
      for(let key of arrayOfKeys ){
        // console.log(this.key);
        // console.log(key);
        if(this.key==key){
          this.pokemon=pkes[key];
          //console.log(this.pokemon);
        }
      }
    });
  }

}
