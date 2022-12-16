import { Component } from '@angular/core';
import { MenuItem } from 'src/app/shared/models/menuItem.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  menuItens : Array<MenuItem> = [
    {routerLink: '/', iconName: 'logo-firefox', title: 'Dashboard'},
    {routerLink: '/', iconName: 'home-outline', title: 'Home'},
    {routerLink: '/dividendos', iconName: 'clipboard-outline', title: 'Dividendos'},
    {routerLink: '/vendas', iconName: 'cash-outline', title: 'Vendas'},
    {routerLink: '/ativos', iconName: 'bookmarks-outline', title: 'Ativos'},
  ];

}
