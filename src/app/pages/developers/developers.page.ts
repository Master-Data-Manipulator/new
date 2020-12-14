import { DatabaseService, Dev } from './../../services/database.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { IonReorderGroup } from '@ionic/angular';
import { ItemReorderEventDetail } from '@ionic/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-developers',
  templateUrl: './developers.page.html',
  styleUrls: ['./developers.page.scss'],
})
export class DevelopersPage implements OnInit {
  @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;


  numbers = ['1', '2', '3', '4', '5', '6'];
  developers: Dev[] = [];
  items = [];
  products: Observable<any[]>;

  result = [];

  developer = {};
  product = {};

  selectedView = 'devs';

  
  

  constructor(private db: DatabaseService, private menu: MenuController) {}

//menu
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

//data-base
  ngOnInit() {
    this.db.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.db.getDevs().subscribe(devs => {
          this.developers = devs;
        })
        this.products = this.db.getProducts();
      }
    });
  }

  addDeveloper() {
    let skills = this.developer['skills'].split(',');
    skills = skills.map(skill => skill.trim());

    this.db.addDeveloper(this.developer['name'], skills, this.developer['img'])
      .then(_ => {
        this.developer = {};
      });
  }

  addProduct() {
    this.db.addProduct(this.product['name'], this.product['creator'])
      .then(_ => {
        this.product = {};
      });
  }
}