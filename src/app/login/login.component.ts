import {Component} from '@angular/core';
import {AppService} from 'src/app/app.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';

@Component({
  selector: './app.component.css',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  error = '';
  apiUrl = environment.apiUrl;
  credentials = {username: '', password: ''};


  constructor(private app: AppService, private http: HttpClient, private router: Router) {
  }

  login() {
    this.app.authenticate(this.credentials, () => {
      this.router.navigateByUrl('/');
    }, (error: any) => {
      this.error = error.message;
    });
    return false;
  }

}
