import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from './login/login.component';
import { RideBookComponent } from './ride-book/ride-book.component';
import { RideOfferComponent } from './ride-offer/ride-offer.component';
import { LoginGuardService } from './login-guard.service';

const carRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'book-a-ride', component: RideBookComponent, canActivate: [LoginGuardService], canDeactivate: [LoginGuardService] },
    { path: 'ride-offer', component: RideOfferComponent, canActivate: [LoginGuardService] },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', component: LoginComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(carRoutes)],
    exports: [RouterModule]
})
export class PoolAppRoutingModule { }
