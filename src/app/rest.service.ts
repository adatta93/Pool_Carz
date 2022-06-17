import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { catchError, mapTo } from 'rxjs/operators';

@Injectable()
export class RestService {
    ridesUrl = 'assets/rides.json';
    users = [{
        uName: 'admin',
        pwd: 'admin'
    }];
    isLoggedIn: boolean = false;
    allRides = [];

    constructor(private http: HttpClient) {
        this.fetchAllRides();
    }

    setNewRide(ride) {
        console.log("Service:setRide ", ride);
        this.allRides.push(ride);
    }

    fetchAllRides() {
        console.log("Service:fetchRides");
        return this.http.get(this.ridesUrl)
            .pipe(catchError(this.handleError))
            .subscribe((res:any[]) => this.allRides = res);
    }

    getRides(): Observable<any[]> {
        console.log("Service:getRides");
        return of(this.allRides);
    }

    bookRide(bookedRide) {
        this.allRides.map(ride => {
            if(ride.pickup === bookedRide.pickup && ride.destination === bookedRide.destination) {
                ride.available--;
                ride.available.toString();
            }
        });
    }

    isValidUser(name: string, pwd: string) {
        let validUser = this.users.find(user => user.uName === name && user.pwd === pwd);
        if (validUser) {
            this.isLoggedIn = true;
        } else {
            this.isLoggedIn = false;
        }
        return this.isLoggedIn;
    }

    getLoginStatus(): boolean {
        return this.isLoggedIn;
    }

    handleError(error: any) {
        let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server Error';
        console.error("Error Message: ", errMsg);
        return Observable.throw(errMsg);
    }
}