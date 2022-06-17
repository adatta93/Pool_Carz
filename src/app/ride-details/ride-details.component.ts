import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-ride-details',
  templateUrl: './ride-details.component.html',
  styleUrls: ['./ride-details.component.css']
})
export class RideDetailsComponent implements OnInit {
  @Input() selectedRide;
  @Output() bookRide = new EventEmitter<boolean>();
  
  constructor(private restService: RestService) { }

  ngOnInit() { }

  onBookRide() {
    this.restService.bookRide(this.selectedRide);
    this.bookRide.emit(true);
  }

  onCancel() {
    this.bookRide.emit(false);
  }
}
