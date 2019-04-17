import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import {
  NbThemeModule,
  NbLayoutModule,
  NbButtonModule,
  NbCardModule
} from '@nebular/theme';

import { AppComponent } from './app.component';

const routes = [];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, { useHash: true }),
    NgxSpinnerModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbButtonModule,
    NbCardModule
  ],
  declarations: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
