import "./App.css";
import Header from "./components/Header/Header";
import Account from "./components/MainBody/Account/Account";
import Feed from "./components/MainBody/Feeds/Feed";
import Widgets from "./components/MainBody/Widget/Widgets";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_body">
        <Account />
        <Feed />
        <Widgets />
      </div>
    </div>
  );
}

export default App;
