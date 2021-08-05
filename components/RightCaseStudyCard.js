import Image from "next/image";
import clsx from "clsx";

import CustomButton from "../components/CustomButton";

import { rightCaseStudyCardStyles } from "../styles/CaseStudyCardStyles";

import designPic from "../public/Case Study Cards/design-system.svg";

export default function RightCaseStudyCard(props) {
  const cardStyles = rightCaseStudyCardStyles();

  return (
    <div className={cardStyles.container}>
      <div className={clsx(cardStyles.cardContainer, cardStyles.bgBlue)}>
        <div className={cardStyles.infoContainer}>
          <div>
            <p className={clsx(cardStyles.text, cardStyles.roleText)}>{props.role}</p>
            <h3 className={clsx(cardStyles.text, cardStyles.headerText)}>{props.title}</h3>
            <p className={clsx(cardStyles.text, cardStyles.bodyText)}>{props.bodyText}</p>
            <CustomButton buttonText="read case study" iconPath="arrow_right_icon.svg" />
          </div>
        </div>
        <div className={cardStyles.imageContainer}>
          <Image className={cardStyles.imageSrc} src={designPic} />
        </div>
      </div>
    </div>
  );
}
