import { useNavigate } from "react-router-dom";
export const Home = () => {
  const Navigate = useNavigate();
  return (
    <div>
      <h1>Ensar's Project Of Projects!!</h1>
      <button onClick={() => Navigate("/counter")}>Counter Project</button>
      <button onClick={() => Navigate("/todoList")}>Todo List Project  (UNDER CONSTRUCTION)</button>
    </div>
  );
};
