import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FleetService } from "./services/fleet.service";
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { HttpModule } from '@angular/http';
import { DeviceService } from "./services/device.service";
import { FormsModule } from '@angular/forms';
import { AssetService } from './services/asset.service';
import { SharedService } from "./services/shared.service";
import { LoginformComponent } from './loginform/loginform.component';
import { API_KEY } from "./config/config";
import { Routes, RouterModule } from "@angular/router";
import { UserService } from "./services/user.service";
import { AtsMapComponent } from './ats-map/ats-map.component';
import { AuthGuard } from "./auth.guard";
import { AppRoutingModule } from "./app-routing.module";
import { LoginService } from "./services/login.service";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TemplateComponent } from './template/template.component';
import { AssetsComponent } from './assets/assets.component';
import { PoiComponent } from './poi/poi.component';
import { RouteComponent } from './route/route.component';
import { HelpComponent } from './help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    AtsMapComponent,
    HeaderComponent,
    FooterComponent,
    TemplateComponent,
    AssetsComponent,
    PoiComponent,
    RouteComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: API_KEY
    }),
    AppRoutingModule
  ],
  providers: [FleetService,DeviceService,AssetService,SharedService,UserService,AuthGuard,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
