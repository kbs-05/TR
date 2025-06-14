import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CONNEXIONComponent } from './connexion/connexion.component';
import { INSCRIPPTIONComponent } from './inscripption/inscripption.component';

@NgModule({
  declarations: [
    AppComponent,
    CONNEXIONComponent,
    INSCRIPPTIONComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
