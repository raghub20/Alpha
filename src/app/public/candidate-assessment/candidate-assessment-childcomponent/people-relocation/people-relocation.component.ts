import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-relocation',
  templateUrl: './people-relocation.component.html',
  styleUrls: ['./people-relocation.component.scss']
})
export class PeopleRelocationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('people');
  }

}
