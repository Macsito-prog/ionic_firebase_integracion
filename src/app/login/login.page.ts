import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { UserI } from '../models/modell';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  ionicForm : FormGroup;
  datos: UserI = {
    nombre: null,
    edad: null,
    corrreo: null,
    uid: null,
    contra: null,
    perfil: 'Usuario normal'
  }

  constructor(private user : UserService,
    public formBuilder:FormBuilder,
    private route:Router) {
    this.ionicForm = new FormGroup({
      email : new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit() {
  }
  submitForm(){
    this.user.login(this.ionicForm.value)
      .then(response => {
        console.log(response);
        this.route.navigate(['/dashboard'])
      })
      .catch(error => console.log(error));
  }

  logWithGoogle(){
    this.user.loginWithGoogle()
    .then(response=>{
      console.log(response)
      this.route.navigate(['/dashboard'])
    })
    .catch(error => console.log(error))

  }
}
