import { Component, OnInit } from '@angular/core';
import {Pokem} from "../../interfaces/pokem";
import {PokeServicesService} from "../../services/poke-services.service";

@Component({
  selector: 'app-new-pokemon',
  templateUrl: './new-pokemon.component.html',
  styles: []
})
export class NewPokemonComponent implements OnInit {


  private  _pokemon:Pokem= {
    idnumber:null,
    name:null,
    descrip:null,
    categoria:null,
    tipo:null,
    img:null,
    debilidad:[]
};
  constructor( private pss:PokeServicesService) {

  }

  ngOnInit() {
  }
  guardar(form:any){

    console.log(form);
    console.log(form.value.nombre);
    console.log(this._pokemon);
    this.pss.newPoken(this._pokemon).subscribe(
      data=>{
        console.log(data);
      },
      error=>{
        console.log(error);
      }

    );

  }

  ///Getters y Setters
  get pokemon(): Pokem {
    return this._pokemon;
  }

  set pokemon(value: Pokem) {
    this._pokemon = value;
  }

}
