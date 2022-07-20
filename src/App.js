import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Header from './components/Header';
import Home from './pages/Home';
import Archiveds from './pages/Filters/Archiveds';
import Star from './pages/Filters/Star';
import Issues from './pages/Filters/Issues';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/archiveds' element={<Archiveds />}/>
          <Route path='/stars' element={<Star />}/>
          <Route path='/issues' element={<Issues />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
