import { Injectable } from '@angular/core';
import * as myGlobals from '../globals';

@Injectable()
export class UploadImageService {

  constructor() {
  }

  upload(bookId: number, filesToUpload: Array<File>) {
    this.makeFileRequest(myGlobals.BASE_API_URL + '/book/add/image?id=' + bookId, [], filesToUpload).then(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  modify(bookId: number, filesToUpload: Array<File>) {
    if (filesToUpload.length > 0) {
      this.makeFileRequest(myGlobals.BASE_API_URL + '/book/update/image?id=' + bookId, [], filesToUpload).then((result) => {
    }, (error) => {
      console.log(error);
    });
    }
  }

  makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
    return new Promise((resolve, reject) => {
      var formData: any = new FormData();
      var xhr = new XMLHttpRequest();
      for (var i = 0; i < files.length; i++) {
        formData.append('uploads[]', files[i], files[i].name);
      }
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log('image uploaded successfully!');
          } else {
            reject(xhr.response);
          }
        }
      }
      xhr.open('POST', url, true);
      xhr.withCredentials = true;
      xhr.setRequestHeader('X-XSRF-TOKEN', this.getCookie('XSRF-TOKEN'));
      xhr.setRequestHeader('x-auth-token', localStorage.getItem('xAuthToken'));
      xhr.send(formData);
    });
  }

  getCookie(cname) {
    var name = cname + '=';
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for ( var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }

}
