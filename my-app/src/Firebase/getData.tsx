import db from "../Firebase/init";
import { collection, getDocs, doc } from "firebase/firestore";

// Get main level data
export const getLevelData = async (level: string) => {
  const obj: { [key: string]: any } = {};
  const querySnapshot = await getDocs(collection(db, level));
  querySnapshot.forEach((doc) => {
    obj[doc.id] = doc.data();
  });

  return obj;
};

// Get level leaderboard data
export const getLeaderboardData = async (level: string) => {
  const levelRef = doc(db, "Level 1", "Leaderboard");
  const userCollectionRef = collection(levelRef, "Users");
  let obj: { [key: string]: any } = {};
  const userSnapshot = await getDocs(userCollectionRef);
  userSnapshot.forEach((userDoc) => {
    obj[userDoc.id] = userDoc.data();
  });

  return obj;
};

// Get level leaderboard data
export const getUserData = async ({
  level,
  userName,
}: {
  level: string;
  userName: string;
}) => {
  const levelRef = doc(db, "Level 1", "Leaderboard");
  const userCollectionRef = collection(levelRef, "Users");
  let obj: { [key: string]: any } = {};
  const userSnapshot = await getDocs(userCollectionRef);
  userSnapshot.forEach((userDoc) => {
    if (userDoc.id == userName) {
      obj[userDoc.id] = userDoc.data();
    } else return null;
  });

  return obj;
};
