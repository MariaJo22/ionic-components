import { Component, OnInit } from '@angular/core';


interface Componente{
  icon:string;
  name:string;
  redirectTo:string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes: Componente[] =[
    {
      icon:'football-outline',
      name:'Action Sheet',
      redirectTo:'/action-sheet'

    },
    {
      icon:'alert-circle-outline',
      name:'Alert',
      redirectTo:'/alert'

    },
    {
      icon:'beaker-outline',
      name:'Avatar',
      redirectTo:'/avatar'

    },
    {
      icon:'radio-button-off-outline',
      name:'Button',
      redirectTo:'/button'
    },
    {
      icon:'card-outline',
      name:'Cards',
      redirectTo:'/card'
    },
    {
      icon:'checkmark-circle-outline',
      name:'Check',
      redirectTo:'/check-box'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
