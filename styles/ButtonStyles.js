import { makeStyles } from "@material-ui/core/styles";

export const buttonStyles = makeStyles((theme) => ({
  blackButton: {
    "& .MuiButton-label": {
      textTransform: "none",
      color: "#F9FAFA",
      fontSize: "1rem",
      lineHeight: "1.25rem",
      fontFamily: "Poppins",
      fontWeight: "normal",
    },
  },
}));
