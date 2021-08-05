import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import LeftCaseStudyCard from "../components/LeftCaseStudyCard";
import RightCaseStudyCard from "../components/RightCaseStudyCard";

const card1 = {
  role: "UI/UX Design",
  title: "Creating a custom tipping experience for users",
  bodyText:
    "Our team wanted to explore a feature that our Customer Experience team had been receiving requests for from both users and merchants. I was tasked with solving and testing proposed solutions. ",
};

const card2 = {
  role: "UI Design",
  title: "Establishing SnapScan's Design System",
  bodyText:
    "Less than a year after the introduction of SnapScan’s Product team, we were looking at rapidly growing our product suite. In an effort to maintain consistency and create clearer design guides, I started researching and creating our Design System.",
};

const card3 = {
  role: "UI Design",
  title: "Redesigning SnapScan's wallet experience",
  bodyText:
    "SnapScan was trying to uncover what was preventing adoption of their digital wallet. I was tasked with aiding research and redesigning the Wallet experience to include some new functionality.",
};

export default function Home() {
  return (
    <div>
      <LeftCaseStudyCard role={card1.role} title={card1.title} bodyText={card1.bodyText} imageUrl="custom-tipping.png" />
      <RightCaseStudyCard role={card2.role} title={card2.title} bodyText={card2.bodyText} imageUrl="snapscan-wallet.png" />
      <LeftCaseStudyCard role={card3.role} title={card3.title} bodyText={card3.bodyText} imageUrl="snapscan-wallet.png" />
    </div>
  );
}
