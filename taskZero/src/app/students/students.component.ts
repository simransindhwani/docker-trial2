import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public Students = [
    {name:"Mohan",email:"vsmohan4@gmail.com",address:"300 cyberonic , Houston, US, 77027", studentID:"1906017"},
    {name:"Rammm",email:"Ramjdwbjje@gmail.com",address:"300 cyberonic Blvddd, Houston, US, 34222", studentID:"5606566"},
  ]

  refreshClick(){
    //pull data and update Students variable

  }

}
