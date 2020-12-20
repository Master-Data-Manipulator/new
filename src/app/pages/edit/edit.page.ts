import { DatabaseService, Dev } from './../../services/database.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { IonReorderGroup } from '@ionic/angular';
import { ItemReorderEventDetail } from '@ionic/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit{
  @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;



  numbers = ['1', '2', '3', '4', '5', '6'];
  developers: Dev[] = [];
  items = [];
  products: Observable<any[]>;

  result = [];

  developer = {};
  product = {};

  selectedView = 'devs';




  constructor(private db: DatabaseService) {}

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


  reorderItems(event) {
    console.log(event);
    console.log(`Moving item from ${event.detail.from} to ${event.detail.to}`);
    const itemMove = this.developers.splice(event.detail.from, 1)[0];
    this.developers.splice(event.detail.to, 0, itemMove);
    event.detail.complete();
  }
}