import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import HeroeComponent from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations:[ //los componentes que tengo
            HeroeComponent,
            ListadoComponent
    ],
    //cosas visibles fuera del modulo, cosas publicas
    exports:[
        ListadoComponent
    ], 
    //modulos
    imports:[
        CommonModule
    ]


})
export class HeroesModule{}