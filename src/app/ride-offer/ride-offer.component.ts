import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-ride-offer',
  templateUrl: './ride-offer.component.html',
  styleUrls: ['./ride-offer.component.css']
})
export class RideOfferComponent implements OnInit {

  offerRideForm: FormGroup;

  constructor(private restService: RestService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.offerRideForm = this.formBuilder.group({
      owner: ['', Validators.required],
      pickup: ['', Validators.required],
      destination: ['', Validators.required],
      car: ['', Validators.required],
      available: ['', Validators.required]
    })
  }

  onCancel(){
    this.router.navigate(['book-a-ride']);
  }

  onOfferRide(){
    console.log('New Ride Offered ',this.offerRideForm.value);
    this.restService.setNewRide(this.offerRideForm.value);
    this.router.navigate(['book-a-ride']);
  }

}
