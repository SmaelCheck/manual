import { Component, OnInit } from '@angular/core';
import {Book} from '../../../Models/Book/book';
import {BookService} from "../../../Services/Book/book.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  private _books: Book[];

  constructor(private _book_service: BookService) { }

  ngOnInit() {
  }

}
