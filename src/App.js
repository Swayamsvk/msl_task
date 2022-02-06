import "./App.css";
import Header from "./components/Header/Header";
import Feed from "./components/MainBody/Feeds/Feed";
import Widgets from "./components/MainBody/Widget/Widgets";
import Sidebar from "./components/MainBody/Account/Account";

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
