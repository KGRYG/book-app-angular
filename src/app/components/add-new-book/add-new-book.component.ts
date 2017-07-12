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
  private newBook: Book = new Book();
  private bookAdded = false;

  constructor(private addBookService: AddBookService,
              private uploadImageService: UploadImageService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.addBookService.sendBook(this.newBook).subscribe(
      res => {
        this.uploadImageService.upload(JSON.parse(JSON.parse(JSON.stringify(res))._body).id);
        this.bookAdded = true;
        this.newBook = new Book();
        this.newBook.active = true;
        this.newBook.category = 'Management';
        this.newBook.language = 'english';
        this.newBook.format = 'paperback';
      },
      error => {
        console.log(error);
      }
    );
  }

}
