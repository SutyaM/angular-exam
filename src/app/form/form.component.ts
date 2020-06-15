import { Component, OnInit } from '@angular/core';
import { Pet } from '../models/pet.model';
import { FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }


  public form: FormsModule;

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      type: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required, Validators.maxLength(200)])
    })
  }

  /*public addPet() {
    let pet = {
      name: this.form.get('name').value,
      type: this.form.get('type').value,
      description: this.form.get('description').value
      
    }
  } */

}
