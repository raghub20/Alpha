import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, DatePipe } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatSidenavModule,
  MatExpansionModule,
  MatMenuModule,
  MatIconModule,
  MatCheckboxModule,
  MatDialogModule,
  MatAutocompleteModule,
  MatSelectModule,
  MatToolbarModule,
  MatListModule,
  MatStepperModule,
  MatRadioModule,
  MatGridListModule,
  MatDatepicker,
  MatDatepickerModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { ProjectAlphaModule } from './public/project-alpha/project-alpha.module';
import { HighlightSearchPipe } from './public/project-alpha/highlight-search.pipe';
import { CandidateAssessmentComponent } from './public/candidate-assessment/candidate-assessment.component';
import { RelocationComponent } from './public/candidate-assessment/candidate-assessment-childcomponent/relocation/relocation.component';
import { WelcomePageComponent } from './public/candidate-assessment/candidate-assessment-childcomponent/welcome-page/welcome-page.component';
import { RightsectionComponent } from './public/candidate-assessment/candidate-assessment-rightsection/rightsection/rightsection.component';
import { PeopleRelocationComponent } from './public/candidate-assessment/candidate-assessment-childcomponent/people-relocation/people-relocation.component';
import { CurrentAddressComponent } from './public/candidate-assessment/candidate-assessment-childcomponent/current-address/current-address.component';
import { CityComponent } from './public/candidate-assessment/candidate-assessment-childcomponent/city/city.component';
import { CurrentResidnceComponent } from './public/candidate-assessment/candidate-assessment-childcomponent/current-residnce/current-residnce.component';
import { ReviewComponent } from './public/candidate-assessment/review/review.component';
import { NumberOfRoomsComponent } from './public/candidate-assessment/candidate-assessment-childcomponent/number-of-rooms/number-of-rooms.component';
import { TypeOfHomeComponent } from './public/candidate-assessment/candidate-assessment-childcomponent/type-of-home/type-of-home.component';
@NgModule({
  declarations: [
    AppComponent,
    CandidateAssessmentComponent,
    RelocationComponent,
    WelcomePageComponent,
    RightsectionComponent,
    PeopleRelocationComponent,
    CurrentAddressComponent,
    CityComponent,
    CurrentResidnceComponent,
    ReviewComponent,
    NumberOfRoomsComponent,
    TypeOfHomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatExpansionModule,
    MatIconModule,
    ProjectAlphaModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatToolbarModule,
    MatListModule,
    MatStepperModule,
    MatRadioModule,
    MatGridListModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule, 
    AppRoutingModule // I must be last!! https://angular.io/guide/router#module-import-order-matters
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
  HighlightSearchPipe,
  DatePipe
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
