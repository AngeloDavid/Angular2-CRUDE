import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(private ruta:Router) { }

  ngOnInit() {
  }

  public buscar( text:string){
    this.ruta.navigate(['buscar',text]);
    console.log(text);
  }
}
