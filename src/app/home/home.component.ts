import {Component} from '@angular/core';
import {AppService} from 'src/app/app.service';
import {environment} from "src/environments/environment";




@Component({
  templateUrl: './home.component.html',



})
export class HomeComponent {

  error = '';
  apiUrl = environment.apiUrl;
  user = {id: '', firstName: '', lastName: '', email: '', roles: '', balance: ''};
  news = {title: '', text: ''};
  allNews: Array<any> = [];

  constructor(private app: AppService) {
    this.app.profile((data: any) => this.user = data,
      (error: any) => this.error = error.message);
    this.app.getAllNews((data: any) => this.allNews = <Array<any>>data,
      (error: any) => this.error = error.message);
  }

  authenticated() {
    return this.app.authenticated;

  }
}

