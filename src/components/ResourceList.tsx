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

const Question = ({ question, answer, answer2 }: QuestionType) => {
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
        <p>{answer2}</p>
      </div>
    </div>
  );
};

type QuestionType = {
  question: string;
  answer: React.ReactNode;
  answer2: React.ReactNode;
};

const TABS = ["Legal", "Cultural", "Community"];

const QUESTIONS = {
  "Legal": [
    {
      question: "Women's Rights",
      answer: <a href="https://www.dol.gov/agencies/wb/federal-agency-resources" target="_blank" rel="noopener noreferrer">Federal resources for women</a>,
      answer2: <a href="https://www.gao.gov/women-and-gender-public-policy" target="_blank" rel="noopener noreferrer">Women and gender in public policy</a>,
    },
    {
      question: "Property Rights",
      answer: <a href="https://www.law.cornell.edu/wex/table_property" target="_blank" rel="noopener noreferrer">Property rights by state</a>,
      answer2: <a href="https://www.divorcenet.com/states/nationwide/property_division_by_state" target="_blank" rel="noopener noreferrer">Propert divisons by state</a>,
    },
    {
      question: "Immigration Laws",
      answer: <a href="https://www.ilrc.org/state-map-immigration-enforcement" target="_blank" rel="noopener noreferrer">Immigration laws by state</a>,
      answer2: <a href="https://www.dss.virginia.gov/community/ona/immigrant_services/websites_and_resources.cgi" target="_blank" rel="noopener noreferrer">Immigration websites and resources</a>,
    },
    {
      question: "Employment Laws",
      answer: <a href="https://www.dol.gov/agencies/whd/state" target="_blank" rel="noopener noreferrer">Labor laws by state</a>,
      answer2: <a href="https://www.nilc.org/issues/workersrights/" target="_blank" rel="noopener noreferrer">Immigrant worker resources</a>,
    },
  ],
  "Cultural": [
    {
      question: "Gender Culture",
      answer: <a href="https://www.plannedparenthood.org/learn/gender-identity/sex-gender-identity/what-are-gender-roles-and-stereotypes" target="_blank" rel="noopener noreferrer">Gender roles and stereotypes in the US</a>,
      answer2: <a href="https://unitedwaynca.org/blog/gender-norms/" target="_blank" rel="noopener noreferrer">Gender norms in the US</a>,
    },
    {
      question: "Social Culture",
      answer: <a href="https://www.state.gov/courses/answeringdifficultquestions/html/app.htm?p=module2_p2.htm" target="_blank" rel="noopener noreferrer">American social values</a>,
      answer2: <a href="https://www.state.gov/courses/answeringdifficultquestions/html/app.htm?p=module1_p1.htm" target="_blank" rel="noopener noreferrer">Guide to American social norms</a>,
    },
    {
      question: "Work Culture",
      answer: <a href="" target="_blank" rel="noopener noreferrer">link</a>,
      answer2: <a href="" target="_blank" rel="noopener noreferrer">link</a>,
    },
    {
      question: "Education Culture",
      answer: <a href="" target="_blank" rel="noopener noreferrer">link</a>,
      answer2: <a href="" target="_blank" rel="noopener noreferrer">link</a>,
    },
  ],
  "Community": [
    {
      question: "For Women",
      answer: <a href="" target="_blank" rel="noopener noreferrer">link</a>,
      answer2: <a href="" target="_blank" rel="noopener noreferrer">link</a>,
    },
    {
      question: "For Immigrants",
      answer: <a href="" target="_blank" rel="noopener noreferrer">link</a>,
      answer2: <a href="" target="_blank" rel="noopener noreferrer">link</a>,
    },
    {
      question: "For First-Generation Students",
      answer: <a href="" target="_blank" rel="noopener noreferrer">link</a>,
      answer2: <a href="" target="_blank" rel="noopener noreferrer">link</a>,
    },
    {
      question: "How can I find local communities?",
      answer: <a href="" target="_blank" rel="noopener noreferrer">link</a>,
      answer2: <a href="" target="_blank" rel="noopener noreferrer">link</a>,
    },
  ]
};

export default ResourceList;