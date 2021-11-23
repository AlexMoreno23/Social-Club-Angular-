import {Component} from "@angular/core";
import {AppService} from "../app.service";
import { Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: 'team.component.html'
})

export class TeamComponent{
  error: '';
  club:{id: '', nameTeam: ''};
  clubs: Array<any> = [];

  constructor(private app: AppService, private route: Router) {
    this.app.getAllTeam((data: any) => this.clubs = <Array<any>>data,
      (error: any) => this.error = error.message);
  }
}
