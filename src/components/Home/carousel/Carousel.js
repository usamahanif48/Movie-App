import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import "../carousel/Carousel.css";
import prevbtn from "../../Assets/prev.png";
import nextbtn from "../../Assets/nxt.png";

const Carousels = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="headerContent2">
              <h2>DAY SHIFT</h2>
              <p>
                A hard-working, blue-collar dad just wants to provide a good
                life for his quick-witted 10-year-old daughter.
                <br /> His mundane San Fernando Valley pool cleaning job is a
                front for his real source of income: hunting and killing
                vampires.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="headerContent3"></div>
          </div>
          <div className="carousel-item">
            {/* <img className="d-block w-100" src={banner1} alt="Third slide" ></img> */}
            <div className="headerContent1"></div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          {/* <img src={prevbtn} alt="prev btn" className="changebtn"></img> */}
          <i class="fa fa-angle-left" style={{ fontSize: "250%" }}></i>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          {/* <img src={nextbtn} alt="next" className="changebtn"></img> */}
          {/* <span className="sr-only">Next</span> */}
          <i class="fa fa-angle-right" style={{ fontSize: "250%" }}></i>
        </a>
      </div>
    </div>
  );
};

export default Carousels;
