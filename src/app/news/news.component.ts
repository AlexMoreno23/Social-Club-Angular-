import {AppService} from "../app.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Component} from "@angular/core";




@Component({
  templateUrl: './news.component.html'
})
export class NewsComponent {


  error = '';

  news = {title: '', text: '', author: [{}]};

  constructor(private app: AppService, private http: HttpClient, private router: Router) {
    this.app.profile((data: any) => this.news.author = data,
      (error: any) => this.error = error.message);
  }



  addNews() {
    this.app.addNews(this.news, () => {
      this.router.navigateByUrl('/');
    }, (error: any) => {
      this.error = error.message;
    });
  }
}
