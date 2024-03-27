
import './App.css';
import LoadMoreData from './components/Load-more-data';
import Accordian from './components/accordian';
import ImageSlider from './components/image-slider';
import QRCodeGenerator from './components/qr-code-generator';
import RandomColor from './components/randomColor';
import StarRating from './components/star-rating';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';

function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating noOfStars={10}/> */}
      {/* <ImageSlider limit={'5'}/> */}
      {/* <LoadMoreData /> */}
      {/* <TreeView  menus={menus}/> */}
      <QRCodeGenerator />
    </div>
  );
}

export default App;
