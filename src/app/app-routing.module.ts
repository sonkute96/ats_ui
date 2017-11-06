import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginformComponent } from "./loginform/loginform.component";
import { AuthGuard } from "./auth.guard";
import { AtsMapComponent } from "./ats-map/ats-map.component";
import { TemplateComponent } from './template/template.component';
import { AssetsComponent } from './assets/assets.component';
import { PoiComponent } from './poi/poi.component';
import { RouteComponent } from './route/route.component';
import { HelpComponent } from './help/help.component';
const routes: Routes = [
    {
        path: '',
        redirectTo: "/ats",
        pathMatch: 'full'
    },
    {
        path: "login",
        component: LoginformComponent
    },
    {
        path: "ats",
        //canActivate: [AuthGuard],
        component: TemplateComponent
    },
    {
        path: "assets",
        //canActivate: [AuthGuard],
        component: AssetsComponent
    },
    {
        path: "poi",
        //canActivate: [AuthGuard],
        component: PoiComponent
    },
    {
        path: "route",
        //canActivate: [AuthGuard],
        component: RouteComponent
    },
    {
        path: "help",
        //canActivate: [AuthGuard],
        component: HelpComponent
    }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {
}
