import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-modal-add-pokemon',
  templateUrl: './modal-add-pokemon.component.html',
  styleUrls: ['./modal-add-pokemon.component.scss']
})
export class ModalAddPokemonComponent implements OnInit {

  pokemon : FormGroup;
  constructor(
    private formBuilder : FormBuilder,
    private modal : ModalController,
    private api: ApiService,
  ) { }

  ngOnInit() {
    this.pokemon = this.formBuilder.group({
      'name' : ['',Validators.required],
      'type' : ['',Validators.required],
      'zone' : ['',Validators.required],
      'generation' : ['',Validators.required],
    });
  }

  crearPokemon(){
    this.api.create(this.pokemon.value).subscribe(response =>{
      console.log(response);
      this.modal.dismiss();
    }, error =>{
      console.log(error)
    })
    console.log(this.pokemon.value);
  }

}
