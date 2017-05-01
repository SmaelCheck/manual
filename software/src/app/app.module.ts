import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AuthorFormComponent } from './Components/Author/author-form/author-form.component';
import { AuthorListComponent } from './Components/Author/author-list/author-list.component';
import { BookListComponent } from './Components/Book/book-list/book-list.component';
import { BookFormComponent } from './Components/Book/book-form/book-form.component';
import { NavbarComponent } from './Components/Nav/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorFormComponent,
    AuthorListComponent,
    BookListComponent,
    BookFormComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
