
import { GoArrowDownRight } from "react-icons/go";
import React, { useState } from 'react';

interface Question {
    question: string;
    answer: string;
  }
  

  interface AccordionProps {
    questions: Question[];
  }
  
  const Accordion: React.FC<AccordionProps> = ({ questions }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
    const handleToggle = (index: number) => {
      setActiveIndex(index === activeIndex ? null : index);
    };
  
    return (
      <div className="accordion px-2 lg:px-6 lg:w-screen">
        {questions.map((q, index) => (
          <div key={index} className="mb-2 ">
            <div
              className="flex justify-between items-center cursor-pointer text-white body-font border-t-[0.08rem] border-[#0000002e] border-b-2 bg-gradient-to-tr from-red-600 to-rose-800 p-3 rounded"
              onClick={() => handleToggle(index)}
            >
              <h2 className="text-lg font-semibold">{q.question}</h2>
              <div className="ml-auto lg:me-4">
                <GoArrowDownRight size='2rem' className={`arrow ${activeIndex === index ? 'transform rotate-180' : ''}`}/>
              </div>
              <div
                className={`arrow ${activeIndex === index ? 'transform rotate-180' : ''}`}
              ></div>
            </div>
            {activeIndex === index && (
              <div className="answer text-black bg-white p-3 mt-3 rounded text-left font-serif font-semibold">
                <p>{q.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };
  
  export default Accordion;
