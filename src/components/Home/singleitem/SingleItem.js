// import Item from "antd/lib/list/Item";
import React, { useState, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import "../singleitem/SingleItem.css";
import test from "../../Assets/test2.jpg";

const SingleItem = () => {
  const [Item, setItem] = useState([]);
  const [Cast, setCast] = useState([]);
  const [Crew, setCrew] = useState([]);
  const [Img, setImg] = useState([]);
  const [CastImg, setCastImg] = useState([]);
  const [Director, setDirector] = useState([]);
  const [DirectorImg, setDirectorImg] = useState([]);
  const [Producers, setProducers] = useState([]);
  const [Writer, setWriter] = useState([]);
  const [Rating, setRating] = useState([]);
  const [Loading, setLoading] = useState(true);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    setLoading(true);
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "6b08cfb009msh6e9fe275b4ceba0p117056jsn775eda46854b",
        "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
      },
    };

    fetch(
      `https://imdb8.p.rapidapi.com/title/get-full-credits?tconst=${id}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setItem(response.base);
        setCast(response.cast);
        setCrew(response.crew);
        setImg(response.base.image);
        setDirector(response.crew.director);
        setDirectorImg(response.crew.director.image);
        setProducers(response.crew.producer);
        setWriter(response.crew.writer);
        setLoading(false);
      })
      .catch((err) => console.error(err));

    fetch(
      `https://imdb8.p.rapidapi.com/title/get-ratings?tconst=${id}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setRating(response))
      .catch((err) => console.error(err));
  }, []);

  console.log(Rating);
  console.log(Item);
  console.log(Cast);
  console.log(Img.url);

  let tvseries = "tvSeries";
  // let img = Item.iamge;
  function timeConvert(n) {
    let num = n;
    let hours = num / 60;
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    return +rhours + "h " + rminutes + "m";
  }

  return Loading == true ? (
    <>
      <div className="container-fluid singleLoader">
        <div className="row">
          <div className="col-md-12">
            <div class="overlay">
              <div class="spinner"></div>
              <div class="label">Loading</div>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <div className="single">
      <div className="container">
        <div className="row singleItem">
          <div className="col-lg-9 col-md-6 col-sm-5 contentArea">
            <h2 style={{ marginTop: "100px" }}>{Item.title}</h2>
            <span className="line"></span>

            <p style={{ fontSize: "120%" }}>
              IMDb Rating:
              <strong style={{ color: "rgb(231, 231, 231)" }}>
                {" "}
                {Rating.rating}
              </strong>
              /10{" "}
              <i
                class="fa fa-star"
                style={{ color: "rgb(245, 242, 25)", fontSize: "150%" }}
              ></i>
            </p>
            <p>
              Released in <strong>{Item.year}</strong>
            </p>
            {tvseries === Item.titleType ? (
              <div>
                <h4> Years </h4>
                <span>
                  <h6>
                    Starts in <strong>{Item.seriesStartYear} </strong>
                  </h6>{" "}
                  <p>
                    <strong> - </strong>
                  </p>
                  <h6>
                    Ends in <strong>{Item.seriesEndYear} </strong>
                  </h6>
                </span>
                <p>
                  Total Episodes: <strong> {Item.numberOfEpisodes}</strong>
                </p>
              </div>
            ) : (
              <div>
                <p>
                  Movie Length:{" "}
                  <strong>
                    {timeConvert(Number(Item.runningTimeInMinutes))}
                  </strong>
                </p>
                <p>Director</p>
                <p>Writer</p>
              </div>
            )}
          </div>
          <div className="col-lg-3 col-md-6 col-sm-7 img">
            <img src={Img.url} alt={Item.title} />
          </div>
        </div>
      </div>
      <hr style={{ backgroundColor: "rgb(255 255 255 / 16%)" }} />

      <div className="container directors">
        <div className="row" style={{ width: "100%" }}>
          <div className="col-md-12">
            <h2>Directors</h2>
          </div>
          <div className="col-sm-12 line1"></div>
          {Director.map((director, index) => (
            <div className="col-md-3">
              {Item.titleType == tvseries ? (
                <div>
                  <img
                    src={test}
                    alt="jdshdksd"
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                    }}
                  />

                  <p>
                    <strong font> {director.name}</strong> ({" "}
                    {director.category.charAt(0).toUpperCase() +
                      director.category.slice(1)}{" "}
                    )
                  </p>
                  <p>
                    Year of Working ({director.startYear} - {director.endYear})
                  </p>
                  <p> Working on Total Episodes {director.episodeCount}</p>
                </div>
              ) : (
                <div>
                  <img
                    src={director.image.url}
                    style={{ width: "300px", height: "450px" }}
                  ></img>
                  <p>
                    <strong font> {director.name}</strong> ({" "}
                    {director.category.charAt(0).toUpperCase() +
                      director.category.slice(1)}{" "}
                    )
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <hr style={{ backgroundColor: "rgb(255 255 255 / 16%)" }} />

      <div className="container producers">
        <div className="row">
          <div className="col-md-12 ">
            <h2>Producers</h2>
            <span className="line"></span>
          </div>
          {Producers.map((producer, index) => (
            <div key={index} className="col-sm-3">
              {Item.titleType == tvseries ? (
                <div>
                  <img
                    src={test}
                    alt="jdshdksd"
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                    }}
                  />
                  <p>
                    <strong font> {producer.name}</strong> ({" "}
                    {producer.category.charAt(0).toUpperCase() +
                      producer.category.slice(1)}{" "}
                    )
                  </p>
                  <p>
                    Year of Working ({producer.startYear} - {producer.endYear})
                  </p>
                  <p> Work on Total Episodes {producer.episodeCount}</p>
                </div>
              ) : (
                <div>
                  {/* <img
                      src={producer.image.url}
                      style={{ width: "300px", height: "450px" }}
                    ></img> */}
                  <img
                    src={test}
                    alt="jdshdksd"
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                    }}
                  />
                  <p>
                    <strong font> {producer.name}</strong> ({" "}
                    {producer.category.charAt(0).toUpperCase() +
                      producer.category.slice(1)}{" "}
                    )
                  </p>
                  <p>
                    <strong>Job:</strong> {producer.job}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <hr style={{ backgroundColor: "rgb(255 255 255 / 16%)" }} />

      <div className="container writers">
        <div className="row" style={{ width: "100%" }}>
          <div className="col-sm-12">
            <h2>Writers</h2>
            <span className="line1"></span>
          </div>
          {Writer.map((writer, index) => (
            <div key={index} className="col-sm-3">
              {Item.titleType == tvseries ? (
                <div>
                  <img
                    src={test}
                    alt="jdshdksd"
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                    }}
                  />

                  <p>
                    <strong font> {writer.name}</strong> ({" "}
                    {writer.category.charAt(0).toUpperCase() +
                      writer.category.slice(1)}{" "}
                    )
                  </p>
                  <p>
                    Year of Working ({writer.startYear} - {writer.endYear})
                  </p>
                  <p> Working on Total Episodes {writer.episodeCount}</p>
                </div>
              ) : (
                <div>
                  <img src={test} alt="jdshdksd" style={{ width: "20%" }} />

                  <p>
                    <strong font> {writer.name}</strong> ({" "}
                    {writer.category.charAt(0).toUpperCase() +
                      writer.category.slice(1)}{" "}
                    )
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default SingleItem;
