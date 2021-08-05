import { makeStyles } from "@material-ui/core/styles";

export const leftCaseStudyCardStyles = makeStyles((theme) => ({
  container: {
    width: "100vw",
    padding: "0 7.5rem",
  },
  cardContainer: {
    display: "flex",
    boxShadow: "0px 8px 16px rgba(2, 18, 33, 0.16)",
    borderRadius: "1.25rem",
    backgroundColor: "#E7EFF8",
  },
  infoContainer: {
    padding: "5.75rem 4.375rem 1rem 6.25rem",
    width: "55%",
  },
  imageContainer: {
    padding: "1rem 0 1rem 4.375rem",
  },
  imageSrc: {
    height: "100%",
    width: "100%",
  },
  text: {
    fontFamily: "Poppins",
    color: "#021221",
  },
  roleText: {
    fontStyle: "italic",
    fontSize: "0.875rem",
    lineHeight: "1.5rem",
    marginBottom: "0.25rem",
  },
  headerText: {
    fontSize: "1.75rem",
    lineHeight: "2.25rem",
    fontWeight: "600",
    marginTop: "0.25rem",
    marginBottom: "0.25rem",
  },
  bodyText: {
    fontSize: "1.125rem",
    lineHeight: "1.75rem",
    marginTop: "0.25rem",
    marginBottom: 0,
  },
}));

export const rightCaseStudyCardStyles = makeStyles((theme) => ({
  container: {
    width: "100vw",
    padding: "0 7.5rem",
  },
  cardContainer: {
    display: "flex",
    boxShadow: "0px 8px 16px rgba(2, 18, 33, 0.16)",
    borderRadius: "1.25rem",
    backgroundColor: "#F1F5E3",
  },
  infoContainer: {
    padding: "4.875rem 6.25rem 4.875rem 6.5rem",
    width: "59%",
  },
  imageContainer: {
    padding: "4rem 6.5rem 4rem 0",
  },
  imageSrc: {
    height: "100%",
    width: "100%",
  },
  text: {
    fontFamily: "Poppins",
    color: "#021221",
  },
  roleText: {
    fontStyle: "italic",
    fontSize: "0.875rem",
    lineHeight: "1.5rem",
    marginBottom: "0.25rem",
  },
  headerText: {
    fontSize: "1.75rem",
    lineHeight: "2.25rem",
    fontWeight: "600",
    marginTop: "0.25rem",
    marginBottom: "0.25rem",
  },
  bodyText: {
    fontSize: "1.125rem",
    lineHeight: "1.75rem",
    marginTop: "0.25rem",
    marginBottom: 0,
  },
}));
