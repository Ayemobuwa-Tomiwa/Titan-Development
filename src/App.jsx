import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Legal from "./pages/Legal";

function AppRoutes() {
  // 1. Initialize to true. The app STARTS in a loading state.
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    // 2. The timeout runs asynchronously, which ESLint loves.
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 2000);

    // 3. Cleanup timer
    return () => clearTimeout(timer);
  }, []); // 4. EMPTY array. This only runs exactly ONCE when the user first visits the site.

  return (
    <div className="bg-black text-white min-h-screen relative">
      
      {/* The loader only mounts during that first 2 seconds */}
      {isInitialLoad && <Loader />}

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="*" element={<Home />} />
      </Routes>

    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}