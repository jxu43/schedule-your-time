import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AddTaskPage } from "../add-task/add-task";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController) {

  }

  addTask() {
    let modal = this.modalCtrl.create(AddTaskPage);
    modal.present();
  }
}
