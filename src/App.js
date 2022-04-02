import "./App.css";
import Home from "./Components/Home/Home";
import SideBar from "./Sidebar/Sidebar";

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
