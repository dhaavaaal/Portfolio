import "./App.css";
import PermanentDrawerLeft from "./Components/Home/eg";
import Home from "./Components/Home/Home";
import SideBar from "./Components/Home/Sidebar";

function App() {
  return (
    <div className="App">
      <SideBar />
      <Home />
      {/* <PermanentDrawerLeft /> */}
    </div>
  );
}

export default App;
