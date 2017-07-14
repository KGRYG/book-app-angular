import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import * as myGlobals from '../globals';

@Injectable()
export class GetBookListService {

  constructor(private http: Http) { }

  getBookList() {
    const url = myGlobals.BASE_API_URL + '/book/bookList';
    const headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.get(url, {headers: headers, withCredentials: true});
  }

}
