import { useMemo, useState } from "react";
import "./memo.css";
import { findPrimeNumber } from "../utils/helper";
export function Memo() {
  const [value, setVale] = useState(0);
//   const prime = findPrimeNumber(value);
  const [isDark, setDark] = useState(true);
  const prime = useMemo(()=>findPrimeNumber(value) ,  [value]);
  return (
    <>
      <h1> Learning useMemo Hook </h1>
      <div
        className="container"
        style={
          isDark
            ? { backgroundColor: "lightgray" }
            : { backgroundColor: "white" }
        }
      >
        <input
          type="number"
          name=""
          id="input"
          onChange={(e) => setVale(e.target.value)}
        />
        <h2>{prime}</h2>

        <button onClick={()=>setDark(!isDark)}>Tohhle Theme</button>
      </div>
    </>
  );
}
