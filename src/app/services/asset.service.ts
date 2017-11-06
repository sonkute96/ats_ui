import { Injectable, OnInit, Input } from '@angular/core';
import { Headers, Response, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Asset } from '../model/asset';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import { Subject } from 'rxjs/Subject';
import { ASSET_BY_ID_URL, ASSETS_BY_FLEET_URL, ASSETS_URL } from "../config/config";
import { RelativeFleet } from "../model/relativeFleet";

@Injectable()
export class AssetService implements OnInit {
    ngOnInit(): void {
    }
    constructor(private http: Http) {
    }
    async getAllAssets() {
        return await this.http.get(ASSETS_URL)
            .map(res => res.json())
            .catch(this.handleError);
    }
    async getAssetsById(deviceId: string) {
        return await this.http.get(ASSET_BY_ID_URL + deviceId)
            .map(res => res.json())
            .catch(this.handleError);
    }
    async getAssetsByFleetId(fleetId: number) {
        return await this.http.get(ASSETS_BY_FLEET_URL + fleetId)
            .map(res => res.json())
            .catch(this.handleError);
    }
    // async getAssetsAndPositionsByFleet(fleetId: number) {
    //     return await this.http.get(ASSETS_BY_FLEET_URL + fleetId)
    //         .map(res => res.json())
    //         .catch(this.handleError);
    // }
    private handleError(error: any): Observable<any> {
        console.error('An error occurred', error);
        return Observable.throw(error.message || error);
    }
}