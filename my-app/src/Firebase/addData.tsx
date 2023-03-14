import db from "../Firebase/init";
import { addDoc, collection, getDocs, setDoc, doc } from "firebase/firestore";

// Character data
export const addCharacterData = async () => {
  const data = [
    {
      data: [
        {
          name: "odlaw",
          render: true,
        },
        { name: "waldo", render: true },
        { name: "wizard", render: true },
        { name: "wenda", render: false },
      ],
    },
  ];
  const collectionRef = collection(db, "Level 1");
  const charactersRef = doc(collectionRef, "Characters");
  if (data && data.length > 0) {
    await setDoc(charactersRef, data[0]);
  } else {
    console.log("No data to add");
  }
};

// ValidationData
export const addValidationData = async () => {
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
  const collectionRef = collection(db, "Level 1");
  const charactersRef = doc(collectionRef, "Validation");
  if (data && data.length > 0) {
    await setDoc(charactersRef, data[0]);
  } else {
    console.log("No data to add");
  }
};

// Leaderboard data
export const addLeaderboardData = async () => {
  const leaderboardRef = collection(db, "Level 1");
  const levelRef = doc(leaderboardRef, "Leaderboard");
  const userRef = doc(collection(levelRef, "Users"), "Marek");
  const time = 5;

  // Add the user's score and timestamp to the database
  await setDoc(userRef, {
    time,
    timestamp: Date.now(),
  });
};
