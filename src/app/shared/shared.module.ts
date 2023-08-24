import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './service/auth.service';



@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [    
    AuthService,
  ],
})
export class SharedModule { }
