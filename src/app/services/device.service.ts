import { Injectable, OnInit, Input } from '@angular/core';
import { Headers, Response, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Device } from '../model/device';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import { Subject } from 'rxjs/Subject';
import {
  DEVICE_URL,
  DEVICE_BY_ID_URL,
  DEVICE_URL_FlEET
} from "../config/config";
import { Asset } from "../model/asset";
@Injectable()
export class DeviceService implements OnInit {
    ngOnInit(): void {
    }
    constructor(private http: Http) { }

    async getAllDevices() {
        return await this.http.get(DEVICE_URL)
                              .map(res => res.json())
                              .catch(error => this.handleError(error));
    }
    async getDevicesById(assetId: String) {
        return await this.http.get(DEVICE_BY_ID_URL + assetId)
                              .map(res => res.json())
                              .catch(this.handleError);
    }
    async getDevicesByAssets(fleetId: number) {
        return await this.http.get(DEVICE_URL_FlEET+fleetId)
                              .map(res => res.json())
                              .catch(this.handleError);
    }
    private handleError(error: any): Observable<any> {
        console.error('An error occurred', error);
        return Observable.throw(error.message || error);
    }
}