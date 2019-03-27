const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
}

class Firebase {
  constructor(app) {
    app.initializeApp(config)
    this.db = app.firestore()
  }
  
  createEntry = (data) => (
    this.db.collection("questions")
      .add(data)
      .then(docRef => console.log("Document written with ID: ", docRef.id))
      .catch(error => console.error("Error adding document: ", error))
  )
}

export default Firebase
