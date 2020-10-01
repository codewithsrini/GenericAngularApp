import { Component, OnInit, Input, OnChanges, DoCheck, SimpleChange, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { IPatientDetail, IDrug } from '../model';
import { DataService } from 'src/app/data.service';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnChanges, DoCheck {
  @Input() patientDetail: IPatientDetail;
  // tslint:disable-next-line: no-output-rename
  @Output('addDrug') addDrugEvent = new EventEmitter<IDrug>();

  cdCount = 0;
  orderForm: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataService) { }

  ngOnInit() {
    this.orderForm = this.fb.group({
      items: this.fb.array([]),
    });
    this.dataService.getAddedDrugForOrder().subscribe(res => this.addDrug(res));
  }

  addDrug(drug: IDrug) {
    if (drug) {
      this.addDrugFormControl();
      this.addDrugEvent.emit(drug);
    }
  }

  addDrugFormControl(): void {
    const items = this.orderForm.controls.items as FormArray;
    items.push(this.fb.group({
      comment: ''
    }));
  }

  modifyDrug(drug: IDrug): void {
    // This could open a popup or append some changes, etc
    drug.comment = 'Adding a comment to a drug ' + Math.random();
  }


  ngOnChanges(changes: SimpleChanges) {

  }

  ngDoCheck() {
    // console.log(this.patientDetail.orderedDrugs);
    this.cdCount++;
  }


}
