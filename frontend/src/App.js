import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AlfaHeader from './components/AlfaHeader';
import AlfaFooter from './components/AlfaFooter';
import AlfaHome from './pages/AlfaHome';
import CorporateAbout from './pages/CorporateAbout';
import CorporateServices from './pages/CorporateServices';
import CorporateTeam from './pages/CorporateTeam';
import CorporateCaseStudies from './pages/CorporateCaseStudies';
import CareersPage from './pages/CareersPage';
import InsightsPage from './pages/InsightsPage';
import FAQPage from './pages/FAQPage';
import Contact from './pages/Contact';

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <AlfaHeader />
        <main>
          <Routes>
            <Route path="/" element={<AlfaHome />} />
            <Route path="/about" element={<CorporateAbout />} />
            <Route path="/services" element={<CorporateServices />} />
            <Route path="/team" element={<CorporateTeam />} />
            <Route path="/case-studies" element={<CorporateCaseStudies />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <AlfaFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;