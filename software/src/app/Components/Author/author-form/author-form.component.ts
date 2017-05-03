import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.scss']
})
export class AuthorFormComponent implements OnInit {
  title_form: string = 'Formulaire d\'ajout un auteur.';

  author: FormGroup;
  constructor(private _fb: FormBuilder) {

    this.author = this._fb.group({
      'name' :      ['',[Validators.required, Validators.minLength(5),Validators.maxLength(25)]],
      'birthdate' : ['',[Validators.required]]
    });
  }

  ngOnInit() {
  }

}
