import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";

const Mission = () => {
  return (
    <div className="h-screen bg-pink-200">
      <div className="px-4 py-12 h-full">
        <h3 className="font-bold tracking-tighter text-pink-700 dark:text-violet-200 sm:text-4xl md:text-5xl lg:text-6xl/none mb-8">
          Frequently asked questions
        </h3>
        <Question title="Who are we?" defaultOpen>
          <p>
            ELLIS is a project developed by Andrew Kim and Leo Kim. We are both sophomores studying at Virginia Tech! Our motivation for this project comes from the fact that we are both first-generation students, and children of South Korean immigrants.
          </p>
        </Question>
        <Question title="What is the purpose of ELLIS?">
          <p>
            As first-generation students, we have seen the struggles of those moving into the United States without any prior knowledge of the country. However, we noticed that it was often more difficult for female immigrants to transition to the United States as women's rights and gender culture is often a source of controversy no matter the country, and can vary severely depending on the country you are from.
             <br /><br />
            While we wanted to provide a platform where an immigrant of any gender can learn about the culture, language, and legal aspects of the United States, we wanted to provide and emphasis on the details, struggles, and differences specific to women making the transition to the states.
          </p>
        </Question>
        <Question title="What are our future goals?">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            laboriosam neque reprehenderit saepe eius dolorum vel consequuntur
            perspiciatis ad vero.
          </p>
        </Question>
        <Question title="Hi, how are you?">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            laboriosam neque reprehenderit saepe eius dolorum vel consequuntur
            perspiciatis ad vero.
          </p>
        </Question>
      </div>
    </div>
  );
};

const Question = ({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: JSX.Element;
  defaultOpen?: boolean;
}) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="border-b-[1px] border-pink-500 mb-8"
    >
      <button
        onClick={() => setOpen((pv) => !pv)}
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
          height: open ? "fit-content" : "0px",
          marginBottom: open ? "24px" : "0px",
        }}
        className="overflow-hidden text-slate-700"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Mission;