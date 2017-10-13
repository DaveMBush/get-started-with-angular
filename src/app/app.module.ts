import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  ErrorHandler as NgErrorHandler,
  NgModule } from '@angular/core';
import { ErrorHandler } from './shared/errors/error-handler';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    {
      provide: NgErrorHandler,
      useClass: ErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
