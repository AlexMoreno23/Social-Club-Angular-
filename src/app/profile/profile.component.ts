import {Component} from '@angular/core';
import {AppService} from 'src/app/app.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './profile.component.html'
})

export class ProfileComponent {
  error = '';
  apiUrl = environment.apiUrl;

  user = {id: '', firstName: '', lastName: ''}

  constructor(private app: AppService, private router: Router) {
    this.app.profile((data: any) => this.user = data,
      (error: any) => this.error = error.message);
  }

  editForm():void {
    this.app.updateUserById(this.user.id, this.user , () => {
      this.router.navigateByUrl('/');
    }, (error: any) => {
      this.error = error.message;
    });
  }



  }

