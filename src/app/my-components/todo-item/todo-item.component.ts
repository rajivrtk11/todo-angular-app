import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  constructor() { }
  @Input() todo : Todo;
  @Input() i : number;
  @Output() todoDelete : EventEmitter<Todo> = new EventEmitter();
  @Output() markCheckBoxEvent : EventEmitter<Todo> = new EventEmitter();
  ngOnInit(): void {
  }

  onClick(todo:Todo){
    console.log("clicking on delete button", todo)
    this.todoDelete.emit(todo);
  }

  onCheckboxClick(todo:Todo){
    this.markCheckBoxEvent.emit(todo);
  }
}
