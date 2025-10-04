import React from 'react';
import icons from "./icons.js";

const q = 'flex w-[38.25rem] h-[4.25rem] pl-[2rem] pr-4 bg-white border-2 border-[#F0F2F9] rounded-xl text-[1.125rem]';
const plus = 'w-11 h-11 bg-[#EAEAEC] rounded-full flex items-center justify-center';
const wrap = 'flex justify-between items-center w-full';

export default function Faq() {
  return (
    <div className="flex flex-col items-center bg-black py-12 text-white gap-16 font-manrope">
      <h2 className="text-[3.375rem] tracking-[-0.20rem] flex flex-col text-center leading-[1.1] font-bold">
        Let's answer <br /> your questions
      </h2>

      <div className="flex flex-col items-center text-black gap-4">
        <div className={q}>
          <div className={wrap}>
            <p>How long does it take?</p>
            <div className={plus}>
              <img src={icons.plus} width="16" height="16" />
            </div>
          </div>
        </div>

        <div className={q}>
          <div className={wrap}>
            <p>How do I get started?</p>
            <div className={plus}>
              <img src={icons.plus} width="16" height="16" />
            </div>
          </div>
        </div>

        <div className={q}>
          <div className={wrap}>
            <p>How does payment work?</p>
            <div className={plus}>
              <img src={icons.plus} width="16" height="16" />
            </div>
          </div>
        </div>

        <div className={q}>
          <div className={wrap}>
            <p>Do you offer ongoing support?</p>
            <div className={plus}>
              <img src={icons.plus} width="16" height="16" />
            </div>
          </div>
        </div>

        <div className={q}>
          <div className={wrap}>
            <p>Who do you work with?</p>
            <div className={plus}>
              <img src={icons.plus} width="16" height="16" />
            </div>
          </div>
        </div>

        <div className={q}>
          <div className={wrap}>
            <p>What if I don't like it?</p>
            <div className={plus}>
              <img src={icons.plus} width="16" height="16" />
            </div>
          </div>
        </div>

        <div className={q}>
          <div className={wrap}>
            <p>Do you offer refunds?</p>
            <div className={plus}>
              <img src={icons.plus} width="16" height="16" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
