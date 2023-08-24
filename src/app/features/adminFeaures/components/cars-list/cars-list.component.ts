import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  @Input() carDetails : any

  constructor() { }

  ngOnInit(): void {
  }

}
