import Image from "next/image";

import { contactFormStyles } from "../styles/ContactForm";
import { useFormik } from "formik";
import * as Yup from "yup";

import clsx from "clsx";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { withStyles } from "@material-ui/core";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#021221",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#021221",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#021221",
      },
      "&:hover fieldset": {
        borderColor: "#021221",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#021221",
      },
    },
  },
})(TextField);

export default function ContactForm() {
  const formStyles = contactFormStyles();

  const { values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit, handleReset, isValid, dirty } = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },

    validationSchema: Yup.object().shape({
      name: Yup.string().required("Please enter your name"),
      email: Yup.string().email("Please enter a valid email").required("Please enter your email"),
      subject: Yup.string().required("Please enter a subject"),
      message: Yup.string().required("Please enter a message"),
    }),

    onSubmit: (values, { setSubmitting }) => {
      console.log(values);
    },
  });

  return (
    <div className={formStyles.formContainer}>
      <form onSubmit={handleSubmit} border={1}>
        <div>
          <p className={formStyles.fieldLabel}>Name</p>
          <CssTextField
            required
            name="name"
            id="name"
            value={values.name}
            className={clsx(formStyles.formField, formStyles.textField)}
            // InputProps={{ className: formStyles.textField }}
            onChange={handleChange}
            onBlur={handleBlur}
            variant="outlined"
            helperText={touched.name ? errors.name : ""}
            error={touched.name && !!errors.name}
          />
        </div>
        <div>
          <p className={formStyles.fieldLabel}>Email address</p>
          <CssTextField
            required
            name="email"
            id="email"
            value={values.email}
            className={clsx(formStyles.formField, formStyles.textField)}
            onChange={handleChange}
            onBlur={handleBlur}
            variant="outlined"
            helperText={touched.email ? errors.email : ""}
            error={touched.email && !!errors.email}
          />
        </div>
        <div>
          <p className={formStyles.fieldLabel}>Subject</p>
          <CssTextField
            required
            name="subject"
            id="subject"
            value={values.subject}
            className={clsx(formStyles.formField, formStyles.textField)}
            onChange={handleChange}
            onBlur={handleBlur}
            variant="outlined"
            helperText={touched.subject ? errors.subject : ""}
            error={touched.subject && !!errors.subject}
          />
        </div>
        <div>
          <p className={formStyles.fieldLabel}>Message</p>
          <CssTextField
            required
            name="message"
            id="message"
            multiline
            rows={4}
            value={values.message}
            className={formStyles.formField}
            onChange={handleChange}
            onBlur={handleBlur}
            variant="outlined"
            helperText={touched.message ? errors.message : ""}
            error={touched.message && !!errors.message}
          />
        </div>
        <div className={formStyles.submitButtonContainer}>
          <div className={formStyles.buttonContainer}>
            <Button className={formStyles.iconButton}>
              Send
              <div className={formStyles.iconContainer}>
                <Image src="/arrow_right_icon.svg" width={24} height={24} />
              </div>
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
