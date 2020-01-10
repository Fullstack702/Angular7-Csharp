import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { BsModalService } from "ngx-bootstrap";
import { FIELDS, FINALEFIELDS, AMAZONFIELDS } from "../products";

@Component({
  selector: "app-field-settings",
  templateUrl: "./field-settings.component.html",
  styleUrls: ["./field-settings.component.css"]
})
export class FieldSettingsComponent implements OnInit {
  pcsVariables = [5, 10, 20];

  Criteria = {
    TextSearch: null,
    Id: null,
    Status: true,
    UserId: null,
    PrinterId: null,
    Page: 1,
    Limit: 10,
    SortBy: "s.Name",
    Ascending: true,
    paginate: false,
    OnlySublocation: true,
    Selected: false
  };

  itemsPerPage = 10;
  currentPage = 1;
  TotalCount = 0;

  Sublocations: any[];
  loading = false;
  syncing: boolean = false;
  lastSynced;

  fields: any[];
  finaleFields: any[];
  amazonFields: any[];
  finaleFieldNames: string[];
  amazonFieldNames: string[];

  constructor(private api: ApiService, private modalService: BsModalService) {}

  ngOnInit() {
    this.getFields();
    this.getFinaleFields();
    this.getAmazonFields();
  }

  getFields() {
    this.fields = FIELDS;
    /* api */
  }

  getFinaleFields() {
    this.finaleFields = FINALEFIELDS;
  }

  getAmazonFields() {
    this.amazonFields = AMAZONFIELDS;
  }

  selectFinaleField(index, finaleField) {
    this.fields[index].finaleFieldName = finaleField.name;
  }

  selectAmazonField(index, amazonfield) {
    this.fields[index].amazonFieldName = amazonfield.name;
  }

  addField(field = null) {}

  paginate(event: any) {
    this.Criteria.Page = event.page;
    this.Criteria.Limit = event.itemsPerPage;
    this.getFields();
  }

  setPcsOnpage(pcs) {
    this.Criteria.Limit = pcs;
    this.getFields();
  }

  SortBy(sort) {
    // alert(sort)
  }
  onEdit() {}
  Mapfield() {}
  saveStatus() {}
}
