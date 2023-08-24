import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/service/auth.service';
import { ApiResponse, userData } from 'src/app/interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {







  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router : Router
  ) {}


    //user login
    userLogin(email: string, password: string) {
      const data = {
        email,
        password,
      };
      return this.http.post<ApiResponse>(`http://localhost:5000/api/login`, data).pipe(
        tap((data) => {
          console.log(data)
          if (data.success) {
            this.authService.setUserToken(data.token);
          }
        })
      );
    }

    registerUser(userDetails: userData) {
      return this.http.post<ApiResponse>(`http://localhost:5000/api/register`, userDetails).pipe(
        tap((data) => {
          data.success ? this.router.navigate(['/user/login']) : '';
        })
      );
    }

    getCars(){
      return this.http.get('http://localhost:5000/api/cars')
    }



}
