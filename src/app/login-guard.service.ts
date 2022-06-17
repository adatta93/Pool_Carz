import { CanActivate, Router, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { RestService } from './rest.service';

@Injectable()
export class LoginGuardService implements CanActivate, CanDeactivate<any> {

    constructor(private restService: RestService, private router: Router) { }

    canActivate(): boolean {
        if (this.restService.getLoginStatus()) {
            return true;
        } else {
            this.router.navigate(['login']);
            return false;
        }
    }

    canDeactivate(snap: RouterStateSnapshot): boolean {
        console.log(snap.url);
        return true;
    }

}