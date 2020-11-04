import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http"
interface Todo {
  title: string;
}

@Component({
  selector: 'nx-todo-schematic-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todos: Todo[] = [{
    title: 'todo1'
  },
  {
    title: 'todo2'
  }
  ]
  constructor(private http: HttpClient) { }
  //http request to the api and store the resultinside todos array
  // fetch() {
  //   this.http.get<Todo[]>('/api/todos').subscribe((t) => (this.todos = t))
  // }

  //add a new todo with a random number
  addTodo() {
    this.todos.push({
      title: `New Todo.${Math.floor(Math.random() * 1000)}`
    })
  }
  // addTodo() {
  //   this.http.post('/api/addtodos', {}).subscribe(() => {
  //     this.fetch()
  //   })
  // }
}
