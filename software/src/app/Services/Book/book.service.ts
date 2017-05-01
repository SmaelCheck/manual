import { Injectable } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import {Book} from '../../Models/Book/book';


@Injectable()
export class BookService {

  // The Book Collection
  private _books: Book[];

  constructor( private _flashMessagesService: FlashMessagesService) { }

  register(book: Book){

  }

  delete(book: Book){

  }

  getBooks(){

  }

  update(book: Book){

  }
}