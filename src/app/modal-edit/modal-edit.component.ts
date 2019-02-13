import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss']
})
export class ModalEditComponent implements OnInit {

  editPokemon: FormGroup;
  @Input() value: number;
  @Input() nombre: string;
  @Input() tipo: string;
  @Input() zona: string;
  @Input() generacion: number;
  constructor(
    private formBuilder: FormBuilder,
    private modal: ModalController,
    private api: ApiService,
  ) { }

  ngOnInit() {
    this.editPokemon = this.formBuilder.group({
      'id' :[this.value],
      'name' : [this.nombre],
      'type' : [this.tipo],
      'zone' : [this.zona],
      'generation' : [this.generacion]
    });
  }

actualizarPokemon(){
  console.log("Actualizando...")
  console.log(this.editPokemon.value)
  this.api.update(this.editPokemon.value).subscribe(response =>{
    console.log(response)
    this.modal.dismiss()
  }, error =>{
    console.log(error)
  })
}

}
