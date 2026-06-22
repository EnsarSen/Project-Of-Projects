import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Counter } from "./Counter";
export const Nav = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="*" element={<h1>Not A Real Link</h1>} />
    </Routes>
  );
};
