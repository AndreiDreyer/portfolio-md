import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";

import { menuItemStyles } from "../styles/MenuItemStyles";

import Button from "@material-ui/core/Button";

export default function MenuItem(props) {
  const router = useRouter();
  const menuItemStyle = menuItemStyles();

  return (
    <Link href={props.route}>
      <Button disableRipple className={clsx(menuItemStyle.menuItem, router.route === props.route ? menuItemStyle.activeLink : "")}>
        {props.menuItemName}
      </Button>
    </Link>
  );
}
