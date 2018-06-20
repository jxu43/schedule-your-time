import {Component, Inject, OnInit} from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AddTaskPage } from "../add-task/add-task";
import { TaskProvider } from "../../providers/task/task";
import { Task } from "../../shared/task";
import { Tasks } from "../../shared/tasks";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tasks: Task[];
  errMess: String;

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              @Inject('BaseURL') private BaseURL,
              private taskservice: TaskProvider) {

  }

  ngOnInit() {
    this.taskservice.getTask().subscribe(tasks => this.tasks = tasks, errMess => this.errMess = errMess);
  }

  addTask() {
    let modal = this.modalCtrl.create(AddTaskPage);

    modal.onDidDismiss(task => {
              this.tasks.push(task);
            });

    modal.present();
  }
}
