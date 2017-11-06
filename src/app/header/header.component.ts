import { Component, OnInit } from "@angular/core";
import { MENU } from "../config/menu";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  /* header element variables */
  options: string[];
  constructor(private _router: Router) {
    this.options = MENU;
  }

  ngOnInit() {}
  display(e) {
    var menu = e.target.textContent;
    switch (menu) {
      case "Assets":
        this._router.navigate(["/assets"]);
        break;
      case "POI":
        this._router.navigate(["/poi"]);
        break;
      case "Route":
        this._router.navigate(["/route"]);
        break;
      case "Help":
        this._router.navigate(["/help"]);
        break;
    }
  }
}
