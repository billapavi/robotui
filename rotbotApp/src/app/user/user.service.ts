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
  private summaryUrl:string ='http://localhost:2011/api/summary';
  // private userUrl:string ='https://kite.trade/connect/login?api_key=1eemehdad6ljgh42';

  constructor(private http:HttpClient) { }

  public createUser(user : User): Observable<User> {
    console.log("mehtod callded..")
    return this.http.post<User>(this.userUrl,user);
    // return this.http.get<User>(this.userUrl);
  }
  public summaryDetails(): Observable<mycustomclass> {
    console.log("summaryDetails mehtod callded..")
    return this.http.get<mycustomclass>(this.summaryUrl); 
    // return this.http.get<User>(this.userUrl); 
  }
}
export class mycustomclass{
  public gd: string[];
  public gu: string[];
  public tg: string[];
  public tl: string[];
  constructor(){

  }
}

