import app from "firebase/app"
import "firebase/functions"
import "firebase/firestore"

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
}

class Firebase {
  constructor() {
    app.initializeApp(config)
    this.functions = app.functions()
    this.db = app.firestore()
  }
  
  createEntry(data) {
    // Add a second document with a generated ID.
    this.db.collection("questions")
      .add(data)
      .then((docRef) => console.log("Document written with ID: ", docRef.id))
      .catch((error) => console.error("Error adding document: ", error))
  }
}

export default Firebase
