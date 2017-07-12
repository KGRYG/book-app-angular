import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private credential = {'username': '', 'password': ''};

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.sendCredentials(this.credential.username, this.credential.password)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('xAuthToken', res.json().token);
          this.router.navigate(['/']);
        },
        error => {
          console.log(error);
        }
      );
  }
}
