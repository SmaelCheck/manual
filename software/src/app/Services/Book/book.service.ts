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
     // Test if this variable is object
    if(this._isObject(book)){
        // Create a book instance to save these data;
        let abook = this._instanceCreate(book);

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
    // Variable isn't an object
    else{
        this._flashMessagesService.show('Erreur : veuillez renseigner correctement ces champs en respectant ces propres formats.',
            {cssClass:'alert-danger',timeout:6000}
        );
    }
  }
  private _isObject(obj:any): Boolean{
      return typeof obj === 'object' ? true: false ;
  }
  private _isValid(book:any): Boolean{
      if(book.title.length <= 0 || book.author.name.length <= 0 || book.pub_date.length <= 0){
          return false;
      }
      return true;
  }

    /**
     *
     * @param book
     * @returns {Book}
     * @private
     */
  private _instanceCreate(book:any):Book{
      let abook: Book;
      abook.title     = book.title;
      abook.author    = book.author;
      abook.pub_date  = book.pub_date;
      // return a book instance
      return abook;
  }
  delete(book: Book){}
  getBooks()/*: Book[]*/{}
  update(book: Book){}
}