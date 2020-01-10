import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { Observable, observable, of } from "rxjs";
import { TypeaheadMatch } from "ngx-bootstrap";
import * as moment from "moment";

@Component({
  selector: "app-account-setup",
  templateUrl: "./account-setup.component.html",
  styleUrls: ["./account-setup.component.css"]
})
export class AccountSetupComponent implements OnInit {
  constructor(private api: ApiService) {}
  account = {};
  countries: any[];
  states: any[];
  selectedCountry = {};
  selectedState = {};
  ngOnInit() {
    this.getCountries();
    this.getStates();
  }

  getCountries() {
    this.countries = [
      { countryId: 1, countryName: "country1" },
      { countryId: 2, countryName: "country2" }
    ];
  }
  getStates() {
    this.states = [
      { stateId: 1, stateName: "state1" },
      { stateId: 2, stateName: "state2" }
    ];
  }

  selectCountry(country) {
    this.selectedCountry = country;
  }
  selectState(state) {
    this.selectedState = state;
  }

  save(account) {
    account.country = this.selectedCountry;
    account.state = this.selectedState;
    console.log(account);
  }
}
