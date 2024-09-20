import { useState } from 'react';

const SpeechRecognition = () => {

  const [transcript, setTranscript] = useState('');

  const startListening = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.lang = 'pl-PL';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();
  };

  return (
    <div className="p-4">
      <button onClick={startListening} className="bg-blue-500 text-white px-4 py-2 rounded">
        Start speaking
      </button>
      <p className="mt-4 text-lg">{transcript}</p>
    </div>
  );
};

export default SpeechRecognition;