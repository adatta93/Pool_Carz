import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RideOfferComponent } from './ride-offer/ride-offer.component';
import { RideDetailsComponent } from './ride-details/ride-details.component';
import { RideBookComponent } from './ride-book/ride-book.component';
import { PoolAppRoutingModule } from './app-routing.module';
import { PoolMouseHoverDirective } from './mousehover.directive';
import { RestService } from './rest.service';
import { LoginGuardService } from './login-guard.service';
import { RideFilterPipe } from './ride-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RideOfferComponent,
    RideDetailsComponent,
    RideBookComponent,
    PoolMouseHoverDirective,
    RideFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PoolAppRoutingModule
  ],
  providers: [
    RestService,
    LoginGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
