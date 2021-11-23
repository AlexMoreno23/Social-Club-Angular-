import {Component} from "@angular/core";
import {AppService} from "../app.service";
import {Router} from "@angular/router";
import {DateAdapter, MAT_DATE_FORMATS} from "@angular/material/core";


@Component({
  selector: 'app-root',
  templateUrl: './add_match.component.html'
})


export class AddMatchComponent{
  error = '';
  match = {id: '' , team1: {}, team2: {}, dateOfMatch: ''};
  clubs: Array<any>  = [];

  constructor(private app: AppService, private router: Router) {
    this.app.getAllTeam((data: any) => this.clubs = <Array<any>>data,
      (error: any) => this.error = error.message);
  }

  addMatch(){
    this.app.addMatch(this.match,() => {
      this.router.navigateByUrl('/');
    }, (error: any) => {
      this.error = error.message;
    });
  }

}
