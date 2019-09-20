import { Component, OnInit } from '@angular/core';
import { UserService, LoadDayOrMinData } from '../user/user.service';
import { DatePipe } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  private gporgd : String;
  private loadingData : LoadDayOrMinData;
  private gapUP: String[];
  private gapDw: String[];
  private topGN: String[];
  private topLS: String[];
  private expDate : Date;
  private dateStr : String;
  summarydataform = new FormGroup({
    updw: new FormControl(new String("up")),
  });
  constructor(private userService: UserService,private datepipe:DatePipe) { }

  ngOnInit() {
  }

  getSummary(): void{
    
    
    this.dateStr = this.expDate.getDate().toString()+' '+this.expDate.getMonth().toString()+' '+this.expDate.getFullYear().toString();

    console.log('getsummary called..'+this.expDate+this.dateStr)

    this.userService.summaryDetails().subscribe(data=>{
      console.log(data)
      this.gapDw= data.gd;
      this.gapUP = data.gu;
      this.topGN = data.tg;
      this.topLS = data.tl;
      alert("summary Created successfully.."+data.gu)
    })

  }
  loadDataRest(loaddayorMin : LoadDayOrMinData) :void
  {
    var ddmmyy = this.datepipe.transform(this.expDate,"yyyy-MM-dd");
    this.loadingData = new LoadDayOrMinData();
    this.loadingData.stockName=this.summarydataform.value.updw;
    this.loadingData.fromDate = ddmmyy;
    this.loadingData.exchange ="FO";
    console.log(this.loadingData.exchange+"ha ha ha "+ddmmyy);
    this.userService.findGapUporDown(this.loadingData).subscribe(data=>{
     console.log(data)
     this.gporgd=data.dataloaded;
    });
  }
}
