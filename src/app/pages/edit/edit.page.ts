import { DatabaseService, Dev } from './../../services/database.service';
import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { IonReorderGroup } from '@ionic/angular';
import { ItemReorderEventDetail } from '@ionic/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage{
  @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;



  numbers = ['1', '2', '3', '4', '5', '6'];
  developers: Dev[] = [];
  items = [];
  products: Observable<any[]>;

  result = [];

  developer = {};
  product = {};

  selectedView = 'devs';




  constructor(private db: DatabaseService) { }

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