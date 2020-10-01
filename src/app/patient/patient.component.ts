import { Component, OnInit, ViewChild, DoCheck, NgZone, ChangeDetectorRef, ElementRef, AfterViewInit } from '@angular/core';
import { IPatientDetail, IDrug } from './model';
import { DrugComponent } from './drug/drug.component';
import { DataService } from '../data.service';
import { map } from 'rxjs/operators';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  @ViewChild(DrugComponent, { static: false }) drugComponent: DrugComponent;

  patientDetail: IPatientDetail;

  private cdCount = 0;
  private availableDrugs: IDrug[] = [];

  constructor(
    private dataService: DataService,
    private zone: NgZone,
    private changeDetectorRef: ChangeDetectorRef,
    private shared: SharedService,

  ) { }

  ngOnInit() {

    const data: IPatientDetail = {
      id: this.generateFakeUid(),
      name: 'John Doe',
      phone: '1234567890',
      gender: 'male',
      address: '123, lorem ipsum street',
      location: 'State',
    };
    this.patientDetail = data;

    this.shared.getDrugs().subscribe(drugs => {
      // console.log('FROM SHARED SERVICE', drugs);
      this.availableDrugs = drugs;
    });
  }

  confirm(): void {
    // console.log(this.drugComponent.availableDrugs);
  }

  addDrug(drug: IDrug): void {
    const index = this.patientDetail.availableDrugs.findIndex(x => x.id === drug.id);
    this.patientDetail.availableDrugs.splice(index, 1);
    if (!this.patientDetail.orderedDrugs) {
      this.patientDetail.orderedDrugs = [];
    }

    this.patientDetail.orderedDrugs.push(drug);
    // this.patientDetail = Object.assign({}, this.patientDetail);
  }



  generateFakeDrugs() {
    // this.patientDetail.availableDrugs = [];

    // setTimeout(() => {
    //   for (let i = 0; i < 5; i++) {
    //     const drug: IDrug = {
    //       id: this.generateFakeUid(),
    //       name: 'Drug ' + Math.random().toString(),
    //       strength: '250mg',
    //       refills: 10,
    //     };

    //     this.patientDetail.availableDrugs.push(drug);

    //     // this.patientDetail = Object.assign({}, this.patientDetail);
    //   }
    //   this.drugComponent.update();
    // }, 1000);
  }

  generateFakeUid() {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }



}
