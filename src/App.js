import "./App.css";
import Navbar from "./components/Navbar/Index";
import Home from "./pages/Home/Index";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Auth/Login";
import { findDOMNode } from "react-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
