import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  @ViewChild('signUp') formSign ! :NgForm
  constructor() { }

  ngOnInit(): void {
  }
  onSignUp(){
    console.log(this.formSign);
    
  }

}
