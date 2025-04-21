import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Eye,
  Database,
  FileLock,
  Globe,
  Zap,
  UserCheck,
  ClipboardList,
  Clock,
  MapPin,
  FileWarning,
  Phone,
  Link2,
  TrashIcon,
} from "lucide-react";
import PageTransitionWrapper from "@/apputils/PageTransitionWrapper";
import HomeNavBar from "@/apputils/HomeNavbar";
import HomeFooter from "@/apputils/HomeFooter";

const sections = [
  {
    id: "summary",
    title: "Summary",
    icon: <Shield className="w-6 h-6 text-indigo-500" />,
    content: (
      <>
        <p className="mb-4 text-sm">
          <strong className="text-md">Data Collection & Use:</strong> We collect
          personal and usage data to provide, maintain, and improve our
          services. This includes identity verification, payment records,
          communications, and behavioral analytics. Our goal is to create a
          secure, efficient experience tailored to Freelancers, Employees,
          Clients, and Employers.
        </p>
        <p className="mb-4 text-sm">
          <strong className="text-md">Information Sharing & Disclosure:</strong>{" "}
          Data may be shared with service providers, legal authorities, or
          business partners under strict confidentiality. We do not sell
          personal information; disclosures occur only as required for platform
          functionality, legal compliance, or safety.
        </p>
        <p className="mb-4 text-sm">
          <strong className="text-md">Data Retention & Security:</strong> We
          retain data only as long as necessary for legitimate business or legal
          purposes. Robust encryption, access controls, and regular audits
          protect your information against unauthorized access.
        </p>
        <p className="mb-4 text-sm">
          <strong className="text-md">User Rights & Controls:</strong> Users can
          access, correct, or delete personal data, as permitted by law.
          Settings allow you to manage notifications, marketing preferences, and
          data-sharing consents.
        </p>
        <p className="mb-4 text-sm">
          <strong className="text-md">Updates & Inquiries:</strong> We may
          update this Privacy Policy periodically. Significant changes will be
          notified via email and in-platform banners. For questions or requests,
          contact our Data Protection Officer.
        </p>
      </>
    ),
  },
  {
    id: "definitions",
    title: "Definitions",
    icon: <ClipboardList className="w-6 h-6 text-blue-500" />,
    content: (
      <>
        <p className="mb-4">
          This section clarifies key terms: "Personal Data" refers to any
          information identifying an individual. "Service Providers" are third
          parties assisting in platform operations. "Users" encompasses
          Freelancers, Employees, Clients, and Employers.
        </p>
      </>
    ),
  },
  {
    id: "data-collected",
    title: "Data We Collect",
    icon: <Database className="w-6 h-6 text-green-500" />,
    content: (
      <ul className="list-disc ml-6 space-y-2">
        <li>Registration Details: Name, email, role, credentials.</li>
        <li>Profile Data: Portfolio, CV, qualifications.</li>
        <li>Transactional Data: Payments, invoices, escrow activity.</li>
        <li>Communications: Messages, support tickets, feedback.</li>
        <li>Usage Data: IP addresses, device information, log files.</li>
        <li>
          Analytics: Interaction patterns, feature usage, performance metrics.
        </li>
      </ul>
    ),
  },
  {
    id: "use-of-data",
    title: "Use of Your Information",
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    content: (
      <ul className="list-disc ml-6 space-y-2">
        <li>To authenticate and authorize access to the platform.</li>
        <li>To facilitate payments, escrow, and payroll services.</li>
        <li>To personalize user experience and recommend opportunities.</li>
        <li>To monitor and improve platform performance and security.</li>
        <li>To communicate updates, invoices, and marketing materials.</li>
      </ul>
    ),
  },
  {
    id: "sharing",
    title: "Information Sharing & Disclosure",
    icon: <Globe className="w-6 h-6 text-teal-500" />,
    content: (
      <>
        <p className="mb-4">
          We share data only when necessary: with trusted service providers
          (e.g., payment processors), in response to legal requests, or to
          protect rights and safety. Data recipients must adhere to strict
          confidentiality and security standards.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "Data Security Measures",
    icon: <FileLock className="w-6 h-6 text-black" />,
    content: (
      <>
        <p className="mb-4">
          We implement technical and organizational measures: encryption at rest
          and in transit, regular vulnerability assessments, role-based access
          controls, and security training for employees. Despite these efforts,
          no system is completely secure; use strong passwords and report any
          concerns.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "Data Retention & Deletion",
    icon: <TrashIcon className="w-6 h-6 text-red-500" />,
    content: (
      <>
        <p className="mb-4">
          We retain personal data only as long as required for service
          provision, legal compliance, or dispute resolution. Users may request
          data deletion; we will honor such requests subject to legal
          obligations to preserve certain records (e.g., financial
          transactions).
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies & Tracking Technologies",
    icon: <Eye className="w-6 h-6 text-blue-600" />,
    content: (
      <ul className="list-disc ml-6 space-y-2">
        <li>
          We use cookies and similar tools to remember preferences, analyze
          trends, and secure sessions.
        </li>
        <li>
          Users can manage cookie settings via browser controls or our settings
          panel.
        </li>
        <li>Disabling cookies may affect core platform functionality.</li>
      </ul>
    ),
  },
  {
    id: "user-rights",
    title: "Your Privacy Rights",
    icon: <UserCheck className="w-6 h-6 text-teal-700" />,
    content: (
      <ul className="list-disc ml-6 space-y-2">
        <li>Right to access and receive a copy of your data.</li>
        <li>Right to correct inaccurate or incomplete information.</li>
        <li>Right to request deletion of data, subject to legal exceptions.</li>
        <li>Right to restrict or object to certain processing activities.</li>
        <li>Right to data portability in a structured format.</li>
      </ul>
    ),
  },
  {
    id: "children",
    title: "Children’s Privacy",
    icon: <Clock className="w-6 h-6 text-gray-400" />,
    content: (
      <>
        <p className="mb-4">
          Our services are not directed at children under 18. We do not
          knowingly collect personal data from minors. If you believe we have
          collected such data, contact us immediately for removal.
        </p>
      </>
    ),
  },
  {
    id: "third-party",
    title: "Third-Party Links & Services",
    icon: <Link2 className="w-6 h-6 text-blue-500" />,
    content: (
      <>
        <p className="mb-4">
          Our platform may contain links to external services. We are not
          responsible for their privacy practices. Please review third-party
          policies before providing personal data.
        </p>
      </>
    ),
  },
  {
    id: "international",
    title: "International Data Transfers",
    icon: <MapPin className="w-6 h-6 text-pink-400" />,
    content: (
      <>
        <p className="mb-4">
          Data may be transferred to and stored in servers outside your country.
          We take appropriate safeguards for international transfers, such as
          standard contractual clauses, to ensure adequate protection.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    icon: <FileWarning className="w-6 h-6 text-orange-500" />,
    content: (
      <>
        <p className="mb-4">
          We may update this Privacy Policy periodically. We will provide notice
          via email or in-platform announcements. Continued use after changes
          indicates acceptance. Please review this policy regularly.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact & DPO Information",
    icon: <Phone className="w-6 h-6 text-green-400" />,
    content: (
      <>
        <p className="mb-4">
          For privacy concerns or data requests, contact our Data Protection
          Officer:
        </p>
        <p className="mb-2">
          <strong>Email:</strong> privacy@freegrow.com
        </p>
        <p>
          <strong>Address:</strong> 123 Growth Avenue, Tech City
        </p>
      </>
    ),
  },
];

const PrivacyPolicy: React.FC = () => {
  const navigate = useNavigate();
  return (
    <PageTransitionWrapper>
      <div className="flex flex-col">
        <HomeNavBar />
        <div className="min-h-screen w-full flex justify-center">
          <div className="lg:w-[80vw] mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <Button
              variant="ghost"
              className="mb-6 text-gray-600 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onClick={() => navigate(-1)}
            >
              ← Back
            </Button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-4 font-montserrat">
                FreeGrow Privacy Policy
              </h1>
              <p className="text-lg text-gray-700 mb-8 font-roboto">
                Effective Date: April 21, 2025
              </p>

              <Card className="mb-8 shadow-lg bg-white">
                <CardHeader className=" border-b border-gray-200">
                  <h2 className="text-xl sm:text-2xl font-semibold text-indigo-700 flex items-center space-x-2 font-montserrat">
                    {sections[0].icon}
                    <span>{sections[0].title}</span>
                  </h2>
                </CardHeader>
                <CardContent className="p-6 text-gray-700 font-roboto leading-relaxed">
                  {sections[0].content}
                </CardContent>
              </Card>

              <Accordion type="single" collapsible className="space-y-6">
                {sections.slice(1).map((section) => (
                  <AccordionItem
                    key={section.id}
                    value={section.id}
                    className="border border-gray-200 rounded-md bg-white shadow-sm"
                  >
                    <AccordionTrigger className="p-4 text-gray-800 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-montserrat">
                      <div className="flex items-center space-x-2">
                        {section.icon}
                        <span className="font-medium">{section.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="p-4 text-gray-600 font-roboto leading-relaxed">
                      {section.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <motion.div
                className="mt-12 text-center"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Button
                  size="lg"
                  className="bg-indigo-600 text-white hover:bg-indigo-700 shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  onClick={() => navigate("/contact")}
                >
                  Contact Us
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <HomeFooter />
      </div>
    </PageTransitionWrapper>
  );
};

export default PrivacyPolicy;
