import {Component} from "@angular/core";
import {AppService} from "../app.service";
import {Router} from "@angular/router";

@Component({
  templateUrl:'add_ticket.component.html'
})
export class AddTicketComponent{

  error: '';
  ticket: {match: {}, row: '', sets: '', price: 0}
  match = {id: '' , team1: {}, team2: {}, dateOfMatch: ''};
  matches: Array<any> = []


  constructor(private app: AppService, private router: Router) {
    this.app.getAllMatches((data: any) => this.matches = <Array<any>>data,
      (error: any) => this.error = error.message);
  }

  addTicket(){
    this.app.addTicket(this.ticket,() => {
      this.router.navigateByUrl('/');
    }, (error: any) => {
      this.error = error.message;
    });
  }

}
