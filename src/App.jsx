import "./App.css";
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
function App() {
  return (
    <>
      <header className="header">
        <div className="container">
          <Navbar />
        </div>
      </header>
      <div className="main">
        <div className="container">
        <Landing/>
        </div>
      </div>
    </>
  );
}

export default App;
