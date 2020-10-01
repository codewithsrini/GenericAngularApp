import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { fromEvent, Observable, Subscription, of, interval } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-observable-example',
  templateUrl: './observable-example.component.html',
  styleUrls: ['./observable-example.component.scss']
})
export class ObservableExampleComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('btn', { static: false }) button: ElementRef;

  buttonObservable: Observable<Event>;
  buttonSubscriber1: Subscription;
  buttonSubscriber2: Subscription;

  dummyObservable: Observable<any>;
  dummySubscriber: Subscription;

  ofObservable: Observable<any>;
  ofSubscriber: Subscription;

  constructor() { }

  ngOnInit() {

    // this.dummyObservable = new Observable((obs) => {
    //   obs.next('Blah');
    //   obs.next('Blah 1');
    //   obs.next('Blah 2');
    //   obs.next('Blah 3');
    //   // obs.error('Error! Something happ');
    //   obs.complete();
    // });

    // this.dummySubscriber = this.dummyObservable.subscribe({
    //   next: (data) => console.log(data),
    //   error: (error) => console.log(error),
    //   complete: () => console.log('Done with it'),
    // });

    this.ofObservable = of(1, 2, 3, 4, 5, 6, ['a', 'b', 'c']);
    this.ofSubscriber = this.ofObservable.subscribe(data => {
      console.log(data);
    });

    // const secondsCounter = interval(1000);
    // // Subscribe to begin publishing values
    // secondsCounter.pipe(filter(n => this.isPrime(n))).subscribe(n =>
    //   console.log(`${n}`)
    // );
  }

  isPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }

      return num > 1;
    }
  }

  // Since we are dealing with element ref,
  // We need to select button only after view init lifecycle
  ngAfterViewInit() {
    this.buttonObservable = fromEvent(this.button.nativeElement, 'click');
    // Nothing happens, since when ever you want to trigger an Observable, you need to subscribe to them

    // This is the trigger part where you will listen to your Observable
    //  A subscriber or oberver
    // this.buttonObservable.subscribe(event => {
    //   console.log(event);
    // });

    // this.buttonSubscriber = this.buttonObservable.subscribe(event => {
    //   console.log(event);
    // });

    this.buttonSubscriber1 = this.buttonObservable.subscribe(
      {
        next: (event) => {
          console.log(event);
        },
        error: (error) => console.log(error),
        complete: () => console.log('Subcription Completed'),
      }
    );

    this.buttonSubscriber2 = this.buttonObservable.subscribe(
      {
        next: (event) => {
          console.log(event);
        },
        error: (error) => console.log(error),
        complete: () => console.log('Subcription Completed'),
      }
    );
  }

  ngOnDestroy() {
    if (this.buttonSubscriber1) {
      this.buttonSubscriber1.unsubscribe();
    }
  }
}
