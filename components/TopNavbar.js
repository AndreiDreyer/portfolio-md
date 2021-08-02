import Image from "next/image";

import { topNavbarStyles } from "../styles/TopNavbar";

import MenuItem from "./MenuItem";
import BlackButton from "./BlackButton";

export default function TopNavbar(props) {
  const topNavStyles = topNavbarStyles();

  return (
    <div className={topNavStyles.navContainer}>
      <div className={topNavStyles.innerNavContainer}>
        <div className={topNavStyles.logoContainer}>
          <Image className={topNavStyles.logoImg} src="/logo.svg" width={59} height={28} />
        </div>
        <div className={topNavStyles.navItemsContainer}>
          <MenuItem menuItemName="home" route="/" />
          <MenuItem menuItemName="work" route="/work" />
          <MenuItem menuItemName="about" route="/about" />
          <MenuItem menuItemName="process" route="/process" />
          <BlackButton buttonText="get in touch" route="/contact" />
        </div>
      </div>
    </div>
  );
}
