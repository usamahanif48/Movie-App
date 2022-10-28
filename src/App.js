import Home from "./components/Home/Home";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import SingleItem from "./components/Home/singleitem/SingleItem";
import NotFoundPage from "./components/notFoundPage/NotFoundPage";
import "animate.css/animate.min.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/title/:id" element={<SingleItem />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
