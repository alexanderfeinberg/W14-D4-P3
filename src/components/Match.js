import { useState, useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";
import horoscopes from "../data/horoscopes";
export const Match = () => {
  const [match, setMatch] = useState(false);
  const { sign } = useContext(HoroscopeContext);
  console.log(sign);
  return (
    <div>
      <button
        onClick={() => {
          setMatch(!match);
        }}
      >
        Match
      </button>
      {match && <div>{horoscopes[sign["name"]]["match"]}</div>}
    </div>
  );
};
