import { Component, //OnInit
 } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {//implements OnInit {

  /**constructor() { 
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }*/

  heroes: string[]=['Spiderman','Ironman','Hulk','Thor','Capitan America']
  heroeBorrado: string='';

  borrarHeroe(){
     this.heroeBorrado=this.heroes.pop() || ''; //si es undefined devuelve string vacio
  }
}
