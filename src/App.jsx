import "./scss/components/App.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useContext } from "react";
import ThemeContext from "./context/theme.context";

function App() {
  let { dark } = useContext(ThemeContext);

  return (
    <div className={`App-${dark ? "dark" : "light"}`}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
