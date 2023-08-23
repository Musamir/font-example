import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import {useSelector} from 'react-redux'
import ImageSlides from './components/Mainimage';
import {Outlet, Route, Routes} from 'react-router-dom';
import IndexPage from './components/IndexPage/indexPage';
import AboutPage from './components/AboutPage/AboutPage';
import NewsPage from './components/NewsPage/News';
import RamadanPage from './components/RamadanPage/RamadanPage';

function App() {
    const theme = useSelector((state) => state.themeStore.value);
    const lan = useSelector((state) => state.languageStore.value)

  return (

      <Routes>
          <Route path={'/'} element={<Layout theme={theme} lan={lan}/>}>
              <Route index element={<IndexPage theme={theme} lan={lan}/>}/>
              <Route path={'about'} element={ <AboutPage theme={theme} lan={lan}/>}/>
              <Route path={'news'} element={ <NewsPage theme={theme} lan={lan}/>}/>
              <Route path={'ramadan'} element={ <RamadanPage theme={theme} lan={lan}/>}/>
          </Route>
      </Routes>
  );
}

function Layout(props) {
    return(
        <div data-bs-theme={props.theme}>
            <Header lan={props.lan}/>
            <ImageSlides/>
            <main className="container">
                <Outlet/>
            </main>
        </div>
    )
}

export default App;
