import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [ //AQUI ES PARA PODERLOS UTLIZAR
    HeaderComponent
  ],
  exports:[// AQUI ES PARA VERLOS EN LA APLICACION
    HeaderComponent
  ],
  imports: [// VERLO DESDE LAS CARPETAS 
    CommonModule,
    IonicModule

  ]
})
export class ComponentsModule { }
