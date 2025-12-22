import React, { useState } from "react";

const faqLinks = {
  tracks:"/foodtech-conference-tracks/" ,
  abstractSubmission: "/abstract-submission",
  schedule:"/foodtech-event-schedule" ,
  email: "mailto:hello@helixconferences.com",

};

export const faqData = [
  {
    question: "What is FOODTECH-2026?",
    answer:
      "FOODTECH-2026, officially titled the “Future FoodTech Expo”, is a premier international exhibition and conference organized by Helix Conferences. It brings together food technology innovators, startups, researchers, manufacturers, investors, and policy makers to explore advancements in food processing, alternative proteins, smart packaging, food safety, sustainability, and next-generation food systems.",
  },
  {
    question: "When and where will FOODTECH-2026 take place?",
    answer:
      "FOODTECH-2026 will take place in 2026. The exact dates and venue will be announced soon.",
  },
  {
    question: "What are the highlights of FOODTECH-2026?",
    answer:
      "Keynote addresses, technology showcases, live demonstrations, expert-led sessions, startup pitch forums, panel discussions, and global networking opportunities across the food technology ecosystem.",
  },
  {
    question: "What expo tracks are featured at FOODTECH-2026?",
    answer: (
      <>
        You can explore the full list of tracks here:{" "}
        <a
          href={faqLinks.tracks}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          FOODTECH-2026 Tracks
        </a>
        .
      </>
    ),
  },
  {
    question: "How can I showcase my products or explore sponsorship options?",
    answer: (
      <>
        To exhibit your products or discuss sponsorship opportunities, please
        contact our team at{" "}
        <a href={faqLinks.email} className="text-blue-600 underline">
          hello@helixconferences.com
        </a>
        .
      </>
    ),
  },
  {
    question: "How can I submit a proposal or presentation for FOODTECH-2026?",
    answer: (
      <>
        You can submit your proposal{" "}
        <a
          href={faqLinks.abstractSubmission}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          here
        </a>
        .
      </>
    ),
  },
  {
    question: "How will I receive my invoice?",
    answer:
      "Invoices will be sent to the email address provided during registration. Please check your inbox and spam folder.",
  },
  {
    question: "What materials will I receive during the expo?",
    answer:
      "Registered participants will receive a digital expo kit including the event agenda, exhibitor list, speaker profiles, and session details.",
  },
  {
    question: "How long can I present my topic?",
    answer:
      "Presentation slots typically range from 15–20 minutes, including Q&A. Final guidelines will be shared after proposal acceptance.",
  },
  {
    question: "Who will be attending FOODTECH-2026?",
    answer:
      "Food technology professionals, product developers, food manufacturers, researchers, startups, investors, sustainability leaders, regulators, and academicians from around the world.",
  },
  {
    question: "How many people usually attend the expo?",
    answer:
      "FOODTECH-2026 is expected to welcome 150+ international attendees, including speakers, exhibitors, delegates, startups, and sponsors.",
  },
  {
    question: "Can I register for multiple speaking or demo sessions?",
    answer:
      "Yes, participants may submit multiple proposals, provided each submission represents a unique topic or technology.",
  },
  {
    question: "Are keynote speaking opportunities available?",
    answer:
      "Yes, a limited number of keynote and featured speaker slots are available. Interested participants should indicate their preference during submission.",
  },
  {
    question: "What is expected of speakers and exhibitors?",
    answer:
      "Speakers and exhibitors are expected to deliver engaging, informative sessions or demonstrations, share industry insights, and actively interact with attendees.",
  },
  {
    question: "Is there a fee to participate as a speaker, exhibitor, or attendee?",
    answer:
      "Yes, registration and participation fees apply. Please visit the “Buy A Ticket” section on the website for detailed pricing information.",
  },
  {
    question: "How can I view the event schedule?",
    answer: (
      <>
        The detailed expo schedule will be released soon. You can view or
        download it{" "}
        <a
          href={faqLinks.schedule}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          here
        </a>
        .
      </>
    ),
  },
  {
    question: "Can I preview the session and exhibitor list before the event?",
    answer:
      "Yes, the full agenda, exhibitor lineup, and speaker details will be published prior to the event dates.",
  },
  {
    question: "Can I purchase tickets in advance?",
    answer:
      "Yes, early registration is recommended, as ticket availability may be limited closer to the event.",
  },
  {
    question: "How can I get assistance with accommodation or travel?",
    answer: (
      <>
        For accommodation or travel-related assistance, please contact us at{" "}
        <a href={faqLinks.email} className="text-blue-600 underline">
          hello@helixconferences.com
        </a>
        .
      </>
    ),
  },
];



const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className="border-b border-gray-300 mb-4">
          <button
            className="w-full text-left py-4 px-2 font-medium text-lg flex justify-between items-center"
            onClick={() => toggle(index)}
          >
            {item.question}
            <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
          </button>
          {openIndex === index && (
            <div className="px-4 pb-4 text-gray-700">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
