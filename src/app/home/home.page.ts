import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  ionicForm : FormGroup;

  constructor(public formBuilder : FormBuilder,
    private router : Router,
    private user:UserService) {
    this.ionicForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }


  submitForm(){
    this.user.register(this.ionicForm.value)
    .then(response =>{
      console.log(response);
      this.router.navigate(['/login'])
    })
    .catch(error => console.log(error))
  }


}
