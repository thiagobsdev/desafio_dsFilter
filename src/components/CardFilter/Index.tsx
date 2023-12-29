import { useState } from "react";
import "./styles.css";

type Props = {
  onNewsValues: Function;
}

export default function CardFilter({ onNewsValues }: Props) {

const [minValue, setMinValue ] = useState<number>(0);

const [maxValue, setMaxValue ] = useState<number>()


function handleMinValue ( event: any) {
    setMinValue(event.target.value)
}

function handleMaxValue ( event: any) {
  setMaxValue(event.target.value)

}

function handleClickButton ( event: any) {
  event.preventDefault();

  if(minValue) {
      setMinValue(minValue)
  }
  if(maxValue) {
    setMaxValue(maxValue )
}
onNewsValues(minValue, maxValue)

}

  return (
    <div className="d-container d-listing">
      <div className="d-bg-white">
        <div>
          <form onSubmit={handleClickButton}>
            <div className="d-input-flex">
                <input
                  type="text"
                  name="minValue"
                  placeholder="Preço mínimo"
                  value={minValue}
                  onChange={handleMinValue} 
                    />
                <input
                 type="text"
                 name="maxValue"
                 placeholder="Preço máximo"
                 value={maxValue}
                 onChange={handleMaxValue} 
                />
              <button>Filtrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
