import React, { useState, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import OpenAIResponse from '../Response';


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
          About Us:
        </h3>
        <Question title="Who are we?" isOpen={openQuestion === 0} onToggle={() => handleQuestionToggle(0)}>
          <p>
            We are both sophomores studying at Virginia Tech! Our motivation for this project comes from the fact that we are both first-generation students, and children of South Korean immigrants.
          </p>
        </Question>
        <Question title="What is the purpose of ELLIS?" isOpen={openQuestion === 1} onToggle={() => handleQuestionToggle(1)}>
          <p>
            As first-generation students, we have seen the struggles of those moving into the United States without any prior knowledge of the country. However, we noticed that it was often more difficult for female immigrants to transition to the United States as women's rights and gender culture is often a source of controversy no matter the country, and can vary severely depending on the country you are from.
            <br /><br />
            While we wanted to provide a platform where an immigrant of any gender can learn about the culture, language, and legal aspects of the United States, we wanted to provide an emphasis on the struggles and experiences specific to women making the transition to the states.
          </p>
        </Question>
        <Question title="What are our future goals?" isOpen={openQuestion === 2} onToggle={() => handleQuestionToggle(2)}>
          <p>
            {openAIResponse}
          </p>
        </Question>
        <Question title="Hi, how are you?" isOpen={openQuestion === 3} onToggle={() => handleQuestionToggle(3)}>
          <p>
            I'm good, thanks.
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