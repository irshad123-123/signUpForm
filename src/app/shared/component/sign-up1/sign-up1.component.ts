import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-sign-up1',
  templateUrl: './sign-up1.component.html',
  styleUrls: ['./sign-up1.component.scss']
})
export class SignUp1Component implements OnInit {
  @ViewChild('formRef') formRef ! : NgForm
  constructor() { }

  ngOnInit(): void {
  }
  onSignUp(){
    console.log(this.formRef);
    
  }

}
