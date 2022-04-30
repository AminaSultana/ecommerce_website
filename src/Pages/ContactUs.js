import React, { useRef } from "react";
import classes from "./ContactUs.module.css";

const ContactUs = (props) => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const phoneRef = useRef("");

  const submitHandler = (e)=>{
      e.preventDefault();
      const userData = {
          name: nameRef.current.value,
          email: emailRef.current.value,
          phone: phoneRef.current.value,
      }
      props.onFormSubmit(userData);
  }

  return (
    <>
      <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="title">Name</label>
          <input type="text" id="title" ref={nameRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="opening-text">Email</label>
          <input type="text" id="opening-text" ref={emailRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="date">Phone Number</label>
          <input type="number" id="date" ref={phoneRef} />
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};

export default ContactUs;
