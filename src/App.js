import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  Main  from "./Components/FirstPage/FirstPage";
import  Login  from "./Components/LLogin/Login";
import Branches from './Components/Branches/Branches';

//comment
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/LLogin/Login' element={<Login />} />
        <Route path='/Branches' element={<Branches />} />
      </Routes>
    </Router>
  )
}

export default App;
