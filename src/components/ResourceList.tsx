import React, { Dispatch, SetStateAction, useState } from "react";
import { FiPlus } from "react-icons/fi";

export const ResourceList = () => {
  const [selected, setSelected] = useState(TABS[0]);

  return (
    <section className="overflow-hidden px-4 py-12 text-gray-700 bg-pink-200">
      <Heading />
      <Tabs selected={selected} setSelected={setSelected} />
      <Questions selected={selected} />
    </section>
  );
};

const Heading = () => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center">
      <span className="mb-8 bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text font-medium text-transparent">
        Let's answer some questions
      </span>
      <span className="mb-8 text-5xl font-bold">FAQs</span>
    </div>
  );
};

const Tabs = ({
  selected,
  setSelected,
}: {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
      {TABS.map((tab) => (
        <button
          onClick={() => setSelected(tab)}
          className={`whitespace-nowrap rounded-md border-[1px] px-3 py-1.5 text-sm font-medium ${selected === tab
            ? "border-violet-500 text-gray-700 bg-pink-300"
            : "border-gray-600 bg-transparent text-gray-700"
            }`}
          key={tab}
        >
          <span>{tab}</span>
        </button>
      ))}
    </div>
  );
};

const Questions = ({ selected }: { selected: string }) => {
  return (
    <div className="mx-auto mt-12 max-w-3xl">
      {Object.entries(QUESTIONS).map(([tab, questions]) => {
        return selected === tab ? (
          <div className="space-y-4" key={tab}>
            {questions.map((q, idx) => (
              <Question key={idx} {...q} />
            ))}
          </div>
        ) : null;
      })}
    </div>
  );
};

const Question = ({ question, answer }: QuestionType) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`rounded-xl border-[1px] border-gray-700 px-4 transition-all ${open ? "bg-pink-300" : "bg-pink-400"}`}>
      <button
        onClick={() => setOpen((pv) => !pv)}
        className="flex w-full items-center justify-between gap-4 py-4"
      >
        <span className={`text-left text-lg font-medium ${open ? "text-gray-500" : "text-gray-700"}`}>
          {question}
        </span>
        <span>
          <FiPlus />
        </span>
      </button>
      <div style={{ height: open ? "fit-content" : "0px", marginBottom: open ? "24px" : "0px" }} className="overflow-hidden text-gray-700">
        <p>{answer}</p>
      </div>
    </div>
  );
};

type QuestionType = {
  question: string;
  answer: string;
};

const TABS = ["Web dev", "Mobile dev", "UI/UX", "Copywriting"];

const QUESTIONS = {
  "Web dev": [
    {
      question: "What is web development?",
      answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
    },
    {
      question: "How do I know if I need it?",
      answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
    },
    {
      question: "What does it cost?",
      answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
    },
    {
      question: "What about SEO?",
      answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
    },
  ],
  "Mobile dev": [
    {
      question: "What is mobile development?",
      answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
    },
    {
      question: "Can you do both iOS and Android?",
      answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
    },
    {
      question: "Can you help with app store optimization?",
      answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
    },
    {
      question: "How long does it take?",
      answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
    },
  ],
  "UI/UX": [
    {
      question: "What is UI/UX?",
      answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
    },
    {
      question: "Can you audit my existing site?",
      answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
    },
    {
      question: "How do you perform research?",
      answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
    },
    {
      question: "Does it make sense for my company?",
      answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
    },
  ],
  Copywriting: [
    {
      question: "What is copywriting?",
      answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
    },
    {
      question: "Can you write my blog?",
      answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
    },
    {
      question: "Can you also help with ad design?",
      answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
    },
    {
      question: "How much does it cost?",
      answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
    },
  ],
};

export default ResourceList;