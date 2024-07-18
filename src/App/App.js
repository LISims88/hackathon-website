import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import LandingPage from '../Landing/Landing';
import './App.css';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className='AppContainer'>
      <Header/>
      <div className="App">
          <Routes>
            <Route path='/' element={<LandingPage/>}></Route>
            <Route path='/welcome'></Route>
            <Route path='/about-me'></Route>
            <Route path='/contact'></Route>
          </Routes>
      </div>
      <Footer/>
    </div>
    
  );
}

export default App;
