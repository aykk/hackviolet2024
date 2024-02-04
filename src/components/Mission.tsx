import React, { useState, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
// import OpenAIResponse from '../Response';


interface QuestionProps {
  title: string;
  children: JSX.Element;
  isOpen: boolean;
  onToggle: () => void;
}

const Mission: React.FC = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const handleQuestionToggle = (questionIndex: number) => {
    setOpenQuestion((prevIndex) => (prevIndex === questionIndex ? null : questionIndex));
  };

  return (
    <div className="h-screen bg-pink-200">
      <div className="px-4 py-12 h-full">
        <h3 className="font-bold tracking-tighter text-pink-700 dark:text-violet-200 sm:text-4xl md:text-5xl lg:text-6xl/none mb-8">
          Information:
        </h3>
        <Question title="What is ELLIS?" isOpen={openQuestion === 0} onToggle={() => handleQuestionToggle(0)}>
          <p>
            ELLIS is a web application that we developed using React Native, TypeScript, and Tailwind CSS, that provides legal and cultural differences between the user's home country and the United States, and can translate the differences into their native language. Click on "Try now" to try it yourself!
            <br /><br />
            ELLIS also contains a list of general legal and cultural resources that can provide useful information about the transition to the states. Click on "Resources" to check them out!
          </p>
        </Question>
        <Question title="Personal relevance" isOpen={openQuestion === 1} onToggle={() => handleQuestionToggle(1)}>
          <p>
            Our motivation for this project comes from the fact that we are both first-generation students, and children of South Korean immigrants.
          </p>
        </Question>
        <Question title="What is our goal?" isOpen={openQuestion === 2} onToggle={() => handleQuestionToggle(2)}>
          <p>
            As first-generation students, we have seen the struggles of those moving into the United States without any prior knowledge of the country. However, we noticed that it was often more difficult for female immigrants to transition to the United States as women's rights and gender culture is often a source of controversy no matter the country, and can vary severely depending on the country you are from.
            <br /><br />
            While we wanted to provide a platform where an immigrant of any gender can learn about the culture, language, and legal aspects of the United States, we wanted to provide an emphasis on the struggles and experiences specific to women making the transition to the states.
          </p>
        </Question>
        <Question title="What's next for ELLIS?" isOpen={openQuestion === 3} onToggle={() => handleQuestionToggle(3)}>
          <p>
            ELLIS is a proof of concept of something that could be much more extensive. We would like to expand the application to include more countries and languages, and to provide more detailed information about the legal and cultural differences between the United States and the user's home country, with a more natural translation.
            <br /><br />
            As of now, ELLIS is powered by the OpenAI API, so translations and responses may not be 100% accurate or detailed. Eventually we would want to stray away from the OpenAI API and use actual translations and responses from native speakers and legal professionals, as a part of expanding the documentation. 
          </p>
        </Question>
      </div>
    </div>
  );
};

const Question: React.FC<QuestionProps> = ({ title, children, isOpen, onToggle }) => {
  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      className="border-b-[1px] border-pink-500 mb-8"
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-6"
      >
        <motion.span
          variants={{
            open: {
              color: "rgba(3, 6, 23, 0)",
            },
            closed: {
              color: "rgba(3, 6, 23, 1)",
            },
          }}
          className="bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-left text-lg font-medium"
        >
          {title}
        </motion.span>

        <FiChevronDown />
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "fit-content" : "0px",
          marginBottom: isOpen ? "24px" : "0px",
        }}
        className="overflow-hidden text-slate-700"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Mission;