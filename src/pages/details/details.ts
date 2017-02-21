import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { HomePage } from '../home/home';

/*
  Generated class for the Details page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {
tasks: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, af: AngularFire) {
    this.tasks = af.database.list('/tasks');
  }

  
 //methods
 deleteTask(name: string)
 {
    this.tasks.remove(name);
    this.navCtrl.push(HomePage);
 }
 cancelEdit(){
   this.navCtrl.push(HomePage);
 }
}
