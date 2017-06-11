import { Injectable } from '@angular/core';
import {Pokem} from "../interfaces/pokem";
import { Http,Headers } from '@angular/http';
import 'rxjs/Rx'


@Injectable()
export class PokeServicesService {
  PokenBDD:string ="https://pokeapp-af-tp.firebaseio.com/pokeapp-af-tp.json";

  constructor( private _http:Http) { }

  newPoken(nuevo:Pokem){
    let body=JSON.stringify(nuevo);
    console.log(body);
    let headers1=new Headers({
      'Content-type': 'application/json'
    });

    return this._http.post(this.PokenBDD,body,{headers:headers1})
      .map(res=>{
        console.log("hola");
        console.log(res.json);
        return  res.json;
      });

  }
  
  getPk(){
    return this._http.get(this.PokenBDD).map(respose=>respose.json());
  }

}
