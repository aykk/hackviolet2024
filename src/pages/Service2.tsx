import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import OpenAIResponse from '../Response';
import { useLocation } from 'react-router-dom';


const Service2 = () => {
  const [openAIResponseWR, setOpenAIResponse] = useState<string | undefined>(undefined);
  const [openAIResponseIM, setOpenAIResponse2] = useState<string | undefined>(undefined);
  const [openAIResponseEM, setOpenAIResponse3] = useState<string | undefined>(undefined);
  const [openAIResponseGN, setOpenAIResponse4] = useState<string | undefined>(undefined);

  const [openAIResponseGR, setOpenAIResponse5] = useState<string | undefined>(undefined);
  const [openAIResponseFM, setOpenAIResponse6] = useState<string | undefined>(undefined);
  const [openAIResponseWK, setOpenAIResponse7] = useState<string | undefined>(undefined);
  const [openAIResponseSC, setOpenAIResponse8] = useState<string | undefined>(undefined);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const openAI = new OpenAIResponse();
        const prompt = `You are an assistant going to explain the key differences between ${location.state.country}
         and the United States specifically in Women's rights in the language of ${location.state.language} please be specific yet concise to 2 sentences max.`;

        await openAI.fetchData(prompt);
        const generatedString = openAI.getResponse();

        setOpenAIResponse(generatedString);
      } catch (error) {
        console.error('Error fetching data:', error);
        setOpenAIResponse('Failed to fetch data');
      }

      try {
        const openAI = new OpenAIResponse();
        const prompt = `You are an assistant going to explain the key differences between ${location.state.country}
         and the United States specifically in immigrations laws and deportation in the language of ${location.state.language} please be specific yet concise to 2 sentences max`;

        await openAI.fetchData(prompt);
        const generatedString = openAI.getResponse();

        setOpenAIResponse2(generatedString);
      } catch (error) {
        console.error('Error fetching data:', error);
        setOpenAIResponse('Failed to fetch data');
      }

      try {
        const openAI = new OpenAIResponse();
        const prompt = `You are an assistant going to explain the key differences between ${location.state.country}
         and the United States specifically in employee and employers laws as well as career opportunities in the language of ${location.state.language} please be specific yet concise to 2 sentences max`;

        await openAI.fetchData(prompt);
        const generatedString = openAI.getResponse();

        setOpenAIResponse3(generatedString);
      } catch (error) {
        console.error('Error fetching data:', error);
        setOpenAIResponse('Failed to fetch data');
      }

      try {
        const openAI = new OpenAIResponse();
        const prompt = `You are an assistant going to explain the key differences between ${location.state.country}
         and the United States in terms of the most important legal codes and laws. Please respond in the language of ${location.state.language} please be specific yet concise to 2 sentences max`;

        await openAI.fetchData(prompt);
        const generatedString = openAI.getResponse();

        setOpenAIResponse4(generatedString);
      } catch (error) {
        console.error('Error fetching data:', error);
        setOpenAIResponse('Failed to fetch data');
      }

      try {
        const openAI = new OpenAIResponse();
        const prompt = `You are an assistant going to explain the key differences between ${location.state.country}
         and the United States in terms of the topic of gender in a social context in the language of ${location.state.language} please be specific yet concise to 2 sentences max`;

        await openAI.fetchData(prompt);
        const generatedString = openAI.getResponse();

        setOpenAIResponse5(generatedString);
      } catch (error) {
        console.error('Error fetching data:', error);
        setOpenAIResponse('Failed to fetch data');
      }

      try {
        const openAI = new OpenAIResponse();
        const prompt = `You are an assistant going to explain the key differences between ${location.state.country}
         and the United States in terms of family in a social context in the language of ${location.state.language} please be specific yet concise to 2 sentences max`;

        await openAI.fetchData(prompt);
        const generatedString = openAI.getResponse();

        setOpenAIResponse6(generatedString);
      } catch (error) {
        console.error('Error fetching data:', error);
        setOpenAIResponse('Failed to fetch data');
      }

      try {
        const openAI = new OpenAIResponse();
        const prompt = `You are an assistant going to explain the key differences between ${location.state.country}
         and the United States in terms of work in a social context in the language of ${location.state.language} please be specific yet concise to 2 sentences max`;

        await openAI.fetchData(prompt);
        const generatedString = openAI.getResponse();

        setOpenAIResponse7(generatedString);
      } catch (error) {
        console.error('Error fetching data:', error);
        setOpenAIResponse('Failed to fetch data');
      }

      try {
        const openAI = new OpenAIResponse();
        const prompt = `You are an assistant going to explain the key differences between ${location.state.country}
         and the United States in terms of the most jarring social and cultural differences in the language of ${location.state.language} please be specific yet concise to 2 sentences max`;

        await openAI.fetchData(prompt);
        const generatedString = openAI.getResponse();

        setOpenAIResponse8(generatedString);
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
      <h1>Legal!</h1>

      <h2>
        {openAIResponseWR}
      </h2>
      <h2>
        {openAIResponseIM}
      </h2>
      <h2>
        {openAIResponseEM}
      </h2>
      <h2>
        {openAIResponseGN}
      </h2>



      <h1>Cultural!</h1>
      <h2>
        {openAIResponseGR}
      </h2>
      <h2>
        {openAIResponseFM}
      </h2>
      <h2>
        {openAIResponseWK}
      </h2>
      <h2>
        {openAIResponseSC}
      </h2>
    </div>
  );
};

export default Service2;
