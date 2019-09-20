import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoadDayOrMinData, UserService } from '../user/user.service';
import { datepickerAnimation } from 'ngx-bootstrap/datepicker/datepicker-animations';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-load-data',
  templateUrl: './load-data.component.html',
  styleUrls: ['./load-data.component.css']
})
export class LoadDataComponent implements OnInit {
  private dayDropDown : string;
  private loadingData : LoadDayOrMinData;
  private from : Date = new Date();
  private to : Date = new Date();
  minForm = new FormGroup({
    exchange: new FormControl(new String("FO")),
    daydrp: new FormControl(new String("minute")),
    dateRange: new FormControl([new Date(), new Date()])
  });
  dayForm = new FormGroup({
    
    key: new FormControl(new String("hi"))
  });
  constructor(private datepipe:DatePipe,private userService : UserService) { }

  ngOnInit() {
    
  }
  loadDayData(keyString:string) : void
  {
    console.log(this.dayForm);
    this.userService.activate(keyString).subscribe(data=>{
      console.log(data)
    });
    alert("load Day data called"+this.dayForm.value.key)
  }
  loadMinData() : void
  {
    
    this.loadingData = new LoadDayOrMinData();
    var ddmmyy = this.datepipe.transform(this.minForm.value.dateRange[0],"yyyy-MM-dd");
    var toddmmyy = this.datepipe.transform(this.minForm.value.dateRange[1],"yyyy-MM-dd");
    console.log("converted from: "+ddmmyy+"converted to: "+toddmmyy +" "+this.minForm.value.daydrp);
    this.loadingData.fromDate = ddmmyy;
    this.loadingData.toDate = toddmmyy;
    this.userService.loadDataRest(this.loadingData).subscribe(data=>{
      console.log(data)
    })
    console.log("load Min data called "+this.loadingData.toDate)

  }
  loadDataRest(loaddayorMin : LoadDayOrMinData) :void
  {
    this.loadingData = new LoadDayOrMinData();
    console.log(this.loadingData.exchange)
    //this.userService.loadDataRest(loaddayorMin).subscribe(data=>{
    // console.log(data)
    //});
  }
}
