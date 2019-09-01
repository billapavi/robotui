import { Component, OnInit, Output, OnChanges } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-cusdate',
  templateUrl: './cusdate.component.html',
  styleUrls: ['./cusdate.component.css' ]
})
export class CusdateComponent implements OnChanges {
  cusdate= new Date();;
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log(this.cusdate);
    console.log(this.bsInlineValue);
  }
  modi(date:any):void
  {
    console.log('onc click called'+date);
  }
  bsInlineValue = new Date();
  @Output() public chaildEvent = new EventEmitter();
}
