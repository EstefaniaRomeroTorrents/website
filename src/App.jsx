import { Link } from "react-router-dom";
import "./App.css";
import AlertButton from "./components/AlertButton";
import Head from "./components/Head";

function App() {
  return (
    <div className="App">
      <header>
        <Link to="/">App</Link>
        <a href="/">App</a>
      </header>
      <Head />
      <AlertButton />
    </div>
  );
}

export default App;
