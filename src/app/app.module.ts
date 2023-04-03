import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderProjectComponent } from './header-project/header-project.component';
import { FooterProjectComponent } from './footer-project/footer-project.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderProjectComponent,
    FooterProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
