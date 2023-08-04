import { useState } from "react";
import "./App.css";
import { HomePage } from "./pages/HomePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <header>Brand</header>
      <main>
        <HomePage />
        <button onClick={() => setCount((count) => count + 1)} className="btn">
          count is {count}
        </button>
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
