
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
        {isImageLoaded && (
          <div className="container">
            <Header></Header>
            <Content></Content>
            <Footer></Footer>
          </div>
        )}
      </div>

    </div>
  );
}

export default App;
