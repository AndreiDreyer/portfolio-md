import { makeStyles } from "@material-ui/core/styles";

export const topNavbarStyles = makeStyles((theme) => ({
  navContainer: {
    width: "100vw",
  },
  innerNavContainer: {
    padding: "1.125rem 7.5rem",
    display: "flex",
    justifyContent: "space-between",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
  },
  logoImg: {
    width: "100%",
  },
  navItemsContainer: {
    padding: 0,
    "& .MuiButton-root:hover": {
      backgroundColor: "transparent",
    },
    "& .MuiButton-text": {
      paddingRight: "2.25rem",
    },
    "& > :nth-child(5)": {
      backgroundColor: "#021221",
      borderRadius: "8px",
      padding: "0.75rem",
    },
    "& > :nth-child(5):hover": {
      backgroundColor: "#021221",
    },
  },
}));
