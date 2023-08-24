import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars! : any

  constructor(private adminService : AdminService) { }

  ngOnInit(): void {
    this.adminService.getCars().subscribe(data=>{
      this.cars = data
      console.log(data)
    })
  }

}
