import {Component} from '@angular/core';
import {MapDirective} from './map.directive';
import {Store} from '@ngrx/store';
import {AsyncPipe} from '@angular/common';

@Component({
    selector: 'fl-map',
    directives: [MapDirective],
    pipes: [AsyncPipe],
    templateUrl: 'app/pages/map/map.html'
})

export class MapComponent {
    constructor(
        public store: Store<any>
    ) {}

    // constructor(
    //     private _api: ApiService
    // ) {}
    //
    // data: any;
    // employees: Employee[];
    //
    // ngOnInit(): void {
    //     this._api.send('locations').subscribe(a => {
    //         this.data = a;
    //     })
    // }
    //
    // empSelect(loc: string): void {
    //     this.employees = this.data.find(a => a.loc === loc).employees;
    // }
}   