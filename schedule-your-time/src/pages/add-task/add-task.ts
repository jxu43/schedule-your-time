import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from "@angular/forms";

/**
 * Generated class for the AddTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-task',
  templateUrl: 'add-task.html',
})
export class AddTaskPage {

  taskForm: FormGroup;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              private formBuilder: FormBuilder) {
    this.taskForm = this.formBuilder.group({
      startTime: [''],
      endTime:[''],
      title:['', Validators.required],
      description:['']
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTaskPage');
  }

  dismiss() {
    this.viewCtrl.dismiss(this.taskForm.value);
  }

  onSubmit() {
    console.log(this.taskForm.value);
    this.dismiss();
  }

}
