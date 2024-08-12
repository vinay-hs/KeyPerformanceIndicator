import { Component, EventEmitter, Output } from '@angular/core';
import { Location  } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent {

  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  
  constructor(private formBuilder: FormBuilder) {}

  closePopup(){
    this.close.emit();
  }
 
}

