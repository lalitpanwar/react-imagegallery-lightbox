import { useState } from "react";
import "./App.css";
import Model from "./component/Model";

function App() {
  const imgData = [
    {
      url: "1",
      title: "Image 1",
    },
    {
      url: "2",
      title: "Image 2",
    },
    {
      url: "3",
      title: "Image 3",
    },
  ];

  const [imgUrl, setImgUrl] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isActive, setiIsActive] = useState(true);
  const imgPopup = (item, index) => {
    setImgUrl(item.url);
    setCurrentIndex(index);
    setiIsActive(true);
  };
  const preHandler = () => {
    const isFirstSlide = currentIndex === 0;
    const preSlide = isFirstSlide ? imgData.length - 1 : currentIndex - 1;
    setCurrentIndex(preSlide);
  };

  const nextHandler = () => {
    const isLastSlide = currentIndex === imgData.length - 1;
    const nextSlide = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(nextSlide);
  };
  const closeHandler = () => {
    setiIsActive(false);
  };
  return (
    <>
      <div className="flex-container">
        <h1> Simple React Image Gallery with Lightbox</h1>
        {imgData.map((item, index) => (
          <>
            <img
              key={index}
              className="imgStyle"
              onClick={() => imgPopup(item, index)}
              src={`${item.url}.jpg`}
            />
          </>
        ))}
      </div>
      {imgUrl && isActive && (
        <>
          <div className="closeModel">
           

            <button type="button" onClick={preHandler}>
              Previous{"<<"}
            </button>
            
            <Model imgurl={imgData[currentIndex].url} close="close" currentIndex ={currentIndex}/>
            <div id="closebtn">
              <button type="button" onClick={closeHandler}>
              X
            </button>
            </div>
            <button type="button" onClick={nextHandler}>
              Next{">>"}
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default App;
