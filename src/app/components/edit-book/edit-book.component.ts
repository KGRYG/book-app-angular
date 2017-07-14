import { Component, OnInit } from '@angular/core';
import {Book} from '../../models/book';
import {UploadImageService} from '../../services/upload-image.service';
import {GetBookService} from '../../services/get-book.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {EditBookService} from '../../services/edit-book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  bookId: number;
  book: Book = new Book();
  bookUpdated = false;
  filesToUpload: Array<File> = [];
  languages: string [] = ['English', 'Spanish'];
  categories: string [] = ['Management', 'Fiction', 'Engineering', 'Programming', 'Arts & Literature'];
  formats: string [] = ['Paperback', 'Hardcover', 'E-book'];

  constructor(
    private uploadImageService: UploadImageService,
    private editBookService: EditBookService,
    private getBookService: GetBookService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.bookId = Number.parseInt(params['id']);
    });

    this.getBookService.getBook(this.bookId).subscribe(
      res => {
        this.book = res.json();
      },
      error => console.log(error)
    )
  }

  onSubmit() {
    this.editBookService.sendBook(this.book).subscribe(
      data => {
        if (this.filesToUpload.length > 0) {
          this.uploadImageService.modify(data.json().id, this.filesToUpload);
        }
        this.bookUpdated = true;
      },
      error => console.log(error)
    );
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>> fileInput.target.files;
  }


}
