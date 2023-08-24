import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars! : any

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.userService.getCars().subscribe(data=>{
      this.cars = data
      console.log(data)
    })
  }

}
