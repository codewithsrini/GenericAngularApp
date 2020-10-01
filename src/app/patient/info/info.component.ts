import { Component, OnInit, Input, OnChanges, DoCheck, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoComponent implements OnInit, DoCheck {
  @Input() patientDetail;
  cdCount = 0;
  constructor() { }

  ngOnInit() {
    this.cdCount++;
  }
  ngDoCheck() {
    this.cdCount++;
    // console.log('info comp', this.patientDetail);
  }


}
