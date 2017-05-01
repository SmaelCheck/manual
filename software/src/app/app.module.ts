import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/Nav/navbar/navbar.component';
import { AuthorListComponent } from './Components/Author/author-list/author-list.component';
import { AuthorFormComponent } from './Components/Author/author-form/author-form.component';
import { BookFormComponent } from './Components/Book/book-form/book-form.component';
import { BookListComponent } from './Components/Book/book-list/book-list.component';
import { FlashMessagesModule } from 'angular2-flash-messages';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AuthorListComponent,
    AuthorFormComponent,
    BookFormComponent,
    BookListComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    FlashMessagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
