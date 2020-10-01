import { Component, OnInit, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, ViewChild, AfterViewInit } from '@angular/core';
import { AComponent } from './a/a.component';
import { DataService } from './data.service';

export interface Adata {
  prop1: string;
  prop2: string;
  sub?: object;
  prop3?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements
  OnInit {

  @ViewChild(AComponent, { static: false }) aComp: AComponent;
  title = 'AngularChangeDetection';
  comp = 'AppComponent';

  adata: Adata = {
    prop1: 'Property 1',
    prop2: 'Property 2',
    sub: {
      subProp1: 'Sub Property 1',
    }
  };

  constructor(private dataService: DataService) { }

  changeData() {
    // this.adata.prop1 = 'Property Changed 1';
    // this.adata.prop2 = 'Property Changed 2';
    // this.adata.prop3 = 'Property Changed 3';
    // this.adata.sub = { random: Math.random() };
    // this.adata = Object.assign({}, this.adata);

    this.doSomethingWithData1();
    // this.dataService.setData();
  }

  doSomethingWithData1() {
    this.adata.prop1 = 'Property Changed 1';
    this.adata.sub = { random: Math.random() };
    this.getSomeDataFromAPI();
  }

  getSomeDataFromAPI() {
    // Wait for a service call from api
    // cuz adata needs a change based on that response.
    setTimeout(() => {
      this.adata.prop3 = Math.random().toString();
      // this.adata = Object.assign({}, this.adata);
    }, 5000);

  }

  ngOnInit() {

  }
}
