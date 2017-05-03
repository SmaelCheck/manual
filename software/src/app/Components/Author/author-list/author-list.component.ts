import { Component, OnInit } from '@angular/core';
import {AuthorService} from "../../../Services/Author/author.service";
import{Author} from '../../../Models/Author/author';

@Component({
  selector: 'author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent implements OnInit {

  private  _authors: Author[];

  constructor(private _auth_service: AuthorService) { }

  ngOnInit() {
  }

}
