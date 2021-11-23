import {Component, Injectable, OnInit} from "@angular/core";
import {AppService} from "../app.service";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './add_friends.component.html'
})

export class AddFriendsComponent {

  apiUrl = environment.apiUrl;
  error: '';
  user = {id: '', firstName: '', lastName: '', team: {}, roles: ''};
  friends: Array<any> = [];

  constructor(private app: AppService, private router: Router) {
    this.app.getAllUsers((data: any) => this.friends = <Array<any>>data,
      (error: any) => this.error = error.message);
    this.app.profile((data: any) => this.user = data,
      (error: any) => this.error = error.message);
  }


  // addFriends(){
  //   this.app.addFriend(this.user.id, this.allUsers () => {
  //     this.router.navigateByUrl('/');
  //   }, (error: any) => {
  //     this.error = error.message;
  //   });
  // }

  // filter(user => user.id)

}
