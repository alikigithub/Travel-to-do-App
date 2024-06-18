export default function Footer({ item }) {
  if (!item.length) return <p>Start Adding some items to your packing 🚀 </p>;
  let totalitem = item.length;
  let packed = item.filter((pack) => pack.packed).length;
  let percentage = Math.round((packed / totalitem) * 100);
  return (
    <div className="footer">
      {percentage === 100 ? (
        <p>💼 Your are Ready to go ✈</p>
      ) : (
        <p>
          💼 You have {totalitem} items on your list, and you already packed{" "}
          {packed}({percentage}%)
        </p>
      )}
    </div>
  );
}
