import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetComponent } from './pet/pet.component';
import { CatOrDogDirective } from './cat-or-dog.directive';
import { FormComponent} from './form/form.component';
import {ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    PetListComponent,
    PetComponent,
    CatOrDogDirective,
    FormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
