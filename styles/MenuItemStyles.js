import { makeStyles } from "@material-ui/core/styles";

export const menuItemStyles = makeStyles((theme) => ({
  menuItem: {
    "& .MuiButton-label": {
      fontSize: "1rem",
      fontWeight: "normal",
      fontFamily: "Poppins",
      fontStyle: "normal",
      textTransform: "none",
    },
    "& .MuiButton-label:hover": {
      backgroundImage: "linear-gradient(120deg, #F5A302 0%, #F5A302 100%)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 0.25rem",
      backgroundPosition: "0 70%",
      transition: "background-size 0.25s ease-in",
    },
  },
  activeLink: {
    "& .MuiButton-label": {
      fontWeight: "600",
      backgroundImage: "linear-gradient(120deg, #F5A302 0%, #F5A302 100%)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 0.25rem",
      backgroundPosition: "0 70%",
      transition: "background-size 0.25s ease-in",
    },
  },
}));
