import image1 from './image1.jpg'
import vid from './vid.mp4'
import './App.css';

function App() {
  return (
    <div className="app">
        <div style={{ maxWidth: '100vw'}}>
          <h1 className="title red">Your name here</h1>
          <br />
          <img src="https://www.publicdomainpictures.net/pictures/320000/nahled/background-image.png" alt="sirop"/>
          <br />
          <img src={image1} alt="bacem"/>
        </div>
        <video width={320} height={240} controls>
          <source src={vid} type="video/mp4" />
        </video>
      </div>
  );
}

export default App;
