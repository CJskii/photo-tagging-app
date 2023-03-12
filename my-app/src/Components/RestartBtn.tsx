import { getLevelData, addDataToFirestore } from "../Firebase/query";

const RestartBtn = () => {
  return (
    <>
      <button
        className="btn bg-base-200 hover:bg-secondary hover:animate-bounce"
        onClick={addDataToFirestore}
      >
        add
      </button>
      <button
        className="btn bg-base-200 hover:bg-secondary hover:animate-bounce"
        onClick={() => {
          getLevelData("level1");
        }}
      >
        query2
      </button>
    </>
  );
};

export default RestartBtn;
