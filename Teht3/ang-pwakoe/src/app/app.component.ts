import { Component, OnInit, inject } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'ang-pwakoe';

  ts = inject(TodoService);
  json!: Todo;

  ngOnInit(): void {
    this.ts
      .getTodos()
      .then((response) => response.json())
      .then((json) => (this.json = json));
  }
}
