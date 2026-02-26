import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContentProvider } from "./context/ContentContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutProject from "./components/AboutProject";
import FloorPlans from "./components/FloorPlans";
import VideoSection from "./components/VideoSection";
import Amenities from "./components/Amenities";
import Township from "./components/Township";
import AboutDeveloper from "./components/AboutDeveloper";
import ConstructionUpdates from "./components/ConstructionUpdates";
import FAQ from "./components/FAQ";
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import "./App.css";

function MainSite() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutProject />
      <FloorPlans />
      <VideoSection />
      <Amenities />
      <Township />
      <AboutDeveloper />
      <ConstructionUpdates />
      <FAQ />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ContentProvider>
        <Routes>
          <Route path="/" element={<MainSite />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </ContentProvider>
    </BrowserRouter>
  );
}

export default App;
