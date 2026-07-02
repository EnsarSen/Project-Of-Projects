import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Counter } from "./Counter";
import { List } from "./todoList";
import { CatFact } from "./catFact";
import { LogIn } from "./logIn";
import { DiceRoller } from "./diceRoller";

export const Nav = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="*" element={<h1>Not A Real Link</h1>} />
      <Route path="/todoList" element={<List />} />
      <Route path="/catFacts" element={<CatFact />} />
      <Route path="/logIn" element={<LogIn />} />
      <Route path="/diceRoller" element={<DiceRoller />} />
    </Routes>
  );
};
