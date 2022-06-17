import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'rideFilter'
})
export class RideFilterPipe implements PipeTransform {

    transform(value:any, args?: any){
        if(args === 'toKolkata') {
            return value.filter(val => val.destination === 'Kolkata');
        } else if (args === 'fromKolkata') {
            return value.filter(val => val.pickup === 'Kolkata');
        } else if (args === 'others') {
            return value.filter(val => val.pickup !== 'Kolkata' && val.destination !== 'Kolkata');
        } else {
            return value;
        }
    }
}