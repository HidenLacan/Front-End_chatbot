import React from 'react';

// AppTitle component to display the app's title
const Title = () => {
  return (
    <div className="text-center py-10">
      <h1 className="text-4xl font-bold text-blue-600 md:text-6xl animate-pulse">
        Welcome to Chatbot with GPT-3.5
      </h1>
      <p className="mt-4 text-gray-600 text-lg md:text-xl">
        Start your conversation below and interact with the intelligent chatbot.
      </p>
    </div>
  );
};

export default Title;
