import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { LoaderComponent } from './public/loader/loader.component';
import { HeaderComponent } from './public/header/header.component';
import { FooterComponent } from './public/footer/footer.component';
import { NgOptimizedImage } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TokenExpirationInterceptor } from './interceptor/token-expiration.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS , useClass : AuthInterceptor , multi: true},
    {provide: HTTP_INTERCEPTORS , useClass : TokenExpirationInterceptor , multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
