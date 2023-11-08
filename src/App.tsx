
import { Content } from './layouts/Content';
import { Footer } from './layouts/Footer';
import { Header } from './layouts/Header';

function App() {
  return (
    <div className="App">
      <div className="base">
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
