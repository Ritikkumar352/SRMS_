import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import NavBar from "./components/NavBar/NavBar";
import Registration from "./components/Registration/registration";
import Footer from "./components/Footer/Footer";
import Button from "./components/Button/Button";

import "./App.css";
import "./index.css";

import ssImage from './ss.jpg';



function App() {
  return (
    <>
      <NavBar></NavBar>
      <Registration></Registration>
      <img src="ss.jpg" alt="imageeee" />
      <img src={ssImage} alt="Student" />

      {/* <Button></Button>
      <i className="fa-brands fa-twitter"></i>
      <h1>ritik</h1>
      <Footer></Footer>

      <div className="container mt-5">
        <h1 className="text-primary mb-4">Welcome to My App</h1>
        <button className="btn btn-primary">Click Me</button>
      </div> */}
    </>
  );
}

export default App;
