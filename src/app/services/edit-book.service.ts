import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Book} from '../models/book';
import * as myGlobals from '../globals';

@Injectable()
export class EditBookService {

  constructor(private http: Http) { }

  sendBook(book: Book) {
    const url = myGlobals.BASE_API_URL + '/book/update';
    const headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, JSON.stringify(book), {headers: headers, withCredentials: true});
  }
}
