import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ContactPage } from "../pages/contact/contact";
import { SchedulePage } from "../pages/schedule/schedule";
import { AddSchedulePage } from "../pages/add-schedule/add-schedule";
import { LoginPage } from "../pages/login/login";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, icon: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar,
              public splashScreen: SplashScreen, public modalCtrl: ModalController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
       { title: 'Home', icon: 'home', component: HomePage },
       { title: 'Contact Us', icon: 'information-circle', component: ContactPage },
       { title: 'Manage Your Time', icon: 'time', component: SchedulePage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  addSchedule() {
    let modal = this.modalCtrl.create(AddSchedulePage);
    modal.present();
  }

  openLogin() {
    let modal = this.modalCtrl.create(LoginPage);
    modal.present();
  }
}
