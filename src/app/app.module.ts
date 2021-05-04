import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainformComponent } from './mainform/mainform.component';
import { FirstformComponent } from './mainform/firstform/firstform.component';
import { SecondformComponent } from './mainform/secondform/secondform.component';
import { LastformComponent } from './mainform/lastform/lastform.component';

@NgModule({
  declarations: [
    AppComponent,
    MainformComponent,
    FirstformComponent,
    SecondformComponent,
    LastformComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
