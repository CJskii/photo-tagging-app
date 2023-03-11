import db from "../Firebase/init";
import { addDoc, collection, getDocs, setDoc, doc } from "firebase/firestore";
import { query, where } from "firebase/firestore";

const level = "level1";
const arr: any = [];

const addDataToFirestore = async () => {
  const data = [
    {
      characters: [
        {
          name: "odlaw",
          render: true,
        },
        { name: "waldo", render: true },
        { name: "wizard", render: true },
        { name: "wenda", render: false },
      ],
      level: { name: "Level 1" },
      levelBest: { time: "00:00:54" },
    },
  ];
  if (data && data.length > 0) {
    const collectionRef = collection(db, "level1");
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

export { addData, getData, getLevelData, addDataToFirestore };
