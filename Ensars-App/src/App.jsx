import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Nav } from "./Components/Nav";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Router>
          <Nav />
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
