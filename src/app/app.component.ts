import { Component } from '@angular/core';

import { PoMenuItem, PoToolbarAction, PoToolbarProfile } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentUser = null;

  readonly profile: PoToolbarProfile = {
    title: '',
    subtitle: '',
    avatar: ''
  };

  readonly notificationActions: Array<PoToolbarAction> = [];

  readonly profileActions: Array<PoToolbarAction> = [
    { icon: 'po-icon po-icon-user', label: 'Perfil', url: 'profile' },
    { icon: 'po-icon po-icon-exit', label: 'Sair', type: 'danger', separator: true, action: () => { }}
  ];

  readonly menus: Array<PoMenuItem> = [
    { shortLabel: 'Modulo 1', label: 'Modulo 1', link: '/module1', icon: 'po-icon po-icon-company' },
    { shortLabel: 'Modulo 2', label: 'Modulo 2', link: '/module2', icon: 'po-icon po-icon-money' },
    { shortLabel: 'Sair', label: 'Sair', action: null, icon: 'po-icon po-icon-exit' }
  ];




  private onClick() {
    alert('Clicked in menu item')
  }

}
