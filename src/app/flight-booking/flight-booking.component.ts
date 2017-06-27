import { Component } from '@angular/core';
import { FlightService } from './flight-search/flight.service';
import { SampleService } from 'my-lib';
@Component({
  selector: 'flight-booking',
  templateUrl: './flight-booking.component.html',
  providers: [FlightService]
})
export class FlightBookingComponent {
  constructor(private sampleService: SampleService) {
    let result = sampleService.add(7, 4);
    console.debug('result', result);
  }
}
