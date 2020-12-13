import { DatabaseService, Dev } from './../../services/database.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { IonReorderGroup } from '@ionic/angular';
import { ItemReorderEventDetail } from '@ionic/core';


@Component({
  selector: 'app-certificate-home',
  templateUrl: './certificate-home.component.html',
  styleUrls: ['./certificate-home.component.scss']
})
export class CertificateHomeComponent implements OnInit {
  @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;


  developers: Dev[] = [];
  products: Observable<any[]>;

  developer = {};
  product = {};

  selectedView = 'devs';




  constructor(private db: DatabaseService) { }


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

  doReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    ev.detail.complete();
  }

  toggleReorderGroup() {
    this.reorderGroup.disabled = !this.reorderGroup.disabled;
  }

}