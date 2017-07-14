import {Component, OnInit, ViewChild} from '@angular/core';
import {Book} from '../../models/book';
import {AddBookService} from '../../services/add-book.service';
import {UploadImageService} from '../../services/upload-image.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-new-book',
  templateUrl: './add-new-book.component.html',
  styleUrls: ['./add-new-book.component.css']
})
export class AddNewBookComponent implements OnInit {
  @ViewChild('f') slForm: NgForm;
  newBook: Book = new Book();
  bookAdded = false;
  languages: string [] = ['English', 'Spanish'];
  categories: string [] = ['Management', 'Fiction', 'Engineering', 'Programming', 'Arts & Literature'];
  formats: string [] = ['Paperback', 'Hardcover', 'E-book'];
  filesToUpload: Array<File> = [];

  constructor(private addBookService: AddBookService,
              private uploadImageService: UploadImageService) { }

  ngOnInit() {
    this.newBook.active = true;
    this.newBook.category = this.categories[0];
    this.newBook.language = this.languages[0];
    this.newBook.format = this.formats[0];
  }

  onSubmit() {
    this.addBookService.sendBook(this.newBook).subscribe(
      res => {
        if (this.filesToUpload.length > 0) {
          this.uploadImageService.upload(res.json().id, this.filesToUpload);
        }
        this.bookAdded = true;
      },
      error => {
        console.log(error);
      }
    );
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>> fileInput.target.files;
  }

}
