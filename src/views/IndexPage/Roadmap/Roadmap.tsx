import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faPiggyBank, faChartLine, faFileContract, faIndustry } from '@fortawesome/free-solid-svg-icons'; // Import different icons

const sections = [
  {
    title: "Phase 1: Development and Setup",
    description: `In this phase, we focus on setting up both Web3 and Web2 access points:
    - Web3 Access Point: A dashboard for owners and users, deployed on the Solana blockchain.
    - Web2 Access Point: A web app allowing users to interact with the ecosystem, featuring wallet connect and zero trackers.
    - The Ecosystem: We’re developing a liquidity cold-wallet, run in-house, to facilitate seamless token conversion and fee management.
    - A detailed white paper outlining the project's vision will be available.
    - Goal: Achieve MVP functionality for client and user deployment.`,
    linkText: "Learn More",
    bgColor: "#305531", // primary color
    icon: faTools, // Individual icon for this section
  },
  {
    title: "Phase 2: Web3 Digital Liquidity",
    description: `The focus of this phase is accessing Web3 digital liquidity to power our crypto-ATM:
    - Optimized Overhead: Through integrated buy and sell algorithms with additional fees.
    - Exchanges Integration: Optimizing transactions with key crypto exchanges for efficiency.
    - Stable Coin (BTMS): Develop and deploy a stable coin for internal use.
    - Payout Coin (BTMA): Develop and deploy a payout coin for ecosystem transactions.
    - Payment Aggregators: Integrating over 9 aggregators to support various payment methods.
    - Goal: Launch the liquidity pool on a global scale to support our financial operations.`,
    linkText: "Discover Phase 2",
    bgColor: "#d3dbcd", // secondary color
    icon: faPiggyBank, // Individual icon for this section
  },
  {
    title: "Phase 3: Contracts and Expansion",
    description: `We expand through commercial and branding efforts:
    - Manufacturing: Creating proprietary machines with custom physical and digital advertising.
    - Brand Expansion: Building a strong ecosystem through digital growth.
    - Goal: Streamline client onboarding by injecting BTM software into new machines.`,
    linkText: "Explore Expansion",
    bgColor: "#305531", // primary color
    icon: faChartLine, // Individual icon for this section
  },
  {
    title: "Phase 4: Compliance",
    description: `Ensuring legal compliance for the BTM-TECH Dashboard and Web3 Ecosystem:
    - Canada: Adhering to Quebec, provincial, and federal regulations.
    - US: Compliance on both state and federal levels.
    - Global: Meeting international and country-specific compliance standards.
    - Goal: Develop a comprehensive Canadian Regulatory Memo, establishing BTM-TECH as a compliant and competent company globally.`,
    linkText: "Compliance Details",
    bgColor: "#d3dbcd", // secondary color
    icon: faFileContract, // Individual icon for this section
  },
  {
    title: "Phase 5: Manufacturing and Growth",
    description: `This phase emphasizes manufacturing and strategic growth:
    - Manufacturing: Collaborating with key manufacturers for BTM production.
    - BTM-TECH Machines: Packaged with our dashboard and in-house advertisements, featured on non-dashboard screens.
    - Pivoting: Expanding into unique exchanges, cold-wallet solutions, and governance through Munity.ai, creating a robust digital ecosystem.
    - Strategic Partnerships: Engaging with real estate moguls, casino owners, and other high-profile clients.
    - Goal: Secure three casino deals before Phase 3 is complete.`,
    linkText: "See Growth Plans",
    bgColor: "#305531", // primary color
    icon: faIndustry, // Individual icon for this section
  }
];

export default function SnapScrollSections() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll">
      {sections.map((section, index) => (
        <div 
          key={index}
          style={{ backgroundColor: section.bgColor, color: section.bgColor === "#305531" ? "#d3dbcd" : "#305531" }}
          className="h-screen w-full snap-start flex items-center justify-center"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-xl p-6"
          >
            {/* Icon for each section */}
            <div 
              style={{ 
                backgroundColor: section.bgColor === "#305531" ? "#d3dbcd" : "#305531", 
                color: section.bgColor, 
                width: '60px', 
                height: '60px', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto 20px' 
              }}
            >
              {/* FontAwesomeIcon with unique icons for each section */}
              <FontAwesomeIcon icon={section.icon} style={{ fontSize: '24px' }} />
            </div>

            {/* Title with a slightly larger font */}
            <h2 className="text-5xl font-bold mb-4">{section.title}</h2>

            {/* Description with bold subtitles */}
            <p className="text-xl mb-6 whitespace-pre-line">
              {section.description.split('\n').map((line, i) => (
                <span key={i}>
                  {line.includes(":") ? (
                    <>
                      <strong>{line.split(":")[0]}:</strong> {line.split(":")[1]}
                    </>
                  ) : line}
                  <br />
                </span>
              ))}
            </p>

            {/* Learn more link */}
            <a 
              href="#"
              style={{ color: section.bgColor === "#305531" ? "#d3dbcd" : "#305531" }}
              className="inline-flex items-center hover:text-opacity-80 transition-colors"
            >
              {section.linkText}
              <ChevronRight className="ml-2 group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
