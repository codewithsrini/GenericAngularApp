import {
  Component, OnInit, Input, Output,
  EventEmitter, ChangeDetectionStrategy, OnChanges, DoCheck, ChangeDetectorRef, OnDestroy
} from '@angular/core';
import { IPatientDetail, IDrug } from '../model';
import { DataService } from 'src/app/data.service';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared.service';
import { take } from 'rxjs/internal/operators/take';


@Component({
  selector: 'app-drug',
  templateUrl: './drug.component.html',
  styleUrls: ['./drug.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrugComponent implements OnInit, OnDestroy, DoCheck {
  @Input() patientId: number;
  // @Output() addDrug = new EventEmitter<IDrug>();

  availableDrugs: IDrug[] = [];
  private getDrugsSubscription: Subscription;
  cdCount = 0;

  constructor(
    private dataService: DataService,
    private cdRef: ChangeDetectorRef,
    private shared: SharedService,
  ) { }

  ngOnInit() {
    this.getDrugsSubscription = this.dataService.getDrugList(this.patientId).subscribe(data => {
      this.availableDrugs = data;
      this.shared.loadDrugs(data);
    });

  }

  getDrugList(): void {
    this.dataService.getDrugList(this.patientId).pipe(take(1)).subscribe(data => {
      this.availableDrugs = data;
      this.shared.loadDrugs(data);
    });
  }

  ngDoCheck() {
    this.cdCount++;

  }

  addDrugEvt(drug: IDrug) {
    // this.addDrug.emit(drug);
    // this.dataService.addDrugToOrder(drug);
  }

  ngOnDestroy() {
    if (this.getDrugsSubscription) {
      this.getDrugsSubscription.unsubscribe();
    }
  }

}
