import Link from "next/link";
import Button from "@material-ui/core/Button";
import { buttonStyles } from "../styles/ButtonStyles";

export default function BlackButton(props) {
  const btnStyles = buttonStyles();

  console.log(props);

  return (
    <Link href={props.route}>
      <Button disableRipple className={btnStyles.blackButton}>
        {props.buttonText}
      </Button>
    </Link>
  );
}
