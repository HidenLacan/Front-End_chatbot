import { useState } from 'react';
import Chatbot from './Chatbot';
import Title from './Title';

function App() {
  

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <Title />
        <Chatbot />
      </div> 
    </>
  );
}

export default App;

