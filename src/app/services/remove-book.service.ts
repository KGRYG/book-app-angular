import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import * as myGlobals from '../globals';
import {Subject} from 'rxjs/Subject';
import {Book} from '../models/book';

@Injectable()
export class RemoveBookService {
  // bookListChanged = new Subject<Book[]>();

  constructor(private http: Http) { }

  sendBook(bookId: number) {
    const url = myGlobals.BASE_API_URL + '/book/remove';
    const headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, bookId, {headers: headers, withCredentials: true});
  }

}
