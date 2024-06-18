import { useState } from "react";
import ListItem from "./listItem";
export default function List({
  itemlist,
  deleteitem,
  checkboxvalue,
  emptyfun,
}) {
  let [sorttype, setsorttye] = useState("input");
  let arrayalter = [];
  console.log(itemlist);
  if (sorttype === "input") arrayalter = itemlist;
  if (sorttype === "description") {
    arrayalter = itemlist
      .slice()
      .sort((a, b) => a.describe.localeCompare(b.describe));
  }
  if (sorttype === "packed") {
    console.log("packed");
    arrayalter = itemlist
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="listitems">
      <ul>
        {arrayalter.map((item) => {
          return (
            <ListItem
              list={item}
              deleteit={deleteitem}
              checkfunction={checkboxvalue}
            />
          );
        })}
      </ul>
      <div className="actions">
        <select value={sorttype} onChange={(e) => setsorttye(e.target.value)}>
          <option value="input"> Sorted by input</option>
          <option value="description">Sorted by Description</option>
          <option value="packed">Sorted by Packed</option>
        </select>
        <button style={{ marginLeft: "12px" }} onClick={() => emptyfun()}>
          {" "}
          clear everythink
        </button>
      </div>
    </div>
  );
}
