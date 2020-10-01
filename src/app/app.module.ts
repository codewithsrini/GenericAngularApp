import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { A1Component } from './a/a1/a1.component';
import { PatientComponent } from './patient/patient.component';
import { OrderComponent } from './patient/order/order.component';
import { InfoComponent } from './patient/info/info.component';
import { DrugComponent } from './patient/drug/drug.component';
import { HttpClientModule } from '@angular/common/http';
import { NgZoneDemo } from './ngdemo.component';
import { httpInterceptorProviders } from './http-interceptors';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ObservableExampleComponent } from './observable-example/observable-example.component';

// enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent,
    A1Component,
    PatientComponent,
    DrugComponent,
    OrderComponent,
    InfoComponent,
    NgZoneDemo,
    ComponentInteractionComponent,
    SpinnerComponent,
    ObservableExampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
