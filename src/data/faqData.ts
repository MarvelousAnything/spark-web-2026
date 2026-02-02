export interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'Logistics' | 'Event Details' | 'Sponsor/Volunteer';
}

export const faqData: FAQItem[] = [
  {
    question: 'Who can participate?',
    answer:
      'SparkHacks is open to anyone! Whether you are a freshman with no coding experience or a senior with a keen interest in technology, you are welcome to join. We encourage diversity and a mix of skills to create a dynamic and enriching experience for all participants.',
    category: 'General',
  },
  {
    question: 'What is the deadline to apply for SparkHacks?',
    answer:
      'Applications will open on January 20 at 8:00 AM and will remain open until January 27 at 11:59 PM. After applications close, the organizing team will review all submissions and send out invitations, waitlist notifications, and declinations within the next few days. If you receive an invitation, you’ll need to accept or decline your spot. Once you accept, we’ll be able to confirm your attendance at the hackathon.',
    category: 'General',
  },
  {
    question: "What if I'm not an experienced coder?",
    answer:
      'No problem! We have a No-Code track where you can take one of our prompts and implement it using Figma!',
    category: 'General',
  },
  {
    question: 'Do I need a team to participate in SparkHacks?',
    answer:
      'Yes, teams must consist of 3 to 5 members; Individual participation is not allowed due to devpost rules, and the events nature is not conducive to solo participation. However, we will be having a Team Formation Social to help you find potential teammates!',
    category: 'General',
  },
  {
    question: 'Can I start working on my project before SparkHacks begins?',
    answer:
      'No, all projects must be started and developed during SparkHacks. Participants are expected to attend the opening session to learn of the tracks and corresponding prompts.',
    category: 'General',
  },
  {
    question: 'Is SparkHacks overnight?',
    answer:
      'Unfortunately, at this time we cannot offer an overnight Hackathon experience. You are welcome to continue hacking at home within the hacking period but we cannot provide facilities for sleeping on campus.',
    category: 'Event Details',
  },
  {
    question: 'How to find support during the hackathon?',
    answer:
      'Mentors will be available throughout SparkHacks in person as well as through Discord to provide guidance, answer questions, and assist participants with technical challenges. You can reach out to a mentor at any time during SparkHacks!',
    category: 'Logistics',
  },
  {
    question: 'How can I submit my project?',
    answer:
      'All submissions will be made through Devpost which is also how we will be keeping track of teams. There will be a session to familiarize yourself with how to submit your project through Devpost during the hackathon.',
    category: 'Logistics',
  },
  {
    question: 'What prizes are available for winners?',
    answer:
      'Prizes may vary, but typically winners will receive recognition as well as valuable tech gadgets. Prizes are track-specific and the list of prizes can be found in the HackPack.',
    category: 'Event Details',
  },
  {
    question: 'Where can I find SparkHacks resources?',
    answer:
      'All SparkHacks resources, including guidelines, workshops, resources to help you best prepare, and other relevant information, is currently available in the HackPack.',
    category: 'Logistics',
  },
  {
    "question": "Is there a fee to participate?",
    "answer": "Nope! SparkHacks is completely free. We'll provide meals, swag, and all the resources you need during the event.",
    "category": "General"
  },
  {
    "question": "Can I participate if I’m new to hackathons?",
    "answer": "Absolutely! SparkHacks is beginner-friendly, with workshops, mentors, and resources to help you get started.",
    "category": "General"
  },
  {
    "question": "Can my team include members from outside UIC?",
    "answer": "No. SparkHacks is exclusively for current UIC students.",
    "category": "General"
  },
  {
    "question": "Can I change teams during the hackathon?",
    "answer": "Teams are finalized once hacking begins, so plan your team in advance.",
    "category": "Logistics"
  },
  {
    "question": "Do I need coding experience to participate?",
    "answer": "Not at all! You can contribute to brainstorming, design, and presentations, and we even have a no-code track for designers.",
    "category": "General"
  },
  {
    "question": "Can I work on a project I started before the hackathon?",
    "answer": "No. All projects must be created during the 24-hour hackathon timeframe.",
    "category": "Logistics"
  },
  {
    "question": "Do I need to follow the theme of the hackathon for my project?",
    "answer": "The event theme sets the vibe, but your project doesn't need to align with it unless you're participating in a specific themed challenge or track.",
    "category": "Logistics"
  },
  {
    "question": "How are projects judged?",
    "answer": "Projects are judged on innovation, usability, technical complexity (or design for no-code), and overall impact. Check the Judging Criteria section for more details.",
    "category": "Logistics"
  },
  {
    "question": "Are there workshops during the hackathon?",
    "answer": "Yes! We'll host pre-hack workshops (Feb 4-6) and technical sessions during the event to help you learn new skills.",
    "category": "Event Details"
  },
  {
    "question": "How can I connect with mentors?",
    "answer": "You can reach mentors through the #ask-a-mentor channel on Discord or meet them in person at the mentoring areas.",
    "category": "Sponsor/Volunteer"
  },
  {
    "question": "What do I need to bring?",
    "answer": "Bring your UIC ID, laptop, chargers, headphones, power bank, and any personal items you'll need for the 24 hours.",
    "category": "General"
  },
  {
    "question": "Will food be provided?",
    "answer": "Yes! We've got you covered with meals and snacks throughout the event.",
    "category": "Event Details"
  },
  {
    "question": "Is there a place to sleep?",
    "answer": "SparkHacks is a 24-hour event, so no sleeping areas are provided. If you need to rest, plan your own accommodations.",
    "category": "Event Details"
  },
  {
    "question": "What if I have technical issues during the event?",
    "answer": "Reach out to the #ask-organizers channel on Discord or find an organizer dressed in [distinguishing feature, e.g., SparkHacks t-shirts or badges] for immediate assistance.",
    "category": "Logistics"
  },
  {
    "question": "I missed the application deadline, is there a way I can still apply?",
    "answer": "Due to limitations, we are unable to accept applications late. However, pre-hack workshops are open to everyone if you are interested in attending. If you are interested in participating in next year's SparkHacks, be sure follow our social media to keep up to date.",
    "category": "General"
  },
  {
    "question": "I missed my opportunity to accept my invitation to SparkHacks 2026 on time and now I'm on the waitlist. What can I do?",
    "answer": "Your application has been moved to waitlist. Waitlist registration will be open after 6:30pm on the day of SparkHacks and will be on a first-come first-serve basis. However, this is not guaranteed, and there will be no walk-ins accepted after 7:30pm or until the limit has been reached.",
    "category": "General"
  },
  {
    "question": "My application has been put on waitlist, can I still participate in SparkHacks 2026?",
    "answer": "Waitlist registration will open after 6:30pm on the day of SparkHacks to waitlisted applicants and will be on a first-come first-serve basis. Please note that this does not guarantee you a spot and there will be no registration after 7:30pm.",
    "category": "General"
  },
  {
    "question": "I have been accepted, but I have a teammate who is on the waitlist/rejected. Can they participate?",
    "answer": "Teammates who have been put on waitlist will need to check their email on the next steps regarding waitlist options. Unfortunately, teammates who are rejected will be unable to participate and there is no reconsideration.",
    "category": "General"
  },
  {
    "question": "My application was rejected, can I still participate in SparkHacks 2026?",
    "answer": "Unfortunately, due to limitations and the high number of applications, this decision is final. Please consider reapplying next year and follow our social media to keep up to date.",
    "category": "General"
  },
  {
    "question": "How were SparkHacks 2026 applications reviewed and selected?",
    "answer": "SparkHacks applications were NOT reviewed on a first-come, first-served basis, and submission timing was not considered. To reduce bias, applications were reviewed without names or identifying information and evaluated holistically rather than on merit, accolades, or prior achievements. Our goal is to welcome a balanced group of participants, including underclassmen who want to learn and try new things and upperclassmen looking to strengthen their portfolios. Responses such as “Why are you interested in SparkHacks?” helped provide context, but no single question or factor determined acceptance. Decisions were made to align with SparkHacks’ mission of creating an inclusive, learning-focused experience for all participants.",
    "category": "General"
  },
  {
    "question": "Who do I contact if I have more questions?",
    "answer": "You can email us at sparkhacks@uic.edu or message us on social media! You can find our social links in the bottom right corner of our website.",
    "category": "General"
  },
];