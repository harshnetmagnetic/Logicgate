import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/Navbar/Header";
import NotFound from "./pages/NotFound";
import ComingSoon from "./pages/ComingSoon";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ComingSoon />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
