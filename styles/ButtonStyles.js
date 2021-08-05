import { makeStyles } from "@material-ui/core/styles";

export const buttonStyles = makeStyles((theme) => ({
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    alignItems: "center",
    marginTop: "1.5rem",
    "& .MuiButton-root": {
      backgroundColor: "#FBFCFC",
      border: "1px solid #2A2E34",
      boxSizing: "border-box",
      boxShadow: "0px 4px 8px rgba(129, 129, 129, 0.16)",
      borderRadius: "0.75rem",
    },
    "& .MuiButton-text": {
      padding: "1rem 2rem",
    },
  },
  customButton: {
    "& .MuiButton-label": {
      textTransform: "lowercase",
      fontSize: "1.125rem",
      lineHeight: "1.75rem",
      fontFamily: "Poppins",
      fontWeight: "600",
    },
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    marginLeft: "0.25rem",
  },
}));
