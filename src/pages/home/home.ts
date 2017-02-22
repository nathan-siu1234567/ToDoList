import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

//reference details page
import {DetailsPage} from '../details/details';
import {AddPage} from '../add/add';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

tasks: FirebaseListObservable<any>;// reference to the database

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, af: AngularFire) {

this.tasks = af.database.list('/tasks'); // get tasks from firebase
  }
  //methods

  //this method takes user to the details view and also passes the task object
  detailsView(task){
    this.navCtrl.push(DetailsPage,task);// passes the current task to the details page
  }
  //method to update task
  taskCompleted(task){
    this.tasks.update(task.$key,{complete:task.complete});//updates task to complete in the db
  }

  addNewTask(){
    this.navCtrl.push(AddPage);// redirect to add page
  }

}
