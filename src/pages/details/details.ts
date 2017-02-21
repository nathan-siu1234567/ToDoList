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
tasks: FirebaseListObservable<any>; // reference to the database
task;// task object
  constructor(public navCtrl: NavController, public navParams: NavParams, af: AngularFire) {
    
    this.tasks = af.database.list('/tasks');//get task list
    this.task= navParams.data; //get task 
    //console.log(this.task);
  }

  
 //methods

 //this method deletes a task
 deleteTask(task)
 {
   //console.log(task);
    this.tasks.remove(task); //deletes task
    this.navCtrl.push(HomePage); //redirects to home page after deleting
 }
 cancelEdit(){
   this.navCtrl.push(HomePage);// return to home page
 }

 //this method updates the current task
 updateTask(task){

  this.tasks.update(this.task.$key,this.task); //updates current task
  this.navCtrl.push(HomePage); // redirects to home page
 }
}
