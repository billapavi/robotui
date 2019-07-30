import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todo =[
   { id: 1, descrpition: 'learn to fun'},
   { id: 2, descrpition: 'learn to fun'},
   { id: 3, descrpition: 'learn to fun'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
