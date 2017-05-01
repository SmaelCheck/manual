import { Component, OnInit, ElementRef } from '@angular/core';
import{FormGroup, FormBuilder, Validators} from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';

// declarate
declare  var jQuery:any;
@Component({
  selector: 'book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  book_form: FormGroup;

  constructor(private _fb: FormBuilder, private _fs: FlashMessagesService) { }


  ngOnInit() {

    this.book_form = this._fb.group({
      title:['',[Validators.required, Validators.minLength(5),Validators.maxLength(50)]],
      author:['',[Validators.required, Validators.minLength(5),Validators.maxLength(50)]],
      pub_date:['',Validators.required]
    });
  }

  onSubmit(){

    this._fs.show('Data send successful',{ cssClass:' alert-danger', timeout:15000});

    // const book ={
    //   title: this.book_form.get('title').value,
    //   author: this.book_form.get('author').value,
    //   pub_date: this.book_form.get('pub_date').value
    // };
  }

}
