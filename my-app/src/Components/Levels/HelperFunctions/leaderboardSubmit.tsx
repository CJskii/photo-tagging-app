import { addLeaderboardData } from "../../../Firebase/addData";
import { getUserData } from "../../../Firebase/getData";
interface Props {
  level: string;
  userName: string;
  time: number;
}

interface ValidateProps {
  userData: {
    [key: string]: {
      time: number;
      timestamp: number;
    };
  };
  time: number;
  userName: string;
}

const submitToLeaderboard = async ({ level, userName, time }: Props) => {
  const userData = await getUserData({ level, userName });
  if (Object.keys(userData).length === 0)
    return addLeaderboardData({ level, userName, time });

  const higherScore = validateScore({ userData, userName, time });

  higherScore ? addLeaderboardData({ level, userName, time }) : () => {};
};

const validateScore = ({ userData, userName, time }: ValidateProps) => {
  const bestScore = userData[userName];
  if (bestScore.time <= time) {
    console.log("You already have better score");
    return false;
  } else return true;
};

export default submitToLeaderboard;
