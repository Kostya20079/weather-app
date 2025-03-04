import "../scss/components/Header.scss";
import Place from "./common/Place";
import Search from "./common/Search";
import Settings from "./common/Settings";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__body">
          <Place />
          <Search />
          <Settings />
        </div>
      </div>
    </header>
  );
}

export default Header;
