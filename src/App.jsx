import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from "./Pages/About"
import UserDashboard from './Pages/UserDashboard';
function App() {
  return (
      <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/userdashboard" element={<UserDashboard />} />

      </Routes>
    </Router> 



  );
}

export default App;