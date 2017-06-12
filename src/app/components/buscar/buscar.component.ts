import { Component, OnInit } from '@angular/core';
import {PokeServicesService} from "../../services/poke-services.service";
import {Pokem} from "../../interfaces/pokem";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {

  private search:string;
  private pokemones:Pokem[]=null;


  constructor(private pss:PokeServicesService, private ar:ActivatedRoute) {
    this.ar.params.subscribe( params=>{
      this.search=params['text'];

      //LLamado al componete services para extraer los datos
      this.pss.getPk().subscribe(resp=>{
        let poksFiltrado:Pokem[]=[];
        let pkes=<Pokem[]>resp;
        let arrayOfKeys = Object.keys(pkes);
        this.search=this.search.toLowerCase();
        for(let key of arrayOfKeys ){
          let nombre=pkes[key].name.toLowerCase();
          if(nombre.indexOf(this.search)>=0){
            console.log(pkes[key].name);
            pkes[key].key=key;
            poksFiltrado.push(pkes[key]);
          }

        }
        this.pokemones = poksFiltrado;
        console.log(this.pokemones);
      });
    });

  }


  ngOnInit() {

  }

}
