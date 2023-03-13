const Spinner = () => {
  return (
    <div className="flex flex-col justify-center items-center w-50 h-50 h-full w-full">
      <div className="spinner w-52 h-52 border-t-2 border-b-2 border-gray-900 rounded-full animate-spin"></div>
      <p className="text-3xl">Loading content...</p>
    </div>
  );
};

export default Spinner;
