import { useState } from "react";
export default function Form({ mainItm }) {
  let [inputvalu, setinput] = useState(" ");
  let [optionselect, setoptionselect] = useState(1);

  let handlesubmit = (e) => {
    e.preventDefault();
    let initialitems1 = {
      id: Date.now(),
      describe: inputvalu,
      quanity: optionselect,
      packed: false,
    };
    mainItm(initialitems1);
    setinput(" ");
    setoptionselect(1);
  };
  return (
    <form className="formList" onSubmit={handlesubmit}>
      <p>What Do you need for your 🥰 trip?</p>
      <select
        value={optionselect}
        onChange={(e) => Number(setoptionselect(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i).map((v) => (
          <option key={v} value={v + 1}>
            {v + 1}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="value"
        value={inputvalu}
        onChange={(e) => {
          setinput(e.target.value);
        }}
      />
      <button className="frombtn">ADD</button>
    </form>
  );
}
