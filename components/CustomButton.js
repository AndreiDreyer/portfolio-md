import Button from "@material-ui/core/Button";

import Image from "next/image";

import { buttonStyles } from "../styles/ButtonStyles";

export default function CustomButton(props) {
  const buttonClasses = buttonStyles();

  return (
    <div className={buttonClasses.buttonContainer}>
      <Button className={buttonClasses.iconButton}>
        {props.buttonText}
        <div className={buttonClasses.iconContainer}>
          <Image src={`/${props.iconPath}`} width={24} height={24} />
        </div>
      </Button>
    </div>
  );
}
