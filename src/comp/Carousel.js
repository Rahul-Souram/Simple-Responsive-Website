import React from "react";
import { Link } from "react-router-dom";

const Carousel = () => {
  return (
    <div>
      <div
        id="carouselId"
        className="carousel slide container-fluid"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li data-target="#carouselId" data-slide-to="0" class="active"></li>
          <li data-target="#carouselId" data-slide-to="1"></li>
          <li data-target="#carouselId" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHRlY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=60"
              alt="First slide"
              width="1500px"
              height="650px"
            />
            <div className="carousel-caption">
              <h1>
                <b>WELCOME</b>
              </h1>
              <h5>This is the best Learning platform for Coding!!</h5>
              <Link
                to="/courses"
                className="btn btn-outline-info btn-lg text-light"
              >
                GET STARTED
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1445620466293-d6316372ab59?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fHRlY2glMjAxNTAweDY1MHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Second slide"
              width="1500px"
              height="650px"
            />
            <div className="carousel-caption ">
              <h3>
                <b>INTERMIDIATE</b>
              </h3>
              <p>you can still continue this course this is a great platform</p>
              <Link
                to="/courses"
                className="btn btn-outline-warning btn-lg text-light"
              >
                CHECK OUT
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1502951682449-e5b93545d46e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80"
              alt="Third slide"
              width="1500px"
              height="650px"
            />
            <div className="carousel-caption">
              <h3>
                <b>ADVANCED</b>
              </h3>
              <p>
                <b>from beginner to Advance this is Great Platform</b>
              </p>
              <Link
                to="/courses"
                className="btn btn-outline-success btn-lg text-light"
              >
                LET'S GO !!
              </Link>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselId"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselId"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Carousel;
