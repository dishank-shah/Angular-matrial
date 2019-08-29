import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {

  constructor() { }

  items = [
    {name: 'burger' , price: 50 , description : 'This is test description'},
    {name: 'sandwhich' , price: 80 , description : 'This is test description'},
    {name: 'pizza' , price: 120 , description : 'This is test description'},
    {name: 'pani puri' , price: 20 , description : 'This is test description'},
    {name: 'brade' , price: 55 , description : 'This is test description'},
    {name: 'coke' , price: 40 , description : 'This is test description'},
  ];

  getItems(){
    return of(this.items);
  }
}
