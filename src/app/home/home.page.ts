import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { error } from '@angular/compiler/src/util';
import { ModalAddPokemonComponent } from '../modal-add-pokemon/modal-add-pokemon.component';
import { ModalController, ActionSheetController } from '@ionic/angular';
import { ModalEditComponent } from '../modal-edit/modal-edit.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pokemons : any = [];
  constructor(
    private api: ApiService,
    private modal: ModalController,
    private actionSheetController: ActionSheetController
  ){
    this.api.getAll().subscribe(response =>{
      console.log(response);
      this.pokemons = response;
    }, error =>{
      console.log(error);
    })
  }

  async openModal(){
    const modal= await this.modal.create({
      component: ModalAddPokemonComponent,
      cssClass: 'modal'
    });
    await modal.present();
    const anotherModal = modal.onWillDismiss().then(()=>{
      console.log('Recargar');
      this.recargar();
    })
  }

  recargar(){
    this.api.getAll().subscribe(response =>{
      console.log(response);
      this.pokemons = response;
    }, error =>{
      console.log(error);
    })
  }

  async opciones(id:number,name,type,zone,generation){
    const actionSheet = await this.actionSheetController.create({
      header: 'Más Opciones',
      buttons: [{
        text: 'Eliminar',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked',id);
          this.api.delete(id).subscribe(response =>{
            console.log(response)
            this.recargar()
          }, error =>{
            console.log(error)
          })
          this.actionSheetController.dismiss();
        }
      }, {
        text: 'Editar',
        icon: 'create',
        handler: () => {
          this.openModal2(id,name,type,zone,generation);
          console.log('Edit clicked',id);
          this.recargar()
        }
      }
      ,{
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked',id);
        }
      }]
    });
    await actionSheet.present();
  }

  async openModal2(id,name,type,zone,generation){
    const edit= await this.modal.create({
      component: ModalEditComponent,
      cssClass: 'modal',
      componentProps: { value: id, nombre : name, tipo: type, zona: zone, generacion :generation }
    });
    await edit.present();
    const anotherModal = edit.onWillDismiss().then(()=>{
      console.log('Recargar');
      this.recargar();
      this.actionSheetController.dismiss();
    })
  }

}
