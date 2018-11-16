import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routes';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Home3Component } from './home3/home3.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
// Import your library
import { SlickModule } from 'ngx-slick';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Home3Component,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    CommonModule,
    SlickModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
