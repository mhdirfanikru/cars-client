import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users : any

  constructor(private adminService : AdminService) { }

  ngOnInit(): void {
    this.adminService.getUsers().subscribe(data=>{
      this.users = data
    })
  }

}
