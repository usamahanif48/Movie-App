import React from "react";
import "../footer/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr style={{ background: "#fff" }} />
      <div className="container ">
        <div
          className="row footerRow"
          style={{ margin: "auto", windth: "100%" }}
        >
          <div className="col-md-12">
            <h3 style={{ textAlign: "center" }}>
              <strong> Explore More</strong>
            </h3>
          </div>
          <div
            className="col-md-12 footers"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <a
              href="https://www.linkedin.com/in/usamahanif/"
              title="Facebook"
              target="_blank"
            >
              <i
                className="fa fa-facebook-square"
                aria-hidden="true"
                style={{ fontSize: "30px" }}
              ></i>
            </a>
            <a
              href="https://www.linkedin.com/in/usamahanif/"
              title="Instagram"
              target="_blank"
            >
              <i
                className="fa fa-instagram"
                aria-hidden="true"
                style={{ fontSize: "30px" }}
              ></i>
            </a>
            <a
              href="https://www.linkedin.com/in/usamahanif/"
              title="Twitch"
              target="_blank"
            >
              <i
                className="fa fa-twitch"
                aria-hidden="true"
                style={{ fontSize: "30px" }}
              ></i>
            </a>
            <a
              href="https://www.linkedin.com/in/usamahanif/"
              title="Twitter"
              target="_blank"
            >
              <i
                className="fa fa-twitter"
                aria-hidden="true"
                style={{ fontSize: "30px" }}
              ></i>
            </a>
            <a
              href="https://www.linkedin.com/in/usamahanif/"
              title="Youtube"
              target="_blank"
            >
              <i
                className="fa fa-youtube"
                aria-hidden="true"
                style={{ fontSize: "30px" }}
              ></i>
            </a>
          </div>
        </div>
        <div className="row">
          <img src=""></img>
        </div>
      </div>
    </div>
  );
};

export default Footer;
