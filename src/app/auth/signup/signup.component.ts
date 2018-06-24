import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  minDate;
  maxDate;
  constructor() { }

  ngOnInit() {
    this.minDate = new Date();
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear())
    this.minDate.setFullYear(this.minDate.getFullYear() - 90);
  }

  onSubmit(form: NgForm){
    console.log(form);
  }

}
