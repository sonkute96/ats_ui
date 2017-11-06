import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Fleet } from "../model/fleet";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { FLEET_URL } from "../config/config";
@Injectable()
export class FleetService {
    request$: EventEmitter<any>;
    private headers: HttpHeaders;
    private translations: any;
    constructor(private http: HttpClient) {
        this.headers = new HttpHeaders({'Content-Type': 'application/json'});
    }
    private handleError(error: any) {
        this.request$.emit('finished');
        if (error instanceof Response) {
            return Observable.throw(error.json()['error'] || 'backend server error' );
        }
    }
    async getAllFleets() {
        return await this.http.get(FLEET_URL)
            .map(response => {
                return response;
            })
            .catch(error => this.handleError(error));
    }
}
