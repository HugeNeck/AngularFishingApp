import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReplaceComponent } from './replace/replace.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';

import { LivewellComponent } from './livewell/livewell.component';
import { ChooseFisherComponent } from './choose-fisher/choose-fisher.component';
import { CatchItemComponent } from './livewell/catch-item/catch-item.component';


import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './login/login.component';

import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { WeatherDataComponent } from './weather-data/weather-data.component';
import { SideBarComponent } from './side-bar/side-bar.component';

const firebase = {
  apiKey: "AIzaSyAof-ZK4ea9TXcP_5zmVWD1ZMJSvrR8mHw",
  authDomain: "fishingapp-36472.firebaseapp.com",
  databaseURL: "https://fishingapp-36472.firebaseio.com",
  projectId: "fishingapp-36472",
  storageBucket: "fishingapp-36472.appspot.com",
  messagingSenderId: "356887152571",
  appId: "1:356887152571:web:9cec8bf82d6c3fcfb2669e",
  measurementId: "G-549XVJ90Y3"
}

@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    ReplaceComponent,
    LivewellComponent,
    ChooseFisherComponent,
    CatchItemComponent,
    WeatherDataComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    FormsModule,
    MatCardModule,
    HttpClientModule,
    MatSelectModule,
    MatSidenavModule,
    AngularFireModule.initializeApp(firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class AppModule { }
