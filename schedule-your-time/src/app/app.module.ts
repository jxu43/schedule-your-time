import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';
import { SchedulePage } from "../pages/schedule/schedule";
import { AddSchedulePage } from "../pages/add-schedule/add-schedule";
import { AddTaskPage } from "../pages/add-task/add-task";
import { LoginPage } from "../pages/login/login";
import { SignupPage } from "../pages/signup/signup";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TaskProvider } from '../providers/task/task';
import { ProcessHttpmsgProvider } from '../providers/process-httpmsg/process-httpmsg';

import { HttpClientModule } from "@angular/common/http";
import { baseURL } from '../shared/baseurl';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContactPage,
    SchedulePage,
    AddSchedulePage,
    AddTaskPage,
    LoginPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContactPage,
    SchedulePage,
    AddSchedulePage,
    AddTaskPage,
    LoginPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: 'BaseURL', useValue: baseURL },
    TaskProvider,
    ProcessHttpmsgProvider
  ]
})
export class AppModule {}
