import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/service/auth.service';
import { ApiResponse } from 'src/app/interface';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) {}


    //admin login
    adminLogin(email: string, password: string) {
      const data = {
        email,
        password,
      };
      return this.http.post<ApiResponse>(`http://localhost:5000/api/admin/login`, data).pipe(
        tap((data) => {
          if (data.success) {
            this.authService.setAdminToken(data.adminToken);
          }
        })
      );
    }

    getCars(){
      return this.http.get('http://localhost:5000/api/admin/cars')
    }

    getUsers(){
      return this.http.get('http://localhost:5000/api/admin/users')
    }
}
