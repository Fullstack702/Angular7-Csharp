import { Component, OnInit } from '@angular/core';
import { Subject } from "rxjs";
import { BsModalRef } from "ngx-bootstrap";
import { ApiService } from "../../../../services/api.service";
import { MARKETPLACES } from '../../products';

@Component({
  selector: 'app-add-source-modal',
  templateUrl: './add-source-modal.component.html',
  styleUrls: ['./add-source-modal.component.css']
})
export class AddSourceModalComponent implements OnInit {

  item: any = {};
  onClose: Subject<any>;
  marketPlaces = MARKETPLACES;
  selectedType = null;

  constructor(public bsModalRef: BsModalRef, private api: ApiService) {
  }

  ngOnInit() {
    this.onClose = new Subject();
  }

  save() {
    // this.api.UpdateConditions([this.condition], data => {
    //   this.close(true);
    // }, error => {
    //   alert(error.Messages.join(','));
    // }
    // );
  }

  close(success: boolean) {
    this.onClose.next({
      success: success
    });
    this.bsModalRef.hide();
  }

}
