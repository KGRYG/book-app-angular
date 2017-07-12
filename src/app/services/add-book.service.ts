import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Book} from '../models/book';
import * as myGlobals from '../globals';

@Injectable()
export class AddBookService {

  constructor(private http: Http) { }

  sendBook(book: Book) {
    let url = myGlobals.BASE_API_URL + '/book/add';
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, JSON.stringify(book), {headers: headers});
  }

}
