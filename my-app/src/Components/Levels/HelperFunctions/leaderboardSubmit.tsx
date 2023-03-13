interface Props {
  userName: string;
  time: number;
}

const submitToLeaderboard = ({ userName, time }: Props) => {
  console.log({ userName, time });
  // validate if user is already in leaderboard
  // if !leaderboard create new record
  // if user is already in leaderboard check if this time is better
  // time better - update leaderboard
};

export default submitToLeaderboard;
