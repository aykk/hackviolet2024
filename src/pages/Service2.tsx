import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import OpenAIResponse from '../Response';
import { useLocation } from 'react-router-dom'; 

const TypingText = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index += 1;

      if (index === text.length) {
        clearInterval(typingInterval);
      }
    }, 15); // Adjust the interval for the typing speed

    return () => clearInterval(typingInterval);
  }, [text]);

  return <span>{displayedText}</span>;
};

const Service2 = () => {
  const [openAIResponse, setOpenAIResponse] = useState<string | undefined>(undefined);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const openAI = new OpenAIResponse();
        const prompt = `You are an assistant going to explain the key differences between ${location.state.country} and the United States specifically in Women's rights in the language of ${location.state.language}`;

        await openAI.fetchData(prompt);
        const generatedString = openAI.getResponse();
        setOpenAIResponse(generatedString);
      } catch (error) {
        console.error('Error fetching data:', error);
        setOpenAIResponse('Failed to fetch data');
      }
    };

    fetchData();
  }, [location.state]);

  return (
    <div>
      <Navbar />
      <h1>Hello from Service2!</h1>
      {openAIResponse !== undefined ? (
        <h2>
          <TypingText text={openAIResponse || ''} />
        </h2>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Service2;
