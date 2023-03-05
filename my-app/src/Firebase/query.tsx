import db from "../Firebase/init";
import { addDoc, collection, getDocs } from "firebase/firestore";

const addData = async () => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const getData = async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    console.log(`DocID:  ${doc.id}`);
    console.log(`Data: => ${JSON.stringify(doc.data())}`);
  });
};

export { addData, getData };
