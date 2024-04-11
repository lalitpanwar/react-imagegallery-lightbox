import { useState } from "react";
import "./App.css";
import Model from "./component/Model";

function App() {
  const imgData = [
    {
      url: "donald-duck"
    },
    {
      url: "goofy"
    },
    {
      url: "louie"
    },
    {
      url: "uncle-scrooge"
    },
    {
      url: "mickey-mouse"
    },
    {
      url: "minnie-mouse"
    },
    {
      url: "morty"
    },
    {
      url: "orazio"
    },
    {
      url: "pete"
    },
    {
      url: "pluto"
    },

  ]

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

  const fielnameTotitle = (filename) => {
    const newData = filename.replace("-", " ")

    return newData

  }
  return (
    <>
    <h1> Simple React Image Gallery with Lightbox</h1>
      <div className="flex-container">
        
        {imgData.map((item, index) => (
          <>
          <div className="galleryWrapper">
            <img
              key={index}
              className="imgStyle"
              onClick={() => imgPopup(item, index)}
              src={`${item.url}.jpg`}
            />
            <span className="namePlate">{fielnameTotitle(item.url)}</span>
            </div>
          </>
        ))}
      </div>
      {imgUrl && isActive && (
        <>
          <div className="closeModel">
           

            <button type="button" onClick={preHandler}>
              Previous{"<<"}
            </button>
            
            <Model imgurl={imgData[currentIndex].url} close="close" currentIndex ={currentIndex} fielnameTotitle={(filename) => fielnameTotitle(filename)}/>
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
<div className="footer">
  <p>Disclaimer: The images utilized in this project have been sourced from Google search and are being used for educational purposes only. They are intended solely for educational and instructional use within the context of this project. The author of this project does not claim ownership of these images, and their usage is not intended to infringe upon any copyright or intellectual property rights. Efforts have been made to use images that are freely available for educational use or that fall under fair use guidelines. If you are the owner of any of the images used in this project and believe that their usage infringes upon your rights, please contact us immediately for resolution.
          </p></div>
    </>
  );
}

export default App;
