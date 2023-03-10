interface TimeProps {
  currentTime: { time: string };
  levelBest: { time: string };
  userBest: { time: string };
}

const Time = ({ currentTime, levelBest, userBest }: TimeProps) => {
  console.log(currentTime);
  return (
    <div className="flex flex-col justify-center items-end px-4">
      <div className="text-xl font-bold">
        📢 Current time: {currentTime.time}
      </div>
      <div className="text-xl">🌟 Your best time: {userBest.time}</div>
      <div className="text-xl">🏆 Leaderboard top: {levelBest.time}</div>
    </div>
  );
};

export default Time;
