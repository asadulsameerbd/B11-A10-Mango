const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-br from-indigo-100 via-pink-100 to-yellow-100">
      <div className="flex items-center justify-center space-x-3">
        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-pink-500 to-red-500 animate-bounce"></div>
        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-green-400 to-emerald-600 animate-bounce [animation-delay:200ms]"></div>
        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 animate-bounce [animation-delay:400ms]"></div>
      </div>
    </div>
  );
};

export default Loading;
