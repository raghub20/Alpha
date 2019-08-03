import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-address',
  templateUrl: './current-address.component.html',
  styleUrls: ['./current-address.component.scss']
})
export class CurrentAddressComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('current address');
  }

}
