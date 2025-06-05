import "./App.css";
import { PricingSection } from "./task1_1/PricingCard";
import Navigation from "./task1_2/Navigation";
import Dashboard from "./task1_3/components/Dashboard";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <div className="bg-slate-800 p-4">
          <nav className="max-w-7xl mx-auto flex gap-4">
            <Link to="/" className="text-white hover:text-blue-400">
              Task 1
            </Link>
            <Link to="/task2" className="text-white hover:text-blue-400">
              Task 2
            </Link>
            <Link to="/task3" className="text-white hover:text-blue-400">
              Task 3
            </Link>
          </nav>
        </div>

        <Routes>
          <Route path="/" element={<PricingSection />} />
          <Route path="/task2" element={<Navigation />} />
          <Route path="/task3" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
