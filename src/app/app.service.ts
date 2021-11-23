import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from "../environments/environment";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AppService {
  authenticated = false;
  public userAuth = {id: '', firstName: '', lastName: '', email: '', role: ''};


  constructor(private http: HttpClient) {
  }

  public getNews(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/api/news`);
  }

  logout(successCallback: any, failureCallback: any) {
    this.sendRequest(`${environment.apiUrl}/logout`, {}, {}, 'post', (response: any) => {
      this.authenticated = false;
      return successCallback && successCallback(response);
    }, (e: any) => {
      return failureCallback && failureCallback(e.error);
    });
  }

  authenticate(credentials: any, successCallback: any, failureCallback: any) {
    const headers = new HttpHeaders(credentials ? {
      authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});

    this.sendRequest(`${environment.apiUrl}/api/auth`, {}, headers, 'post', (response: any) => {
      this.authenticated = true;
      return successCallback && successCallback(response);
    }, (e: any) => {
      this.authenticated = false;
      return failureCallback && failureCallback(e.error);
    });

  }

  private sendRequest(url: string, body: object, headers: object, method: string, successCallback: any, failureCallback: any) {
    let options: object = {
      body: body,
      headers: headers,
      withCredentials: true
    };

    this.http.request(method, url, options)
      .toPromise()
      .then((response: any) => {
        return successCallback && successCallback(response);
      }).catch((e) => {
        return failureCallback && failureCallback(e);
      }
    );
  }

  registr(user: any, successCallback: any, failureCallback: any) {
    this.sendRequest(`${environment.apiUrl}/api/v1/registration`, user, {}, 'post', (response: any) => {
      return successCallback && successCallback(response);
    }, (e: any) => {
      return failureCallback && failureCallback(e.error);
    });
  }

  profile(successCallback: any, failureCallback: any) {
    return this.sendRequest(`${environment.apiUrl}/api/auth`, {}, {}, 'get', (response: any) => {
      return successCallback && successCallback(response);
    }, (e: any) => {
      return failureCallback && failureCallback(e.error)
    })
  }

  getAllNews(successCallback: any, failureCallback: any) {
    this.sendRequest(`${environment.apiUrl}/api/news`, {}, {}, 'get', (response: any) => {
      return successCallback && successCallback(response);
    }, (e: any) => {
      return failureCallback && failureCallback(e.error)
    })
  }

  addNews(news: any, successCallback: any, failureCallback: any) {
    this.sendRequest(`${environment.apiUrl}/api/news`, news, {}, 'post', (response: any) => {
      return successCallback && successCallback(response);
    }, (e: any) => {
      return failureCallback && failureCallback(e.error);
    });
  }


  getNewsByTitle(title: string) {
    return this.http.get<any>(`${environment.apiUrl}/api/news/${title}`, {})

  }

  updateUserById(id: any, user: any, successCallback: any, failureCallback: any) {
    this.sendRequest(`${environment.apiUrl}/api/user/${id}`, user, {}, 'put', (response: any) => {
      return successCallback && successCallback(response);
    }, (e: any) => {
      return failureCallback && failureCallback(e.error);
    });
  }


  getAllTeam(successCallback: any, failureCallback: any) {
    this.sendRequest(`${environment.apiUrl}/api/club`, {}, {}, 'get', (response: any) => {
      return successCallback && successCallback(response);
    }, (e: any) => {
      return failureCallback && failureCallback(e.error);
    });
  }

  addTeam(club: any, successCallback: any, failureCallback: any) {
    this.sendRequest(`${environment.apiUrl}/api/club`, club, {}, 'post', (response: any) => {
      return successCallback && successCallback(response);
    }, (e: any) => {
      return failureCallback && failureCallback(e.error);
    });
  }

  addMatch(match: any, successCallback: any, failureCallback: any) {
    this.sendRequest(`${environment.apiUrl}/api/match`, match, {}, 'post', (response: any) => {
      return successCallback && successCallback(response);
    }, (e: any) => {
      return failureCallback && failureCallback(e.error);
    });
  }

  getAllMatches(successCallback: any, failureCallback: any) {
    this.sendRequest(`${environment.apiUrl}/api/match`, {}, {}, 'get', (response: any) => {
      return successCallback && successCallback(response);
    }, (e: any) => {
      return failureCallback && failureCallback(e.error);
    });
  }

  getAllUsers(successCallback: any, failureCallback: any) {
    this.sendRequest(`${environment.apiUrl}/api/user`, {}, {}, 'get', (response: any) => {
      return successCallback && successCallback(response);
    }, (e: any) => {
      return failureCallback && failureCallback(e.error);
    });
  }

  getFriends(id: any, successCallback: any, failureCallback: any) {
    this.sendRequest(`${environment.apiUrl}/api/user/${id}/friends`, id, {}, 'get', (response: any) => {
      return successCallback && successCallback(response);
    }, (e: any) => {
      return failureCallback && failureCallback(e.error);
    });
  }

  addFriend(userId: any, friendId: any, successCallback: any, failureCallback: any) {
    this.sendRequest(`${environment.apiUrl}/api/user/${userId}/add/${friendId}`, {}, {}, 'put', (response: any) => {
      return successCallback && successCallback(response);
    }, (e: any) => {
      return failureCallback && failureCallback(e.error);
    });
  }

  topBalance(id: any, balance:any, successCallback: any, failureCallback: any) {
this.sendRequest(`${environment.apiUrl}/api/user/${id}/balance`, balance, {}, 'put', (response: any) => {
  return successCallback && successCallback(response);
}, (e: any) => {
  return failureCallback && failureCallback(e.error);
});
  }

  addTicket(ticket: any, successCallback: any, failureCallback: any){
    this.sendRequest(`${environment.apiUrl}/api/ticket`, ticket, {}, 'post', (response: any) => {
      return successCallback && successCallback(response);
    }, (e: any) => {
      return failureCallback && failureCallback(e.error);
    });

  }


}
