import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {DetailsPage} from '../pages/details/details';
import {AngularFireModule} from 'angularfire2';

// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyD1x9uaWqejNNcZzWgtpt6FX0vFJ9OUAOE",
    authDomain: "ionicproject-b3ff0.firebaseapp.com",
    databaseURL: "https://ionicproject-b3ff0.firebaseio.com",
    storageBucket: "ionicproject-b3ff0.appspot.com",
    messagingSenderId: "210069377296"
};


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DetailsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
