/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAXv1IICJKk612iegwdkoXBj0o6E-NX6Z0",
  authDomain: "marcimkt-529da.firebaseapp.com",
  projectId: "marcimkt-529da",
  storageBucket: "marcimkt-529da.firebasestorage.app",
  messagingSenderId: "495683893328",
  appId: "1:495683893328:web:cf7a6e2dc73c02c70eb955",
  measurementId: "G-VEQNBH49Y8"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
