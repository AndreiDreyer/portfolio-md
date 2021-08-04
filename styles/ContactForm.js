import { makeStyles } from "@material-ui/core/styles";

export const contactFormStyles = makeStyles((theme) => ({
  formContainer: {
    width: "100vw",
    paddingLeft: "26.25rem",
    paddingRight: "26.25rem",
  },
  textField: {
    "& .MuiOutlinedInput-root": {
      height: "48px",
    },
  },
  formField: {
    width: "100%",
    "& .MuiOutlinedInput-root": {
      borderRadius: "0.5rem",
    },
  },
  fieldLabel: {
    fontFamily: "Poppins",
    fontWeight: "normal",
    marginBottom: "0.25rem",
  },
  submitButtonContainer: {
    marginTop: "2rem",
  },
}));
