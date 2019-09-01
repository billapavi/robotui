import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';



@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  private gapUP: String[];
  private gapDw: String[];
  private topGN: String[];
  private topLS: String[];
  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  getSummary(): void{
    
    console.log('getsummary called..')
    this.userService.summaryDetails().subscribe(data=>{
      console.log(data)
      this.gapDw= data.gd;
      this.gapUP = data.gu;
      this.topGN = data.tg;
      this.topLS = data.tl;
      alert("summary Created successfully.."+data.gu)
    })
  }

}
