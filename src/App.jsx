import "./scss/components/App.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  let dark = true;

  return (
    <div className={`App-${dark ? "dark" : "light"} `}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
