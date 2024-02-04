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
      <span className="mb-8 text-5xl font-bold text-[#db2877]">Resources</span>
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
          className="inline-flex h-9 items-center justify-center rounded-md bg-pink-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-pink-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-pink-700 disabled:pointer-events-none disabled:opacity-50"
        >
          {tab}
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
  answer: React.ReactNode;
};

const TABS = ["Legal", "Cultural", "Community"];

const QUESTIONS = {
  "Legal": [
    {
      question: "Women's Rights",
      answer: <a href="https://www.unwomen.org/en" target="_blank" rel="noopener noreferrer">UN Women</a>,
    },
    {
      question: "Property Rights",
      answer: <a href="" target="_blank" rel="noopener noreferrer">link</a>,
    },
    {
      question: "Immigration Laws",
      answer: <a href="" target="_blank" rel="noopener noreferrer">link</a>,
    },
    {
      question: "Employment Laws",
      answer: <a href="" target="_blank" rel="noopener noreferrer">link</a>,
    },
  ],
  "Cultural": [
    {
      question: "Gender Culture",
      answer: <a href="" target="_blank" rel="noopener noreferrer">link</a>,
    },
    {
      question: "Social Culture",
      answer: <a href="" target="_blank" rel="noopener noreferrer">link</a>,
    },
    {
      question: "Work Culture",
      answer: <a href="" target="_blank" rel="noopener noreferrer">link</a>,
    },
    {
      question: "Education Culture",
      answer: <a href="" target="_blank" rel="noopener noreferrer">link</a>,
    },
  ],
  "Community": [
    {
      question: "For Women",
      answer: <a href="" target="_blank" rel="noopener noreferrer">link</a>,
    },
    {
      question: "For Immigrants",
      answer: <a href="" target="_blank" rel="noopener noreferrer">link</a>,
    },
    {
      question: "For First-Generation Students",
      answer: <a href="" target="_blank" rel="noopener noreferrer">link</a>,
    },
    {
      question: "How can I find local communities?",
      answer: <a href="" target="_blank" rel="noopener noreferrer">link</a>,
    },
  ]
};

export default ResourceList;