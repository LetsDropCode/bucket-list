import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Country from "./pages/Country";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/country/:slug" element={<Country />} />
    </Routes>
  );
}