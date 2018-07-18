import { Component } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor() {
    var config = {
        apiKey: 'AIzaSyBBnZgOTReTwT7UX7L3ewI9YBQisitmSQ4',
        authDomain: 'http-client-demo-1cb46.firebaseapp.com',
        databaseURL: 'https://http-client-demo-1cb46.firebaseio.com',
        projectId: 'http-client-demo-1cb46',
        storageBucket: 'http-client-demo-1cb46.appspot.com',
        messagingSenderId: '37050626144'
    };
    firebase.initializeApp(config);
}
}
