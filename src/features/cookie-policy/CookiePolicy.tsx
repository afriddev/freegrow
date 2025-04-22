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
  Cookie,
  Info,
  Zap,
  Settings,
  Globe,
  EyeOff,
  Shield,
  MapPin,
  FileWarning,
  Phone,
} from "lucide-react";
import HomeFooter from "@/apputils/HomeFooter";
import HomeNavBar from "@/apputils/HomeNavbar";

const sections = [
  {
    id: "summary",
    title: "Summary",
    icon: <Cookie className="w-6 h-6 text-indigo-500" />,
    content: (
      <>
        <p className="mb-4 text-sm">
          <strong>Purpose & Scope:</strong> This Cookie Policy explains how
          FreeGrow uses cookies and similar tracking technologies on our
          platform to enhance user experience, remember preferences, and analyze
          performance across Freelancers, Employees, Clients, and Employers. It
          applies to all devices and browsers used to access our services.
        </p>
        <p className="mb-4 text-sm">
          <strong>Categories & Use:</strong> We utilize different categories of
          cookies—essential, performance, functionality, and targeting—to ensure
          core functionality, optimize load times, personalize interface
          elements, and provide relevant content and promotions.
        </p>
        <p className="mb-4 text-sm">
          <strong>User Control & Transparency:</strong> You retain full control
          over cookie settings. Instructions for managing or disabling cookies
          are provided below. Please note that disabling certain cookies may
          affect platform functionality and user experience.
        </p>
      </>
    ),
  },
  {
    id: "definitions",
    title: "Definitions",
    icon: <Info className="w-6 h-6 text-blue-500" />,
    content: (
      <>
        <p className="mb-4">
          "Cookies" are small data files stored on your device by browsers at a
          website's request. "Tracking Technologies" include local storage,
          pixel tags, and web beacons used for similar purposes. Together, they
          help recognize returning visitors and remember settings.
        </p>
      </>
    ),
  },
  {
    id: "types",
    title: "Types of Cookies",
    icon: <Settings className="w-6 h-6 text-green-500" />,
    content: (
      <ul className="list-disc ml-6 space-y-2">
        <li>
          <strong>Essential Cookies:</strong> Required for basic platform
          operations, such as login sessions and security. Without these, core
          features cannot function.
        </li>
        <li>
          <strong>Performance Cookies:</strong> Collect anonymous data on page
          load times, error rates, and usage patterns to optimize platform
          performance.
        </li>
        <li>
          <strong>Functionality Cookies:</strong> Remember language, theme, and
          user preferences to personalize interface and streamline navigation.
        </li>
        <li>
          <strong>Targeting Cookies:</strong> Track browsing behavior to deliver
          relevant content, job suggestions, and promotional offers.
        </li>
      </ul>
    ),
  },
  {
    id: "use-of-cookies",
    title: "How We Use Cookies",
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    content: (
      <ul className="list-disc ml-6 space-y-2">
        <li>Maintain user sessions and authentication across pages.</li>
        <li>Monitor platform performance and detect errors.</li>
        <li>Customize interface based on individual preferences.</li>
        <li>Measure effectiveness of marketing campaigns and referrals.</li>
      </ul>
    ),
  },
  {
    id: "third-party",
    title: "Third-Party Cookies",
    icon: <Globe className="w-6 h-6 text-teal-500" />,
    content: (
      <p className="mb-4">
        We may allow third-party providers—such as analytics services and
        advertising networks—to place cookies on your device. These cookies are
        governed by the respective provider’s privacy policies. FreeGrow is not
        responsible for their practices but encourages you to review each
        provider’s terms.
      </p>
    ),
  },
  {
    id: "managing-cookies",
    title: "Managing & Disabling Cookies",
    icon: <EyeOff className="w-6 h-6 text-gray-600" />,
    content: (
      <p className="mb-4">
        Most browsers allow you to block or delete cookies through settings. To
        manage your preferences, navigate to your browser’s privacy settings or
        use our in-platform cookie management tool. Be aware that disabling
        certain cookies may limit functionality and access to some features.
      </p>
    ),
  },
  {
    id: "data-protection",
    title: "Data Protection & Security",
    icon: <Shield className="w-6 h-6 text-black" />,
    content: (
      <p className="mb-4">
        We store cookie data securely in encrypted form and follow industry best
        practices for data protection. Access is restricted to authorized
        personnel. Regular audits ensure compliance with applicable regulations
        and internal policies.
      </p>
    ),
  },
  {
    id: "mobile-cookies",
    title: "Cookies on Mobile Devices",
    icon: <MapPin className="w-6 h-6 text-pink-400" />,
    content: (
      <p className="mb-4">
        The same cookie and tracking technologies apply when accessing the
        platform via mobile browsers or apps. Mobile apps may use additional
        local storage mechanisms, which can be managed in your device settings.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this Policy",
    icon: <FileWarning className="w-6 h-6 text-orange-500" />,
    content: (
      <p className="mb-4">
        We may update this Cookie Policy periodically. Substantive changes will
        be communicated via email and platform notifications at least 14 days
        before taking effect. Continued use of the platform constitutes
        acceptance of the revised policy.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact Information",
    icon: <Phone className="w-6 h-6 text-green-400" />,
    content: (
      <>
        <p className="mb-2">For cookie-related inquiries or requests:</p>
        <ul className="list-disc ml-6">
          <li>
            <strong>Email:</strong> privacy@freegrow.com
          </li>
          <li>
            <strong>Address:</strong> 123 Growth Avenue, Tech City
          </li>
        </ul>
      </>
    ),
  },
];

const CookiePolicy: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col ">
      <HomeNavBar />
      <div className=" min-h-screen w-full flex justify-center">
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
              FreeGrow Cookie Policy
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
  );
};

export default CookiePolicy;
