import { useNavigate } from "react-router-dom";
export const Home = () => {
  const Navigate = useNavigate();
  return (
    <div>
      <h1>Ensar's Project Of Projects!!</h1>
      <button onClick={() => Navigate("/counter")}>Counter</button>
      <div>
        <button onClick={() => Navigate("/todoList")}>Todo List</button>
      </div>
      <div>
        <button onClick={() => Navigate("/catFacts")}>Cat Facts</button>
      </div>
      <div>
        <button onClick={() => Navigate("/logIn")}>Log In </button>
      </div>
    </div>
  );
};
