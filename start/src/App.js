
import './App.css';
import Accordian from './components/accordian';
import ImageSlider from './components/image-slider';
import RandomColor from './components/randomColor';
import StarRating from './components/star-rating';

function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating noOfStars={10}/> */}
      <ImageSlider limit={'5'}/>
    </div>
  );
}

export default App;
