import "./App.css";
import Footer from "./conponents/menu/Footer";
import TopBar from "./conponents/menu/TopBar";
import Asked from "./conponents/sections/Asked";
import FastEasy from "./conponents/sections/FastEasy";

function App() {
  return (
    <div className="App">
      <TopBar />
      <div id="_lg_form_"></div>
      <FastEasy />
      <div className="jr_container">
        <Asked />
        <Footer />
      </div>
    </div>
  );
}

export default App;
