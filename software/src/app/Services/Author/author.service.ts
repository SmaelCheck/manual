import { Injectable } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import {Author} from '../../Models/Author/author';


@Injectable()
export class AuthorService {

  // The Book Collection
  private _authors: Author[];

  constructor( private _flashMessagesService: FlashMessagesService) { }

  register(author: Author){}


  delete(author: Author){}

  getAuthors(){}

  update(author: Author){}

}