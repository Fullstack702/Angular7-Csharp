import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

export interface PreferencesTab {
  path: string;
  label: string;
}

export type NavigationType = "printers" | "products";

const PrinterTabs = [
  {
    path: "/preferences/printer-setup",
    label: "Printers"
  },
  {
    path: "/preferences/label-setup",
    label: "Labels"
  },
  {
    path: "/preferences/print-log",
    label: "Logs"
  }
];

const ProductTabs = [
  {
    path: "/preferences/accounts",
    label: "Accounts"
  },
  {
    path: "/preferences/field-settings",
    label: "Field Settings"
  }
  /* {
    path: '/preferences/locations',
    label: 'Manage Locations'
  }, {
    path: '/preferences/conditions',
    label: 'Manage Conditions'
  }, {
    path: '/preferences/avg-cost-log',
    label: 'Average Cost Log'
  }
   */
];
const sectionLabel = "";

@Component({
  selector: "app-preferences-navigation",
  templateUrl: "./preferences-navigation.component.html"
})
export class PreferencesNavigationComponent {
  @Input() navigationType: NavigationType;
  private preferencesTabs: { [s in NavigationType]: PreferencesTab[] } = {
    printers: PrinterTabs,
    products: ProductTabs
  };

  sectionLabel = "";
  // this.navigationType == "printers"
  //   ? "Printer Management"
  //   : "Product Management";
  // sectionLabel = this.navigationType == "products" ? "Product Management" : "";

  ngOnInit() {
    if (this.navigationType === "printers")
      this.sectionLabel = "Printer Management";
    else if (this.navigationType === "products")
      this.sectionLabel = "Product Management";
    else this.sectionLabel = "";
    //          console.log(this.preferencesTabs);
    // console.log(this.sectionLabel);
  }
  constructor(private router: Router) {}

  get tabs() {
    return this.preferencesTabs[this.navigationType] || [];
  }

  isTabActive(tabLink: string) {
    return this.router.isActive(tabLink, true);
  }
}
