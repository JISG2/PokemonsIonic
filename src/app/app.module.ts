import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ModalAddPokemonComponent } from './modal-add-pokemon/modal-add-pokemon.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalEditComponent } from './modal-edit/modal-edit.component';

@NgModule({
  declarations: [AppComponent, ModalAddPokemonComponent, ModalEditComponent],
  entryComponents: [
    ModalAddPokemonComponent,
    ModalEditComponent
  ],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
