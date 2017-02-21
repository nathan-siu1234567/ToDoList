import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
//reference details page
import {DetailsPage} from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

tasks: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, af: AngularFire) {

this.tasks = af.database.list('/tasks');
  }
  //methods
  detailsView(){
    this.navCtrl.push(DetailsPage);
  }

}
