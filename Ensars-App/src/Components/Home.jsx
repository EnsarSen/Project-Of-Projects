import { useNavigate } from "react-router-dom";
export const Home = () => {
  const Navigate = useNavigate();
  return (
    <div>
      <h1>Ensar's Project Of Projects!!</h1>
      <button onClick={() => Navigate("/counter")}>Counter Project</button>
      <div>
        <button onClick={() => Navigate("/todoList")}>Todo List Project</button>
      </div>
      <div>
        <button onClick={() => Navigate("/catFacts")}>Cat Facts Project</button>
      </div>
    </div>
  );
};
