import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { HttpClientModule } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloWorld } from './primercomponente/primer.componente';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { TipoCambioComponent } from './tipo-cambio/tipo-cambio.component';
import {ApiService} from './services/api.services'


//es nuestr aplicacion modulo principal de angular solo conoce un appcomponent
@NgModule({
  declarations: [
    AppComponent,
    HelloWorld,
    HolaMundoComponent,
    TipoCambioComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
