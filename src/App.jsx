import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './hooks/useAuth.jsx';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AdminLogin from './pages/AdminLogin';
import CourseDetail from './pages/CourseDetail';
import TermsAndConditions from './pages/TermsAndConditions';
import EULA from './pages/EULA';
import RefundPolicy from './pages/RefundPolicy';
import Disclaimer from './pages/Disclaimer';
import PaymentTransferTC from './pages/PaymentTransferTC';
import About from './pages/About';
import Contact from './pages/Contact';
import Franchise from './pages/Franchise';
import WatchVideos from './pages/WatchVideos';
import VideoDetail from './pages/VideoDetail';
import './App.css'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App" style={{ margin: 0, padding: 0 }}>
          <Navbar />
          <main style={{ margin: 0, padding: 0 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/course/:id" element={<CourseDetail />} />
              <Route path="/video/:id" element={<VideoDetail />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
              <Route path="/eula" element={<EULA />} />
              <Route path="/refund-policy" element={<RefundPolicy />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="/payment-transfer-tc" element={<PaymentTransferTC />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/franchise" element={<Franchise />} />
              <Route path="/watch-videos" element={<WatchVideos />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
