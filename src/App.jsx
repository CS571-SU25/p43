
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import SightsPage from './pages/SightsPage';
import FoodsPage from './pages/FoodsPage';
import MallsPage from './pages/MallsPage';
import ActivitiesPage from './pages/ActivitiesPage';


function App() {
  return (


    <div className="d-flex flex-column min-vh-100">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sights" element={<SightsPage />} />
        <Route path="/foods" element={<FoodsPage />} />
        <Route path="/malls" element={<MallsPage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
      </Routes>
    </div>


  );
}


export default App;

