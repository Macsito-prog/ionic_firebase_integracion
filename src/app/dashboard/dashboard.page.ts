import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private user:UserService,
    private route:Router) { }

  ngOnInit() {
  }

  onClick(){
    this.user.logout()
    .then(()=>{
      this.route.navigate(['/home'])
    })
    .catch(error => console.log(error))
  }
}
