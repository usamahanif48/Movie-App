import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import "../Home/Home.css";
import { Card } from "antd";
import Loader from "../Home/loader/Loader";
import SkeletonImage from "antd/lib/skeleton/Image";
import Carousels from "../Home/carousel/Carousel";

const Home = () => {
  const [Search, setSearch] = useState("game");
  const [Items, setItems] = useState("");
  const [Image, setImage] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [Empty, setEmpty] = useState(false);

  useEffect(() => {
    setLoading(true);
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "8c66cd9a3cmsha315b1bacc34b88p1c133cjsne6e74a91525d",
        "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
      },
    };

    fetch(
      `https://online-movie-database.p.rapidapi.com/title/v2/find?title=${Search}%20of&limit=25&sortArg=moviemeter%2Casc`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setItems(response.results);
        setImage(response.results);
        console.log(response);
        setLoading(false);
      })
      .catch((err) => console.error(err));

    Aos.init({ duration: 2000 });
  }, [Search]);
  console.log(Items);
  console.log(Image);

  let id = "";
  let searchange = "";
  const search = (e) => {
    if (e.target.value !== "") {
      searchange = e.target.value;
      setEmpty(false);
    } else if (e.target.value == "") {
      setSearch("game");
      setEmpty(false);
    } else {
      setEmpty(true);
      setSearch([]);
    }
  };
  const searchBtn = (e) => {
    setSearch(searchange);
  };

  return Loading == true ? (
    <>
      <Carousels />
      <Loader />
    </>
  ) : (
    <>
      <Carousels />
      <div className="container">
        <div className="row inpt">
          <div className="col-md-6 inp">
            <input
              type="search"
              placeholder="Search..."
              className="search"
              onInput={search}
            />

            <p
              className="fa fa-search"
              onClick={(e) => searchBtn()}
              // onKeyDown={(e) => searchBtn(e)}
              style={{ cursor: "pointer" }}
            >
              {" "}
              Search
            </p>
          </div>
        </div>
      </div>
      <div className="container section1">
        <div className="row">
          {Empty == true ? (
            <h2 style={{ color: "#fff" }}>notfound</h2>
          ) : (
            Items &&
            Items.map((item, index) => {
              if (item.id.slice(1, 6) == "title") {
                // let img = ;
                id = item.id;
                return (
                  <div
                    key={index}
                    className="col-lg-3 col-md-4 col-sm-6"
                    data-aos="fade-up"
                  >
                    <Link to={`${id}`}>
                      <Card
                        hoverable
                        style={{
                          width: 240,
                        }}
                        // cover={
                        //   <img
                        //     alt={item.title}
                        //     src={item.image.url}
                        //     style={{ height: "350px" }}
                        //   />
                        // }
                      >
                        <p style={{ fontSize: "120%", fontWeight: "bold" }}>
                          {item.title}{" "}
                        </p>
                        <p>
                          <strong>Year:</strong> {item.year}
                        </p>
                        <p>
                          <strong>Type: </strong>
                          {`${item.titleType}`.charAt(0).toUpperCase() +
                            `${item.titleType}`.slice(1)}
                        </p>
                      </Card>
                    </Link>

                    <img
                      style={{
                        height: "100",
                        width: "500px",
                      }}
                    />
                  </div>
                );
              }
            })
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Home;
