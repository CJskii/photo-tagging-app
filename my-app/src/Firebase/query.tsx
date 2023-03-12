import db from "../Firebase/init";
import { addDoc, collection, getDocs, setDoc, doc } from "firebase/firestore";

const addDataToFirestore = async () => {
  const data = [
    {
      Odlaw: [
        {
          x: { min: 242, max: 255 },
          y: { min: 364, max: 384 },
        },
      ],
      Waldo: [
        {
          x: { min: 532, max: 556 },
          y: { min: 358, max: 395 },
        },
      ],
      Wizard: [
        {
          x: { min: 628, max: 652 },
          y: { min: 357, max: 408 },
        },
      ],
    },
  ];

  if (data && data.length > 0) {
    const collectionRef = collection(db, "Level 1");
    await addDoc(collectionRef, data[0]);
  } else {
    console.log("No data to add");
  }
};

const getLevelData = async (level: string) => {
  const querySnapshot = await getDocs(collection(db, "level1"));
  let obj;
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    //console.log(doc.id, " => ", doc.data());
    obj = doc.data();
  });
  return obj;
};

const getValidationData = async (level: string) => {
  const querySnapshot = await getDocs(collection(db, level));
  let obj;
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    //console.log(doc.id, " => ", doc.data());
    obj = doc.data();
  });
  return obj;
};

const addData = async () => {
  try {
    const data = {
      odlaw: { isFound: false, render: true },
      waldo: { isFound: false, render: true },
      wizard: { isFound: false, render: true },
      wenda: { isFound: false, render: false },
    };
    const docRef = await setDoc(doc(db, "level1", "characters"), data);
    //console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const getData = async () => {
  const querySnapshot = await getDocs(collection(db, "level1"));
  querySnapshot.forEach((doc) => {
    console.log(`DocID:  ${doc.id}`);
    console.log(`Data: => ${JSON.stringify(doc.data())}`);
  });
};

export {
  addData,
  getData,
  getLevelData,
  addDataToFirestore,
  getValidationData,
};
