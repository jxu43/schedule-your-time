import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {User} from "../../shared/user";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PasswordValidation} from "./PasswordValidation";

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  signupForm: FormGroup;
  user: User = {username: '', password: ''};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              private formBuilder: FormBuilder) {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {validator: PasswordValidation.MatchPassword});

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  onSubmit() {
    console.log(this.signupForm.value, this.user);
    this.user.username = this.signupForm.get('username').value;
    this.user.password = this.signupForm.get('password').value;
    console.log(this.user);
    // if(this.loginForm.get('remember').value)
    //   this.storage.set('user', this.user)
    // else
    //   this.storage.remove('user');
    this.viewCtrl.dismiss();
  }


}
