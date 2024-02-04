import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import OpenAIResponse from '../Response';
import { useLocation } from 'react-router-dom';

const MyComponent = styled.div`
  color: #4A5568;
  font-size: 17px;
`;

const Container = styled.div`
  background-color: #fbcfe8; 
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh; 
`;

const ResponseContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

const ResponseItem = styled.h2`
  margin-bottom: 8px;
  border-bottom: 10px solid #F48FB1; 
  border-bottom: 3px solid #E2E8F0; 
  padding-bottom: 8px;
`;

const LeftContainer = styled.div`
  flex: 1;
  background-color: #F48FB1; 
  border-radius: 15px;
  padding: 15px;
  margin-right: 10px;
`;

const RightContainer = styled.div`
  flex: 1;
  background-color: #F48FB1; 
  border-radius: 15px;
  padding: 15px;
  margin-left: 10px;
`;

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
         and the United States in terms of the topic of gender in a social context, translated to the the language of ${location.state.language} please be specific yet concise to 2 sentences max`;

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
         and the United States in terms of family in a social context, translated to the language of ${location.state.language} please be specific yet concise to 2 sentences max`;

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
         and the United States in terms of work in a social context, translated to the language of ${location.state.language} please be specific yet concise to 2 sentences max`;

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
         and the United States in terms of the most jarring social and cultural differences, translated to the language of ${location.state.language} please be specific yet concise to 2 sentences max`;

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
    <div style={{ backgroundColor: '#fbcfe8', minHeight: '100vh' }}>
      <MyComponent>
      <Container>
      <Navbar />
      <ResponseContainer>
      <LeftContainer>
      <h1 style={{ fontWeight: 'bold', fontSize: '24px' }}>Legal Differences ⚖️</h1>
        <ResponseItem>» {openAIResponseWR}</ResponseItem>
        <ResponseItem>» {openAIResponseIM}</ResponseItem>
        <ResponseItem>» {openAIResponseEM}</ResponseItem>
        <ResponseItem>» {openAIResponseGN}</ResponseItem>
      </LeftContainer>
      <RightContainer>
      <h1 style={{ fontWeight: 'bold', fontSize: '24px' }}>Cultural Differences 👥</h1>
        <ResponseItem>» {openAIResponseGR}</ResponseItem>
        <ResponseItem>» {openAIResponseFM}</ResponseItem>
        <ResponseItem>» {openAIResponseWK}</ResponseItem>
        <ResponseItem>» {openAIResponseSC}</ResponseItem>
      </RightContainer>
      </ResponseContainer>
      </Container>
      </MyComponent>
    </div>
  );
};

export default Service2;
