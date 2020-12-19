import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Contact } from '../classes/contact';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  @Output() addRequest = new EventEmitter<Contact>();
  contact: Contact;
  info: string;

  constructor() { }
  ngOnInit(): void {

    this.contact = new Contact(-1, '', '', '', 0, 0);
    this.info = '';
  }


}
