import { makeStyles } from "@material-ui/core/styles";

export const topNavbarStyles = makeStyles((theme) => ({
  navContainer: {
    width: "100vw",
  },
  innerNavContainer: {
    paddingLeft: "7.5rem",
    paddingRight: "7.5rem",
    paddingTop: "0.75rem",
    paddingBottom: "0.75rem",
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
    "& .MuiButton-root:hover": {
      backgroundColor: "transparent",
    },
    "& [class*='makeStyles-blackButton']": {
      backgroundColor: "#021221",
      borderRadius: "8px",
      padding: "0.75rem",
    },
    "& [class*='makeStyles-blackButton']:hover": {
      backgroundColor: "#021221",
    },
  },
}));
