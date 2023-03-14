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
          render: true,
          isFound: false,
        },
        { name: "waldo", render: true, isFound: false },
        { name: "wizard", render: true, isFound: false },
        { name: "wenda", render: false, isFound: false },
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
