import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavScrollExample from './components/navbar/Navibar';
import {useSelector} from 'react-redux'
import TextBlock from './components/textBlock/TextBlock';
import MainTextBlock from './components/mainTextBlock/MainTextBlock';
import ImageSlides from './components/imageSlider/ImageSlider';

function App() {

   const theme = useSelector((state) => state.themeStore.value);

   const lan = useSelector((state) => state.languageStore.value)

   console.log('theme', theme)
   console.log('lan', lan)

  return (
      <div data-bs-theme={theme}>
          <NavScrollExample lan={lan}/>
          <ImageSlides/>
          <div className="container mainFlexText">
              <div className="row">
                  <TextBlock lan={lan}/>
                  <MainTextBlock lan={lan}/>
                  <div className="col-3"></div>
              </div>
          </div>
      </div>
  );
}

export default App;
