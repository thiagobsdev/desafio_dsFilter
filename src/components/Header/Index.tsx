import CountProducts from "../CountProducts/Index";
import "./styles.css";

export default function Header() {
  return (
    <header className="d-Header">
      <div className="d-container">
        <div className="d-flex-header">
            <h1 className="d-header-title" >DSFilter</h1>
            <CountProducts />
        </div>
      </div>
    </header>
  );
}
