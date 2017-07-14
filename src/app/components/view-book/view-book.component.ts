import { Component, OnInit } from '@angular/core';
import {Book} from '../../models/book';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {GetBookService} from '../../services/get-book.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {

  book: Book = new Book();
  bookId: number;

  constructor(private getBookService: GetBookService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.bookId = Number.parseInt(params['id']);
      }
    );
    this.getBookService.getBook(this.bookId).subscribe(
      res => {
        this.book = res.json();
      },
      error => {
        console.log(error);
      }
    );
  }

  onSelect() {
    this.router.navigate(['/editBook', this.book.id]);
  }

}
