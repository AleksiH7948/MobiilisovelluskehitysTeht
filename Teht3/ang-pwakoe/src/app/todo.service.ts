import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  apiurl: string = 'https://jsonplaceholder.typicode.com/todos/1';
  constructor() {}

  // getTodo-metodi palauttaa promisen, joka on
  // Response-tyyppinen.
  getTodos(): Promise<Response> {
    return fetch(this.apiurl);
  }
}
