import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import RoomsListing from './pages/RoomsListing';
import RoomDetails from './pages/RoomDetails';
import Booking from './pages/Booking';
import Navbar from './components/Navbar';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/rooms" element={<RoomsListing />} />
      <Route path="/rooms/:id" element={<RoomDetails />} />
      <Route path="/book/:id" element={<Booking />} />
      {/* Add more routes here */}
    </Routes>
  </Router>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

export default App;
