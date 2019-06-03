import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainPageComponent } from './layout/main-page.component';
import { AllianceInfoComponnnt } from './components/alliance-info/alliance-info.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AllianceInfoComponnnt
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
  ]
})
export class AppModule { }
