
import { Content } from './layouts/Content';
import { Footer } from './layouts/Footer';
import { Header } from './layouts/Header';
import gif from "./assets/gif/loading.gif"
import { useEffect, useState } from 'react';

function App() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = gif;
    img.onload = () => {
      setIsImageLoaded(true);
    };
  }, []);
  useEffect(() => {
    if (process.env.REACT_APP_DEBUG_MODE === "true") {
      checkOverflow();
    }
    return () => {
    };
  }, []);

  const checkOverflow = () => {
    document.querySelectorAll('*').forEach((elem) => {
      const elementWithOffsetWidth = elem as HTMLElement; // Type assertion
      if (elementWithOffsetWidth.offsetWidth > document.documentElement.offsetWidth) {
        console.log('Problem child: ', elementWithOffsetWidth);
      }
    });
  };
  return (
    <div className="App">

      <div className="base">
        <div className="loading-wrap">
          <div className="gif-wrap">  {isImageLoaded ? (
            <img src={gif} alt="gif" />
          ) : (
            <p >Loading...</p>
          )}</div>
        </div>
        <div className="container">
          <Header></Header>
          <Content></Content>
          <Footer></Footer>
        </div>
      </div>

    </div>
  );
}

export default App;
