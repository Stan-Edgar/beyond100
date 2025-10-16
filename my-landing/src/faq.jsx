import { useState } from "react";
import icons from "./icons.js";

const q = 'flex flex-col w-[23.75rem] sm:w-[38.25rem] bg-white border-2 border-[#EAEAEC] rounded-xl text-[1.125rem]';
const plus = 'w-11 h-11 bg-[#EAEAEC] rounded-full flex items-center justify-center';
const wrap = 'flex justify-between items-center w-full h-[4.25rem] pl-[2rem] pr-4 cursor-pointer';

const questions = [
  { q: "How long does it take?", a: "- Most projects take 2-3 weeks depending on the scope of the project." },
  { q: "How do I get started?", a: "- Simply book a call and we'll guide you through the onboarding process." },
  { q: "How does payment work?", a: "- We accept 50% upfront and 50% when the project is completed." },
  { q: "Do you offer ongoing support?", a: "- Yes, we have flexible support & keep in touch with our clients." },
  { q: "Who do you work with?", a: "- We work with SaaS startups and don't mind working with service businesses." },
  { q: "What if I don't like it?", a: "- We include revisions and work with you until you're satisfied." },
  { q: "Do you offer refunds?", a: "- Due to the amount of time and effort needed to deliver, we do not offer refunds." },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (i) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  return (
    <div className="flex flex-col items-center py-12 gap-16 font-manrope" id="faq">
      <h2 className="text-[2.525rem] sm:text-[3.375rem] tracking-[-0.20rem] text-center leading-[1.1] font-bold">
        Let's answer <br /> your questions
      </h2>

      <div className="flex flex-col items-center text-black gap-4">
        {questions.map((item, i) => (
          <div key={i} className={q}>
            <div className={wrap} onClick={() => toggle(i)}>
              <p>{item.q}</p>
              <div className={plus}>
                <img src={activeIndex === i ? icons.minus : icons.plus} width="16" height="16" />
              </div>
            </div>

            {activeIndex === i && (
              <div className="px-8 pb-4 text-gray-600">{item.a}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
