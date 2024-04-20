import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { StudentService } from './Services/student.service'; // Import StudentService

@NgModule({
  declarations: [
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule 
  ],
  providers: [StudentService], 
  bootstrap: [
   
  ]
})
export class AppModule { }
