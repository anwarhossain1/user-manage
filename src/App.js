import "./App.css";
import Navbar from "./components/Navbar/Index";
import Home from "./pages/Home/Index";

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route path="/" component={Home} />
      </BrowserRouter>
    </div>
  );
}

export default App;
