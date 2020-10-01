import { Injectable } from '@angular/core';
import { of, BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IDrug, IPatientDetail } from './patient/model';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data = [1, 2, 3];

  private drug = new BehaviorSubject<IDrug>(null);

  constructor(private http: HttpClient) { }

  getDrugList(patientId: number): Observable<any> {
    const url = environment.apiBaseURL + '/sample/test';

    return this.http.get(url, {
      params: { patientId: patientId.toString() }
    });
  }




  getPatientDetails(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }


  getPostAPI(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }


  addDrugToOrder(drug: IDrug) {
    console.log('Add Drug To Order');
    this.drug.next(drug);
  }

  getAddedDrugForOrder() {
    return this.drug.asObservable();
  }

  getData() {
    return of([... this.data]);
  }

  setData() {
    this.data.push(Math.random());
    return of();
  }


}
