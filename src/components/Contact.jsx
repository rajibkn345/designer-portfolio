import React from "react";

const ContactPage = () => {
  return (
    <div className="container my-5">
      <h1>Contact Me</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email address"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            rows="5"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-info">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
