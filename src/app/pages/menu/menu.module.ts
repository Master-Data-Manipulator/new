import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'first',
        loadChildren: '../developers/developers.module#DevelopersPageModule'
      },
      {
        path: 'second',
        loadChildren: '../add/add.module#AddPageModule'
      },
       {
        path: 'third',
        loadChildren: '../edit/edit.module#EditPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'menu/first'
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    IonicModule,
  ], exports: [RouterModule],
  declarations: [MenuPage]
})
export class MenuPageModule {}
