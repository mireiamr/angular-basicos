import { NgModule } from '@angular/core';

import { ContadorComponent } from './contador/contador.component';

@NgModule({
    declarations:[ //los componentes que tengo
        ContadorComponent
    ],
    //cosas visibles fuera del modulo, cosas publicas
    exports:[
        ContadorComponent
    ], 
    //modulos
    imports:[
 
    ]


})
export class ContadorModule{}



