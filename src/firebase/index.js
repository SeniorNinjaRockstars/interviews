import FirebaseContext, { withFirebase } from "./context"
import Firebase from "./Firebase"

let firebaseCache;

const getFirebase = (app) => {
  if (!firebaseCache) {
    firebaseCache = new Firebase(app)
  }

  return firebaseCache
}

export {
  Firebase as default,
  getFirebase,
  FirebaseContext,
  withFirebase,
}
