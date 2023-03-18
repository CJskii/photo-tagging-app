import { getLevelData, getLeaderboardData } from "../../../Firebase/getData";

interface FetchProps {
  setRenderData: (renderData: object) => void;
  setValidationData: (validationData: object) => void;
  setLeaderboardData: (leaderboardData: object) => void;
  setLoading: (loading: boolean) => void;
  level: string;
}

const fetchData = async ({
  setRenderData,
  setValidationData,
  setLeaderboardData,
  setLoading,
  level,
}: FetchProps) => {
  const levelData: any = await getLevelData(level);
  const leaderboardData = await getLeaderboardData(level);
  setRenderData(levelData.Characters);
  setValidationData(levelData.Validation);
  setLeaderboardData(leaderboardData);
  setLoading(false);
};

export default fetchData;
