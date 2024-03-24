import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

import SignIn from "./pages/SignIn";



function App() {
  return (
    <BrowserRouter>
    {/* <Header /> */}
    <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
    </Routes>
  </BrowserRouter>
  );
}

export default App;
