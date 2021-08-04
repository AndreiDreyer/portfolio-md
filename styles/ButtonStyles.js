import { makeStyles } from "@material-ui/core/styles";

export const buttonStyles = makeStyles((theme) => ({
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    "& .MuiButton-root": {
      backgroundColor: "#FBFCFC",
      border: "1px solid #2A2E34",
      borderRadius: "0.75rem",
      boxShadow: "0px 4px 8px rgba(129, 129, 129, 0.16)",
    },
    "& .MuiButton-text": {
      padding: 0,
    },
  },
  iconButton: {
    "& .MuiButton-label": {
      textTransform: "capitalize",
      fontSize: "1.125rem",
      fontFamily: "Poppins",
      fontWeight: "600",
      lineHeight: "1.75rem",
      color: "#021221",
      padding: "1rem 3.25rem",
    },
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    marginLeft: "0.25rem",
  },
}));
