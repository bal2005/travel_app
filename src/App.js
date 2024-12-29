import React from "react";
import Header from "./Header";
import Carousel from "./Carousel";

const App = () => {
  const images = [
    "images/carousel_image_1.jpg",
    "images/carousel_image_2.jpg",
    "images/carousel_image_3.jpeg",
  ];

  return (
    <div className="App">
      <Header />
      <Carousel images={images} />
    </div>
  );
};

export default App;
