import "./styles.css";

export default function CardFilter() {
  return (
    <div className="d-container d-listing">
      <div className="d-bg-white">
        <div>
          <form>
            <div className="d-input-flex">
              <input type="text" placeholder="Preço mínimo" />
              <input type="text" placeholder="Preço máximo" />
              <button>Filtrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
