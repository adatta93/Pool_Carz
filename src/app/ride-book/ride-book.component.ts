import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RestService } from '../rest.service';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-ride-book',
  templateUrl: './ride-book.component.html',
  styleUrls: ['./ride-book.component.css']
})
export class RideBookComponent implements OnInit {

  showAll:boolean;
  showAllButton:String = "Show All Ride";
  rideDetails = [];
  rideSelected;
  isRideBooked:boolean;
  rideErrorMsg:string;
  filterOptn:string  = "";
  rideBookedMsg:string = '';

  constructor(private restService: RestService, private router: Router, private location: LocationStrategy) { 
    this.location.onPopState(_ => {
      console.log('a');
    });
  }

  ngOnInit() { 
    this.getAllRides();
  }

  getAllRides() {
    this.restService.getRides().subscribe(rides => {
      console.log("RideBookComp:getAllRide ",rides);
      if(!!rides){
        this.rideDetails = rides;
      }
    },
    error => this.rideErrorMsg = error)
  }

  onSelectRide(ride) {
    this.rideSelected = ride;
    this.rideBookedMsg = '';
    console.log("Selcted ride: ", JSON.stringify(ride));
  }

  onBookRide(data:boolean){
    if(data) {
      this.rideBookedMsg = `Booking Done! Ride details from ${this.rideSelected.pickup} to ${this.rideSelected.destination}`;
      this.getAllRides();
    }
    this.rideSelected = undefined;
  }

  onOfferRide() {
    this.router.navigate(['ride-offer']);
  }

}
