import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {environment} from "../../environments/environment";

import {HttpClient} from "@angular/common/http";
import {AppService} from "../app.service";



@Component({
  selector: 'app-root',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent{
  user = {firstName: null, lastName: null, email: null, password: null}
  error = '';
  apiUrl = environment.apiUrl;



  constructor(private app: AppService, private http: HttpClient, private router: Router) {

  }

  registration(){
    this.app.registr(this.user, () => {
      this.router.navigateByUrl('/')
      return
    }, (error: any) => {
      this.error=error.message;
    })
    this.router.navigate(['/login'])
  }
}

