import {Component} from "@angular/core";
import {AppService} from "../app.service";
import {Router} from "@angular/router";

@Component({
  templateUrl: 'friends.component.html'
})

export class FriendsComponent{
error: '';
user: {id: '', friends:any[]};


constructor(private app:AppService, private router: Router) {
  this.app.profile((data: any) => this.user = data,
    (error: any) => this.error = error.message);


}

}
