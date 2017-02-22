import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { HomePage } from '../home/home';

/*
  Generated class for the Add page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})


export class AddPage {
tasks: FirebaseListObservable<any>;
public task:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, af: AngularFire) {
    this.tasks = af.database.list('/tasks');
    this.task={};
  }

 //methods

 addNewTask()
 {
   console.log(this.task);
   this.task.complete = false;
   this.tasks.push(this.task);
   this.navCtrl.push(HomePage); // redirects to home page
 }

}
