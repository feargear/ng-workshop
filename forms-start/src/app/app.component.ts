import { NgForm } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /**
   * If we want to access a local reference in code, we need to use ViewChild
   */

  @ViewChild('formObject') theForm: NgForm;

  defaultQuestion:string = "child";

  answer:string = "";

  genders:string[] = ['male', 'female', 'apache attack helicopter']

  usernamePrefixes:string[] = ['exotic-dancer', 'dung-beetle', 'slave', 'prom-queen', 'daddy'];

  submitted:boolean = false;

  user = {
    username: '',
    password: '',
    securityQuestion: '',
    answer: '',
    gender: ''
  }

  onSubmit() {
    this.submitted = true;
    this.user.username = this.theForm.value.username;
    this.user.password = this.theForm.value.password;
    this.user.securityQuestion = this.theForm.value.secQuestion.securityQuestion;
    this.user.answer = this.theForm.value.answer;
    this.user.gender = this.theForm.value.gender;
  }

  suggestUsername() {
    let randomIndex = Math.random() * this.usernamePrefixes.length - 1;
    randomIndex = Math.abs(Math.ceil(randomIndex));
    console.log();
    // We can patch a value in the form from the code like this.
    this.theForm.form.patchValue({
      username: this.usernamePrefixes[randomIndex] + Math.ceil(Math.random() * 100).toString()
    })
  }
}
