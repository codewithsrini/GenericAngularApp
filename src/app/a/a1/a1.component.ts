import { Component, OnInit, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-a1',
  templateUrl: './a1.component.html',
  styleUrls: ['./a1.component.scss']
})
export class A1Component implements OnInit, OnDestroy, DoCheck,
  AfterContentInit, AfterContentChecked {

  rand = Math.random();
  constructor() { }

  comp = 'A1Component';
  ngOnInit() {
    console.log(`${this.comp} - ngOnInit`);
  }
  ngAfterContentChecked() {
    console.log(`${this.comp} - ngAfterContentChecked`);
  }
  ngDoCheck() {
    console.log(`${this.comp} - ngDoCheck`);
    this.rand = Math.random();
  }
  ngOnDestroy() {
    console.log(`${this.comp} - ngOnDestroy`);
  }
  ngAfterContentInit() {
    console.log(`${this.comp} - ngAfterContentInit`);
  }

}
