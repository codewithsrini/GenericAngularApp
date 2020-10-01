import { Component, OnInit, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss']
})
export class BComponent implements OnInit, OnDestroy, DoCheck,
  AfterContentInit, AfterContentChecked {

  constructor() { }

  comp = 'BComponent';
  ngOnInit() {
    console.log(`${this.comp} - ngOnInit`);
  }
  ngAfterContentChecked() {
    console.log(`${this.comp} - ngAfterContentChecked`);
  }
  ngDoCheck() {
    console.log(`${this.comp} - ngDoCheck`);
  }
  ngOnDestroy() {
    console.log(`${this.comp} - ngOnDestroy`);
  }
  ngAfterContentInit() {
    console.log(`${this.comp} - ngAfterContentInit`);
  }

}
