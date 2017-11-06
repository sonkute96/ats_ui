import { Component, OnInit, AfterViewInit } from '@angular/core';
import { LoginService } from "../services/login.service";
import { MENU } from '../config/menu';
import { Device } from '../model/device';
import { DeviceService } from '../services/device.service';
import { SharedService } from '../services/shared.service';
import { AssetService } from '../services/asset.service';
import { Asset } from '../model/asset';
import { Fleet } from '../model/fleet';
import { ASSETS } from '../config/assets';
import { FleetService } from '../services/fleet.service';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { RelativeFleet } from '../model/relativeFleet';
import { linkIconShow, linkIconHide } from '../config/config';
import { STYLE_TURNON_SHOW_OPTIONS, STYLE_TURNOFF_SHOW_OPTIONS, STYLE_TURNON_MINIMIZE_OPTIONS, STYLE_TURNOFF_MINIMIZE_OPTIONS } from '../config/configCSS';
@Component({
  selector: 'app-ats-map',
  templateUrl: './ats-map.component.html',
  styleUrls: ['./ats-map.component.css']
})
export class AtsMapComponent implements OnInit,AfterViewInit {
  
  /* map element variables */
  latitude: number = 10.762974;
  longitude: number = 106.68254;
  devices: Observable<Array<Device>>;
  selectedDevices: Observable<Device[]>;
  mouseOverDevice: Device;
  errorMessage: string;
  styleFromShowOption: Object;
  styleFromMinimizeOption: Object;
  zoom = 14;
  onSelectedFleet: boolean;
  relativeFleet: Observable<RelativeFleet>;
  /* left element variables */
  showOption: boolean;
  nEventShow: number = 0;
  nEventMinimize: number = 0;
  assets: Observable<Asset[]>;
  labelAssets: string[];
  fleets: Observable<Fleet[]>;
  minimizeFolder: boolean;
  assetFromSearch: Observable<Asset>
  assetFromFleetId: Asset[];
  index: number;
  /* detail element variables */
  showCheck: boolean;
  countCheck: number;
  deviceDetail: Device;
  iconShow: String;
  
  constructor(private deviceService: DeviceService, private sharedService: SharedService, 
    private assetService: AssetService, private fleetService: FleetService, private loginService: LoginService, private userService: UserService) {
    this.mouseOverDevice = null;
    this.showOption = true;
    this.minimizeFolder = false;
    this.assetFromSearch = null;
    this.selectedDevices = null;
    this.assetFromFleetId = null;
    this.labelAssets = ASSETS;
    this.index = 0;
    this.showCheck = true;
    this.countCheck = 0;
    this.deviceDetail = new Device(null,"Unknown", null,null,null,null,null);
    this.iconShow = linkIconShow;    
  }
  ngAfterViewInit(): void {
    this.getAllDevices();
    this.getAllAssets();
    this.getAllFleets();     
  }
  ngOnInit() {
    this.loginService.checkCredentials();
  }
  getAllDevices() {
    this.deviceService.getAllDevices()
    .then((data) => {
     this.devices = data;
    });
  }
  getAssetsAndPositionsByFleet(fleetId: number) {
    this.assetService.getAssetsByFleetId(fleetId).then(data => {
      this.assets = data;
      console.log(this.assets);
      this.deviceService.getDevicesByAssets(fleetId).then(positions => {
          this.devices = positions;
          this.devices.subscribe(devices => {
            this.deviceDetail = devices[this.index];
          });
        });
    });
  }
  getAllAssets() {
    this.assetService.getAllAssets()
      .then((data) => {
        this.assets = data;
        console.log(this.assets);
      }, error => this.errorMessage = <any>error);
  }
  getAllFleets() {
    this.fleetService.getAllFleets()
      .then((data) => {
        this.fleets = data;
        console.log(this.fleets);
      }, error => this.errorMessage = <any>error);
  }
  getDevicesById(assetId: String) {
    console.log(assetId);
    this.deviceService.getDevicesById(assetId)
      .then((data) => {
        this.devices = data;
        this.devices.subscribe(arrayDevices => {
          this.deviceDetail = arrayDevices[this.index];
        });
        console.log(this.selectedDevices);
      }, error => this.errorMessage = <any>error);
  }
  getAssetById(selectedDeviceId: string) {
    this.assetService.getAssetsById(selectedDeviceId)
      .then((data) => {
        this.assetFromSearch = data;
        console.log(this.assetFromSearch);
      }, error => this.errorMessage = <any>error);
  }
  //events
  clickedMarker(selectedDevice: Device) {
    this.sharedService.setSelectedDevice(selectedDevice);
  }
  mouseOverMarker(device: Device) {
    this.mouseOverDevice = device;
  }
  mouseOutMarker() {
    this.mouseOverDevice = null;
  }
  onSelectedAsset(e) {
    this.getDevicesById(e.target.innerText);
  }
  search(e) {
    this.getAssetById(e.target.elements[0].value);
  }
  onSelectFleet(fleet: Fleet) {
    this.getAssetsAndPositionsByFleet(fleet.id);
  }
  showOptions(): void {
    this.nEventShow = this.nEventShow + 1;
    if (this.nEventShow % 2 === 0) {
      this.showOption = true;
      this.styleFromShowOption = STYLE_TURNON_SHOW_OPTIONS;
    } else {
      // turn off option.
      this.showOption = false;
      this.styleFromShowOption = STYLE_TURNON_SHOW_OPTIONS;
    }
    this.styleFromMinimizeOption = this.styleFromShowOption;
    this.sharedService.setStyleFromShowOption(this.styleFromShowOption);
    this.sharedService.setStyleFromMinimizeOption(this.styleFromMinimizeOption);
  }
  minimizeOptions(): void {
    this.nEventMinimize = this.nEventMinimize + 1;
    if (this.nEventMinimize % 2 !== 0) {
      this.minimizeFolder = true;
      console.log(this.minimizeFolder);
        this.styleFromMinimizeOption = STYLE_TURNON_MINIMIZE_OPTIONS;
    } else {
      this.minimizeFolder = false;
      this.styleFromMinimizeOption = STYLE_TURNOFF_MINIMIZE_OPTIONS;
    }
    this.sharedService.setStyleFromMinimizeOption(this.styleFromMinimizeOption);
  }
  showHide(): void {
    this.countCheck = this.countCheck + 1;
    if (this.countCheck % 2 == 0) {
      this.showCheck = true;
      this.iconShow = linkIconShow;
    } else {
      this.showCheck = false;
      this.iconShow = linkIconHide;
    }
  }
}
