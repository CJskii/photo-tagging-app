import db from "../Firebase/init";
import { collection, setDoc, doc } from "firebase/firestore";

interface LeaderboardProps {
  level: string;
  time: number;
  userName: string;
}

// Character data
export const addCharacterData = async () => {
  const data = [
    {
      data: [
        {
          name: "odlaw",
          render: false,
          isFound: false,
        },
        { name: "waldo", render: true, isFound: false },
        { name: "wizard", render: false, isFound: false },
        { name: "wenda", render: false, isFound: false },
      ],
    },
  ];
  const collectionRef = collection(db, "Level 6");
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
      Waldo: [
        {
          x: { min: 265, max: 309 },
          y: { min: 1935, max: 2095 },
        },
      ],
    },
  ];
  const collectionRef = collection(db, "Level 6"); // change level
  const charactersRef = doc(collectionRef, "Validation");
  if (data && data.length > 0) {
    await setDoc(charactersRef, data[0]);
  } else {
    console.log("No data to add");
  }
};

// Leaderboard data
export const addLeaderboardData = async ({
  level,
  time,
  userName,
}: LeaderboardProps) => {
  const leaderboardRef = collection(db, level);
  const levelRef = doc(leaderboardRef, "Leaderboard");
  const userRef = doc(collection(levelRef, "Users"), userName);

  // Add the user's score and timestamp to the database
  await setDoc(userRef, {
    time,
    timestamp: Date.now(),
  });
  console.log("data submitted");
};
