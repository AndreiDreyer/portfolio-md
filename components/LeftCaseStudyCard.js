import Image from "next/image";
import clsx from "clsx";

import Button from "@material-ui/core/Button";
import CustomButton from "../components/CustomButton";

import { leftCaseStudyCardStyles } from "../styles/CaseStudyCardStyles";

import tippingPic from "../public/Case Study Cards/custom-tipping.png";

export default function LeftCaseStudyCard(props) {
  const cardStyles = leftCaseStudyCardStyles();

  return (
    <div className={cardStyles.container}>
      <div className={clsx(cardStyles.cardContainer, cardStyles.bgBlue)}>
        <div className={cardStyles.imageContainer}>
          <Image src={`/Case Study Cards/${props.imageUrl}`} width={470} height={460} />
        </div>
        <div className={cardStyles.infoContainer}>
          <div>
            <p className={clsx(cardStyles.text, cardStyles.roleText)}>{props.role}</p>
            <h3 className={clsx(cardStyles.text, cardStyles.headerText)}>{props.title}</h3>
            <p className={clsx(cardStyles.text, cardStyles.bodyText)}>{props.bodyText}</p>
            <CustomButton buttonText="read case study" iconPath="arrow_right_icon.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}
