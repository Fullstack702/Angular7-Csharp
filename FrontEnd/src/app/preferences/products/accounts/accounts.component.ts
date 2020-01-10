import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { BsModalService } from "ngx-bootstrap";
import { AddSourceModalComponent } from "./add-source-modal/add-source-modal.component";
import { UploadCSVModalComponent } from "./upload-csv-modal/upload-csv-modal.component";
import { ACCOUNTS } from '../products';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  pcsVariables = [
    5,
    10,
    20
  ];

  Criteria = {
    TextSearch: null,
    Id: null,
    Status: true,
    UserId: null,
    PrinterId: null,
    Page: 1,
    Limit: 10,
    SortBy: 's.Name',
    Ascending: true,
    paginate: false,
    OnlySublocation: true
  };

  itemsPerPage = 10;
  currentPage = 1;
  TotalCount = 0;

  Sublocations: any[];
  loading = false;
  syncing: boolean = false;
  lastSynced;

  accounts: any[];

  constructor(private api: ApiService, private modalService: BsModalService) {
  }

  ngOnInit() {
    this.GetAccounts();
  }

  GetAccounts() {
    this.accounts = ACCOUNTS;
    /* api */
  }

  Sync(accountId) {
    alert("Account" + accountId + " is syncing...");
  }

  saveStatus(accountId) {
    alert("Status of Account" + accountId + " is changing...");
  }

  addSource(account = null) {
    var init: any = {};

    if (account) {
      init.account = { ...account };
    }

    const modal = this.modalService.show(AddSourceModalComponent, { initialState: init });
    modal.content.onClose.subscribe(result => {
      if (result.success) {
        this.GetAccounts();
      }
    });
  }

  uploadCSV() {
    const modal = this.modalService.show(UploadCSVModalComponent, { class: 'wide-modal' });
    modal.content.onClose.subscribe(result => {
      console.log(result)
      // if (result.success) {
      //   this.GetAccounts();
      // }
    });
  }

  paginate(event: any) {
    this.Criteria.Page = event.page;
    this.Criteria.Limit = event.itemsPerPage;
    this.GetAccounts();
  }

  setPcsOnpage(pcs) {
    this.Criteria.Limit = pcs;
    this.GetAccounts();
  }

  SortBy(sort) {
    // alert(sort)
  }


}
