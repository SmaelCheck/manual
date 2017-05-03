import { Component, OnInit } from '@angular/core';
import{FormGroup, FormBuilder, Validators} from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import {BookService} from "../../../Services/Book/book.service";
// declarate
declare  var jQuery:any;
@Component({
  selector: 'book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
  providers:[BookService]
})
export class BookFormComponent implements OnInit {
  book: FormGroup;
  title_form: string = 'Formulaire d\'ajout un livre.';

  constructor(
      private _fb: FormBuilder,
      private _fs: FlashMessagesService,
      private _book_service: BookService

  ) { }


  ngOnInit() {

    this.book = this._fb.group({
      title:['',[Validators.required, Validators.minLength(5),Validators.maxLength(50)]],
      author:['',[Validators.required, Validators.minLength(5),Validators.maxLength(50)]],
      pub_date:['',Validators.required]
    });
  }

  onSubmit(){

      const abook = {
      title : this.book.get('title').value,
      author : this.book.get('author').value,
      pub_date : this.book.get('pub_date').value
      };
      // let abook: Book;
      // abook.title = this.book.get('title').value;
      // abook.author = this.book.get('author').value;
      // abook.pub_date = this.book.get('pub_date').value;
      // console.log('From the component : '+abook);
      this._book_service.register(abook);
      console.log('data are sent to service; from component');
  }

}
