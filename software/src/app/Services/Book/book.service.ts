import { Injectable } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import {Book} from '../../Models/Book/book';
import  'rxjs/Rx';

@Injectable()
export class BookService {

  // The Book Collection
  private _books: Book[];

  constructor(
      private _flashMessagesService: FlashMessagesService
  ) { }

  register(book: any){
    if(book.title.length < 0 || book.author.name.length < 0 || book.pub_date.length < 0){
        // Create a book instance or object to save these data;
        let abook: Book;
        abook.title     = book.title;
        abook.author    = book.author;
        abook.pub_date  = book.pub_date;

        // If the data were successfully saved.
        if(abook.save()){
            this._flashMessagesService.show('The data from book\'s form was was successfully saved.',
                {cssClass:'alert-success',timeout:6000}
            ); // return this._router.navigate(['/form']);
        }
        // Else i display an error message.
        else this._flashMessagesService.show('Error : please fill correctly the fields.',
                {cssClass:'alert-danger',timeout:10000});
    }
  }

  delete(book: Book){

  }

  getBooks(){

  }

  update(book: Book){

  }
}