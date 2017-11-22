import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import {
  ErrorHandler as NgErrorHandler,
  NgModule
} from '@angular/core';
import { ErrorHandler } from './shared/errors/error-handler';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [{
    provide: NgErrorHandler,
    useClass: ErrorHandler
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
