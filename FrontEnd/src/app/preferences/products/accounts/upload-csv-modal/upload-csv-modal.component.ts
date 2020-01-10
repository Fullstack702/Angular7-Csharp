import { Component, OnInit } from '@angular/core';
import { Subject } from "rxjs";
import { BsModalRef } from "ngx-bootstrap";
import { ApiService } from "../../../../services/api.service";


@Component({
  selector: 'app-upload-csv-modal',
  templateUrl: './upload-csv-modal.component.html',
  styleUrls: ['./upload-csv-modal.component.css']
})
export class UploadCSVModalComponent implements OnInit {

  filename = null;
  onClose: Subject<any>;

  constructor(public bsModalRef: BsModalRef, private api: ApiService) {
  }

  ngOnInit() {
    this.onClose = new Subject();
  }

  save() {

  }

  close(success: boolean) {
    this.onClose.next({
      success: success
    });
    this.bsModalRef.hide();
  }

}
