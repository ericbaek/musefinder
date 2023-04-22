import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
      apiKey: "AIzaSyCBMZu-MQMyUVzwQ8C-QroMgEFp2ZB3NLU",
      authDomain: "musefinder.firebaseapp.com",
      projectId: "musefinder",
      storageBucket: "musefinder.appspot.com",
      messagingSenderId: "680887998253",
      appId: "1:680887998253:web:daa0a2a911840cd808e5a4",
      measurementId: "G-ZJF8DE90ZS"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
