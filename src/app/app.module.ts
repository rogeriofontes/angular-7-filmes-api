import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmesComponent } from './filmes/filmes.component';
import { HttpClientModule } from '@angular/common/http';
import { FilmesAddComponent } from './filmes-add/filmes-add.component';
import { FormsModule } from '@angular/forms';
import { FilmesDetailsComponent } from './filmes-details/filmes-details.component';
import { FilmesEditComponent } from './filmes-edit/filmes-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmesComponent,
    FilmesAddComponent,
    FilmesDetailsComponent,
    FilmesEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
