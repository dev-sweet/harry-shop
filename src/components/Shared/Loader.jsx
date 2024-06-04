const Loader = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-center text-xl mb-3">Loading...</h1>
        <div className="flex space-x-2">
          <div className="w-4 h-4 bg-indigo-600 rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-indigo-600 rounded-full animate-bounce200"></div>
          <div className="w-4 h-4 bg-indigo-600 rounded-full animate-bounce400"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
