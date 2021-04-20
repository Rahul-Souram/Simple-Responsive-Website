import React from "react";

const Contactus = () => {
  return (
    <>
      <h1 className="bg-warning p-3" id="style">
        CONTACT US
      </h1>
      <div className="container">
        <form action="/" class="p-5">
          <label for="name">First Name</label>
          <input type="text" class="form-control" placeholder="First Name" />
          <label for="name">Last Name</label>
          <input type="text" class="form-control" placeholder="Last Name" />
          <br />
          <div className="form-group">
            <label for="c"></label>
            <input type="radio" name="Gender" id="c" /> Male
            <label for="d" className="ml-2"></label>
            <input type="radio" name="Gender" id="d" /> Female
          </div>
          <label for="name">Email</label>
          <input type="email" className="form-control" placeholder="Email" />
          <label for="name">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="password"
          />
          <br />
          <textarea
            name="feeed back"
            cols="50"
            rows="4"
            placeholder="Feedback"
          ></textarea>
          <br />
          <input type="checkbox" name="agree" /> I agree to terms & conditions.
          <br />
          <br />
          <button type="submit" className="btn btn-info">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contactus;
