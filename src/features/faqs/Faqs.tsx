import HomeFooter from "@/apputils/HomeFooter";
import HomeNavBar from "@/apputils/HomeNavbar";
import PageTransitionWrapper from "@/apputils/PageTransitionWrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import {
  FaRegQuestionCircle,
  FaRegHandshake,
  FaRegCreditCard,
  FaRegEnvelope,
  FaRegCheckCircle,
} from "react-icons/fa";

const faqs = [
  {
    question: "What is FreeGrow?",
    answer:
      "FreeGrow is a platform that bridges freelancers, employees, clients, and employers, enabling job-based and project-based opportunities through secure communication, transparent payments, and verified profiles.",
    icon: <FaRegQuestionCircle className="text-indigo-500 w-6 h-6" />,
  },
  {
    question: "Who can use FreeGrow?",
    answer:
      "FreeGrow supports freelancers seeking gigs, employees looking for full-time opportunities, clients posting projects, and employers hiring talent for roles.",
    icon: <FaRegHandshake className="text-green-500 w-6 h-6" />,
  },
  {
    question: "How do payments work?",
    answer:
      "Freelancers use an escrow system that releases funds upon milestone approvals. Employees are paid through standard payroll. All transactions are secure and compliant.",
    icon: <FaRegCreditCard className="text-blue-500 w-6 h-6" />,
  },
  {
    question: "Can I hire both freelancers and employees?",
    answer:
      "Yes. Clients and Employers can post project-based jobs or long-term employment positions. Each track includes tailored onboarding and contract structures.",
    icon: <FaRegCheckCircle className="text-yellow-500 w-6 h-6" />,
  },
  {
    question: "Is FreeGrow safe and verified?",
    answer:
      "Absolutely. We use identity verification, KYC, encrypted messaging, and secure payment methods to protect our users.",
    icon: <FaRegCheckCircle className="text-red-500 w-6 h-6" />,
  },
  {
    question: "Do you charge fees?",
    answer:
      "Yes. FreeGrow applies transparent service fees depending on the engagement type. Fee details are visible during contract creation and on your dashboard.",
    icon: <FaRegEnvelope className="text-purple-500 w-6 h-6" />,
  },
  {
    question: "Can I message users before hiring?",
    answer:
      "Yes, once a bid is received or a proposal is submitted, in-platform messaging is enabled to clarify expectations before engaging.",
    icon: <FaRegEnvelope className="text-orange-500 w-6 h-6" />,
  },
  {
    question: "How do disputes get resolved?",
    answer:
      "Disputes follow a three-step process: direct communication, moderated negotiation, and FreeGrow-admin review if needed. Refunds are handled accordingly.",
    icon: <FaRegCheckCircle className="text-teal-500 w-6 h-6" />,
  },
];

export default function Faqs() {
  return (
    <PageTransitionWrapper>
      <div className="flex flex-col ">
        <HomeNavBar />

        <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
          <motion.div
            className="lg:w-[80vw] mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-4 font-montserrat">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto font-roboto leading-relaxed">
              We’ve gathered the most common questions to help you better
              understand how FreeGrow works.
            </p>
          </motion.div>

          <Accordion
            type="single"
            collapsible
            className="max-w-4xl mx-auto space-y-6"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-md bg-white shadow-sm"
              >
                <AccordionTrigger className="p-4 text-lg font-medium text-gray-800 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-montserrat flex items-center gap-3">
                  {faq.icon}
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="p-4 text-gray-600 text-base font-roboto leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <HomeFooter />
      </div>
    </PageTransitionWrapper>
  );
}
