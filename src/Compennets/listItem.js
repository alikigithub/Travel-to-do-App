export default function ListItem({ list, deleteit, checkfunction }) {
  if (list.describe === " " || !list.describe) return;

  return (
    <div className="inlinediv">
      <input
        type="checkbox"
        checked={list.packed}
        onChange={() => checkfunction(list.id)}
      />
      <li style={list.packed ? { textDecoration: "Line-through" } : {}}>
        {list.quanity} {list.describe}
      </li>
      <button className="crossbtn" onClick={() => deleteit(list.id)}>
        ❌
      </button>
    </div>
  );
}
