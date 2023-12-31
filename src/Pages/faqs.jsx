import Accordion from "../Components/Accordian";
import React, { useState, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Slider from "../Components/slider";

function Faqs() {
  const [generalList, setGeneralList] = useState([
    {
      question: "What are the highlights of Innerve 8?",
      answer:
        "A 24-hour hackathon with challenging problems, exciting swags and goodies for participants. We also conduct seminars and interactions with industry experts.",
    },
    {
      question: "What are the different phases of the hackathon?",
      answer:
        "Phase 1, the Idea Submission Round, will be conducted online, while Phase 2, the Building Round, will take place offline at the AIT Campus.",
    },
    {
      question: "Who is eligible to participate?",
      answer:
        "Innerve 8 welcomes participants passionate about coding with keen interest in problem-solving.",
    },
    {
      question: "What kind of prizes can participants expect?",
      answer:
        "Prizes include cash rewards, goodies, certificates, and special surprises for the winners.",
    },
  ]);

  const [stayList, setStayList] = useState([
    {
      question: "How do I apply for Innerve 8?",
      answer:
        "Our registration forms are out. Kindly refer to the filling instructions available on the website.",
    },
    {
      question: "Is there a registration fee for Innerve?",
      answer: "There is no registration fee. It's open for all.",
    },
    {
      question: "Is there a minimum or maximum size for the team?",
      answer: "Yes, 2-4 participants are allowed per team.",
    },
    {
      question: "What are the dates of Phase 1 & 2?",
      answer:
        "Idea Pitching: 15th Dec - 15th Jan & 24hrs Hackathon: 9th Feb - 11th Feb",
    },
  ]);

  const [travelList, setTravelList] = useState([
    {
      question: "Where can participants find accommodation during Innerve 8?",
      answer: "Lodging is available at the AIT Campus itself.",
    },
    {
      question: "How do I book accommodation?",
      answer:
        "We will be providing accomodation for participants on our own, there will be no hassle from your side. All finalists will be provided with lodging.",
    },
    {
      question: "How to reach the venue?",
      answer:
        "Please contact the OSS Club, our team will be available to assist you with the location and travel details.",
    },
    {
      question: "What to bring during in-person reporting at the venue?",
      answer:
        "Carry your documents and devices. Stay on the lookout for further updates.",
    },
  ]);

  const [expensesList, setExpensesList] = useState([
    {
      question: "What expenses does Innerve 8 cover for participants?",
      answer:
        "Innerve 8 covers the registration fees for all participants, ensuring a seamless experience for attendees.",
    },
    {
      question: "Are travel-related expenses reimbursable for participants?",
      answer:
        "The OSS Club offers financial support to cover or partially reimburse travel expenses for participants.",
    },
    {
      question:
      "Is there any additional cost for mess and lodgings?",
      answer:
      "There will be no additional expenses.",
    },
    {
      question:
        "Is financial assistance available for participants facing travel-related challenges?",
      answer:
        "Yes, participants experiencing difficulties with travel expenses can reach out to the OSS Club for potential financial assistance or alternative solutions.",
    },
  ]);

  const [activeList, setActiveList] = useState("general");
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleActive = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const renderActiveList = () => {
    switch (activeList) {
      case "stay":
        return stayList;
      case "travel":
        return travelList;
      case "expenses":
        return expensesList;
      default:
        return generalList;
    }
  };

  return (
    <>
        <div className="h-full" id="faqs">
          <div className="pt-4">
          <Slider text={["Our team is always there to assist you"]} />
          </div>
          <HeadingMob/>
      <div className="max-w-screen-xl flex flex-col lg:flex-row mx-auto ">
 
              <div className="flex flex-wrap  text-[#121212] align-items-stretch px-12 focus:border-none  border-none lg:mt-8 mt-4 items-center justify-center gap-2 lg:flex-col lg:space-y-[40px]">
          <Button
            label="General"
            onClick={() => setActiveList("general")}
            isActive={activeList === "general"}
          />
          <Button
            label="Registration"
            onClick={() => setActiveList("stay")}
            isActive={activeList === "stay"}
          />
          <Button
            label="Stay&Travel"
            onClick={() => setActiveList("travel")}
            isActive={activeList === "travel"}
          />
          <Button
            label="Expenses"
            onClick={() => setActiveList("expenses")}
            isActive={activeList === "expenses"}
          />
        </div>
        <div className=" flex flex-col items-center justify-center lg:flex-row mr-10 xl:ml-0 ml-10">
          <div className=" lg:pt-12 pt-6 mt-2 flex justify-center items-center">
            <div className="list">
              {renderActiveList().map((item, index) => (
                <Accordion
                  key={index}
                  datas={item}
                  isActive={index === activeIndex}
                  onToggle={() => toggleActive(index)}
                />
              ))}
            </div>

      </div>
      </div>

      </div>
      <HeadingMain/>
    </div>
    </>

  );
}



const Button = ({ label, onClick, isActive = true }) => {
  return (
    <button
      className={`lg:w-full items-start focus:border-none text-[18px] lg:text-[20px] rounded-[4px] flex text-white font-bold py-2 lg:py-[16px] border-none none lg:px-[16px] px-2 transition-colors duration-300 ease-in-out ${
        isActive
          ? "activebtn no-underline border-none focus:border-none"
          : "normalbtn  no-underline border-none opacity-60 "
      }`}
      onClick={onClick}
    >
      <div className="lg:px-3">{label}</div>
    </button>
  );
};



const HeadingMain = () => {
  return (
    <div className="text-center xl:block hidden tracking-[10px] mt-20 bg-clip-text  font-medium text-[150px] sticky text-gradient-to-b from-white via-white to-[rgba(55, 47, 47, 0.5)]">
      <motion.div
        whileInView={{ y: -80, scale: 1.2, duration: 5 }}
        transition={{ type: "just", stiffness: 110 }}
        className=" tracking-tight  text-transparent bg-clip-text bg-gradient-to-t from-[#FFFFFF] to-[rgba(55,47,47,0.5)] whitespace-nowrap"
      >
        FAQs
      </motion.div>
    </div>
  );
};

const HeadingMob = () => {
  return (
    <div className="py-4 text-center xl:hidden tracking-[8px] font-medium text-[64px] sticky text-gradient-to-b from-white via-white to-[rgba(55, 47, 47, 0.5)]">
      <motion.div className="tracking-tight text-transparent bg-clip-text bg-gradient-to-t from-[#FFFFFF] to-[rgba(55,47,47,0.5)] whitespace-nowrap">
        FAQs
      </motion.div>
    </div>
  );
};

export default Faqs;
