import './App.css';
import Header from './components/Header';
import {Route, Routes} from "react-router-dom"
import Home from './components/Pages/Client/Home';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes> 
    </>
  );
}

export default App;
