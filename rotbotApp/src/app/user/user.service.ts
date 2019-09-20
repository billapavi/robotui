import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { cleanSession } from 'selenium-webdriver/safari';
import { defaultDayOfMonthOrdinalParse } from 'ngx-bootstrap/chronos/locale/locale.class';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})


export class UserService {

  private userUrl:string ='http://localhost:2011/api/load';
  private updw:string ='http://localhost:2011/api/updw';
  private acti:string ='http://localhost:2010/activate';
  private summaryUrl :string ='http://localhost:2011/api/summary';
  private demo:string ='http://infisense.co.in:8080/demo';
  // private userUrl:string ='https://kite.trade/connect/login?api_key=1eemehdad6ljgh42';

  constructor(private http:HttpClient) { }
 private dd: loadDataCls = new loadDataCls();
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
  public loadDataRest(loadData : LoadDayOrMinData): Observable<loadDataCls> {
    console.log("load data mehtod callded..")
    //return this.http.post<loadDataCls>(this.userUrl,loadData); 
    return this.http.post<loadDataCls>(this.userUrl,loadData); 
    // return this.http.get<User>(this.userUrl); 
  }
  public findGapUporDown(loadData : LoadDayOrMinData): Observable<loadDataCls> {
    console.log("load data mehtod callded.."+loadData)
    return this.http.post<loadDataCls>(this.updw,loadData); 
  }
  public activate(loadData : string): Observable<loadDataCls> {
    
    this.dd.dataloaded = loadData;
    console.log("load data mehtod callded.."+loadData)
   

    return this.http.post<loadDataCls>(this.acti,this.dd); 
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
export class loadDataCls
{
  public dataloaded: string;
}
export class LoadDayOrMinData{

  public  fromDate : string = "2019-01-16";
	public  toDate : string = "2019-01-16";
	public  stockName : string = "";
	public  exchange  : string= "FO";
	public  dayormin : string = "day";
}

