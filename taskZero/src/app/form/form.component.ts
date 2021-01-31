import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { Student } from '../student';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  
  
  constructor(private shared:SharedService,
    private http: HttpClient) { }

  student = new Student(0,'','','','','','','');
  private signupData:any;

  ngOnInit(): void {
    this.signupData = this.shared.getSignUpData();
    if(this.signupData !== undefined){
      this.student.Email =  this.signupData.email;
      this.student.Country = this.signupData.country;
    }
  }


  SubmitClick():void{
    console.log(this.student);

    
    //save in Maria DB database AWS
    //Post data
    // const headers = { 'Authorization': 'Bearer my-token' };
    // const body = { title: 'Angular POST Request Example' };
    // this.http.post<any>('https://jsonplaceholder.typicode.com/posts', body, { headers }).subscribe({
    //   next: data => {

    //             },
    //           error: error => {
    //           console.error('There was an error!', error);
    //       }
    // });

  }

}
