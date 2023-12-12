import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import "./Form.scss";
import { useSelector, useDispatch } from "react-redux";
import { actionClearCart } from "../../store/actions";

const Forma = ({ setForma }) => {
  const cart = useSelector((state) => state.cart);
  const totalPrice = useSelector((state) => state.totalPrice);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      telephone: "",
      adress: "",
      dateOfBirth: "",
      totalPrice: totalPrice,
      order: [...cart],
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .min(2, "Must be 2 characters or more")
        .required("Required")
        .matches(/[а-яА-ЯёЁa-zA-Z]$/, "Не може мати числові значення"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .min(2, "Must be 2 characters or more")
        .matches(/[а-яА-ЯёЁa-zA-Z]$/, "Не може мати числові значення")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      telephone: Yup.number().required("Required"),
      adress: Yup.string()
        .matches(/[0-9]$/, "Повинно бути числове значення")
        .required("Required"),
      dateOfBirth: Yup.date().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      setForma();
      dispatch(actionClearCart());
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div className="error">{formik.errors.firstName}</div>
      ) : null}

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div className="error">{formik.errors.lastName}</div>
      ) : null}

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div className="error">{formik.errors.email}</div>
      ) : null}

      <label htmlFor="phone">Telephone</label>
      <input
        id="telephone"
        name="telephone"
        type="number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.telephone}
      />
      {formik.touched.telephone && formik.errors.telephone ? (
        <div className="error">{formik.errors.telephone}</div>
      ) : null}

      <label htmlFor="adress">adress</label>
      <input
        id="adress"
        name="adress"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.adress}
      />
      {formik.touched.adress && formik.errors.adress ? (
        <div className="error">{formik.errors.adress}</div>
      ) : null}

      <label htmlFor="dateOfBirth">dateOfBirth</label>
      <input
        id="dateOfBirth"
        name="dateOfBirth"
        type="date"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.dateOfBirth}
      />
      {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (
        <div className="error">{formik.errors.dateOfBirth}</div>
      ) : null}

      <button type="submit">Checkout</button>
    </form>
  );
};

export default Forma;
