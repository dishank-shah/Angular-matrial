import { Component, OnInit } from '@angular/core';
import { item } from '../item-model.model';
import { ItemServiceService } from '../item-service.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  itemList: Array<item>;
  constructor(itemService: ItemServiceService) {
    itemService.getItems().subscribe((items) => {
      this.itemList = items;
    });
  }

  ngOnInit() {
  }

}
