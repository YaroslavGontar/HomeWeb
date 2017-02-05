import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MyNavBar } from './nav-bar.component';
import { MyFooter } from './footer.component';
import {MyBody} from './body.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNavBar,
    MyFooter,
    MyBody
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class NgbdModule {
}