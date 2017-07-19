import {Component, OnInit} from '@angular/core';
import {Book} from '../../models/book';
import {GetBookListService} from '../../services/get-book-list.service';
import {Router} from '@angular/router';
import {MdDialog, MdDialogRef} from '@angular/material';
import {RemoveBookService} from '../../services/remove-book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  selectedBook: Book;
  bookList: Book[];
  allChecked: boolean;
  removeBookList: Book[] = [];

  constructor(
    private getBookListService: GetBookListService,
    private removeBookService: RemoveBookService,
    private router: Router,
    public dialog: MdDialog
  ) { }

  ngOnInit() {
    this.getBookList();
  }

  onSelect(book: Book) {
    this.selectedBook = book;
    this.router.navigate(['/viewBook', this.selectedBook.id]);
  }

  openDialog(book: Book) {
    const dialogRef = this.dialog.open(DialogResultExampleDialogComponent);
    dialogRef.afterClosed().subscribe(
      result => {
        if (result === 'yes') {
          this.removeBookService.sendBook(book.id).subscribe(
            res => {
              this.bookList.splice(this.bookList.indexOf(book), 1);
            },
            err => {
              console.log(err);
            }
          );
        }
      }
    );
  }

  updateRemoveBookList(checked: boolean, book: Book) {
    if (checked) {
      this.removeBookList.push(book);
    } else {
      this.removeBookList.splice(this.removeBookList.indexOf(book), 1);
    }
  }

  updateSelected(checked: boolean) {
    if (checked) {
      this.allChecked = true;
      this.removeBookList = this.bookList.slice();
    } else {
      this.allChecked = false;
      this.removeBookList = [];
    }
  }

  removeSelectedBooks() {
    const dialogRef = this.dialog.open(DialogResultExampleDialogComponent);
    dialogRef.afterClosed().subscribe(
      result => {
        if (result === 'yes') {
          for (let book of this.removeBookList) {
            this.removeBookService.sendBook(book.id).subscribe(
              res => {
                this.bookList.splice(this.bookList.indexOf(book), 1);
              },
              err => {
                console.log(err);
              }
            );
          }
        }
      }
    );
  }

  getBookList() {
    this.getBookListService.getBookList().subscribe(
      res => {
        this.bookList = res.json();
      },
      error => {
        console.log(error);
      }
    );
  }
}

@Component({
  selector: 'app-dialog-result-example-dialog',
  templateUrl: './dialog-result-example-dialog.html'
})
export class DialogResultExampleDialogComponent {
  constructor(public dialogRef: MdDialogRef<DialogResultExampleDialogComponent>) {}
}
