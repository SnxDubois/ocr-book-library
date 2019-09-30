import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
  const firebaseConfig = {
    apiKey: 'AIzaSyA9Hw2jf2xfcVd3jLyCm8K7Qf9uVtvQ6xI',
    authDomain: 'book-library-6c547.firebaseapp.com',
    databaseURL: 'https://book-library-6c547.firebaseio.com',
    projectId: 'book-library-6c547',
    storageBucket: 'book-library-6c547.appspot.com',
    messagingSenderId: '253610682250',
    appId: '1:253610682250:web:dacafdda6ba9e70763ca73',
    measurementId: 'G-4YN4QK9JN9'
  };
  firebase.initializeApp(firebaseConfig);
}
}
