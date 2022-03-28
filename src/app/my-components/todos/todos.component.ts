import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  
  localItem:string|null;
  todos:Todo[];
  constructor() { 
    this.todos = []
    this.localItem = localStorage.getItem("todos");
    if(this.localItem === null){
      this.todos = []
    }
    else{
      this.todos = JSON.parse(this.localItem);
    }
  }

  ngOnInit(): void {
  }

  deleteTodo(todo:Todo){
    console.log("inside todos component", todo);
    const idx = this.todos.indexOf(todo);
    this.todos.splice(idx, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  addNewTodo(todo:Todo){
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  handleCheckBox(todo:Todo){
     const idx = this.todos.indexOf(todo);
     this.todos[idx].active = !this.todos[idx].active;
     localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
