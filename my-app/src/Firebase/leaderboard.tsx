import db from "../Firebase/init";
import { addDoc, collection, getDocs, setDoc, doc } from "firebase/firestore";

interface Props {
  userName: string;
  time: number;
}

export const getLeaderboard = async ({ userName, time }: Props) => {
  const querySnapshot = await getDocs(collection(db, "leaderboard"));
  let obj;
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    //console.log(doc.id, " => ", doc.data());
    obj = doc.data();
  });
  return obj;
};

interface DataProps {
  level: string;
  userName: string;
  time: number;
}

export const addDataToLeaderboard = async ({
  level,
  userName,
  time,
}: DataProps) => {
  const leaderboardRef = collection(db, level);
  const levelRef = doc(leaderboardRef, "leaderboard");
  const userRef = doc(collection(levelRef, "Users"), userName);

  // Add the user's score and timestamp to the database
  await setDoc(userRef, {
    time,
    timestamp: Date.now(),
  });
};

export const addToLeaderboard = () => {};
