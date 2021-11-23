import {Component} from "@angular/core";

import {AppService} from "../app.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './add-team.component.html'
})

export class AddTeamComponent {
  error = '';
  club ={nameTeam: ''}

  constructor(private app: AppService, private router: Router) {

  }
  addClub(){
    this.app.addTeam(this.club, () => {
      this.router.navigateByUrl('/');
    }, (error: any) => {
      this.error = error.message;
    });
  }

}
