import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ServicesPage from "./pages/services/ServicesPage";
import ComingSoonPage from "./pages/ComingSoonPage";
import Footer from "./components/Footer";
import CallToActionSection from "./components/CallToActionSection";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ComingSoonPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <CallToActionSection />
      <Footer />
    </Router>
  );
}

export default App;
