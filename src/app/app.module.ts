import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SquisherComponent } from './squisher/squisher.component';
import { FooterComponent } from './footer/footer.component';
import { SquishResultsComponent } from './squisher/squish-results/squish-results.component';
import { SquishSubmitComponent } from './squisher/squish-submit/squish-submit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SquisherComponent,
    FooterComponent,
    SquishResultsComponent,
    SquishSubmitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
