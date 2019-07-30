import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl:string ='http://localhost:2011/api/demo';
  // private userUrl:string ='https://kite.trade/connect/login?api_key=1eemehdad6ljgh42';

  constructor(private http:HttpClient) { }

  public createUser(user : User): Observable<User> {
    console.log("mehtod callded..")
    return this.http.post<User>(this.userUrl,user);
    // return this.http.get<User>(this.userUrl);
  }
}
