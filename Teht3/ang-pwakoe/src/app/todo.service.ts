import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  apiurl: string = 'https://jsonplaceholder.typicode.com/todos/1';
  constructor() {}
}
