import { Injectable } from '@angular/core';
import { Device } from "../model/device";
import { Asset } from "../model/asset";
@Injectable()
export class SharedService {
    selectedDevices: Device[] = null;
    selectedDevice: Device = null;
    styleFromShowOption: Object;
    styleFromMinimizeOption: Object;
    assetFromFleetId: Asset[] = null;
    constructor() {
    }
    setSelectedDevices(selectedDevices: Device[]) {
        this.selectedDevices = selectedDevices;
    }
    getSelectedDevices(): Device[] {
        return this.selectedDevices;
    } 
    setSelectedDevice(selectedDevice: Device) {
        this.selectedDevice = selectedDevice;
    }
    getSelectedDevice(): Device {
        return this.selectedDevice;
    }  
    setStyleFromShowOption(styleFromShowOption: Object) {
        this.styleFromShowOption = styleFromShowOption;
    }
    getStyleFromShowOption(): Object {
        return this.styleFromShowOption;
    }   
    setStyleFromMinimizeOption(styleFromMinimizeOption: Object) {
        this.styleFromMinimizeOption = styleFromMinimizeOption;
    }
    getStyleFromMinimizeOption(): Object {
        return this.styleFromMinimizeOption;
    }
   
    setAssetFormFleetId(assetFromFleetId: Asset[]) {
        this.assetFromFleetId = assetFromFleetId;
    }
    getAssetFormFleetId(): Asset[] {
        return this.assetFromFleetId;
    }
}