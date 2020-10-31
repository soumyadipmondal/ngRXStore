import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store'


import { AppComponent } from './app.component';
import LoadReducer from 'src/store/reducres/load.reducer';
import { DataReducer } from 'src/store/reducres/data.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,


    StoreModule.forRoot({
      loader: LoadReducer, 
      data: DataReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
