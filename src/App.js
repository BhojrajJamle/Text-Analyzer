import "./App.css";
import About from "./components/About";
import Navebar from "./components/Navebar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [red, setRed] = useState("light");
  const [yellow, setYellow] = useState("light");
  const [green, setGreen] = useState("light");
  const [orange, setOrange] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  // wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww

  const toggleOrange = () => {
    if (orange === "light") {
      setOrange("dark");
      document.body.style.backgroundColor = " #bfffe3";
      showAlert("orange mode has been enabaled", "success");
      // document.title = "Text analyzer - dark mode ON";
      // setInterval(() => {
      //   document.title = "Install Text analyzer now ";
      // }, 2000);
      // setInterval(() => {
      //   document.title = " Text analyzer is a best ";
      // }, 1500);
    } else {
      setOrange("light");
      document.body.style.backgroundColor = "white";
      // document.title = "Text analyzer - light mode ON";
      showAlert("light mode has been enabaled", "success");
    }
  };
  // wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww

  const toggleGreen = () => {
    if (green === "light") {
      setGreen("dark");
      document.body.style.backgroundColor = "green";
      showAlert("green mode has been enabaled", "success");
    } else {
      setGreen("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabaled", "success");
    }
  };
  // sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss

  const toggleYellow = () => {
    if (yellow === "light") {
      setYellow("dark");
      document.body.style.backgroundColor = "yellow";
      showAlert("yellow mode has been enabaled", "success");
    } else {
      setYellow("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabaled", "success");
    }
  };
  // ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss

  const toggleRed = () => {
    if (red === "light") {
      setRed("dark");
      document.body.style.backgroundColor = "red";
      showAlert("Red mode has been enabaled", "success");
    } else {
      setRed("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabaled", "success");
    }
  };
  // sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss

  const removeBodyClasses = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-warning");
  };

  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add("bg-" + cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("dark mode has been enabaled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      // document.title = "Text analyzer - light mode ON";
      showAlert("light mode has been enabaled", "success");
    }
  };
  // mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm

  return (
    <>
      {/* <Navebar title="MJ Creations" aboutText="About" />
      <Navebar /> */}
      <Router>
        <Navebar
          title="MJ Creations"
          mode={mode}
          toggleMode={toggleMode}
          red={red}
          toggleRed={toggleRed}
          yellow={yellow}
          toggleYellow={toggleYellow}
          green={green}
          toggleGreen={toggleGreen}
          orange={orange}
          toggleOrange={toggleOrange}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About
                mode={mode}
                red={red}
                yellow={yellow}
                green={green}
                orange={orange}
              />
            </Route>
            <Route path="/">
              <TextForm
                showAlert={showAlert}
                heading="Try Text Analyzer- word counter, character counter, remove extra spaces "
                mode={mode}
                red={red}
                yellow={yellow}
                green={green}
                orange={orange}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
