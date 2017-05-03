import { Component,ViewChild, DoCheck } from '@angular/core';
import {AuthorFormComponent} from "./Components/Author/author-form/author-form.component";
import {BookFormComponent} from "./Components/Book/book-form/book-form.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck{

  @ViewChild(AuthorFormComponent) auth : AuthorFormComponent;
  @ViewChild(BookFormComponent) book : BookFormComponent;

  auth_form_title: string;
  book_form_title: string;
  title = 'app works!';

  constructor(){

  }

  ngDoCheck(){
    this.auth_form_title = this.auth.title_form;
    this.book_form_title = this.book.title_form;

  }

}
