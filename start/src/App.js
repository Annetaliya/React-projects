
import './App.css';
import LoadMoreData from './components/Load-more-data';
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
      {/* <ImageSlider limit={'5'}/> */}
      <LoadMoreData />
    </div>
  );
}

export default App;
