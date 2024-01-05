import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SQLEditor from "./pages/SQLEditor";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<SQLEditor />} />
        <Route path="/landing-page" element={<LandingPage />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
