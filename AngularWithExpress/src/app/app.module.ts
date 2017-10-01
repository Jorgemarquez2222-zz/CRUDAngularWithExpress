import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import { ServicesUserService } from './services/services-user.service'; 
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    
    ReactiveFormsModule,
  ],
  providers: [ServicesUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
