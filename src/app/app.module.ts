import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from "@angular/router";

/**
 * [DOC]
 * All application components should be imported here and added
 * to 'declarations' property in @NgModule. To be able to go
 * to one of this components  you should also add them to routes array
 */
import {HomeComponent} from 'src/app/home/home.component';
import {LoginComponent} from 'src/app/login.component';
import {AppComponent} from './app.component';
import {RegistrationComponent} from 'src/app/registration/registration.component'
import {ProfileComponent} from 'src/app/profile/profile.component'
import {NewsComponent} from 'src/app/news/news.component'


/**
 * [DOC]
 * Services contain some logic for example http requests sending
 * They should be added to property 'providers' in @NgModule
 */
import {AppService} from './app.service';

/**
 * [DOC]
 * Following modules are from Angular Material UI
 * You can find all the available components on the official website
 * https://material.angular.io/
 * New modules should be added to property 'imports' in @NgModule
 */
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';

import {MatTableModule} from "@angular/material/table";
import {AddTeamComponent} from "./add_team/add-team.component";
import {TeamComponent} from "./team/team.component";
import {AddMatchComponent} from "./add_match/add_match.component"
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSelectModule} from "@angular/material/select";
import { MatNativeDateModule } from '@angular/material/core';
import {AddFriendsComponent} from "./add_friends/add_friends.component";
import {FriendsComponent} from "./friends/friends.component";
import {BalanceComponent} from "./top_balance/balance.component"
import {AddTicketComponent} from "./add_ticket/add_ticket.component"
import {MatchesComponent} from "./matches/matches.component";



/**
 * [DOC]
 * This array contains urls and corresponding controllers
 * that will be loaded when user redirected to specified url
 * code example:
 *      <a [routerLink]="['/home']">Home</a>
 * or
 *      router.navigateByUrl('/home')
 */
const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'news', component: NewsComponent},
  {path: 'add-add_team', component: AddTeamComponent},
  {path: 'team', component: TeamComponent},
  {path: 'add_match', component: AddMatchComponent},
  {path: 'add_friends', component: AddFriendsComponent},
  {path: 'friends', component: FriendsComponent},
  {path: 'balance', component: BalanceComponent},
  {path: 'add_ticket', component: AddTicketComponent},
  {path: 'all_matches', component: MatchesComponent}


];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    ProfileComponent,
    NewsComponent,
    AddTeamComponent,
    TeamComponent,
    AddMatchComponent,
    AddFriendsComponent,
    FriendsComponent,
    BalanceComponent,
    AddTicketComponent,
    MatchesComponent

  ],
  imports: [
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatCardModule,
    MatTooltipModule,
    MatTableModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule


  ],
  providers: [AppService],

  bootstrap: [AppComponent]
})
export class AppModule {
}
