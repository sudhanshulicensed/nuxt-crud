import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    deleteDoc,
    doc,
    query,
    where,
    setDoc,
    collectionGroup,
    Timestamp,
  } from "firebase/firestore";
  import { firestoreDb } from "./firebase";
  
  export const queryByCollection = async (col) => {
    // @ts-ignore
    const colRef = collection(firestoreDb, col);
  
    const snapshot = await getDocs(colRef);  
    const docs = Array.from(snapshot.docs).map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      };
    });
  
    return docs;
  };
  
  export const set = async (col, document) => {
    console.log('Collection', col)
    console.log('document', document)
    await setDoc(doc(collection(firestoreDb, col)), document, { merge: true });
  };
  
  export const add = async (col, document) => {
    // @ts-ignore
    const colRef = collection(firestoreDb, col);
  
    const docRef = await addDoc(colRef, document);
  
    return docRef;
  };
  
  export const del = async (col, id) => {
    console.log('HUUHUHUHHU', col, id)
    const docRef = doc(firestoreDb, col, id);
    console.log('DOCREF', docRef)
    // return await deleteDoc(docRef);
  };