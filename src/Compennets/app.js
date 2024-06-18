import { useState } from "react";
import "../App.css";
import Form from "./form";
import Footer from "./footer";
import List from "./list";
import Logo from "./logo";

function App() {
  let [items, setitems] = useState([]);
  let checkfun = (id) => {
    setitems((item) => {
      return item.map((vl) =>
        vl.id === id ? { ...vl, packed: !vl.packed } : vl
      );
    });
    console.log(id);
  };

  let itemfun = (pa) => {
    setitems((i) => [...i, pa]);
  };
  let delitems = (id) => {
    setitems(
      items.filter((litem) => {
        return litem.id !== id;
      })
    );
  };
  let empty = () => {
    return setitems([]);
  };
  return (
    <>
      <Logo />

      <Form mainItm={itemfun} />
      <List
        itemlist={items}
        deleteitem={delitems}
        checkboxvalue={checkfun}
        emptyfun={empty}
      />
      <Footer item={items} />
    </>
  );
}
// function check() {
//   let array1 = ["pak", "lahore", "multan", "londen", "newyork"];
//   let just = array1.sort((a, b) => {
//     if (a === "multan") {
//       return -1;
//     }
//     if (b === "multan") {
//       return 1;
//     }
//     return a - b;
//   });
//   console.log(just);
// }
// check();

export default App;
