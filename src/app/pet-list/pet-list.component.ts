import { Component, OnInit } from '@angular/core';
import { PetService } from '../services/pet.service';
import { Pet } from '../models/pet.model';
import { Subscription } from 'rxjs';
import { CatOrDogDirective } from '../cat-or-dog.directive';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

  constructor(private petService: PetService) { }

  public pets: Array<Pet>;
  public subscription$: Subscription;

  ngOnInit(): void {

    this.subscription$ = this.petService._pets$.subscribe(value => {
      this.pets = value;
    })

  }

}
