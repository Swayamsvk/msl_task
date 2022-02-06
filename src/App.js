import "./App.css";
import Header from "./components/Header/Header";
import Feed from "./components/Body/Feed/Feed";
import Widgets from "./components/Body/Widget/Widgets";
import Sidebar from "./components/Body/Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </div>
  );
}

export default App;
