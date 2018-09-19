import firebase from 'firebase/app';
require('firebase/auth');
require('firebase/database');

const config = {

};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');