import {
  Component,
  OnInit,
  OnDestroy,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnChanges,
  SimpleChange
} from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-a',
  styleUrls: ['./a.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <div class="p-1 border-info">

    <p>{{ data | json }}</p>

    <p>{{ subData | json  }}</p>

    <p>{{ intVal  }}</p>

    <app-a1></app-a1>

    <div class="p-2">
        <button class="btn btn-primary" (click)="changeData()">Change A Data</button>
    </div>
  </div>
  `
})
export class AComponent implements OnInit, OnDestroy,
  AfterContentInit, AfterContentChecked, OnChanges {

  @Input() data;
  test;
  intVal = 0;
  subData = [];

  dat: Subscription;

  constructor(
    private cdRef: ChangeDetectorRef,
    private dataService: DataService) {
    // this.cdRef.detectChanges();
  }

  comp = 'AComponent';

  changeData() {
    // this.data.count = 1;
  }

  ngOnInit() {
    console.log(`${this.comp} - ngOnInit`);
    this.test = '';

    // setInterval(() => {
    //   this.intVal++;
    //   console.log(this.intVal);
    //   // this.cdRef.markForCheck();
    //   this.cdRef.detectChanges();
    // }, 1000);


    this.dat = this.dataService.getData().subscribe(val => {
      console.log(val);
      this.subData = val;
      // this.cdRef.detectChanges();
    });
  }

  ngOnChanges() {
    console.log(`${this.comp} - ngOnChanges`);
  }
  ngAfterContentChecked() {
    console.log(`${this.comp} - ngAfterContentChecked`);
  }
  // ngDoCheck() {
  //   console.log(`${this.comp} - ngDoCheck`);
  // }
  ngOnDestroy() {
    console.log(`${this.comp} - ngOnDestroy`);
  }
  ngAfterContentInit() {
    console.log(`${this.comp} - ngAfterContentInit`);
  }

}
