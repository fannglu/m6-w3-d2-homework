import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Netflix from "https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg";
import HBO from "https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg";
import Hulu from "https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg";
import Prime from "https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png";



export default function App() {
  //Insert router, links here
  return (
    <>
      <h1>Test</h1>
      <Router>
        <h2>TV APPS</h2>
        <Link to="/netflix">
          <img src={Netflix} alt="Netflix" />
        </Link>
        <Link to="/hbo">
          <img src={HBO} alt="HBO" />
        </Link>
        <Link to="/hulu">
          <img src={Hulu} alt="Hulu" />
        </Link>
        <Link to="/prime">
          <img src={Prime} alt="Prime" />
        </Link>

        <Routes>
          <Route exact path="/:id" element={<Child />} />
        </Routes>
      </Router>
    </>
  );
};

function Child() {
  // Below this comment, there's one major key script missing
  const params = useParams();
  const id = params.id;

  return (
    <div>
      <h3>
        You Selected:<span>{id}</span>
      </h3>
    </div>
  );
}


