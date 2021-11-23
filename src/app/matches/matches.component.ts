import {Component} from "@angular/core";
import {AppService} from "../app.service";
import {Router} from "@angular/router";

@Component({
  templateUrl: 'matches.component.html'
})

export class MatchesComponent{

  error: '';
  match = {id: '' , team1: {}, team2: {}, dateOfMatch: ''};
  matches: Array<any> = [];

  constructor(private app: AppService, private router: Router) {
    this.app.getAllMatches((data: any) => this.matches = <Array<any>>data,
      (error: any) => this.error = error.message);
  }

}
