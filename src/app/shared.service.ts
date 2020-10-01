import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IDrug } from './patient/model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private availableDrugs = new BehaviorSubject<IDrug[]>(null);

  constructor() { }

  loadDrugs(drugs: IDrug[]) {
    this.availableDrugs.next(drugs);
  }

  getDrugs(): Observable<IDrug[]> {
    return this.availableDrugs.asObservable();
  }

}
