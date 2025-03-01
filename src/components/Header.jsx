import "../scss/components/Header.scss";
import Place from "./common/Place";
import Search from "./common/Search";
import Settings from "./common/Settings";

function Header() {
  return (
    <header className="header">
      <Place />
      <Search />
      <Settings />
    </header>
  );
}

export default Header;
