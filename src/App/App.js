import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './App.css';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path='/'></Route>
          <Route path='/welcome'></Route>
          <Route path='/about-me'></Route>
          <Route path='/contact'></Route>
        </Routes>
      <Footer/>
    </div>
    
  );
}

export default App;
